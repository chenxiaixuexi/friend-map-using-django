from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from django.core import serializers
from django.core.paginator import Paginator
import json
from json import dumps
from .models import Frnd as fn
from django.db.models import Q
from django.forms import ModelForm
class FrndForm(ModelForm):
    class Meta:
        model=fn
        fields='__all__'
# Create your views here.
@require_http_methods(["GET"])
def add_frnd(request):
    response={}
    try:
        friend = fn(
            name = request.GET.get('name'),
            phone = request.GET.get('phone'),
            addr = request.GET.get('addr'),
            city = request.GET.get('city'),
            mail = request.GET.get('mail'),
            cncity = request.GET.get('cncity')
        )
        friend.save()
        response['msg']='success'
        response['error_num']=0
    except Exception as e:
        response['msg']=str(e)
        response['error_num']=1
    return JsonResponse(response)
@require_http_methods(["GET"])
def show_frnd(request):
    response = {}
    try:
        persons = fn.objects.values('name','phone','addr','city','mail','id','cncity')
        response['list'] = list(persons)
        response['msg'] = 'success'
        response['error_num'] = 0
    except Exception as e:
        response['msg'] = str(e)
        response['error_num'] = 1
    return JsonResponse(response)
search_field = ['name','phone','city','addr']
filter_field = ['name','phone','city','addr','mail']
@require_http_methods(["GET"])
def search_frnd(request):
    s_area = request.GET.get('area')
    search = request.GET.get('search')
    result = {}
    q_result=Q()
    d={'%s__contains'%s_area:search}
    q_result=Q(**d)
    try:
        re = fn.objects.filter(q_result).values('name','phone','addr','cncity','mail')
        print(re)
        result['list'] = list(re)
        result['msg'] = 'success'
        result['error_num'] = 0
    except Exception as e:
        result['msg'] = str(e)
        result['error_num'] = 1
    """
    limit = request.GET.get('limit',20)
    page = request.GET.get('page',1)
    search = request.GET.get('search')
    filter_dict={}
    #filter
    for field in filter_field:
        value = request.GET.get(field)
        if value:
            filter_dict[field]=value
    #search
    q_result=Q()
    for k in search_field:
        if search:
            d={'%s_contains'%k:search}
            q_result=Q(**d)|q_result
    all_students=fn.objects.filter(**filter_dict).filter(q_result).values()
    page_obj = Paginator(all_students,limit)
    stus = list(page_obj.get_page(page))
    data = {"error_code":0,"msg":"success","data":stus,"count":page_obj.count}
    """
    return JsonResponse(result)
@require_http_methods(["POST"])
def edit_frnd(request):
    reponse = {}
    data = json.loads(request.body)
    name = data['name']
    phone = data['phone']
    addr = data['addr']
    city = data['city']
    mail = data['mail']
    objid = data['ID']
    cncity = data['cncity']
    print(objid)
    try:
        fn.objects.filter(id=objid).update(name=name,phone=phone,addr=addr,city=city,mail=mail,cncity=cncity)
        reponse["msg"]="success"
        reponse["error_id"]=0
    except Exception as e:
        reponse["msg"]=str(e)
        reponse["error_id"]=-1
    return JsonResponse(reponse)

@require_http_methods(["GET"])
def deleteFrnd(request):
    name = request.GET.get('ID')
    data={}
    try:
        fn.objects.filter(id=name).delete()
        data = {"error_code":0,"msg":"success"}
    except Exception as e:
        data = {"error_code":-2,"msg":str(e)}
    return JsonResponse(data)
def homepage(request):
    return render(request,"test.html")