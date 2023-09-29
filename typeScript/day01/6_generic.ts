// generic

const checkNull = ( arg : any|null) : any =>{
  if(arg===null){
    throw new Error('값이 비어있습니다');
  }else{
    return arg;
  }
};

// T
function checkNullG<G> (arg:G|null):G {
  if(arg===null){
    throw new Error('값이 비어있습니다');
  }else{
    return arg;
  }
};













