var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.worklistproto;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.8.0-SNAPSHOT";
var $strongName = 'DB9C8A29CFCB6700B112C08D91FE0D39';
var $gwt = {};
var $doc = $wnd.document;
var $moduleName, $moduleBase;
function __gwtStartLoadingFragment(frag) {
var fragFile = 'deferredjs/' + $strongName + '/' + frag + '.cache.js';
return __gwtModuleFunction.__startLoadingFragment(fragFile);
}
function __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}
function __gwt_isKnownPropertyValue(propName, propValue) {
return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);
}
function __gwt_getMetaProperty(name) {
return __gwtModuleFunction.__gwt_getMetaProperty(name);
}
var $stats = $wnd.__gwtStatsEvent ? function(a) {
return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);
} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
var _, prototypesByTypeId_0, initFnList_0, PERMUTATION_NOT_SET = -1, permutationId = -1;
function getPermutationId(){
  return permutationId;
}

function setGwtProperty(propertyName, propertyValue){
  if (typeof window === 'object' && typeof window['$gwt'] === 'object') {
    window['$gwt'][propertyName] = propertyValue;
  }
}

function registerEntry_0(){
  return registerEntry();
}

function gwtOnLoad_0(errFn, modName, modBase, softPermutationId){
  ensureModuleInit();
  var initFnList = initFnList_0;
  $moduleName = modName;
  $moduleBase = modBase;
  permutationId = softPermutationId;
  function initializeModules(){
    for (var i_0 = 0; i_0 < initFnList.length; i_0++) {
      initFnList[i_0]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    }
     catch (e) {
      errFn(modName, e);
    }
  }
   else {
    $entry(initializeModules)();
  }
}

function ensureModuleInit(){
  if (initFnList_0 == null) {
    initFnList_0 = [];
  }
}

function addInitFunctions(){
  ensureModuleInit();
  var initFnList = initFnList_0;
  for (var i_0 = 0; i_0 < arguments.length; i_0++) {
    initFnList.push(arguments[i_0]);
  }
}

function uniqueId(id_0){
  return jsinterop.closure.getUniqueId(id_0);
}

function typeMarkerFn(){
}

function provide(namespace, optCtor){
  var cur = $wnd;
  if (namespace === '') {
    return cur;
  }
  var parts = namespace.split('.');
  if (!(parts[0] in cur) && cur.execScript) {
    cur.execScript('var ' + parts[0]);
  }
  for (var part; parts.length && (part = parts.shift());) {
    cur = cur[part] = cur[part] || (!parts.length && optCtor || {});
  }
  return cur;
}

function portableObjCreate(obj){
  function F(){
  }

  ;
  F.prototype = obj || {};
  return new F;
}

function maybeGetClassLiteralFromPlaceHolder(entry){
  return entry instanceof Array?entry[0]:null;
}

function makeLambdaFunction(samMethod, instance){
  var lambda = function(){
    return samMethod.apply(lambda, arguments);
  }
  ;
  if (lambda.__proto__) {
    lambda.__proto__ = instance;
  }
   else {
    for (var prop in instance) {
      lambda[prop] = instance[prop];
    }
  }
  return lambda;
}

function getClassPrototype(typeId){
  return prototypesByTypeId_0[typeId];
}

function emptyMethod(){
}

function defineProperties(proto, propertyDefinition){
  for (var key in propertyDefinition) {
    propertyDefinition[key]['configurable'] = true;
  }
  Object.defineProperties(proto, propertyDefinition);
}

function defineClass(typeId, superTypeIdOrPrototype, castableTypeMap){
  var prototypesByTypeId = prototypesByTypeId_0;
  var prototype_0 = prototypesByTypeId[typeId];
  var clazz = maybeGetClassLiteralFromPlaceHolder(prototype_0);
  if (prototype_0 && !clazz) {
    _ = prototype_0;
  }
   else {
    _ = createSubclassPrototype(superTypeIdOrPrototype);
    _.castableTypeMap = castableTypeMap;
    _.constructor = _;
    if (!superTypeIdOrPrototype) {
      _.typeMarker = typeMarkerFn;
    }
    prototypesByTypeId[typeId] = _;
  }
  for (var i_0 = 3; i_0 < arguments.length; ++i_0) {
    arguments[i_0].prototype = _;
  }
  if (clazz) {
    _.___clazz = clazz;
  }
}

function createSubclassPrototype(superTypeIdOrPrototype){
  var superPrototype = superTypeIdOrPrototype && superTypeIdOrPrototype.prototype;
  if (!superPrototype) {
    superPrototype = prototypesByTypeId_0[superTypeIdOrPrototype];
  }
  return portableObjCreate(superPrototype);
}

function copyObjectProperties(from, to){
  for (var property in from) {
    if (to[property] === undefined) {
      to[property] = from[property];
    }
  }
}

function bootstrap(){
  prototypesByTypeId_0 = {};
  if (!Array.isArray) {
    Array.isArray = function(vArg){
      return Object.prototype.toString.call(vArg) === '[object Array]';
    }
    ;
  }
}

bootstrap();
function $clinit_Object(){
  $clinit_Object = emptyMethod;
}

function $$init(this$static){
}

function $equals(this$static, other){
  return this$static === other;
}

function $finalize(this$static){
}

function $getClass(this$static){
  return this$static.___clazz;
}

function $hashCode(this$static){
  return getObjectIdentityHashCode(this$static);
}

function $init__V__devirtual$(this$static){
  return instanceOfString(this$static)?$$init_2(this$static):instanceOfDouble(this$static)?$$init_1(this$static):instanceOfBoolean(this$static)?$$init_0(this$static):hasJavaObjectVirtualDispatch(this$static)?this$static.$init():$$init(this$static);
}

function $toString(this$static){
  return getClass__Ljava_lang_Class___devirtual$(this$static).getName() + '@' + toHexString(hashCode__I__devirtual$(this$static));
}

function Object_0(){
  $clinit_Object();
  $init__V__devirtual$(this);
}

function equals_Ljava_lang_Object__Z__devirtual$(this$static, other){
  $clinit_Object();
  return instanceOfString(this$static)?$equals_3(this$static, other):instanceOfDouble(this$static)?$equals_2(this$static, other):instanceOfBoolean(this$static)?$equals_1(this$static, other):hasJavaObjectVirtualDispatch(this$static)?this$static.equals(other):isJavaArray(this$static)?$equals(this$static, other):$equals_0(this$static, other);
}

function finalize__V__devirtual$(this$static){
  return instanceOfString(this$static)?$finalize(this$static):instanceOfDouble(this$static)?$finalize(this$static):instanceOfBoolean(this$static)?$finalize(this$static):hasJavaObjectVirtualDispatch(this$static)?this$static.finalize():$finalize(this$static);
}

function getClass__Ljava_lang_Class___devirtual$(this$static){
  $clinit_Object();
  return instanceOfString(this$static)?$getClass_3(this$static):instanceOfDouble(this$static)?$getClass_2(this$static):instanceOfBoolean(this$static)?$getClass_1(this$static):hasJavaObjectVirtualDispatch(this$static)?this$static.___clazz:isJavaArray(this$static)?$getClass(this$static):$getClass_0(this$static);
}

function hashCode__I__devirtual$(this$static){
  $clinit_Object();
  return instanceOfString(this$static)?$hashCode_3(this$static):instanceOfDouble(this$static)?$hashCode_2(this$static):instanceOfBoolean(this$static)?$hashCode_1(this$static):hasJavaObjectVirtualDispatch(this$static)?this$static.hashCode():isJavaArray(this$static)?$hashCode(this$static):$hashCode_0(this$static);
}

function toString__Ljava_lang_String___devirtual$(this$static){
  $clinit_Object();
  return instanceOfString(this$static)?$toString_3(this$static):instanceOfDouble(this$static)?$toString_2(this$static):instanceOfBoolean(this$static)?$toString_1(this$static):hasJavaObjectVirtualDispatch(this$static)?this$static.toString_0():isJavaArray(this$static)?$toString(this$static):$toString_0(this$static);
}

defineClass(1, null, {1:1}, Object_0);
_.$init = function $init(){
  $$init(this);
}
;
_.equals = function equals(other){
  return $equals(this, other);
}
;
_.finalize = function finalize(){
  $finalize(this);
}
;
_.getClass_0 = function getClass_0(){
  return $getClass(this);
}
;
_.hashCode = function hashCode_0(){
  return $hashCode(this);
}
;
_.toString_0 = function toString_0(){
  return $toString(this);
}
;
_.toString = function(){
  return this.toString_0();
}
;
function $clinit_JavaScriptObject(){
  $clinit_JavaScriptObject = emptyMethod;
  $clinit_Object();
}

function $cast(this$static){
  $clinit_JavaScriptObject();
  return this$static;
}

function $equals_0(this$static, other){
  $clinit_JavaScriptObject();
  return getClassPrototype(1).equals.call(this$static, other);
}

function $getClass_0(this$static){
  $clinit_JavaScriptObject();
  return getClass_1(this$static);
}

function $hashCode_0(this$static){
  $clinit_JavaScriptObject();
  return getClassPrototype(1).hashCode.call(this$static);
}

function $toString_0(this$static){
  $clinit_JavaScriptObject();
  return Lcom_google_gwt_core_client_JavaScriptObject_2_classLit.desiredAssertionStatus()?toStringVerbose(this$static):toStringSimple(this$static);
}

function createArray(){
  $clinit_JavaScriptObject();
  return [];
}

function createObject(){
  $clinit_JavaScriptObject();
  return {};
}

function toStringSimple(obj){
  return obj.toString?obj.toString():'[JavaScriptObject]';
}

function toStringVerbose(obj){
  var defined = function(m){
    return typeof m != 'undefined';
  }
  ;
  var strip = function(s){
    return s.replace(/\r\n/g, '');
  }
  ;
  if (defined(obj.outerHTML))
    return strip(obj.outerHTML);
  if (defined(obj.innerHTML) && obj.cloneNode) {
    $doc.createElement('div').appendChild(obj.cloneNode(true)).innerHTML;
  }
  if (defined(obj.nodeType) && obj.nodeType == 3) {
    return "'" + obj.data.replace(/ /g, '\u25AB').replace(/\u00A0/, '\u25AA') + "'";
  }
  if (typeof defined(obj.htmlText) && obj.collapse) {
    var html = obj.htmlText;
    if (html) {
      return 'IETextRange [' + strip(html) + ']';
    }
     else {
      var dup = obj.duplicate();
      dup.pasteHTML('|');
      var out = 'IETextRange ' + strip(obj.parentElement().outerHTML);
      dup.moveStart('character', -1);
      dup.pasteHTML('');
      return out;
    }
  }
  return obj.toString?obj.toString():'[JavaScriptObject]';
}

function $clinit_Cast(){
  $clinit_Cast = emptyMethod;
  $clinit_Object();
}

function Cast(){
  Object_0.call(this);
  this.$init_67();
}

function canCast(src_0, dstId){
  $clinit_Cast();
  if (instanceOfString(src_0)) {
    return !!stringCastMap[dstId];
  }
   else if (src_0.castableTypeMap) {
    return !!src_0.castableTypeMap[dstId];
  }
   else if (instanceOfDouble(src_0)) {
    return !!doubleCastMap[dstId];
  }
   else if (instanceOfBoolean(src_0)) {
    return !!booleanCastMap[dstId];
  }
  return false;
}

function canCastClass(srcClazz, dstClass){
  $clinit_Cast();
  var srcTypeId = srcClazz.typeId;
  var dstTypeId = dstClass.typeId;
  var prototype_0 = prototypesByTypeId_0[srcTypeId];
  return canCast(prototype_0, dstTypeId);
}

function castTo(src_0, dstId){
  $clinit_Cast();
  checkType(jsEquals(src_0, null) || canCast(src_0, dstId));
  return src_0;
}

function castToAllowJso(src_0, dstId){
  $clinit_Cast();
  checkType(jsEquals(src_0, null) || isJavaScriptObject(src_0) || canCast(src_0, dstId));
  return src_0;
}

function castToArray(src_0){
  $clinit_Cast();
  checkType(jsEquals(src_0, null) || instanceOfArray(src_0));
  return src_0;
}

function castToBoolean(src_0){
  $clinit_Cast();
  checkType(jsEquals(src_0, null) || instanceOfBoolean(src_0));
  return src_0;
}

function castToDouble(src_0){
  $clinit_Cast();
  checkType(jsEquals(src_0, null) || instanceOfDouble(src_0));
  return src_0;
}

function castToFunction(src_0){
  $clinit_Cast();
  checkType(jsEquals(src_0, null) || isFunction(src_0));
  return src_0;
}

function castToJsArray(src_0){
  $clinit_Cast();
  checkType(jsEquals(src_0, null) || instanceOfJsArray(src_0));
  return src_0;
}

function castToJsObject(src_0){
  $clinit_Cast();
  checkType(jsEquals(src_0, null) || isJsObject(src_0));
  return src_0;
}

function castToJso(src_0){
  $clinit_Cast();
  checkType(jsEquals(src_0, null) || isJavaScriptObject(src_0));
  return src_0;
}

function castToJsoArray(src_0, dstId){
  $clinit_Cast();
  checkType(jsEquals(src_0, null) || instanceOfJsoArray(src_0, dstId));
  return src_0;
}

function castToNative(src_0, jsType){
  $clinit_Cast();
  checkType(jsEquals(src_0, null) || jsinstanceOf(src_0, jsType));
  return src_0;
}

function castToString(src_0){
  $clinit_Cast();
  checkType(jsEquals(src_0, null) || instanceOfString(src_0));
  return src_0;
}

function castToUnknownNative(src_0){
  $clinit_Cast();
  return src_0;
}

function charToString(x_0){
  $clinit_Cast();
  return String.fromCharCode(x_0);
}

function getClass_1(array){
  $clinit_Cast();
  return array.___clazz || (Array.isArray(array) && getClassLiteralForArray(Lcom_google_gwt_core_client_JavaScriptObject_2_classLit, 1) || Lcom_google_gwt_core_client_JavaScriptObject_2_classLit);
}

function hasJavaObjectVirtualDispatch(src_0){
  $clinit_Cast();
  return !isArray(src_0) && hasTypeMarker(src_0);
}

function instanceOf(src_0, dstId){
  $clinit_Cast();
  return jsNotEquals(src_0, null) && canCast(src_0, dstId);
}

function instanceOfAllowJso(src_0, dstId){
  $clinit_Cast();
  return jsNotEquals(src_0, null) && (isJavaScriptObject(src_0) || canCast(src_0, dstId));
}

function instanceOfArray(src_0){
  $clinit_Cast();
  return isArray(src_0) && !isPrimitiveArray(src_0);
}

function instanceOfBoolean(src_0){
  $clinit_Cast();
  return typeof src_0 === 'boolean';
}

function instanceOfDouble(src_0){
  $clinit_Cast();
  return typeof src_0 === 'number';
}

function instanceOfFunction(src_0){
  $clinit_Cast();
  return jsNotEquals(src_0, null) && isFunction(src_0);
}

function instanceOfJsArray(src_0){
  $clinit_Cast();
  return isArray(src_0);
}

function instanceOfJsObject(src_0){
  $clinit_Cast();
  return jsNotEquals(src_0, null) && isJsObject(src_0);
}

function instanceOfJso(src_0){
  $clinit_Cast();
  return jsNotEquals(src_0, null) && isJavaScriptObject(src_0);
}

function instanceOfJsoArray(src_0, dstId){
  $clinit_Cast();
  return canCast(src_0, dstId) || !hasTypeMarker(src_0) && isArray(src_0);
}

function instanceOfNative(src_0, jsType){
  $clinit_Cast();
  return jsinstanceOf(src_0, jsType);
}

function instanceOfString(src_0){
  $clinit_Cast();
  return typeof src_0 === 'string';
}

function instanceOfUnknownNative(src_0){
  $clinit_Cast();
  return jsNotEquals(src_0, null);
}

function isArray(src_0){
  $clinit_Cast();
  return Array.isArray(src_0);
}

function isFunction(src_0){
  return typeof src_0 === 'function';
}

function isJavaScriptObject(src_0){
  $clinit_Cast();
  return isJsObjectOrFunction(src_0) && !hasTypeMarker(src_0);
}

function isJsObject(src_0){
  return typeof src_0 === 'object';
}

function isJsObjectOrFunction(src_0){
  return typeof src_0 === 'object' || typeof src_0 === 'function';
}

function isNotNull(src_0){
  $clinit_Cast();
  return !!src_0;
}

function isNull(src_0){
  $clinit_Cast();
  return !src_0;
}

function jsEquals(a, b){
  $clinit_Cast();
  return a == b;
}

function jsNotEquals(a, b){
  $clinit_Cast();
  return a != b;
}

function jsinstanceOf(obj, jsType){
  return obj && (jsType && obj instanceof jsType);
}

function maskUndefined(src_0){
  $clinit_Cast();
  return src_0 == null?null:src_0;
}

function narrow_byte(x_0){
  $clinit_Cast();
  return x_0 << 24 >> 24;
}

function narrow_char(x_0){
  $clinit_Cast();
  return x_0 & 65535;
}

function narrow_int(x_0){
  $clinit_Cast();
  return x_0 | 0;
}

function narrow_short(x_0){
  $clinit_Cast();
  return x_0 << 16 >> 16;
}

function round_byte(x_0){
  $clinit_Cast();
  return narrow_byte(round_int(x_0));
}

function round_char(x_0){
  $clinit_Cast();
  return narrow_char(round_int(x_0));
}

function round_int(x_0){
  $clinit_Cast();
  return Math.max(Math.min(x_0, 2147483647), -2147483648) | 0;
}

function round_short(x_0){
  $clinit_Cast();
  return narrow_short(round_int(x_0));
}

function throwClassCastExceptionUnlessNull(o){
  $clinit_Cast();
  checkType(jsEquals(o, null));
  return o;
}

defineClass(331, 1, {1:1});
_.$init_67 = function $init_67(){
}
;
var booleanCastMap, doubleCastMap, stringCastMap;
function $clinit_Util(){
  $clinit_Util = emptyMethod;
  $clinit_Object();
}

function Util(){
  Object_0.call(this);
  this.$init_73();
}

function getCastableTypeMap(o){
  $clinit_Util();
  return o.castableTypeMap;
}

function hasTypeMarker(o){
  $clinit_Util();
  return o.typeMarker === typeMarkerFn;
}

function makeEnumName(enumName){
  $clinit_Util();
  return enumName;
}

function setCastableTypeMap(o, castableTypeMap){
  $clinit_Util();
  o.castableTypeMap = castableTypeMap;
}

function setTypeMarker(o){
  $clinit_Util();
  o.typeMarker = typeMarkerFn;
}

defineClass(338, 1, {1:1});
_.$init_73 = function $init_73(){
}
;
function $clinit_Serializable(){
  $clinit_Serializable = emptyMethod;
}

function $clinit_Comparable(){
  $clinit_Comparable = emptyMethod;
}

function $clinit_Boolean(){
  $clinit_Boolean = emptyMethod;
  $clinit_Object();
  FALSE = $createBoolean(false);
  TRUE = $createBoolean(true);
  TYPE_20 = Z_classLit;
}

function $$init_0(this$static){
}

function $booleanValue(this$static){
  return unsafeCast(checkNotNull_0(this$static));
}

function $createBoolean(x_0){
  return createNative(x_0);
}

function $equals_1(this$static, o){
  return maskUndefined(checkNotNull_0(this$static)) === maskUndefined(o);
}

function $getClass_1(this$static){
  return Ljava_lang_Boolean_2_classLit;
}

function $hashCode_1(this$static){
  return hashCode_6(booleanValue__Z__devirtual$(this$static));
}

function $init__V__devirtual$_0(this$static){
  return $$init_0(this$static);
}

function $toString_1(this$static){
  return toString_14(booleanValue__Z__devirtual$(this$static));
}

function Boolean_0(value_0){
  Object_0.call(this);
  $init__V__devirtual$_0(this);
  $createBoolean(value_0);
}

function booleanValue__Z__devirtual$(this$static){
  return $booleanValue(this$static);
}

function createNative(x_0){
  return x_0;
}

function equals_Ljava_lang_Object__Z__devirtual$_0(this$static, o){
  return $equals_1(this$static, o);
}

function getClass__Ljava_lang_Class___devirtual$_0(this$static){
  return $getClass_1(this$static);
}

function hashCode_6(value_0){
  return value_0?1231:1237;
}

function hashCode__I__devirtual$_0(this$static){
  return $hashCode_1(this$static);
}

function toString_14(x_0){
  return valueOf_18(x_0);
}

function toString__Ljava_lang_String___devirtual$_0(this$static){
  return $toString_1(this$static);
}

function unsafeCast(value_0){
  return value_0;
}

function valueOf_4(b){
  return b?TRUE:FALSE;
}

booleanCastMap = {3:1, 4:1, 1:1};
var FALSE, TRUE, TYPE_20;
function $clinit_CharSequence(){
  $clinit_CharSequence = emptyMethod;
}

function $clinit_Type(){
  $clinit_Type = emptyMethod;
}

function $clinit_Class(){
  $clinit_Class = emptyMethod;
  $clinit_Object();
}

function Class(){
  Object_0.call(this);
  this.$init_218();
  this.typeName = null;
  this.simpleName = null;
  this.packageName = null;
  this.compoundName = null;
  this.canonicalName = null;
  this.typeId = null;
  this.arrayLiterals = null;
}

function createClassObject(packageName, compoundClassName, typeId){
  var clazz;
  clazz = new Class;
  if (isClassMetadataEnabled()) {
    clazz.packageName = packageName;
    clazz.compoundName = compoundClassName;
  }
   else {
    synthesizeClassNamesFromTypeId(clazz, typeId);
  }
  return clazz;
}

function createForClass(packageName, compoundClassName, typeId, superclass){
  $clinit_Class();
  var clazz;
  clazz = createClassObject(packageName, compoundClassName, typeId);
  maybeSetClassLiteral(typeId, clazz);
  clazz.superclass = superclass;
  return clazz;
}

function createForEnum(packageName, compoundClassName, typeId, superclass, enumConstantsFunc, enumValueOfFunc){
  $clinit_Class();
  var clazz;
  clazz = createClassObject(packageName, compoundClassName, typeId);
  maybeSetClassLiteral(typeId, clazz);
  clazz.modifiers = isNotNull(enumConstantsFunc)?8:0;
  clazz.superclass = clazz.enumSuperclass = superclass;
  clazz.enumConstantsFunc = enumConstantsFunc;
  clazz.enumValueOfFunc = enumValueOfFunc;
  return clazz;
}

function createForInterface(packageName, compoundClassName){
  $clinit_Class();
  var clazz;
  clazz = createClassObject(packageName, compoundClassName, null);
  clazz.modifiers = 2;
  return clazz;
}

function createForPrimitive(className, primitiveTypeId){
  $clinit_Class();
  var clazz;
  clazz = createClassObject('', className, primitiveTypeId);
  clazz.typeId = primitiveTypeId;
  clazz.modifiers = 1;
  return clazz;
}

function getClassLiteralForArray_0(leafClass, dimensions){
  $clinit_Class();
  var arrayLiterals = leafClass.arrayLiterals = leafClass.arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.createClassLiteralForArray(dimensions));
}

function getPrototypeForClass(clazz){
  $clinit_Class();
  if (clazz.isPrimitive()) {
    return null;
  }
  var typeId = clazz.typeId;
  var prototype_0 = prototypesByTypeId_0[typeId];
  return prototype_0;
}

function initializeNames(clazz){
  if (clazz.isArray_0()) {
    var componentType = clazz.componentType;
    if (componentType.isPrimitive()) {
      clazz.typeName = '[' + componentType.typeId;
    }
     else if (!componentType.isArray_0()) {
      clazz.typeName = '[L' + componentType.getName() + ';';
    }
     else {
      clazz.typeName = '[' + componentType.getName();
    }
    clazz.canonicalName = componentType.getCanonicalName() + '[]';
    clazz.simpleName = componentType.getSimpleName() + '[]';
    return;
  }
  var packageName = clazz.packageName;
  var compoundName = clazz.compoundName;
  compoundName = compoundName.split('/');
  clazz.typeName = join_0('.', [packageName, join_0('$', compoundName)]);
  clazz.canonicalName = join_0('.', [packageName, join_0('.', compoundName)]);
  clazz.simpleName = compoundName[compoundName.length - 1];
}

function isClassMetadataEnabled(){
  $clinit_Class();
  return true;
}

function join_0(separator, strings){
  var i_0 = 0;
  while (!strings[i_0] || strings[i_0] == '') {
    i_0++;
  }
  var result = strings[i_0++];
  for (; i_0 < strings.length; i_0++) {
    if (!strings[i_0] || strings[i_0] == '') {
      continue;
    }
    result += separator + strings[i_0];
  }
  return result;
}

function maybeSetClassLiteral(typeId, clazz){
  var proto;
  if (!typeId) {
    return;
  }
  clazz.typeId = typeId;
  var prototype_0 = getPrototypeForClass(clazz);
  if (!prototype_0) {
    prototypesByTypeId_0[typeId] = [clazz];
    return;
  }
  prototype_0.___clazz = clazz;
}

function synthesizeClassNamesFromTypeId(clazz, typeId){
  $clinit_Class();
  clazz.typeName = 'Class$' + (!!typeId?'S' + typeId:'' + clazz.sequentialId);
  clazz.canonicalName = clazz.typeName;
  clazz.simpleName = clazz.typeName;
}

defineClass(111, 1, {1:1}, Class);
_.$init_218 = function $init_218(){
  this.sequentialId = nextSequentialId++;
}
;
_.createClassLiteralForArray = function createClassLiteralForArray(dimensions){
  var clazz;
  clazz = new Class;
  clazz.modifiers = 4;
  clazz.superclass = Ljava_lang_Object_2_classLit;
  if (dimensions > 1) {
    clazz.componentType = getClassLiteralForArray_0(this, dimensions - 1);
  }
   else {
    clazz.componentType = this;
  }
  return clazz;
}
;
_.desiredAssertionStatus = function desiredAssertionStatus(){
  return false;
}
;
_.ensureNamesAreInitialized = function ensureNamesAreInitialized(){
  if (jsNotEquals(this.typeName, null)) {
    return;
  }
  initializeNames(this);
}
;
_.getCanonicalName = function getCanonicalName(){
  this.ensureNamesAreInitialized();
  return this.canonicalName;
}
;
_.getName = function getName_7(){
  this.ensureNamesAreInitialized();
  return this.typeName;
}
;
_.getSimpleName = function getSimpleName(){
  this.ensureNamesAreInitialized();
  return this.simpleName;
}
;
_.isArray_0 = function isArray_0(){
  return (this.modifiers & 4) != 0;
}
;
_.isInterface = function isInterface(){
  return (this.modifiers & 2) != 0;
}
;
_.isPrimitive = function isPrimitive(){
  return (this.modifiers & 1) != 0;
}
;
_.toString_0 = function toString_18(){
  return (this.isInterface()?'interface ':this.isPrimitive()?'':'class ') + ('' + this.getName());
}
;
_.modifiers = 0;
_.sequentialId = 0;
var ARRAY = 4, ENUM = 8, INTERFACE = 2, PRIMITIVE = 1, nextSequentialId = 1;
function $clinit_Number(){
  $clinit_Number = emptyMethod;
  $clinit_Object();
}

function $init__V__devirtual$_1(this$static){
  return instanceOfDouble(this$static)?$$init_1(this$static):this$static.$init_215();
}

function Number_0(){
  $clinit_Number();
  Object_0.call(this);
  $init__V__devirtual$_1(this);
}

function byteValue__B__devirtual$(this$static){
  return instanceOfDouble(this$static)?$byteValue(this$static):this$static.byteValue();
}

function doubleValue__D__devirtual$(this$static){
  return instanceOfDouble(this$static)?$doubleValue(this$static):this$static.doubleValue();
}

function floatValue__F__devirtual$(this$static){
  return instanceOfDouble(this$static)?$floatValue(this$static):this$static.floatValue();
}

function getClass__Ljava_lang_Class___devirtual$_1(this$static){
  return instanceOfDouble(this$static)?$getClass_2(this$static):this$static.___clazz;
}

function intValue__I__devirtual$(this$static){
  return instanceOfDouble(this$static)?$intValue(this$static):this$static.intValue();
}

function longValue__J__devirtual$(this$static){
  return instanceOfDouble(this$static)?$longValue(this$static):this$static.longValue();
}

function shortValue__S__devirtual$(this$static){
  return instanceOfDouble(this$static)?$shortValue(this$static):this$static.shortValue();
}

defineClass(43, 1, {3:1, 1:1});
_.$init_215 = function $init_215(){
}
;
_.byteValue = function byteValue(){
  return narrow_byte(intValue__I__devirtual$(this));
}
;
_.shortValue = function shortValue(){
  return narrow_short(intValue__I__devirtual$(this));
}
;
function $clinit_Double(){
  $clinit_Double = emptyMethod;
  $clinit_Number();
  MIN_EXPONENT = -1022;
  NaN_0 = 0 / 0;
  NEGATIVE_INFINITY = -1 / 0;
  POSITIVE_INFINITY = 1 / 0;
  BYTES_1 = narrow_int(64 / 8);
  TYPE_23 = D_classLit;
}

function $$init_1(this$static){
}

function $byteValue(this$static){
  return round_byte(doubleValue__D__devirtual$_0(this$static));
}

function $createDouble(x_0){
  return createNative_0(x_0);
}

function $doubleValue(this$static){
  return unsafeCast_0(checkNotNull_0(this$static));
}

function $equals_2(this$static, o){
  return maskUndefined(checkNotNull_0(this$static)) === maskUndefined(o);
}

function $floatValue(this$static){
  return doubleValue__D__devirtual$_0(this$static);
}

function $getClass_2(this$static){
  return Ljava_lang_Double_2_classLit;
}

function $hashCode_2(this$static){
  return hashCode_11(doubleValue__D__devirtual$_0(this$static));
}

function $init__V__devirtual$_2(this$static){
  return $$init_1(this$static);
}

function $intValue(this$static){
  return round_int(doubleValue__D__devirtual$_0(this$static));
}

function $longValue(this$static){
  return fromDouble_0(doubleValue__D__devirtual$_0(this$static));
}

function $shortValue(this$static){
  return round_short(doubleValue__D__devirtual$_0(this$static));
}

function $toString_2(this$static){
  return toString_19(doubleValue__D__devirtual$_0(this$static));
}

function Double(value_0){
  Number_0.call(this);
  $init__V__devirtual$_2(this);
  $createDouble(value_0);
}

function byteValue__B__devirtual$_0(this$static){
  return $byteValue(this$static);
}

function createNative_0(x_0){
  return x_0;
}

function doubleValue__D__devirtual$_0(this$static){
  return $doubleValue(this$static);
}

function equals_Ljava_lang_Object__Z__devirtual$_1(this$static, o){
  return $equals_2(this$static, o);
}

function floatValue__F__devirtual$_0(this$static){
  return $floatValue(this$static);
}

function getClass__Ljava_lang_Class___devirtual$_2(this$static){
  return $getClass_2(this$static);
}

function hashCode_11(d){
  return round_int(d);
}

function hashCode__I__devirtual$_1(this$static){
  return $hashCode_2(this$static);
}

function intValue__I__devirtual$_0(this$static){
  return $intValue(this$static);
}

function isNaN_0(x_0){
  $clinit_Double();
  return isNaN_1(x_0);
}

function longValue__J__devirtual$_0(this$static){
  return $longValue(this$static);
}

function shortValue__S__devirtual$_0(this$static){
  return $shortValue(this$static);
}

function toString_19(b){
  return valueOf_13(b);
}

function toString__Ljava_lang_String___devirtual$_1(this$static){
  return $toString_2(this$static);
}

function unsafeCast_0(instance){
  return instance;
}

function valueOf_7(d){
  return $createDouble(d);
}

doubleCastMap = {3:1, 4:1, 1:1};
var BYTES_1 = 0, MAX_EXPONENT = 1023, MAX_VALUE_2 = 1.7976931348623157E308, MIN_EXPONENT = 0, MIN_NORMAL = 2.2250738585072014E-308, MIN_VALUE_2 = 4.9E-324, NEGATIVE_INFINITY = 0, NaN_0 = 0, POSITIVE_INFINITY = 0, POWER_1 = 2, POWER_128 = 3.4028236692093846E38, POWER_16 = 65536, POWER_2 = 4, POWER_20 = 1048576, POWER_256 = 1.157920892373162E77, POWER_31 = 2147483648, POWER_32 = 4294967296, POWER_4 = 16, POWER_512 = 1.3407807929942597E154, POWER_52 = 4503599627370496, POWER_64 = 1.8446744073709552E19, POWER_8 = 256, POWER_MINUS_1 = 0.5, POWER_MINUS_1022 = 2.2250738585072014E-308, POWER_MINUS_128 = 2.9387358770557188E-39, POWER_MINUS_16 = 1.52587890625E-5, POWER_MINUS_2 = 0.25, POWER_MINUS_20 = 9.5367431640625E-7, POWER_MINUS_256 = 8.636168555094445E-78, POWER_MINUS_32 = 2.3283064365386963E-10, POWER_MINUS_4 = 0.0625, POWER_MINUS_512 = 7.458340731200207E-155, POWER_MINUS_52 = 2.220446049250313E-16, POWER_MINUS_64 = 5.421010862427522E-20, POWER_MINUS_8 = 0.00390625, SIZE_1 = 64, TYPE_23;
function $clinit_String(){
  $clinit_String = emptyMethod;
  $clinit_Object();
  CASE_INSENSITIVE_ORDER = new String$1;
}

function $$init_2(this$static){
}

function $asNativeString(this$static){
  return toNative(this$static);
}

function $charAt(this$static, index_0){
  return asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static).charCodeAt(index_0);
}

function $contains(this$static, s){
  return indexOf_Ljava_lang_String__I__devirtual$(this$static, toString__Ljava_lang_String___devirtual$_2(s)) != -1;
}

function $createString(value_0){
  $clinit_String();
  return valueOf_19(value_0);
}

function $equals_3(this$static, other){
  return this$static === other;
}

function $equalsIgnoreCase(this$static, other){
  return equalsIgnoreCase(this$static, other);
}

function $getChars(this$static, srcBegin, srcEnd, dst, dstBegin){
  var srcIdx;
  for (srcIdx = srcBegin; srcIdx < srcEnd; ++srcIdx) {
    dst[dstBegin++] = charAt_I_C__devirtual$_0(this$static, srcIdx);
  }
}

function $getClass_3(this$static){
  return Ljava_lang_String_2_classLit;
}

function $hashCode_3(this$static){
  return hashCodeForString(this$static);
}

function $indexOf(this$static, codePoint){
  return indexOf_Ljava_lang_String__I__devirtual$(this$static, fromCodePoint(codePoint));
}

function $indexOf_0(this$static, str){
  return asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static).indexOf(str);
}

function $indexOf_1(this$static, str, startIndex){
  return asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static).indexOf(str, startIndex);
}

function $init__V__devirtual$_3(this$static){
  return $$init_2(this$static);
}

function $isEmpty(this$static){
  return length__I__devirtual$_0(this$static) == 0;
}

function $lastIndexOf(this$static, codePoint){
  return lastIndexOf_Ljava_lang_String__I__devirtual$(this$static, fromCodePoint(codePoint));
}

function $lastIndexOf_0(this$static, codePoint, startIndex){
  return lastIndexOf_Ljava_lang_String_I_I__devirtual$(this$static, fromCodePoint(codePoint), startIndex);
}

function $lastIndexOf_1(this$static, str){
  return asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static).lastIndexOf(str);
}

function $lastIndexOf_2(this$static, str, start_0){
  return asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static).lastIndexOf(str, start_0);
}

function $length_9(this$static){
  return asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static).length;
}

function $matches(this$static, regex){
  return nativeMatches_Ljavaemul_internal_NativeRegExp__Z__devirtual$(this$static, new $wnd.RegExp('^(' + regex + ')$'));
}

function $nativeMatches(this$static, regex){
  return regex.test(this$static);
}

function $nativeReplaceAll(this$static, regex, replace){
  return asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static).replace(new $wnd.RegExp(regex, 'g'), replace);
}

function $replaceFirst(this$static, regex, replace){
  var jsRegEx;
  replace = translateReplaceString(replace);
  jsRegEx = new $wnd.RegExp(regex);
  return asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static).replace(jsRegEx, replace);
}

function $startsWith(this$static, prefix){
  return startsWith_Ljava_lang_String_I_Z__devirtual$(this$static, prefix, 0);
}

function $startsWith_0(this$static, prefix, toffset){
  return toffset >= 0 && equals_Ljava_lang_Object__Z__devirtual$_2(asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static).substr(toffset, length__I__devirtual$_0(prefix)), prefix);
}

function $substring(this$static, beginIndex){
  return asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static).substr(beginIndex, length__I__devirtual$_0(this$static) - beginIndex);
}

function $substring_0(this$static, beginIndex, endIndex){
  return asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static).substr(beginIndex, endIndex - beginIndex);
}

function $toCharArray(this$static){
  var charArr, n;
  n = length__I__devirtual$_0(this$static);
  charArr = initUnidimensionalArray(C_classLit, {3:1, 1:1}, 56, n, 15, 1);
  getChars_II_CI_V__devirtual$(this$static, 0, n, charArr, 0);
  return charArr;
}

function $toLowerCase(this$static){
  return asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static).toLowerCase();
}

function $toLowerCase_0(this$static, locale){
  return jsEquals(locale, getDefault())?asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static).toLocaleLowerCase():asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static).toLowerCase();
}

function $toString_3(this$static){
  return this$static;
}

function $trim(this$static){
  var end, length_0, start_0;
  length_0 = length__I__devirtual$_0(this$static);
  start_0 = 0;
  while (start_0 < length_0 && charAt_I_C__devirtual$_0(this$static, start_0) <= 32) {
    start_0++;
  }
  end = length_0;
  while (end > start_0 && charAt_I_C__devirtual$_0(this$static, end - 1) <= 32) {
    end--;
  }
  return start_0 > 0 || end < length_0?substring_II_Ljava_lang_String___devirtual$(this$static, start_0, end):this$static;
}

function String_0(value_0){
  Object_0.call(this);
  $init__V__devirtual$_3(this);
  $createString(value_0);
}

function asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static){
  return $asNativeString(this$static);
}

function charAt_I_C__devirtual$(this$static, index_0){
  return instanceOfString(this$static)?$charAt(this$static, index_0):this$static.charAt(index_0);
}

function charAt_I_C__devirtual$_0(this$static, index_0){
  $clinit_String();
  return $charAt(this$static, index_0);
}

function contains_Ljava_lang_CharSequence__Z__devirtual$(this$static, s){
  $clinit_String();
  return $contains(this$static, s);
}

function equalsIgnoreCase(s, other){
  if (other == null) {
    return false;
  }
  if (s == other) {
    return true;
  }
  return s.length == other.length && s.toLowerCase() == other.toLowerCase();
}

function equalsIgnoreCase_Ljava_lang_String__Z__devirtual$(this$static, other){
  $clinit_String();
  return $equalsIgnoreCase(this$static, other);
}

function equals_Ljava_lang_Object__Z__devirtual$_2(this$static, other){
  $clinit_String();
  return $equals_3(this$static, other);
}

function fromCharCode(array){
  return castToString($wnd.String.fromCharCode.apply(null, array));
}

function fromCodePoint(codePoint){
  $clinit_String();
  var hiSurrogate, loSurrogate;
  if (codePoint >= 65536) {
    hiSurrogate = getHighSurrogate(codePoint);
    loSurrogate = getLowSurrogate(codePoint);
    return valueOf_12(hiSurrogate) + ('' + valueOf_12(loSurrogate));
  }
   else {
    return valueOf_12(narrow_char(codePoint));
  }
}

function getChars_II_CI_V__devirtual$(this$static, srcBegin, srcEnd, dst, dstBegin){
  return $getChars(this$static, srcBegin, srcEnd, dst, dstBegin);
}

function getClass__Ljava_lang_Class___devirtual$_3(this$static){
  return $getClass_3(this$static);
}

function hashCode__I__devirtual$_2(this$static){
  $clinit_String();
  return $hashCode_3(this$static);
}

function indexOf_I_I__devirtual$(this$static, codePoint){
  $clinit_String();
  return $indexOf(this$static, codePoint);
}

function indexOf_Ljava_lang_String_I_I__devirtual$(this$static, str, startIndex){
  $clinit_String();
  return $indexOf_1(this$static, str, startIndex);
}

function indexOf_Ljava_lang_String__I__devirtual$(this$static, str){
  $clinit_String();
  return $indexOf_0(this$static, str);
}

function isEmpty__Z__devirtual$(this$static){
  $clinit_String();
  return $isEmpty(this$static);
}

function lastIndexOf_II_I__devirtual$(this$static, codePoint, startIndex){
  $clinit_String();
  return $lastIndexOf_0(this$static, codePoint, startIndex);
}

function lastIndexOf_I_I__devirtual$(this$static, codePoint){
  $clinit_String();
  return $lastIndexOf(this$static, codePoint);
}

function lastIndexOf_Ljava_lang_String_I_I__devirtual$(this$static, str, start_0){
  $clinit_String();
  return $lastIndexOf_2(this$static, str, start_0);
}

function lastIndexOf_Ljava_lang_String__I__devirtual$(this$static, str){
  $clinit_String();
  return $lastIndexOf_1(this$static, str);
}

function length__I__devirtual$(this$static){
  return instanceOfString(this$static)?$length_9(this$static):this$static.length_0();
}

function length__I__devirtual$_0(this$static){
  $clinit_String();
  return $length_9(this$static);
}

function matches_Ljava_lang_String__Z__devirtual$(this$static, regex){
  $clinit_String();
  return $matches(this$static, regex);
}

function nativeMatches_Ljavaemul_internal_NativeRegExp__Z__devirtual$(this$static, regex){
  return $nativeMatches(this$static, regex);
}

function nativeReplaceAll_Ljava_lang_String_Ljava_lang_String__Ljava_lang_String___devirtual$(this$static, regex, replace){
  $clinit_String();
  return $nativeReplaceAll(this$static, regex, replace);
}

function replaceFirst_Ljava_lang_String_Ljava_lang_String__Ljava_lang_String___devirtual$(this$static, regex, replace){
  $clinit_String();
  return $replaceFirst(this$static, regex, replace);
}

function startsWith_Ljava_lang_String_I_Z__devirtual$(this$static, prefix, toffset){
  return $startsWith_0(this$static, prefix, toffset);
}

function startsWith_Ljava_lang_String__Z__devirtual$(this$static, prefix){
  $clinit_String();
  return $startsWith(this$static, prefix);
}

function substring_II_Ljava_lang_String___devirtual$(this$static, beginIndex, endIndex){
  $clinit_String();
  return $substring_0(this$static, beginIndex, endIndex);
}

function substring_I_Ljava_lang_String___devirtual$(this$static, beginIndex){
  $clinit_String();
  return $substring(this$static, beginIndex);
}

function toCharArray___C__devirtual$(this$static){
  $clinit_String();
  return $toCharArray(this$static);
}

function toLowerCase_Ljava_util_Locale__Ljava_lang_String___devirtual$(this$static, locale){
  return $toLowerCase_0(this$static, locale);
}

function toLowerCase__Ljava_lang_String___devirtual$(this$static){
  return $toLowerCase(this$static);
}

function toNative(str){
  return str;
}

function toString__Ljava_lang_String___devirtual$_2(this$static){
  $clinit_String();
  return instanceOfString(this$static)?$toString_3(this$static):this$static.toString_0();
}

function toString__Ljava_lang_String___devirtual$_3(this$static){
  return $toString_3(this$static);
}

function translateReplaceString(replaceStr){
  var pos;
  pos = 0;
  while (0 <= (pos = indexOf_Ljava_lang_String_I_I__devirtual$(replaceStr, '\\', pos))) {
    if (charAt_I_C__devirtual$_0(replaceStr, pos + 1) == 36) {
      replaceStr = substring_II_Ljava_lang_String___devirtual$(replaceStr, 0, pos) + '$' + substring_I_Ljava_lang_String___devirtual$(replaceStr, ++pos);
    }
     else {
      replaceStr = substring_II_Ljava_lang_String___devirtual$(replaceStr, 0, pos) + ('' + substring_I_Ljava_lang_String___devirtual$(replaceStr, ++pos));
    }
  }
  return replaceStr;
}

function trim__Ljava_lang_String___devirtual$(this$static){
  $clinit_String();
  return $trim(this$static);
}

function valueOf_12(x_0){
  $clinit_String();
  return $wnd.String.fromCharCode(x_0);
}

function valueOf_13(x_0){
  $clinit_String();
  return '' + x_0;
}

function valueOf_14(x_0){
  $clinit_String();
  return '' + x_0;
}

function valueOf_15(x_0){
  $clinit_String();
  return '' + x_0;
}

function valueOf_16(x_0){
  $clinit_String();
  return '' + toString_9(x_0);
}

function valueOf_17(x_0){
  $clinit_String();
  return jsEquals(x_0, null)?'null':toString__Ljava_lang_String___devirtual$(x_0);
}

function valueOf_18(x_0){
  $clinit_String();
  return '' + x_0;
}

function valueOf_19(x_0){
  $clinit_String();
  return valueOf_20(x_0, 0, x_0.length);
}

function valueOf_20(x_0, offset, count){
  var batchEnd, batchSize, batchStart, end, s;
  end = offset + count;
  checkStringBounds(offset, end, x_0.length);
  batchSize = 10000;
  s = '';
  for (batchStart = offset; batchStart < end;) {
    batchEnd = min_0(batchStart + batchSize, end);
    s += '' + fromCharCode(unsafeClone(x_0, batchStart, batchEnd));
    batchStart = batchEnd;
  }
  return s;
}

stringCastMap = {3:1, 302:1, 4:1, 1:1, 2:1};
var CASE_INSENSITIVE_ORDER;
function $clinit_Comparator(){
  $clinit_Comparator = emptyMethod;
}

function $clinit_String$1(){
  $clinit_String$1 = emptyMethod;
  $clinit_Object();
  $clinit_Comparator();
}

function String$1(){
  $clinit_String$1();
  Object_0.call(this);
  this.$init_229();
}

defineClass(152, 1, {1:1}, String$1);
_.$init_229 = function $init_229(){
}
;
_.equals = function equals_11(other){
  return getClassPrototype(1).equals.call(this, other);
}
;
var Ljava_lang_Object_2_classLit = createForClass('java.lang', 'Object', 1, null);
var Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptObject$', 0, Ljava_lang_Object_2_classLit);
var Lcom_google_gwt_lang_Cast_2_classLit = createForClass('com.google.gwt.lang', 'Cast', 331, Ljava_lang_Object_2_classLit);
var Lcom_google_gwt_lang_Util_2_classLit = createForClass('com.google.gwt.lang', 'Util', 338, Ljava_lang_Object_2_classLit);
var Ljava_io_Serializable_2_classLit = createForInterface('java.io', 'Serializable');
var Ljava_lang_Comparable_2_classLit = createForInterface('java.lang', 'Comparable');
var Ljava_lang_Boolean_2_classLit = createForClass('java.lang', 'Boolean', 339, Ljava_lang_Object_2_classLit);
var Ljava_lang_CharSequence_2_classLit = createForInterface('java.lang', 'CharSequence');
var Ljava_lang_reflect_Type_2_classLit = createForInterface('java.lang.reflect', 'Type');
var Ljava_lang_Class_2_classLit = createForClass('java.lang', 'Class', 111, Ljava_lang_Object_2_classLit);
var Ljava_lang_Number_2_classLit = createForClass('java.lang', 'Number', 43, Ljava_lang_Object_2_classLit);
var Ljava_lang_Double_2_classLit = createForClass('java.lang', 'Double', 345, Ljava_lang_Number_2_classLit);
var Ljava_lang_String_2_classLit = createForClass('java.lang', 'String', 2, Ljava_lang_Object_2_classLit);
var Ljava_util_Comparator_2_classLit = createForInterface('java.util', 'Comparator');
var Ljava_lang_String$1_2_classLit = createForClass('java.lang', 'String/1', 152, Ljava_lang_Object_2_classLit);
function $clinit_Callback(){
  $clinit_Callback = emptyMethod;
}

var Lcom_google_gwt_core_client_Callback_2_classLit = createForInterface('com.google.gwt.core.client', 'Callback');
function $clinit_Throwable(){
  $clinit_Throwable = emptyMethod;
  $clinit_Object();
  UNITIALIZED = new Object_0;
}

function Throwable(){
  $clinit_Throwable();
  Object_0.call(this);
  this.$init_0();
  this.fillInStackTrace();
  this.initializeBackingError();
}

function Throwable_0(backingJsObject){
  $clinit_Throwable();
  Object_0.call(this);
  this.$init_0();
  this.fillInStackTrace();
  this.setBackingJsObject(backingJsObject);
  this.detailMessage = valueOf_17(backingJsObject);
}

function Throwable_1(message){
  $clinit_Throwable();
  Object_0.call(this);
  this.$init_0();
  this.detailMessage = message;
  this.fillInStackTrace();
  this.initializeBackingError();
}

function Throwable_2(message, cause){
  $clinit_Throwable();
  Object_0.call(this);
  this.$init_0();
  this.cause = cause;
  this.detailMessage = message;
  this.fillInStackTrace();
  this.initializeBackingError();
}

function Throwable_3(cause){
  $clinit_Throwable();
  Object_0.call(this);
  this.$init_0();
  this.detailMessage = isNull(cause)?null:cause.toString_0();
  this.cause = cause;
  this.fillInStackTrace();
  this.initializeBackingError();
}

function fixIE(e){
  if (!('stack' in e)) {
    try {
      throw e;
    }
     catch (ignored) {
    }
  }
  return e;
}

defineClass(8, 1, {3:1, 1:1, 8:1});
_.$init_0 = function $init_0(){
  this.stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, {3:1, 1:1, 7:1}, 25, 0, 0, 1);
  this.writetableStackTrace = true;
  this.backingJsObject = UNITIALIZED;
}
;
_.addSuppressed = function addSuppressed(exception){
  checkNotNull_1(exception, 'Cannot suppress a null exception.');
  checkCriticalArgument(jsNotEquals(exception, this), 'Exception can not suppress itself.');
  if (this.disableSuppression) {
    return;
  }
  if (jsEquals(this.suppressedExceptions, null)) {
    this.suppressedExceptions = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Throwable_2_classLit, 1), {3:1, 1:1, 7:1}, 8, 0, [exception]);
  }
   else {
    setCheck(this.suppressedExceptions, this.suppressedExceptions.length, exception);
  }
}
;
_.captureStackTrace = function captureStackTrace(){
  captureStackTrace_0(this);
}
;
_.constructJavaStackTrace = function constructJavaStackTrace(){
  return constructJavaStackTrace_0(this);
}
;
_.createError = function createError(msg){
  return new Error(msg);
}
;
_.fillInStackTrace = function fillInStackTrace(){
  if (this.writetableStackTrace) {
    if (maskUndefined(this.backingJsObject) !== maskUndefined(UNITIALIZED)) {
      this.initializeBackingError();
    }
    this.stackTrace = null;
  }
  return this;
}
;
_.getCause = function getCause(){
  return this.cause;
}
;
_.getLocalizedMessage = function getLocalizedMessage(){
  return this.getMessage();
}
;
_.getMessage = function getMessage(){
  return this.detailMessage;
}
;
_.getStackTrace = function getStackTrace(){
  if (jsEquals(this.stackTrace, null)) {
    this.stackTrace = this.constructJavaStackTrace();
  }
  return this.stackTrace;
}
;
_.getSuppressed = function getSuppressed(){
  if (jsEquals(this.suppressedExceptions, null)) {
    this.suppressedExceptions = initUnidimensionalArray(Ljava_lang_Throwable_2_classLit, {3:1, 1:1, 7:1}, 8, 0, 0, 1);
  }
  return this.suppressedExceptions;
}
;
_.initializeBackingError = function initializeBackingError(){
  var errorMessage, message;
  message = jsEquals(this.detailMessage, null)?null:nativeReplaceAll_Ljava_lang_String_Ljava_lang_String__Ljava_lang_String___devirtual$(this.detailMessage, '\n', ' ');
  errorMessage = this.toString_1(message);
  this.setBackingJsObject(fixIE(this.createError(errorMessage)));
  this.captureStackTrace();
}
;
_.linkBack = function linkBack(error){
  if (jsNotEquals(error, null)) {
    setPropertySafe(error, '__java$exception', this);
  }
}
;
_.printStackTrace = function printStackTrace(out){
  this.printStackTraceImpl(out, '', '');
}
;
_.printStackTraceImpl = function printStackTraceImpl(out, prefix, ident){
  var t, t$array, t$index, t$max, theCause;
  out.println(ident + ('' + prefix) + this);
  this.printStackTraceItems(out, ident);
  for (t$array = this.getSuppressed() , t$index = 0 , t$max = t$array.length; t$index < t$max; ++t$index) {
    t = t$array[t$index];
    t.printStackTraceImpl(out, 'Suppressed: ', '\t' + ident);
  }
  theCause = this.getCause();
  if (isNotNull(theCause)) {
    theCause.printStackTraceImpl(out, 'Caused by: ', ident);
  }
}
;
_.printStackTraceItems = function printStackTraceItems(out, ident){
  var element, element$array, element$index, element$max;
  for (element$array = this.getStackTrace() , element$index = 0 , element$max = element$array.length; element$index < element$max; ++element$index) {
    element = element$array[element$index];
    out.println(ident + '\tat ' + element);
  }
}
;
_.setBackingJsObject = function setBackingJsObject(backingJsObject){
  this.backingJsObject = backingJsObject;
  this.linkBack(backingJsObject);
}
;
_.toString_0 = function toString_1(){
  return this.toString_1(this.getLocalizedMessage());
}
;
_.toString_1 = function toString_2(message){
  var className;
  className = getClass__Ljava_lang_Class___devirtual$(this).getName();
  return jsEquals(message, null)?className:className + ': ' + message;
}
;
_.disableSuppression = false;
_.writetableStackTrace = false;
var UNITIALIZED;
var Ljava_lang_Throwable_2_classLit = createForClass('java.lang', 'Throwable', 8, Ljava_lang_Object_2_classLit);
function $clinit_Exception(){
  $clinit_Exception = emptyMethod;
  $clinit_Throwable();
}

function Exception(){
  $clinit_Exception();
  Throwable.call(this);
  this.$init_1();
}

function Exception_0(backingJsObject){
  $clinit_Exception();
  Throwable_0.call(this, backingJsObject);
  this.$init_1();
}

function Exception_1(message){
  $clinit_Exception();
  Throwable_1.call(this, message);
  this.$init_1();
}

function Exception_2(message, cause){
  $clinit_Exception();
  Throwable_2.call(this, message, cause);
  this.$init_1();
}

function Exception_3(cause){
  $clinit_Exception();
  Throwable_3.call(this, cause);
  this.$init_1();
}

defineClass(10, 8, {3:1, 10:1, 1:1, 8:1});
_.$init_1 = function $init_1(){
}
;
var Ljava_lang_Exception_2_classLit = createForClass('java.lang', 'Exception', 10, Ljava_lang_Throwable_2_classLit);
function $clinit_RuntimeException(){
  $clinit_RuntimeException = emptyMethod;
  $clinit_Exception();
}

function RuntimeException(){
  $clinit_RuntimeException();
  Exception.call(this);
  this.$init_2();
}

function RuntimeException_0(backingJsObject){
  $clinit_RuntimeException();
  Exception_0.call(this, backingJsObject);
  this.$init_2();
}

function RuntimeException_1(message){
  $clinit_RuntimeException();
  Exception_1.call(this, message);
  this.$init_2();
}

function RuntimeException_2(message, cause){
  $clinit_RuntimeException();
  Exception_2.call(this, message, cause);
  this.$init_2();
}

defineClass(9, 10, {3:1, 10:1, 1:1, 9:1, 8:1}, RuntimeException_1);
_.$init_2 = function $init_2(){
}
;
var Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang', 'RuntimeException', 9, Ljava_lang_Exception_2_classLit);
function $clinit_CodeDownloadException(){
  $clinit_CodeDownloadException = emptyMethod;
  $clinit_RuntimeException();
}

function CodeDownloadException(message){
  $clinit_CodeDownloadException();
  RuntimeException_1.call(this, message);
  this.$init_3();
  this.reason = ($clinit_CodeDownloadException$Reason() , TERMINATED);
}

defineClass(448, 9, {3:1, 10:1, 1:1, 9:1, 8:1}, CodeDownloadException);
_.$init_3 = function $init_3(){
}
;
var Lcom_google_gwt_core_client_CodeDownloadException_2_classLit = createForClass('com.google.gwt.core.client', 'CodeDownloadException', 448, Ljava_lang_RuntimeException_2_classLit);
function $clinit_Enum(){
  $clinit_Enum = emptyMethod;
  $clinit_Object();
}

function Enum(name_0, ordinal){
  $clinit_Enum();
  Object_0.call(this);
  this.$init_4();
  this.name_0 = name_0;
  this.ordinal = ordinal;
}

function createValueOfMap(enumConstants){
  $clinit_Enum();
  var result, value_0, value$array, value$index, value$max;
  result = createObject();
  for (value$array = enumConstants , value$index = 0 , value$max = value$array.length; value$index < value$max; ++value$index) {
    value_0 = value$array[value$index];
    put0(result, ':' + value_0.name_1(), value_0);
  }
  return result;
}

function get0(map_0, name_0){
  return map_0[name_0];
}

function put0(map_0, name_0, value_0){
  map_0[name_0] = value_0;
}

function valueOf(map_0, name_0){
  $clinit_Enum();
  var result;
  checkNotNull_0(name_0);
  result = get0(map_0, ':' + name_0);
  checkCriticalArgument_0(isNotNull(result), 'Enum constant undefined: %s', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), {3:1, 1:1, 7:1}, 1, 5, [name_0]));
  return result;
}

defineClass(5, 1, {3:1, 4:1, 5:1, 1:1});
_.$init_4 = function $init_4(){
}
;
_.equals = function equals_0(other){
  return this === other;
}
;
_.hashCode = function hashCode_1(){
  return getClassPrototype(1).hashCode.call(this);
}
;
_.name_1 = function name_1(){
  return jsNotEquals(this.name_0, null)?this.name_0:'' + this.ordinal;
}
;
_.ordinal_0 = function ordinal_0(){
  return this.ordinal;
}
;
_.toString_0 = function toString_3(){
  return this.name_1();
}
;
_.ordinal = 0;
var Ljava_lang_Enum_2_classLit = createForClass('java.lang', 'Enum', 5, Ljava_lang_Object_2_classLit);
function $clinit_CodeDownloadException$Reason(){
  $clinit_CodeDownloadException$Reason = emptyMethod;
  $clinit_Enum();
  TERMINATED = new CodeDownloadException$Reason('TERMINATED', 0);
}

function CodeDownloadException$Reason(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
  this.$init_5();
}

function valueOf_0(name_0){
  $clinit_CodeDownloadException$Reason();
  return valueOf(($clinit_CodeDownloadException$Reason$Map() , $MAP), name_0);
}

function values_0(){
  $clinit_CodeDownloadException$Reason();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_core_client_CodeDownloadException$Reason_2_classLit, 1), {3:1, 1:1, 7:1}, 91, 0, [TERMINATED]);
}

defineClass(91, 5, {91:1, 3:1, 4:1, 5:1, 1:1}, CodeDownloadException$Reason);
_.$init_5 = function $init_5(){
}
;
var TERMINATED;
var Lcom_google_gwt_core_client_CodeDownloadException$Reason_2_classLit = createForEnum('com.google.gwt.core.client', 'CodeDownloadException/Reason', 91, Ljava_lang_Enum_2_classLit, values_0, valueOf_0);
function $clinit_CodeDownloadException$Reason$Map(){
  $clinit_CodeDownloadException$Reason$Map = emptyMethod;
  $MAP = createValueOfMap(values_0());
}

defineClass(449, 1, {1:1});
var $MAP;
var Lcom_google_gwt_core_client_CodeDownloadException$Reason$Map_2_classLit = createForClass('com.google.gwt.core.client', 'CodeDownloadException/Reason/Map', 449, Ljava_lang_Object_2_classLit);
function $clinit_Duration(){
  $clinit_Duration = emptyMethod;
  $clinit_Object();
}

function Duration(){
  $clinit_Duration();
  Object_0.call(this);
  this.$init_6();
}

function currentTimeMillis(){
  $clinit_Duration();
  return now_1();
}

function uncheckedConversion(elapsed){
  return elapsed;
}

defineClass(185, 1, {1:1}, Duration);
_.$init_6 = function $init_6(){
  this.start_0 = currentTimeMillis();
}
;
_.elapsedMillis = function elapsedMillis(){
  return uncheckedConversion(currentTimeMillis() - this.start_0);
}
;
_.start_0 = 0;
var Lcom_google_gwt_core_client_Duration_2_classLit = createForClass('com.google.gwt.core.client', 'Duration', 185, Ljava_lang_Object_2_classLit);
function $clinit_EntryPoint(){
  $clinit_EntryPoint = emptyMethod;
}

var Lcom_google_gwt_core_client_EntryPoint_2_classLit = createForInterface('com.google.gwt.core.client', 'EntryPoint');
function $clinit_GWT(){
  $clinit_GWT = emptyMethod;
  $clinit_Object();
}

function getModuleBaseForStaticFiles(){
  $clinit_GWT();
  return getModuleBaseURLForStaticFiles();
}

function getModuleName(){
  $clinit_GWT();
  return getModuleName_0();
}

function getUncaughtExceptionHandler(){
  $clinit_GWT();
  return uncaughtExceptionHandler;
}

function isClient(){
  $clinit_GWT();
  return true;
}

function isScript(){
  $clinit_GWT();
  return true;
}

function log_1(message){
  $clinit_GWT();
  log_2(message);
}

function reportUncaughtException(e){
  $clinit_GWT();
  reportUncaughtException_0(e);
}

function setUncaughtExceptionHandler(handler){
  $clinit_GWT();
  uncaughtExceptionHandler = handler;
}

defineClass(312, 1, {1:1});
var HOSTED_MODE_PERMUTATION_STRONG_NAME = 'HostedMode', uncaughtExceptionHandler = null;
var Lcom_google_gwt_core_client_GWT_2_classLit = createForClass('com.google.gwt.core.client', 'GWT', 312, Ljava_lang_Object_2_classLit);
function $clinit_Scheduler$ScheduledCommand(){
  $clinit_Scheduler$ScheduledCommand = emptyMethod;
}

var Lcom_google_gwt_core_client_Scheduler$ScheduledCommand_2_classLit = createForInterface('com.google.gwt.core.client', 'Scheduler/ScheduledCommand');
function $clinit_GWT$1(){
  $clinit_GWT$1 = emptyMethod;
}

defineClass(314, 1, {1:1});
var Lcom_google_gwt_core_client_GWT$1_2_classLit = createForClass('com.google.gwt.core.client', 'GWT/1', 314, Ljava_lang_Object_2_classLit);
function $clinit_GWT$UncaughtExceptionHandler(){
  $clinit_GWT$UncaughtExceptionHandler = emptyMethod;
}

var Lcom_google_gwt_core_client_GWT$UncaughtExceptionHandler_2_classLit = createForInterface('com.google.gwt.core.client', 'GWT/UncaughtExceptionHandler');
function $clinit_GWT$DefaultUncaughtExceptionHandler(){
  $clinit_GWT$DefaultUncaughtExceptionHandler = emptyMethod;
}

defineClass(313, 1, {1:1});
var Lcom_google_gwt_core_client_GWT$DefaultUncaughtExceptionHandler_2_classLit = createForClass('com.google.gwt.core.client', 'GWT/DefaultUncaughtExceptionHandler', 313, Ljava_lang_Object_2_classLit);
function $clinit_JsException(){
  $clinit_JsException = emptyMethod;
  $clinit_RuntimeException();
}

function JsException(backingJsObject){
  $clinit_JsException();
  RuntimeException_0.call(this, backingJsObject);
  this.$init_7();
}

defineClass(153, 9, {3:1, 10:1, 1:1, 9:1, 8:1});
_.$init_7 = function $init_7(){
}
;
var Ljava_lang_JsException_2_classLit = createForClass('java.lang', 'JsException', 153, Ljava_lang_RuntimeException_2_classLit);
function $clinit_JavaScriptExceptionBase(){
  $clinit_JavaScriptExceptionBase = emptyMethod;
  $clinit_JsException();
}

function JavaScriptExceptionBase(e){
  $clinit_JavaScriptExceptionBase();
  JsException.call(this, e);
  this.$init_8();
}

defineClass(154, 153, {3:1, 10:1, 1:1, 9:1, 8:1});
_.$init_8 = function $init_8(){
}
;
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'JavaScriptExceptionBase', 154, Ljava_lang_JsException_2_classLit);
function $clinit_JavaScriptException(){
  $clinit_JavaScriptException = emptyMethod;
  $clinit_JavaScriptExceptionBase();
  NOT_SET = new Object_0;
}

function JavaScriptException(e){
  $clinit_JavaScriptException();
  JavaScriptException_0.call(this, e, '');
}

function JavaScriptException_0(e, description){
  JavaScriptExceptionBase.call(this, e);
  this.$init_9();
  this.e = e;
  this.description = description;
}

function getExceptionDescription(e){
  if (instanceOfJso(e)) {
    return getExceptionDescription0(castToJso(e));
  }
   else {
    return e + '';
  }
}

function getExceptionDescription0(e){
  return e == null?null:e.message;
}

function getExceptionName(e){
  if (jsEquals(e, null)) {
    return 'null';
  }
   else if (instanceOfJso(e)) {
    return getExceptionName0(castToJso(e));
  }
   else if (instanceOfString(e)) {
    return 'String';
  }
   else {
    return getClass__Ljava_lang_Class___devirtual$(e).getName();
  }
}

function getExceptionName0(e){
  return e == null?null:e.name;
}

defineClass(57, 154, {57:1, 3:1, 10:1, 1:1, 9:1, 8:1}, JavaScriptException);
_.$init_9 = function $init_9(){
  this.description = '';
}
;
_.ensureInit = function ensureInit(){
  var exception;
  if (jsEquals(this.message_0, null)) {
    exception = this.getThrown();
    this.name_0 = getExceptionName(exception);
    this.description = this.description + ': ' + getExceptionDescription(exception);
    this.message_0 = '(' + this.name_0 + ') ' + this.description;
  }
}
;
_.getMessage = function getMessage_0(){
  this.ensureInit();
  return this.message_0;
}
;
_.getName = function getName(){
  this.ensureInit();
  return this.name_0;
}
;
_.getThrown = function getThrown(){
  return maskUndefined(this.e) === maskUndefined(NOT_SET)?null:this.e;
}
;
var NOT_SET;
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptException', 57, Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit);
function $clinit_JsArray(){
  $clinit_JsArray = emptyMethod;
  $clinit_JavaScriptObject();
}

function $get(this$static, index_0){
  $clinit_JsArray();
  return this$static[index_0];
}

function $join(this$static, separator){
  return this$static.join(separator);
}

function $length(this$static){
  $clinit_JsArray();
  return this$static.length;
}

function $push(this$static, value_0){
  $clinit_JsArray();
  this$static[this$static.length] = value_0;
}

function $set(this$static, index_0, value_0){
  $clinit_JsArray();
  this$static[index_0] = value_0;
}

function $setLength(this$static, newLength){
  this$static.length = newLength;
}

function $clinit_JsArrayString(){
  $clinit_JsArrayString = emptyMethod;
  $clinit_JavaScriptObject();
}

function $get_0(this$static, index_0){
  $clinit_JsArrayString();
  return this$static[index_0];
}

function $join_0(this$static, separator){
  $clinit_JsArrayString();
  return this$static.join(separator);
}

function $length_0(this$static){
  $clinit_JsArrayString();
  return this$static.length;
}

function $push_0(this$static, value_0){
  $clinit_JsArrayString();
  this$static[this$static.length] = value_0;
}

function $setLength_0(this$static, newLength){
  $clinit_JsArrayString();
  this$static.length = newLength;
}

function $clinit_JsDate(){
  $clinit_JsDate = emptyMethod;
  $clinit_JavaScriptObject();
}

function $getDate(this$static){
  return this$static.getDate();
}

function $getDay(this$static){
  return this$static.getDay();
}

function $getFullYear(this$static){
  return this$static.getFullYear();
}

function $getHours(this$static){
  return this$static.getHours();
}

function $getMinutes(this$static){
  return this$static.getMinutes();
}

function $getMonth(this$static){
  return this$static.getMonth();
}

function $getSeconds(this$static){
  return this$static.getSeconds();
}

function $getTime(this$static){
  return this$static.getTime();
}

function $getTimezoneOffset(this$static){
  return this$static.getTimezoneOffset();
}

function now_1(){
  $clinit_JsDate();
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

function $clinit_RunAsyncCallback(){
  $clinit_RunAsyncCallback = emptyMethod;
}

var Lcom_google_gwt_core_client_RunAsyncCallback_2_classLit = createForInterface('com.google.gwt.core.client', 'RunAsyncCallback');
function $clinit_Scheduler(){
  $clinit_Scheduler = emptyMethod;
  $clinit_Object();
}

function Scheduler(){
  $clinit_Scheduler();
  Object_0.call(this);
  this.$init_10();
}

function get_0(){
  $clinit_Scheduler();
  return $clinit_SchedulerImpl() , INSTANCE;
}

defineClass(128, 1, {1:1});
_.$init_10 = function $init_10(){
}
;
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client', 'Scheduler', 128, Ljava_lang_Object_2_classLit);
function $clinit_Scheduler$RepeatingCommand(){
  $clinit_Scheduler$RepeatingCommand = emptyMethod;
}

var Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2_classLit = createForInterface('com.google.gwt.core.client', 'Scheduler/RepeatingCommand');
function $clinit_ScriptInjector(){
  $clinit_ScriptInjector = emptyMethod;
  $clinit_Object();
  TOP_WINDOW = nativeTopWindow();
}

function attachListeners(scriptElement, callback, removeTag){
  $clinit_ScriptInjector();
  function clearCallbacks(){
    scriptElement.onerror = scriptElement.onreadystatechange = scriptElement.onload = null;
    if (removeTag) {
      nativeRemove(scriptElement);
    }
  }

  scriptElement.onload = $entry(function(){
    clearCallbacks();
    if (callback) {
      callback.onSuccess(null);
    }
  }
  );
  scriptElement.onerror = $entry(function(){
    clearCallbacks();
    if (callback) {
      var ex = new CodeDownloadException('onerror() called.');
      callback.onFailure(ex);
    }
  }
  );
  scriptElement.onreadystatechange = $entry(function(){
    if (/loaded|complete/.test(scriptElement.readyState)) {
      scriptElement.onload();
    }
  }
  );
}

function fromUrl(scriptUrl){
  $clinit_ScriptInjector();
  return new ScriptInjector$FromUrl(scriptUrl);
}

function nativeAttachToHead(doc, scriptElement){
  $clinit_ScriptInjector();
  (doc.head || doc.getElementsByTagName('head')[0]).appendChild(scriptElement);
}

function nativeDefaultWindow(){
  $clinit_ScriptInjector();
  return window;
}

function nativeGetDocument(wnd){
  $clinit_ScriptInjector();
  return wnd.document;
}

function nativeMakeScriptElement(doc){
  $clinit_ScriptInjector();
  return doc.createElement('script');
}

function nativeRemove(scriptElement){
  scriptElement.parentNode.removeChild(scriptElement);
}

function nativeSetSrc(element, url_0){
  $clinit_ScriptInjector();
  element.src = url_0;
}

function nativeTopWindow(){
  return $wnd;
}

defineClass(441, 1, {1:1});
var TOP_WINDOW;
var Lcom_google_gwt_core_client_ScriptInjector_2_classLit = createForClass('com.google.gwt.core.client', 'ScriptInjector', 441, Ljava_lang_Object_2_classLit);
function $clinit_ScriptInjector$FromString(){
  $clinit_ScriptInjector$FromString = emptyMethod;
}

defineClass(442, 1, {1:1});
var Lcom_google_gwt_core_client_ScriptInjector$FromString_2_classLit = createForClass('com.google.gwt.core.client', 'ScriptInjector/FromString', 442, Ljava_lang_Object_2_classLit);
function $clinit_ScriptInjector$FromUrl(){
  $clinit_ScriptInjector$FromUrl = emptyMethod;
  $clinit_Object();
}

function ScriptInjector$FromUrl(scriptUrl){
  $clinit_ScriptInjector$FromUrl();
  Object_0.call(this);
  this.$init_11();
  this.scriptUrl = scriptUrl;
}

defineClass(208, 1, {1:1}, ScriptInjector$FromUrl);
_.$init_11 = function $init_11(){
  this.removeTag = false;
}
;
_.inject = function inject(){
  var doc, scriptElement, wnd;
  wnd = isNull(this.window_0)?nativeDefaultWindow():this.window_0;
  doc = nativeGetDocument(wnd);
  scriptElement = nativeMakeScriptElement(doc);
  if (isNotNull(this.callback) || this.removeTag) {
    attachListeners(scriptElement, this.callback, this.removeTag);
  }
  nativeSetSrc(scriptElement, this.scriptUrl);
  nativeAttachToHead(doc, scriptElement);
  return scriptElement;
}
;
_.setCallback = function setCallback(callback){
  this.callback = callback;
  return this;
}
;
_.setRemoveTag = function setRemoveTag(removeTag){
  this.removeTag = removeTag;
  return this;
}
;
_.removeTag = false;
var Lcom_google_gwt_core_client_ScriptInjector$FromUrl_2_classLit = createForClass('com.google.gwt.core.client', 'ScriptInjector/FromUrl', 208, Ljava_lang_Object_2_classLit);
function $clinit_AsyncFragmentLoader(){
  $clinit_AsyncFragmentLoader = emptyMethod;
  $clinit_Object();
  BROWSER_LOADER = makeBrowserLoader(1, stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), {3:1, 1:1}, 56, 15, []));
}

function AsyncFragmentLoader(numEntries, initialLoadSequence, loadingStrategy, logger, executor){
  var numEntriesPlusOne;
  Object_0.call(this);
  this.$init_12();
  this.numEntries = numEntries;
  this.initialLoadSequence = initialLoadSequence;
  this.loadingStrategy = loadingStrategy;
  this.logger = logger;
  this.onSuccessExecutor = executor;
  numEntriesPlusOne = numEntries + 1;
  this.allCallbacks = initUnidimensionalArray(Ljava_lang_Object_2_classLit, {3:1, 1:1, 7:1}, 7, numEntriesPlusOne, 3, 2);
  this.requestedExclusives = new AsyncFragmentLoader$BoundedIntQueue(numEntriesPlusOne);
  this.isLoaded = initUnidimensionalArray(Z_classLit, {3:1, 1:1}, 56, numEntriesPlusOne, 16, 1);
  this.pendingDownloadErrorHandlers = initUnidimensionalArray(Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$LoadTerminatedHandler_2_classLit, {3:1, 1:1, 7:1}, 109, numEntriesPlusOne, 0, 1);
}

function makeBrowserLoader(numFragments, initialLoad){
  if (isClient()) {
    return new AsyncFragmentLoader(numFragments, initialLoad, castTo(castTo(new ScriptTagLoadingStrategy, 107), 107), castTo(castTo(new AsyncFragmentLoader$StandardLogger, 144), 144), castTo(castTo(new OnSuccessExecutor, 70), 70));
  }
   else {
    return null;
  }
}

function onLoad(fragment){
  $clinit_AsyncFragmentLoader();
  BROWSER_LOADER.onLoadImpl(fragment);
}

function runAsync(fragment, callback){
  $clinit_AsyncFragmentLoader();
  BROWSER_LOADER.runAsyncImpl(fragment, callback);
}

defineClass(145, 1, {1:1}, AsyncFragmentLoader);
_.$init_12 = function $init_12(){
  this.fragmentLoading = -1;
  this.prefetching = false;
  this.prefetchQueue = null;
  this.remainingInitialFragments = null;
}
;
_.anyPrefetchesRequested = function anyPrefetchesRequested(){
  return this.prefetching && isNotNull(this.prefetchQueue) && this.prefetchQueue.size_1() > 0;
}
;
_.clearRequestsAlreadyLoaded = function clearRequestsAlreadyLoaded(){
  var offset;
  while (this.requestedExclusives.size_1() > 0 && this.isLoaded[this.requestedExclusives.peek()]) {
    offset = this.requestedExclusives.remove_0();
    if (offset < this.pendingDownloadErrorHandlers.length) {
      setCheck(this.pendingDownloadErrorHandlers, offset, null);
    }
  }
  if (isNotNull(this.prefetchQueue)) {
    while (this.prefetchQueue.size_1() > 0 && this.isLoaded[this.prefetchQueue.peek()]) {
      this.prefetchQueue.remove_0();
    }
  }
}
;
_.downloadGroup = function downloadGroup(fragment){
  return fragment == this.leftoversFragment()?'leftoversDownload':downloadGroupForExclusive(fragment);
}
;
_.executeOnSuccess0 = function executeOnSuccess0(callback){
  callback.onSuccess_0();
}
;
_.fragmentHasLoaded = function fragmentHasLoaded(fragment){
  this.logFragmentLoaded(fragment);
  if (fragment < this.pendingDownloadErrorHandlers.length) {
    setCheck(this.pendingDownloadErrorHandlers, fragment, null);
  }
  if (this.isInitial(fragment) && isNotNull(this.remainingInitialFragments)) {
    this.remainingInitialFragments.remove_0();
  }
  this.fragmentLoading = -1;
  this.isLoaded[fragment] = true;
  this.startLoadingNextFragment();
}
;
_.haveInitialFragmentsLoaded = function haveInitialFragmentsLoaded(){
  return isNotNull(this.remainingInitialFragments) && this.remainingInitialFragments.size_1() == 0;
}
;
_.initializeRemainingInitialFragments = function initializeRemainingInitialFragments(){
  var sp, sp$array, sp$index, sp$max;
  if (isNull(this.remainingInitialFragments)) {
    this.remainingInitialFragments = new AsyncFragmentLoader$BoundedIntQueue(this.initialLoadSequence.length + 1);
    for (sp$array = this.initialLoadSequence , sp$index = 0 , sp$max = sp$array.length; sp$index < sp$max; ++sp$index) {
      sp = sp$array[sp$index];
      this.remainingInitialFragments.add_0(sp);
    }
    this.remainingInitialFragments.add_0(this.leftoversFragment());
  }
}
;
_.inject_0 = function inject_0(splitPoint, loadErrorHandler){
  setCheck(this.pendingDownloadErrorHandlers, splitPoint, loadErrorHandler);
  if (!this.isInitial(splitPoint)) {
    this.requestedExclusives.add_0(splitPoint);
  }
  this.startLoadingNextFragment();
}
;
_.isEmpty = function isEmpty(array){
  var i_0;
  for (i_0 = 0; i_0 < array.length; i_0++) {
    if (jsNotEquals(array[i_0], null)) {
      return false;
    }
  }
  return true;
}
;
_.isInitial = function isInitial(splitPoint){
  var sp, sp$array, sp$index, sp$max;
  if (splitPoint == this.leftoversFragment()) {
    return true;
  }
  for (sp$array = this.initialLoadSequence , sp$index = 0 , sp$max = sp$array.length; sp$index < sp$max; ++sp$index) {
    sp = sp$array[sp$index];
    if (sp == splitPoint) {
      return true;
    }
  }
  return false;
}
;
_.isLoading = function isLoading(splitPoint){
  return isNotNull(this.pendingDownloadErrorHandlers[splitPoint]);
}
;
_.leftoversFragment = function leftoversFragment(){
  return this.numEntries;
}
;
_.logDownloadStart = function logDownloadStart(fragment){
  this.logEventProgress_0(this.downloadGroup(fragment), 'begin', fragment, -1);
}
;
_.logEventProgress = function logEventProgress(eventGroup, type_0){
  this.logEventProgress_0(eventGroup, type_0, -1, -1);
}
;
_.logEventProgress_0 = function logEventProgress_0(eventGroup, type_0, fragment, size_0){
  this.logger.logEventProgress_1(eventGroup, type_0, fragment, size_0);
}
;
_.logFragmentLoaded = function logFragmentLoaded(fragment){
  var logGroup;
  logGroup = this.downloadGroup(fragment);
  this.logEventProgress_0(logGroup, 'end', fragment, -1);
}
;
_.onLoadImpl = function onLoadImpl(fragment){
  var callback, callback$array, callback$index, callback$max, callbacks, t;
  this.fragmentHasLoaded(fragment);
  callbacks = this.allCallbacks[fragment];
  if (jsNotEquals(callbacks, null)) {
    this.logEventProgress('runCallbacks' + fragment, 'begin');
    setCheck(this.allCallbacks, fragment, null);
    for (callback$array = callbacks , callback$index = 0 , callback$max = callback$array.length; callback$index < callback$max; ++callback$index) {
      callback = callback$array[callback$index];
      try {
        castTo(callback, 141).onSuccess_0();
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 8)) {
          t = $e0;
          reportUncaughtException(t);
        }
         else 
          throw toJs($e0);
      }
    }
    this.logEventProgress('runCallbacks' + fragment, 'end');
  }
}
;
_.runAsyncImpl = function runAsyncImpl(fragment, callback){
  var callbacks;
  if (this.isLoaded[fragment]) {
    this.onSuccessExecutor.execute_1(this, callback);
    return;
  }
  callbacks = this.allCallbacks[fragment];
  if (jsEquals(callbacks, null)) {
    callbacks = setCheck(this.allCallbacks, fragment, initUnidimensionalArray(Lcom_google_gwt_core_client_RunAsyncCallback_2_classLit, {3:1, 1:1, 7:1}, 141, 0, 0, 1));
  }
  setCheck(callbacks, callbacks.length, callback);
  if (!this.isLoading(fragment)) {
    this.inject_0(fragment, new AsyncFragmentLoader$1(this, fragment));
  }
}
;
_.startLoadingFragment = function startLoadingFragment(fragment){
  this.fragmentLoading = fragment;
  this.logDownloadStart(fragment);
  this.loadingStrategy.startLoadingFragment_0(fragment, new AsyncFragmentLoader$ResetAfterDownloadFailure(this, fragment));
}
;
_.startLoadingNextFragment = function startLoadingNextFragment(){
  if (this.fragmentLoading >= 0) {
    return;
  }
  this.initializeRemainingInitialFragments();
  this.clearRequestsAlreadyLoaded();
  if (this.isEmpty(this.pendingDownloadErrorHandlers) && !this.anyPrefetchesRequested()) {
    return;
  }
  if (this.remainingInitialFragments.size_1() > 0) {
    this.startLoadingFragment(this.remainingInitialFragments.peek());
    return;
  }
  if (this.requestedExclusives.size_1() > 0) {
    this.startLoadingFragment(this.requestedExclusives.remove_0());
    return;
  }
  if (this.anyPrefetchesRequested()) {
    this.startLoadingFragment(this.prefetchQueue.remove_0());
    return;
  }
}
;
_.fragmentLoading = 0;
_.numEntries = 0;
_.prefetching = false;
var BROWSER_LOADER;
var Lcom_google_gwt_core_client_impl_AsyncFragmentLoader_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader', 145, Ljava_lang_Object_2_classLit);
function $clinit_AsyncFragmentLoader$LoadTerminatedHandler(){
  $clinit_AsyncFragmentLoader$LoadTerminatedHandler = emptyMethod;
}

var Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$LoadTerminatedHandler_2_classLit = createForInterface('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/LoadTerminatedHandler');
function $clinit_AsyncFragmentLoader$1(){
  $clinit_AsyncFragmentLoader$1 = emptyMethod;
  $clinit_Object();
}

function AsyncFragmentLoader$1(this$0, val$fragment){
  $clinit_AsyncFragmentLoader$1();
  this.this$01 = this$0;
  this.val$fragment2 = val$fragment;
  Object_0.call(this);
  this.$init_13();
}

defineClass(146, 1, {109:1, 1:1}, AsyncFragmentLoader$1);
_.$init_13 = function $init_13(){
}
;
_.loadTerminated = function loadTerminated(reason){
  var callback, callback$array, callback$index, callback$max, callbacks;
  callbacks = this.this$01.allCallbacks[this.val$fragment2];
  if (jsNotEquals(callbacks, null)) {
    setCheck(this.this$01.allCallbacks, this.val$fragment2, null);
    for (callback$array = callbacks , callback$index = 0 , callback$max = callback$array.length; callback$index < callback$max; ++callback$index) {
      callback = callback$array[callback$index];
      castTo(callback, 141).onFailure_0(reason);
    }
  }
}
;
_.val$fragment2 = 0;
var Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$1_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/1', 146, Ljava_lang_Object_2_classLit);
function $clinit_AsyncFragmentLoader$BoundedIntQueue(){
  $clinit_AsyncFragmentLoader$BoundedIntQueue = emptyMethod;
  $clinit_Object();
}

function AsyncFragmentLoader$BoundedIntQueue(maxPuts){
  $clinit_AsyncFragmentLoader$BoundedIntQueue();
  Object_0.call(this);
  this.$init_14();
  this.array = initUnidimensionalArray(I_classLit, {3:1, 1:1}, 56, maxPuts, 15, 1);
}

defineClass(108, 1, {1:1}, AsyncFragmentLoader$BoundedIntQueue);
_.$init_14 = function $init_14(){
  this.read = 0;
  this.write_0 = 0;
}
;
_.add_0 = function add_1(x_0){
  this.array[this.write_0++] = x_0;
}
;
_.clear_0 = function clear_0(){
  this.read = 0;
  this.write_0 = 0;
}
;
_.peek = function peek(){
  return this.array[this.read];
}
;
_.remove_0 = function remove_0(){
  return this.array[this.read++];
}
;
_.size_1 = function size_1(){
  return this.write_0 - this.read;
}
;
_.read = 0;
_.write_0 = 0;
var Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$BoundedIntQueue_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/BoundedIntQueue', 108, Ljava_lang_Object_2_classLit);
function $clinit_AsyncFragmentLoader$HttpDownloadFailure(){
  $clinit_AsyncFragmentLoader$HttpDownloadFailure = emptyMethod;
  $clinit_RuntimeException();
}

function AsyncFragmentLoader$HttpDownloadFailure(url_0, statusCode, statusText){
  $clinit_AsyncFragmentLoader$HttpDownloadFailure();
  RuntimeException_1.call(this, 'Download of ' + url_0 + ' failed with status ' + statusCode + '(' + statusText + ')');
  this.$init_15();
  this.statusCode = statusCode;
}

defineClass(148, 9, {3:1, 10:1, 1:1, 9:1, 8:1}, AsyncFragmentLoader$HttpDownloadFailure);
_.$init_15 = function $init_15(){
}
;
_.statusCode = 0;
var Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$HttpDownloadFailure_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/HttpDownloadFailure', 148, Ljava_lang_RuntimeException_2_classLit);
function $clinit_AsyncFragmentLoader$HttpInstallFailure(){
  $clinit_AsyncFragmentLoader$HttpInstallFailure = emptyMethod;
  $clinit_RuntimeException();
}

function AsyncFragmentLoader$HttpInstallFailure(url_0, text_0, rootCause){
  $clinit_AsyncFragmentLoader$HttpInstallFailure();
  RuntimeException_2.call(this, 'Install of ' + url_0 + ' failed with text ' + text_0, rootCause);
  this.$init_16();
}

defineClass(149, 9, {3:1, 10:1, 1:1, 9:1, 8:1}, AsyncFragmentLoader$HttpInstallFailure);
_.$init_16 = function $init_16(){
}
;
var Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$HttpInstallFailure_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/HttpInstallFailure', 149, Ljava_lang_RuntimeException_2_classLit);
function $clinit_AsyncFragmentLoader$LoadingStrategy(){
  $clinit_AsyncFragmentLoader$LoadingStrategy = emptyMethod;
}

var Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$LoadingStrategy_2_classLit = createForInterface('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/LoadingStrategy');
function $clinit_AsyncFragmentLoader$Logger(){
  $clinit_AsyncFragmentLoader$Logger = emptyMethod;
}

var Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$Logger_2_classLit = createForInterface('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/Logger');
function $clinit_AsyncFragmentLoader$LwmLabels(){
  $clinit_AsyncFragmentLoader$LwmLabels = emptyMethod;
  $clinit_Object();
}

function downloadGroupForExclusive(splitPoint){
  $clinit_AsyncFragmentLoader$LwmLabels();
  return 'download' + splitPoint;
}

defineClass(327, 1, {1:1});
var BEGIN = 'begin', END = 'end', LEFTOVERS_DOWNLOAD = 'leftoversDownload';
var Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$LwmLabels_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/LwmLabels', 327, Ljava_lang_Object_2_classLit);
function $clinit_AsyncFragmentLoader$ResetAfterDownloadFailure(){
  $clinit_AsyncFragmentLoader$ResetAfterDownloadFailure = emptyMethod;
  $clinit_Object();
}

function AsyncFragmentLoader$ResetAfterDownloadFailure(this$0, myFragment){
  $clinit_AsyncFragmentLoader$ResetAfterDownloadFailure();
  this.this$01 = this$0;
  Object_0.call(this);
  this.$init_17();
  this.fragment_0 = myFragment;
}

defineClass(147, 1, {109:1, 1:1}, AsyncFragmentLoader$ResetAfterDownloadFailure);
_.$init_17 = function $init_17(){
}
;
_.loadTerminated = function loadTerminated_0(reason){
  var e, handler, handler$array, handler$index, handler$max, handlersToRun, lastException;
  if (this.this$01.fragmentLoading != this.fragment_0) {
    return;
  }
  handlersToRun = this.this$01.pendingDownloadErrorHandlers;
  this.this$01.pendingDownloadErrorHandlers = initUnidimensionalArray(Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$LoadTerminatedHandler_2_classLit, {3:1, 1:1, 7:1}, 109, this.this$01.numEntries + 1, 0, 1);
  this.this$01.requestedExclusives.clear_0();
  this.this$01.fragmentLoading = -1;
  lastException = null;
  for (handler$array = handlersToRun , handler$index = 0 , handler$max = handler$array.length; handler$index < handler$max; ++handler$index) {
    handler = handler$array[handler$index];
    if (isNotNull(handler)) {
      try {
        handler.loadTerminated(reason);
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 9)) {
          e = $e0;
          lastException = e;
        }
         else 
          throw toJs($e0);
      }
    }
  }
  if (isNotNull(lastException)) {
    throw toJs(lastException);
  }
}
;
_.fragment_0 = 0;
var Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$ResetAfterDownloadFailure_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/ResetAfterDownloadFailure', 147, Ljava_lang_Object_2_classLit);
function $clinit_AsyncFragmentLoader$StandardLogger(){
  $clinit_AsyncFragmentLoader$StandardLogger = emptyMethod;
  $clinit_Object();
}

function AsyncFragmentLoader$StandardLogger(){
  $clinit_AsyncFragmentLoader$StandardLogger();
  Object_0.call(this);
  this.$init_18();
}

function stats(data_0){
  return $stats(data_0);
}

defineClass(143, 1, {144:1, 1:1}, AsyncFragmentLoader$StandardLogger);
_.$init_18 = function $init_18(){
}
;
_.createStatsEvent = function createStatsEvent(eventGroup, type_0, fragment, size_0){
  var evt = {moduleName:getModuleName(), sessionId:$sessionId, subSystem:'runAsync', evtGroup:eventGroup, millis:(new Date).getTime(), type:type_0};
  if (fragment >= 0) {
    evt.fragment = fragment;
  }
  if (size_0 >= 0) {
    evt.size = size_0;
  }
  return evt;
}
;
_.isStatsAvailable = function isStatsAvailable(){
  return !!$stats;
}
;
_.logEventProgress_1 = function logEventProgress_1(eventGroup, type_0, fragment, size_0){
  var toss;
  toss = this.isStatsAvailable() && stats(this.createStatsEvent(eventGroup, type_0, fragment, size_0));
}
;
var Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$StandardLogger_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/StandardLogger', 143, Ljava_lang_Object_2_classLit);
function $clinit_Impl(){
  $clinit_Impl = emptyMethod;
  $clinit_Object();
  {
    if (isScript() && isNotNull(($clinit_StackTraceCreator() , collector))) {
    }
  }
  watchdogEntryDepthTimerId = -1;
}

function apply_0(jsFunction, thisObj, args){
  if (isScript()) {
    return jsFunction.apply(thisObj, args);
  }
   else {
    var __0 = jsFunction.apply(thisObj, args);
    if (__0 != null) {
      __0 = {val:__0};
    }
    return __0;
  }
}

function enter(){
  var now_0;
  if (isScript() && entryDepth != 0) {
    now_0 = currentTimeMillis();
    if (now_0 - watchdogEntryDepthLastScheduled > 2000) {
      watchdogEntryDepthLastScheduled = now_0;
      watchdogEntryDepthTimerId = watchdogEntryDepthSchedule();
    }
  }
  if (entryDepth++ == 0) {
    ($clinit_SchedulerImpl() , INSTANCE).flushEntryCommands();
    return true;
  }
  return false;
}

function entry_0(jsFunction){
  $clinit_Impl();
  return function(){
    if (isScript()) {
      return entry0(jsFunction, this, arguments);
    }
     else {
      var __0 = entry0(jsFunction, this, arguments);
      if (__0 != null) {
        __0 = __0.val;
      }
      return __0;
    }
  }
  ;
}

function entry0(jsFunction, thisObj, args){
  var initialEntry, t;
  initialEntry = enter();
  try {
    if (isNotNull(getUncaughtExceptionHandler())) {
      try {
        return apply_0(jsFunction, thisObj, args);
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 8)) {
          t = $e0;
          reportUncaughtException_0(t);
          return undefined_0();
        }
         else 
          throw toJs($e0);
      }
    }
     else {
      return apply_0(jsFunction, thisObj, args);
    }
  }
   finally {
    exit(initialEntry);
  }
}

function exit(initialEntry){
  if (initialEntry) {
    ($clinit_SchedulerImpl() , INSTANCE).flushFinallyCommands();
  }
  entryDepth--;
  if (initialEntry) {
    if (isScript() && watchdogEntryDepthTimerId != -1) {
      watchdogEntryDepthCancel(watchdogEntryDepthTimerId);
      watchdogEntryDepthTimerId = -1;
    }
  }
}

function getModuleBaseURLForStaticFiles(){
  $clinit_Impl();
  return $moduleBase;
}

function getModuleName_0(){
  $clinit_Impl();
  return $moduleName;
}

function registerEntry(){
  $clinit_Impl();
  if (isScript()) {
    return entry_0;
  }
   else {
    return $entry = entry_0;
  }
}

function reportToBrowser(e){
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}

function reportToBrowser_0(e){
  reportToBrowser(instanceOf(e, 57)?castTo(e, 57).getThrown():e);
}

function reportUncaughtException_0(e){
  $clinit_Impl();
  var handler;
  if (isNotNull(uncaughtExceptionHandlerForTest)) {
    uncaughtExceptionHandlerForTest.onUncaughtException(e);
  }
  handler = getUncaughtExceptionHandler();
  if (isNotNull(handler)) {
    if (jsEquals(handler, uncaughtExceptionHandlerForTest)) {
      return;
    }
    handler.onUncaughtException(e);
    return;
  }
  if (isClient()) {
    reportToBrowser_0(e);
  }
   else {
    ($clinit_System() , err_0).print_0('Uncaught exception ');
    e.printStackTrace(($clinit_System() , err_0));
  }
}

function undefined_0(){
  return;
}

function watchdogEntryDepthCancel(timerId){
  $wnd.clearTimeout(timerId);
}

function watchdogEntryDepthRun(){
  if (isScript() && entryDepth != 0) {
    entryDepth = 0;
  }
  watchdogEntryDepthTimerId = -1;
}

function watchdogEntryDepthSchedule(){
  return $wnd.setTimeout(watchdogEntryDepthRun, 10);
}

defineClass(328, 1, {1:1});
var WATCHDOG_ENTRY_DEPTH_CHECK_INTERVAL_MS = 2000, entryDepth = 0, uncaughtExceptionHandlerForTest, watchdogEntryDepthLastScheduled = 0, watchdogEntryDepthTimerId = 0;
var Lcom_google_gwt_core_client_impl_Impl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'Impl', 328, Ljava_lang_Object_2_classLit);
function $clinit_LoadingStrategyBase(){
  $clinit_LoadingStrategyBase = emptyMethod;
  $clinit_Object();
}

function LoadingStrategyBase(downloadStrategy){
  $clinit_LoadingStrategyBase();
  Object_0.call(this);
  this.$init_19();
  this.downloadStrategy = downloadStrategy;
}

function gwtInstallCode(text_0){
  $clinit_LoadingStrategyBase();
  __gwtInstallCode(text_0);
}

function gwtStartLoadingFragment(fragment, loadErrorHandler){
  function loadFailed(e){
    loadErrorHandler.loadTerminated(e);
  }

  return __gwtStartLoadingFragment(fragment, $entry(loadFailed));
}

defineClass(157, 1, {107:1, 1:1});
_.$init_19 = function $init_19(){
  this.manualRetryNumbers = create();
}
;
_.getManualRetryNum = function getManualRetryNum(fragment){
  var ser;
  ser = $get_1(this.manualRetryNumbers, fragment);
  $put(this.manualRetryNumbers, fragment, ser + 1);
  return ser;
}
;
_.getMaxAutoRetryCount = function getMaxAutoRetryCount(){
  return MAX_AUTO_RETRY_COUNT;
}
;
_.startLoadingFragment_0 = function startLoadingFragment_0(fragment, loadErrorHandler){
  var connector, manualRetry, request, url_0;
  url_0 = gwtStartLoadingFragment(fragment, loadErrorHandler);
  if (jsEquals(url_0, null)) {
    return;
  }
  manualRetry = this.getManualRetryNum(fragment);
  if (manualRetry > 0) {
    connector = contains_Ljava_lang_CharSequence__Z__devirtual$(url_0, '?')?38:63;
    url_0 += charToString(connector) + 'manualRetry=' + manualRetry;
  }
  request = new LoadingStrategyBase$RequestData(url_0, loadErrorHandler, fragment, this.downloadStrategy, this.getMaxAutoRetryCount());
  request.tryDownload_0();
}
;
var MAX_AUTO_RETRY_COUNT = 3;
var Lcom_google_gwt_core_client_impl_LoadingStrategyBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'LoadingStrategyBase', 157, Ljava_lang_Object_2_classLit);
function $clinit_LoadingStrategyBase$DownloadStrategy(){
  $clinit_LoadingStrategyBase$DownloadStrategy = emptyMethod;
}

var Lcom_google_gwt_core_client_impl_LoadingStrategyBase$DownloadStrategy_2_classLit = createForInterface('com.google.gwt.core.client.impl', 'LoadingStrategyBase/DownloadStrategy');
function $clinit_LoadingStrategyBase$FragmentReloadTracker(){
  $clinit_LoadingStrategyBase$FragmentReloadTracker = emptyMethod;
  $clinit_JavaScriptObject();
}

function $get_1(this$static, x_0){
  $clinit_LoadingStrategyBase$FragmentReloadTracker();
  return this$static[x_0]?this$static[x_0]:0;
}

function $put(this$static, x_0, y_0){
  $clinit_LoadingStrategyBase$FragmentReloadTracker();
  this$static[x_0] = y_0;
}

function create(){
  $clinit_LoadingStrategyBase$FragmentReloadTracker();
  return createArray();
}

function $clinit_LoadingStrategyBase$RequestData(){
  $clinit_LoadingStrategyBase$RequestData = emptyMethod;
  $clinit_Object();
}

function LoadingStrategyBase$RequestData(url_0, errorHandler, fragment, downloadStrategy, maxRetryCount){
  $clinit_LoadingStrategyBase$RequestData();
  Object_0.call(this);
  this.$init_20();
  this.url_0 = url_0;
  this.originalUrl = url_0;
  this.errorHandler = errorHandler;
  this.maxRetryCount = maxRetryCount;
  this.retryCount = 0;
  this.fragment_0 = fragment;
  this.downloadStrategy = downloadStrategy;
}

defineClass(160, 1, {1:1}, LoadingStrategyBase$RequestData);
_.$init_20 = function $init_20(){
  this.errorHandler = null;
}
;
_.getFragment = function getFragment(){
  return this.fragment_0;
}
;
_.getUrl = function getUrl(){
  return this.url_0;
}
;
_.onLoadError = function onLoadError(e, mayRetry){
  var connector;
  if (mayRetry) {
    this.retryCount++;
    if (this.retryCount <= this.maxRetryCount) {
      connector = contains_Ljava_lang_CharSequence__Z__devirtual$(this.originalUrl, '?')?38:63;
      this.url_0 = this.originalUrl + charToString(connector) + 'autoRetry=' + this.retryCount;
      this.downloadStrategy.tryDownload(this);
      return;
    }
  }
  this.errorHandler.loadTerminated(e);
}
;
_.setUrl = function setUrl(url_0){
  this.url_0 = url_0;
}
;
_.tryDownload_0 = function tryDownload(){
  this.downloadStrategy.tryDownload(this);
}
;
_.tryInstall = function tryInstall(code_0){
  var e, textIntro;
  try {
    gwtInstallCode(code_0);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 9)) {
      e = $e0;
      textIntro = code_0;
      if (jsNotEquals(textIntro, null) && length__I__devirtual$_0(textIntro) > 200) {
        textIntro = substring_II_Ljava_lang_String___devirtual$(textIntro, 0, 200) + '...';
      }
      this.onLoadError(new AsyncFragmentLoader$HttpInstallFailure(this.url_0, textIntro, e), false);
    }
     else 
      throw toJs($e0);
  }
}
;
_.fragment_0 = 0;
_.maxRetryCount = 0;
_.retryCount = 0;
var MAX_LOG_LENGTH = 200;
var Lcom_google_gwt_core_client_impl_LoadingStrategyBase$RequestData_2_classLit = createForClass('com.google.gwt.core.client.impl', 'LoadingStrategyBase/RequestData', 160, Ljava_lang_Object_2_classLit);
function $clinit_OnSuccessExecutor(){
  $clinit_OnSuccessExecutor = emptyMethod;
  $clinit_Object();
}

function OnSuccessExecutor(){
  $clinit_OnSuccessExecutor();
  Object_0.call(this);
  this.$init_21();
}

defineClass(70, 1, {70:1, 1:1}, OnSuccessExecutor);
_.$init_21 = function $init_21(){
}
;
_.execute_1 = function execute(fragmentLoader, callback){
  get_0().scheduleDeferred(new OnSuccessExecutor$1(this, fragmentLoader, callback));
}
;
var Lcom_google_gwt_core_client_impl_OnSuccessExecutor_2_classLit = createForClass('com.google.gwt.core.client.impl', 'OnSuccessExecutor', 70, Ljava_lang_Object_2_classLit);
function $clinit_OnSuccessExecutor$1(){
  $clinit_OnSuccessExecutor$1 = emptyMethod;
  $clinit_Object();
}

function OnSuccessExecutor$1(this$0, val$fragmentLoader, val$callback){
  $clinit_OnSuccessExecutor$1();
  this.this$01 = this$0;
  this.val$fragmentLoader2 = val$fragmentLoader;
  this.val$callback3 = val$callback;
  Object_0.call(this);
  this.$init_22();
}

defineClass(161, 1, {1:1}, OnSuccessExecutor$1);
_.$init_22 = function $init_22(){
}
;
_.execute_0 = function execute_0(){
  this.val$fragmentLoader2.executeOnSuccess0(this.val$callback3);
}
;
var Lcom_google_gwt_core_client_impl_OnSuccessExecutor$1_2_classLit = createForClass('com.google.gwt.core.client.impl', 'OnSuccessExecutor/1', 161, Ljava_lang_Object_2_classLit);
function $clinit_SchedulerImpl(){
  $clinit_SchedulerImpl = emptyMethod;
  $clinit_Scheduler();
  INSTANCE = castTo(new SchedulerImpl, 86);
}

function SchedulerImpl(){
  Scheduler.call(this);
  this.$init_23();
}

function createQueue(){
  return $cast(createArray());
}

function execute_1(cmd){
  return cmd.execute();
}

function push_0(queue, task){
  if (isNull(queue)) {
    queue = createQueue();
  }
  $push(queue, task);
  return queue;
}

function runScheduledTasks(tasks, rescheduled){
  var e, i_0, j, t;
  for (i_0 = 0 , j = $length(tasks); i_0 < j; i_0++) {
    t = $get(tasks, i_0);
    try {
      if ($isRepeating(t)) {
        if ($executeRepeating(t)) {
          rescheduled = push_0(rescheduled, t);
        }
      }
       else {
        $executeScheduled(t);
      }
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 8)) {
        e = $e0;
        reportUncaughtException(e);
      }
       else 
        throw toJs($e0);
    }
  }
  return rescheduled;
}

function scheduleFixedDelayImpl(cmd, delayMs){
  function callback(){
    var ret = $entry(execute_1)(cmd);
    if (!isScript()) {
      ret = ret == true;
    }
    if (ret) {
      $wnd.setTimeout(callback, delayMs);
    }
  }

  $wnd.setTimeout(callback, delayMs);
}

defineClass(86, 128, {86:1, 1:1}, SchedulerImpl);
_.$init_23 = function $init_23(){
  this.flushRunning = false;
  this.shouldBeRunning = false;
}
;
_.createDuration = function createDuration(){
  return new Duration;
}
;
_.flushEntryCommands = function flushEntryCommands(){
  var oldQueue, rescheduled;
  if (isNotNull(this.entryCommands)) {
    rescheduled = null;
    do {
      oldQueue = this.entryCommands;
      this.entryCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (isNotNull(this.entryCommands));
    this.entryCommands = rescheduled;
  }
}
;
_.flushFinallyCommands = function flushFinallyCommands(){
  var oldQueue, rescheduled;
  if (isNotNull(this.finallyCommands)) {
    rescheduled = null;
    do {
      oldQueue = this.finallyCommands;
      this.finallyCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (isNotNull(this.finallyCommands));
    this.finallyCommands = rescheduled;
  }
}
;
_.flushPostEventPumpCommands = function flushPostEventPumpCommands(){
  var oldDeferred;
  if (isNotNull(this.deferredCommands)) {
    oldDeferred = this.deferredCommands;
    this.deferredCommands = null;
    if (isNull(this.incrementalCommands)) {
      this.incrementalCommands = createQueue();
    }
    runScheduledTasks(oldDeferred, this.incrementalCommands);
  }
  if (isNotNull(this.incrementalCommands)) {
    this.incrementalCommands = this.runRepeatingTasks(this.incrementalCommands);
  }
}
;
_.isWorkQueued = function isWorkQueued(){
  return isNotNull(this.deferredCommands) || isNotNull(this.incrementalCommands);
}
;
_.maybeSchedulePostEventPumpCommands = function maybeSchedulePostEventPumpCommands(){
  if (!this.shouldBeRunning) {
    this.shouldBeRunning = true;
    if (isNull(this.flusher)) {
      this.flusher = new SchedulerImpl$Flusher(this);
    }
    scheduleFixedDelayImpl(this.flusher, 1);
    if (isNull(this.rescue)) {
      this.rescue = new SchedulerImpl$Rescuer(this);
    }
    scheduleFixedDelayImpl(this.rescue, 50);
  }
}
;
_.runRepeatingTasks = function runRepeatingTasks(tasks){
  var canceledSomeTasks, duration, executedSomeTask, i_0, length_0, newTasks, t;
  length_0 = $length(tasks);
  if (length_0 == 0) {
    return null;
  }
  canceledSomeTasks = false;
  duration = this.createDuration();
  while (duration.elapsedMillis() < 16) {
    executedSomeTask = false;
    for (i_0 = 0; i_0 < length_0; i_0++) {
      t = $get(tasks, i_0);
      if (isNull(t)) {
        continue;
      }
      executedSomeTask = true;
      if (!$executeRepeating(t)) {
        $set(tasks, i_0, null);
        canceledSomeTasks = true;
      }
    }
    if (!executedSomeTask) {
      break;
    }
  }
  if (canceledSomeTasks) {
    newTasks = createQueue();
    for (i_0 = 0; i_0 < length_0; i_0++) {
      if (isNotNull($get(tasks, i_0))) {
        $push(newTasks, $get(tasks, i_0));
      }
    }
    return $length(newTasks) == 0?null:newTasks;
  }
   else {
    return tasks;
  }
}
;
_.scheduleDeferred = function scheduleDeferred(cmd){
  this.deferredCommands = push_0(this.deferredCommands, create_0(cmd));
  this.maybeSchedulePostEventPumpCommands();
}
;
_.scheduleFinally = function scheduleFinally(cmd){
  this.finallyCommands = push_0(this.finallyCommands, create_0(cmd));
}
;
_.scheduleFixedDelay = function scheduleFixedDelay(cmd, delayMs){
  scheduleFixedDelayImpl(cmd, delayMs);
}
;
_.flushRunning = false;
_.shouldBeRunning = false;
var FLUSHER_DELAY = 1, INSTANCE, RESCUE_DELAY = 50, TIME_SLICE = 16;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl', 86, Lcom_google_gwt_core_client_Scheduler_2_classLit);
function $clinit_SchedulerImpl$Flusher(){
  $clinit_SchedulerImpl$Flusher = emptyMethod;
  $clinit_Object();
}

function SchedulerImpl$Flusher(this$0){
  $clinit_SchedulerImpl$Flusher();
  this.this$01 = this$0;
  Object_0.call(this);
  this.$init_24();
}

defineClass(173, 1, {1:1}, SchedulerImpl$Flusher);
_.$init_24 = function $init_24(){
}
;
_.execute = function execute_2(){
  this.this$01.flushRunning = true;
  this.this$01.flushPostEventPumpCommands();
  this.this$01.flushRunning = false;
  return this.this$01.shouldBeRunning = this.this$01.isWorkQueued();
}
;
var Lcom_google_gwt_core_client_impl_SchedulerImpl$Flusher_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl/Flusher', 173, Ljava_lang_Object_2_classLit);
function $clinit_SchedulerImpl$Rescuer(){
  $clinit_SchedulerImpl$Rescuer = emptyMethod;
  $clinit_Object();
}

function SchedulerImpl$Rescuer(this$0){
  $clinit_SchedulerImpl$Rescuer();
  this.this$01 = this$0;
  Object_0.call(this);
  this.$init_25();
}

defineClass(174, 1, {1:1}, SchedulerImpl$Rescuer);
_.$init_25 = function $init_25(){
}
;
_.execute = function execute_3(){
  if (this.this$01.flushRunning) {
    this.this$01.scheduleFixedDelay(this.this$01.flusher, 1);
  }
  return this.this$01.shouldBeRunning;
}
;
var Lcom_google_gwt_core_client_impl_SchedulerImpl$Rescuer_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl/Rescuer', 174, Ljava_lang_Object_2_classLit);
function $clinit_SchedulerImpl$Task(){
  $clinit_SchedulerImpl$Task = emptyMethod;
  $clinit_JavaScriptObject();
}

function $executeRepeating(this$static){
  $clinit_SchedulerImpl$Task();
  return $getRepeating(this$static).execute();
}

function $executeScheduled(this$static){
  $clinit_SchedulerImpl$Task();
  $getScheduled(this$static).execute_0();
}

function $getRepeating(this$static){
  return this$static[0];
}

function $getScheduled(this$static){
  return this$static[0];
}

function $isRepeating(this$static){
  $clinit_SchedulerImpl$Task();
  return this$static[1];
}

function create_0(cmd){
  $clinit_SchedulerImpl$Task();
  return [cmd, false];
}

function $clinit_ScriptTagLoadingStrategy(){
  $clinit_ScriptTagLoadingStrategy = emptyMethod;
  $clinit_LoadingStrategyBase();
}

function ScriptTagLoadingStrategy(){
  $clinit_ScriptTagLoadingStrategy();
  LoadingStrategyBase.call(this, new ScriptTagLoadingStrategy$ScriptTagDownloadStrategy);
  this.$init_26();
}

function asyncCallback(request, code_0){
  var firstTimeCalled;
  firstTimeCalled = clearAsyncCallback(request.getFragment());
  if (firstTimeCalled) {
    request.tryInstall(code_0);
  }
}

function cleanup(request){
  $clinit_ScriptTagLoadingStrategy();
  var neverCalled;
  neverCalled = clearAsyncCallback(request.getFragment());
  if (neverCalled) {
    request.onLoadError(new AsyncFragmentLoader$HttpDownloadFailure(request.getUrl(), 404, 'Script Tag Failure - no status available'), true);
  }
}

function clearAsyncCallback(fragment){
  if (!__gwtModuleFunction['runAsyncCallback' + fragment]) {
    return false;
  }
  delete __gwtModuleFunction['runAsyncCallback' + fragment];
  return true;
}

function setAsyncCallback(fragment, request){
  $clinit_ScriptTagLoadingStrategy();
  __gwtModuleFunction['runAsyncCallback' + fragment] = $entry(function(code_0, instance){
    asyncCallback(request, code_0);
  }
  );
}

defineClass(142, 157, {107:1, 1:1}, ScriptTagLoadingStrategy);
_.$init_26 = function $init_26(){
}
;
var Lcom_google_gwt_core_client_impl_ScriptTagLoadingStrategy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'ScriptTagLoadingStrategy', 142, Lcom_google_gwt_core_client_impl_LoadingStrategyBase_2_classLit);
function $clinit_ScriptTagLoadingStrategy$ScriptTagDownloadStrategy(){
  $clinit_ScriptTagLoadingStrategy$ScriptTagDownloadStrategy = emptyMethod;
  $clinit_Object();
}

function ScriptTagLoadingStrategy$ScriptTagDownloadStrategy(){
  $clinit_ScriptTagLoadingStrategy$ScriptTagDownloadStrategy();
  Object_0.call(this);
  this.$init_27();
}

defineClass(158, 1, {1:1}, ScriptTagLoadingStrategy$ScriptTagDownloadStrategy);
_.$init_27 = function $init_27(){
}
;
_.tryDownload = function tryDownload_0(request){
  setAsyncCallback(request.getFragment(), request);
  fromUrl(request.getUrl()).setRemoveTag(true).setCallback(new ScriptTagLoadingStrategy$ScriptTagDownloadStrategy$1(this, request)).inject();
}
;
var Lcom_google_gwt_core_client_impl_ScriptTagLoadingStrategy$ScriptTagDownloadStrategy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'ScriptTagLoadingStrategy/ScriptTagDownloadStrategy', 158, Ljava_lang_Object_2_classLit);
function $clinit_ScriptTagLoadingStrategy$ScriptTagDownloadStrategy$1(){
  $clinit_ScriptTagLoadingStrategy$ScriptTagDownloadStrategy$1 = emptyMethod;
  $clinit_Object();
}

function ScriptTagLoadingStrategy$ScriptTagDownloadStrategy$1(this$1, val$request){
  $clinit_ScriptTagLoadingStrategy$ScriptTagDownloadStrategy$1();
  this.this$11 = this$1;
  this.val$request2 = val$request;
  Object_0.call(this);
  this.$init_28();
}

defineClass(159, 1, {1:1}, ScriptTagLoadingStrategy$ScriptTagDownloadStrategy$1);
_.$init_28 = function $init_28(){
}
;
_.onFailure = function onFailure_0(reason){
  this.onFailure_1(castTo(reason, 10));
}
;
_.onSuccess = function onSuccess(result){
  this.onSuccess_1(castTo(result, 118));
}
;
_.onFailure_1 = function onFailure(reason){
  cleanup(this.val$request2);
}
;
_.onSuccess_1 = function onSuccess_0(result){
  cleanup(this.val$request2);
}
;
var Lcom_google_gwt_core_client_impl_ScriptTagLoadingStrategy$ScriptTagDownloadStrategy$1_2_classLit = createForClass('com.google.gwt.core.client.impl', 'ScriptTagLoadingStrategy/ScriptTagDownloadStrategy/1', 159, Ljava_lang_Object_2_classLit);
function $clinit_StackTraceCreator(){
  $clinit_StackTraceCreator = emptyMethod;
  var c, enforceLegacy;
  $clinit_Object();
  LINE_NUMBER_UNKNOWN = -1;
  {
    enforceLegacy = !supportsErrorStack();
    c = castTo(new StackTraceCreator$CollectorModernNoSourceMap, 73);
    collector = instanceOf(c, 74) && enforceLegacy?new StackTraceCreator$CollectorLegacy:c;
  }
}

function captureStackTrace_0(error){
  $clinit_StackTraceCreator();
  collector.collect(error);
}

function constructJavaStackTrace_0(thrown){
  $clinit_StackTraceCreator();
  var stackTrace;
  stackTrace = collector.getStackTrace_0(thrown);
  return dropInternalFrames(stackTrace);
}

function dropInternalFrames(stackTrace){
  var dropFrameUntilFnName, dropFrameUntilFnName2, i_0, numberOfFramesToSearch;
  dropFrameUntilFnName = 'captureStackTrace_0';
  dropFrameUntilFnName2 = 'initializeBackingError';
  numberOfFramesToSearch = min_0(stackTrace.length, 5);
  for (i_0 = numberOfFramesToSearch - 1; i_0 >= 0; i_0--) {
    if (equals_Ljava_lang_Object__Z__devirtual$_2(stackTrace[i_0].getMethodName(), dropFrameUntilFnName) || equals_Ljava_lang_Object__Z__devirtual$_2(stackTrace[i_0].getMethodName(), dropFrameUntilFnName2)) {
      splice(stackTrace, i_0 + 1);
      break;
    }
  }
  return stackTrace;
}

function extractFunctionName(fnName){
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return match_0 && match_0[1] || 'anonymous';
}

function getFnStack(e){
  $clinit_StackTraceCreator();
  return e && e['fnStack']?e['fnStack']:[];
}

function getFunctionName(fn){
  $clinit_StackTraceCreator();
  return fn.name || (fn.name = extractFunctionName(fn.toString()));
}

function parseInt_0(number){
  $clinit_StackTraceCreator();
  return parseInt(number) || -1;
}

function splice(arr, length_0){
  if (arr.length >= length_0) {
    removeFrom(arr, 0, length_0);
  }
}

function split_0(t){
  $clinit_StackTraceCreator();
  var e = t.backingJsObject;
  return e && e.stack?e.stack.split('\n'):[];
}

function supportsErrorStack(){
  if (Error.stackTraceLimit > 0) {
    Error.stackTraceLimit = 64;
    return true;
  }
  return 'stack' in new Error;
}

defineClass(360, 1, {1:1});
var ANONYMOUS = 'anonymous', DROP_FRAME_LIMIT = 5, LINE_NUMBER_UNKNOWN = 0, UNKNOWN = 'Unknown', collector;
var Lcom_google_gwt_core_client_impl_StackTraceCreator_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator', 360, Ljava_lang_Object_2_classLit);
function $clinit_StackTraceCreator$Collector(){
  $clinit_StackTraceCreator$Collector = emptyMethod;
  $clinit_Object();
}

function StackTraceCreator$Collector(){
  $clinit_StackTraceCreator$Collector();
  Object_0.call(this);
  this.$init_29();
}

defineClass(73, 1, {1:1});
_.$init_29 = function $init_29(){
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/Collector', 73, Ljava_lang_Object_2_classLit);
function $clinit_StackTraceCreator$CollectorEmulated(){
  $clinit_StackTraceCreator$CollectorEmulated = emptyMethod;
}

defineClass(361, 73, {1:1});
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorEmulated_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorEmulated', 361, Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit);
function $clinit_StackTraceCreator$CollectorLegacy(){
  $clinit_StackTraceCreator$CollectorLegacy = emptyMethod;
  $clinit_StackTraceCreator$Collector();
}

function StackTraceCreator$CollectorLegacy(){
  $clinit_StackTraceCreator$CollectorLegacy();
  StackTraceCreator$Collector.call(this);
  this.$init_30();
}

defineClass(155, 73, {1:1}, StackTraceCreator$CollectorLegacy);
_.$init_30 = function $init_30(){
}
;
_.collect = function collect(error){
  var seen = {};
  var fnStack = [];
  error['fnStack'] = fnStack;
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 = getFunctionName(callee);
    fnStack.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i_0, j;
      for (i_0 = 0 , j = withThisName.length; i_0 < j; i_0++) {
        if (withThisName[i_0] === callee) {
          return;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
}
;
_.getStackTrace_0 = function getStackTrace_0(t){
  var i_0, length_0, stack_0, stackTrace;
  stack_0 = getFnStack(t);
  length_0 = $length_0(stack_0);
  stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, {3:1, 1:1, 7:1}, 25, length_0, 0, 1);
  for (i_0 = 0; i_0 < length_0; i_0++) {
    stackTrace[i_0] = new StackTraceElement('Unknown', $get_0(stack_0, i_0), null, -1);
  }
  return stackTrace;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorLegacy', 155, Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit);
function $clinit_StackTraceCreator$CollectorModern(){
  $clinit_StackTraceCreator$CollectorModern = emptyMethod;
  $clinit_StackTraceCreator$Collector();
}

function StackTraceCreator$CollectorModern(){
  $clinit_StackTraceCreator$CollectorModern();
  StackTraceCreator$Collector.call(this);
  this.$init_31();
}

defineClass(74, 73, {74:1, 1:1});
_.$init_31 = function $init_31(){
}
;
_.collect = function collect_0(error){
}
;
_.createSte = function createSte(fileName, method, line, col){
  return new StackTraceElement('Unknown', method, fileName + '@' + col, line < 0?-1:line);
}
;
_.getStackTrace_0 = function getStackTrace_1(t){
  var addIndex, i_0, length_0, stack_0, stackTrace, ste;
  stack_0 = split_0(t);
  stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, {3:1, 1:1, 7:1}, 25, 0, 0, 1);
  addIndex = 0;
  length_0 = $length_0(stack_0);
  if (length_0 == 0) {
    return stackTrace;
  }
  ste = this.parse_0($get_0(stack_0, 0));
  if (!equals_Ljava_lang_Object__Z__devirtual$_2(ste.getMethodName(), 'anonymous')) {
    stackTrace[addIndex++] = ste;
  }
  for (i_0 = 1; i_0 < length_0; i_0++) {
    stackTrace[addIndex++] = this.parse_0($get_0(stack_0, i_0));
  }
  return stackTrace;
}
;
_.parse_0 = function parse_0(stString){
  var closeParen, col, endFileUrlIndex, fileName, ieAnonymousFunctionName, index_0, lastColonIndex, line, location_0, toReturn;
  location_0 = '';
  if (isEmpty__Z__devirtual$(stString)) {
    return this.createSte('Unknown', 'anonymous', -1, -1);
  }
  toReturn = trim__Ljava_lang_String___devirtual$(stString);
  if (startsWith_Ljava_lang_String__Z__devirtual$(toReturn, 'at ')) {
    toReturn = substring_I_Ljava_lang_String___devirtual$(toReturn, 3);
  }
  toReturn = this.stripSquareBrackets(toReturn);
  index_0 = indexOf_Ljava_lang_String__I__devirtual$(toReturn, '(');
  if (index_0 == -1) {
    index_0 = indexOf_Ljava_lang_String__I__devirtual$(toReturn, '@');
    if (index_0 == -1) {
      location_0 = toReturn;
      toReturn = '';
    }
     else {
      location_0 = trim__Ljava_lang_String___devirtual$(substring_I_Ljava_lang_String___devirtual$(toReturn, index_0 + 1));
      toReturn = trim__Ljava_lang_String___devirtual$(substring_II_Ljava_lang_String___devirtual$(toReturn, 0, index_0));
    }
  }
   else {
    closeParen = indexOf_Ljava_lang_String_I_I__devirtual$(toReturn, ')', index_0);
    location_0 = substring_II_Ljava_lang_String___devirtual$(toReturn, index_0 + 1, closeParen);
    toReturn = trim__Ljava_lang_String___devirtual$(substring_II_Ljava_lang_String___devirtual$(toReturn, 0, index_0));
  }
  index_0 = indexOf_I_I__devirtual$(toReturn, 46);
  if (index_0 != -1) {
    toReturn = substring_I_Ljava_lang_String___devirtual$(toReturn, index_0 + 1);
  }
  ieAnonymousFunctionName = 'Anonymous function';
  if (isEmpty__Z__devirtual$(toReturn) || equals_Ljava_lang_Object__Z__devirtual$_2(toReturn, 'Anonymous function')) {
    toReturn = 'anonymous';
  }
  lastColonIndex = lastIndexOf_I_I__devirtual$(location_0, 58);
  endFileUrlIndex = lastIndexOf_II_I__devirtual$(location_0, 58, lastColonIndex - 1);
  line = -1;
  col = -1;
  fileName = 'Unknown';
  if (lastColonIndex != -1 && endFileUrlIndex != -1) {
    fileName = substring_II_Ljava_lang_String___devirtual$(location_0, 0, endFileUrlIndex);
    line = parseInt_0(substring_II_Ljava_lang_String___devirtual$(location_0, endFileUrlIndex + 1, lastColonIndex));
    col = parseInt_0(substring_I_Ljava_lang_String___devirtual$(location_0, lastColonIndex + 1));
  }
  return this.createSte(fileName, toReturn, line, col);
}
;
_.stripSquareBrackets = function stripSquareBrackets(toReturn){
  return toReturn.replace(/\[.*?\]/g, '');
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModern', 74, Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit);
function $clinit_StackTraceCreator$CollectorModernNoSourceMap(){
  $clinit_StackTraceCreator$CollectorModernNoSourceMap = emptyMethod;
  $clinit_StackTraceCreator$CollectorModern();
}

function StackTraceCreator$CollectorModernNoSourceMap(){
  $clinit_StackTraceCreator$CollectorModernNoSourceMap();
  StackTraceCreator$CollectorModern.call(this);
  this.$init_32();
}

defineClass(156, 74, {73:1, 74:1, 1:1}, StackTraceCreator$CollectorModernNoSourceMap);
_.$init_32 = function $init_32(){
}
;
_.createSte = function createSte_0(fileName, method, line, col){
  return new StackTraceElement('Unknown', method, fileName, -1);
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModernNoSourceMap', 156, Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit);
function $clinit_StackTraceCreator$CollectorNull(){
  $clinit_StackTraceCreator$CollectorNull = emptyMethod;
}

defineClass(362, 73, {1:1});
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorNull_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorNull', 362, Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit);
function $clinit_PrefetchableResource(){
  $clinit_PrefetchableResource = emptyMethod;
}

var Lcom_google_gwt_core_client_prefetch_PrefetchableResource_2_classLit = createForInterface('com.google.gwt.core.client.prefetch', 'PrefetchableResource');
function $clinit_RunAsyncCode(){
  $clinit_RunAsyncCode = emptyMethod;
}

defineClass(329, 1, {1:1});
var Lcom_google_gwt_core_client_prefetch_RunAsyncCode_2_classLit = createForClass('com.google.gwt.core.client.prefetch', 'RunAsyncCode', 329, Ljava_lang_Object_2_classLit);
function $clinit_GWT_0(){
  $clinit_GWT_0 = emptyMethod;
  $clinit_Object();
  {
    if (isScript_0()) {
      logger_0 = castTo(new JsLogger, 87);
    }
     else {
      logger_0 = null;
    }
  }
}

function isScript_0(){
  $clinit_GWT_0();
  return true;
}

function log_2(message){
  $clinit_GWT_0();
  log_3(message, null);
}

function log_3(message, e){
  if (isNotNull(sGWTBridge)) {
    sGWTBridge.log_0(message, e);
  }
   else if (isNotNull(logger_0)) {
    logger_0.log_0(message, e);
  }
}

defineClass(369, 1, {1:1});
var logger_0, sGWTBridge = null;
var Lcom_google_gwt_core_shared_GWT_2_classLit = createForClass('com.google.gwt.core.shared', 'GWT', 369, Ljava_lang_Object_2_classLit);
function $clinit_GWTBridge(){
  $clinit_GWTBridge = emptyMethod;
}

defineClass(375, 1, {1:1});
var Lcom_google_gwt_core_shared_GWTBridge_2_classLit = createForClass('com.google.gwt.core.shared', 'GWTBridge', 375, Ljava_lang_Object_2_classLit);
function $clinit_JsLogger(){
  $clinit_JsLogger = emptyMethod;
  $clinit_Object();
}

function JsLogger(){
  $clinit_JsLogger();
  Object_0.call(this);
  this.$init_33();
}

defineClass(87, 1, {87:1, 1:1}, JsLogger);
_.$init_33 = function $init_33(){
}
;
_.log_0 = function log_4(message, e){
}
;
var Lcom_google_gwt_core_shared_impl_JsLogger_2_classLit = createForClass('com.google.gwt.core.shared.impl', 'JsLogger', 87, Ljava_lang_Object_2_classLit);
function $clinit_Node(){
  $clinit_Node = emptyMethod;
  $clinit_JavaScriptObject();
}

function $appendChild(this$static, newChild){
  $clinit_Node();
  return this$static.appendChild(newChild);
}

function $getFirstChild(this$static){
  $clinit_Node();
  return this$static.firstChild;
}

function $getNodeType(this$static){
  $clinit_Node();
  return this$static.nodeType;
}

function $getParentElement(this$static){
  $clinit_Node();
  return ($clinit_DOMImpl() , impl_0).getParentElement(this$static);
}

function $getParentNode(this$static){
  $clinit_Node();
  return this$static.parentNode;
}

function $insertBefore(this$static, newChild, refChild){
  $clinit_Node();
  return this$static.insertBefore(newChild, refChild);
}

function $isOrHasChild(this$static, child){
  $clinit_Node();
  return ($clinit_DOMImpl() , impl_0).isOrHasChild(this$static, child);
}

function $removeChild(this$static, oldChild){
  $clinit_Node();
  return this$static.removeChild(oldChild);
}

function $removeFromParent(this$static){
  $clinit_Node();
  var parent_0;
  parent_0 = $getParentElement(this$static);
  if (isNotNull(parent_0)) {
    $removeChild(parent_0, this$static);
  }
}

function $replaceChild(this$static, newChild, oldChild){
  $clinit_Node();
  return this$static.replaceChild(newChild, oldChild);
}

var DOCUMENT_NODE = 9, ELEMENT_NODE = 1, TEXT_NODE = 3;
function $clinit_Element(){
  $clinit_Element = emptyMethod;
  $clinit_Node();
}

function $addClassName(this$static, className){
  $clinit_Element();
  var idx, oldClassName;
  className = trimClassName(className);
  oldClassName = $getClassName(this$static);
  idx = indexOfName(oldClassName, className);
  if (idx == -1) {
    if (length__I__devirtual$_0(oldClassName) > 0) {
      $setClassName(this$static, oldClassName + ' ' + className);
    }
     else {
      $setClassName(this$static, className);
    }
    return true;
  }
  return false;
}

function $dispatchEvent(this$static, evt){
  $clinit_Element();
  ($clinit_DOMImpl() , impl_0).dispatchEvent_0(this$static, evt);
}

function $getClassName(this$static){
  return this$static.className || '';
}

function $getClientHeight(this$static){
  $clinit_Element();
  return toInt32($getSubPixelClientHeight(this$static));
}

function $getElementsByTagName(this$static, name_0){
  return this$static.getElementsByTagName(name_0);
}

function $getFirstChildElement(this$static){
  $clinit_Element();
  return ($clinit_DOMImpl() , impl_0).getFirstChildElement(this$static);
}

function $getNextSiblingElement(this$static){
  $clinit_Element();
  return ($clinit_DOMImpl() , impl_0).getNextSiblingElement(this$static);
}

function $getPropertyString(this$static, name_0){
  $clinit_Element();
  return this$static[name_0] == null?null:String(this$static[name_0]);
}

function $getString(this$static){
  $clinit_Element();
  return ($clinit_DOMImpl() , impl_0).toString_2(this$static);
}

function $getStyle(this$static){
  $clinit_Element();
  return this$static.style;
}

function $getSubPixelClientHeight(this$static){
  return this$static.clientHeight;
}

function $getTagName(this$static){
  return ($clinit_DOMImpl() , impl_0).getTagName(this$static);
}

function $hasTagName(this$static, tagName){
  $clinit_Element();
  return equalsIgnoreCase_Ljava_lang_String__Z__devirtual$(tagName, $getTagName(this$static));
}

function $removeAttribute(this$static, name_0){
  $clinit_Element();
  this$static.removeAttribute(name_0);
}

function $removeClassName(this$static, className){
  $clinit_Element();
  var begin, end, idx, newClassName, oldStyle;
  className = trimClassName(className);
  oldStyle = $getClassName(this$static);
  idx = indexOfName(oldStyle, className);
  if (idx != -1) {
    begin = trim__Ljava_lang_String___devirtual$(substring_II_Ljava_lang_String___devirtual$(oldStyle, 0, idx));
    end = trim__Ljava_lang_String___devirtual$(substring_I_Ljava_lang_String___devirtual$(oldStyle, idx + length__I__devirtual$_0(className)));
    if (length__I__devirtual$_0(begin) == 0) {
      newClassName = end;
    }
     else if (length__I__devirtual$_0(end) == 0) {
      newClassName = begin;
    }
     else {
      newClassName = begin + ' ' + end;
    }
    $setClassName(this$static, newClassName);
    return true;
  }
  return false;
}

function $setAttribute(this$static, name_0, value_0){
  $clinit_Element();
  this$static.setAttribute(name_0, value_0);
}

function $setClassName(this$static, className){
  $clinit_Element();
  this$static.className = className || '';
}

function $setInnerHTML(this$static, html){
  $clinit_Element();
  this$static.innerHTML = html || '';
}

function $setInnerText(this$static, text_0){
  $clinit_Element();
  ($clinit_DOMImpl() , impl_0).setInnerText(this$static, text_0);
}

function $setPropertyString(this$static, name_0, value_0){
  $clinit_Element();
  this$static[name_0] = value_0;
}

function $setTitle(this$static, title_0){
  this$static.title = title_0 || '';
}

function indexOfName(nameList, name_0){
  var idx, last, lastPos;
  idx = indexOf_Ljava_lang_String__I__devirtual$(nameList, name_0);
  while (idx != -1) {
    if (idx == 0 || charAt_I_C__devirtual$_0(nameList, idx - 1) == 32) {
      last = idx + length__I__devirtual$_0(name_0);
      lastPos = length__I__devirtual$_0(nameList);
      if (last == lastPos || last < lastPos && charAt_I_C__devirtual$_0(nameList, last) == 32) {
        break;
      }
    }
    idx = indexOf_Ljava_lang_String_I_I__devirtual$(nameList, name_0, idx + 1);
  }
  return idx;
}

function toInt32(val){
  return val | 0;
}

function trimClassName(className){
  className = trim__Ljava_lang_String___devirtual$(className);
  return className;
}

var DRAGGABLE_AUTO = 'auto', DRAGGABLE_FALSE = 'false', DRAGGABLE_TRUE = 'true';
function $clinit_BodyElement(){
  $clinit_BodyElement = emptyMethod;
  $clinit_Element();
}

var TAG = 'body';
function $clinit_DOMImpl(){
  $clinit_DOMImpl = emptyMethod;
  $clinit_Object();
  impl_0 = castTo(new DOMImplWebkit, 88);
}

function DOMImpl(){
  $clinit_DOMImpl();
  Object_0.call(this);
  this.$init_34();
}

defineClass(88, 1, {1:1});
_.$init_34 = function $init_34(){
}
;
_.createElement_0 = function createElement(doc, tag){
  return doc.createElement(tag);
}
;
_.eventGetCurrentTarget = function eventGetCurrentTarget(event_0){
  return event_0.currentTarget;
}
;
_.eventGetType = function eventGetType(evt){
  return evt.type;
}
;
_.eventStopPropagation = function eventStopPropagation(evt){
  evt.stopPropagation();
}
;
_.getFirstChildElement = function getFirstChildElement(elem){
  var child = elem.firstChild;
  while (child && child.nodeType != 1)
    child = child.nextSibling;
  return child;
}
;
_.getNextSiblingElement = function getNextSiblingElement(elem){
  var sib = elem.nextSibling;
  while (sib && sib.nodeType != 1)
    sib = sib.nextSibling;
  return sib;
}
;
_.getParentElement = function getParentElement(node){
  var parent_0 = node.parentNode;
  if (!parent_0 || parent_0.nodeType != 1) {
    parent_0 = null;
  }
  return parent_0;
}
;
_.getTagName = function getTagName(elem){
  return elem.tagName;
}
;
_.setInnerText = function setInnerText(elem, text_0){
  while (elem.firstChild) {
    elem.removeChild(elem.firstChild);
  }
  if (text_0 != null) {
    elem.appendChild(elem.ownerDocument.createTextNode(text_0));
  }
}
;
_.toString_2 = function toString_4(elem){
  return elem.outerHTML;
}
;
var impl_0;
var Lcom_google_gwt_dom_client_DOMImpl_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImpl', 88, Ljava_lang_Object_2_classLit);
function $clinit_DOMImplStandard(){
  $clinit_DOMImplStandard = emptyMethod;
  $clinit_DOMImpl();
}

function DOMImplStandard(){
  $clinit_DOMImplStandard();
  DOMImpl.call(this);
  this.$init_35();
}

defineClass(214, 88, {1:1});
_.$init_35 = function $init_35(){
}
;
_.createHtmlEvent = function createHtmlEvent(doc, type_0, canBubble, cancelable){
  var evt = doc.createEvent('HTMLEvents');
  evt.initEvent(type_0, canBubble, cancelable);
  return evt;
}
;
_.dispatchEvent_0 = function dispatchEvent_0(target, evt){
  target.dispatchEvent(evt);
}
;
_.eventGetRelatedTarget = function eventGetRelatedTarget(evt){
  return evt.relatedTarget;
}
;
_.eventPreventDefault = function eventPreventDefault(evt){
  evt.preventDefault();
}
;
_.eventToString = function eventToString(evt){
  return evt.toString();
}
;
_.isOrHasChild = function isOrHasChild(parent_0, child){
  return parent_0.contains(child);
}
;
_.setInnerText = function setInnerText_0(elem, text_0){
  elem.textContent = text_0 || '';
}
;
var Lcom_google_gwt_dom_client_DOMImplStandard_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplStandard', 214, Lcom_google_gwt_dom_client_DOMImpl_2_classLit);
function $clinit_DOMImplStandardBase(){
  $clinit_DOMImplStandardBase = emptyMethod;
  $clinit_DOMImplStandard();
}

function DOMImplStandardBase(){
  $clinit_DOMImplStandardBase();
  DOMImplStandard.call(this);
  this.$init_36();
}

defineClass(215, 214, {1:1});
_.$init_36 = function $init_36(){
}
;
_.eventGetCurrentTarget = function eventGetCurrentTarget_0(event_0){
  return event_0.currentTarget || $wnd;
}
;
var Lcom_google_gwt_dom_client_DOMImplStandardBase_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplStandardBase', 215, Lcom_google_gwt_dom_client_DOMImplStandard_2_classLit);
function $clinit_DOMImplStandardBase$ClientRect(){
  $clinit_DOMImplStandardBase$ClientRect = emptyMethod;
  $clinit_JavaScriptObject();
}

function $clinit_DOMImplWebkit(){
  $clinit_DOMImplWebkit = emptyMethod;
  $clinit_DOMImplStandardBase();
}

function DOMImplWebkit(){
  $clinit_DOMImplWebkit();
  DOMImplStandardBase.call(this);
  this.$init_37();
}

defineClass(216, 215, {88:1, 1:1}, DOMImplWebkit);
_.$init_37 = function $init_37(){
}
;
var Lcom_google_gwt_dom_client_DOMImplWebkit_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplWebkit', 216, Lcom_google_gwt_dom_client_DOMImplStandardBase_2_classLit);
function $clinit_DivElement(){
  $clinit_DivElement = emptyMethod;
  $clinit_Element();
}

var TAG_0 = 'div';
function $clinit_Document(){
  $clinit_Document = emptyMethod;
  $clinit_Node();
}

function $createDivElement(this$static){
  $clinit_Document();
  return ($clinit_DOMImpl() , impl_0).createElement_0(this$static, 'div');
}

function $createElement(this$static, tagName){
  $clinit_Document();
  return ($clinit_DOMImpl() , impl_0).createElement_0(this$static, tagName);
}

function $createHtmlEvent(this$static, type_0, canBubble, cancelable){
  return ($clinit_DOMImpl() , impl_0).createHtmlEvent(this$static, type_0, canBubble, cancelable);
}

function $createImageElement(this$static){
  $clinit_Document();
  return ($clinit_DOMImpl() , impl_0).createElement_0(this$static, 'img');
}

function $createLoadEvent(this$static){
  $clinit_Document();
  return $createHtmlEvent(this$static, 'load', false, false);
}

function $createStyleElement(this$static){
  $clinit_Document();
  return ($clinit_DOMImpl() , impl_0).createElement_0(this$static, 'style');
}

function $createUniqueId(this$static){
  $clinit_Document();
  if (!this$static.gwt_uid) {
    this$static.gwt_uid = 1;
  }
  return 'gwt-uid-' + this$static.gwt_uid++;
}

function $getBody(this$static){
  $clinit_Document();
  return this$static.body;
}

function $getClientHeight_0(this$static){
  $clinit_Document();
  return $getClientHeight($getViewportElement(this$static));
}

function $getCompatMode(this$static){
  $clinit_Document();
  return this$static.compatMode;
}

function $getDocumentElement(this$static){
  return this$static.documentElement;
}

function $getElementById(this$static, elementId){
  $clinit_Document();
  return this$static.getElementById(elementId);
}

function $getElementsByTagName_0(this$static, tagName){
  $clinit_Document();
  return this$static.getElementsByTagName(tagName);
}

function $getViewportElement(this$static){
  return $isCSS1Compat(this$static)?$getDocumentElement(this$static):$getBody(this$static);
}

function $isCSS1Compat(this$static){
  return equals_Ljava_lang_Object__Z__devirtual$_2($getCompatMode(this$static), 'CSS1Compat');
}

function $setTitle_0(this$static, title_0){
  this$static.title = title_0;
}

function get_1(){
  $clinit_Document();
  if (isScript()) {
    return nativeGet();
  }
  if (isNull(doc_0)) {
    doc_0 = nativeGet();
  }
  return doc_0;
}

function nativeGet(){
  return $doc;
}

var doc_0;
function $clinit_EventTarget(){
  $clinit_EventTarget = emptyMethod;
  $clinit_JavaScriptObject();
}

function $clinit_HeadElement(){
  $clinit_HeadElement = emptyMethod;
  $clinit_Element();
}

function as(elem){
  $clinit_HeadElement();
  return elem;
}

function is(elem){
  return isNotNull(elem) && $hasTagName(elem, 'head');
}

var TAG_1 = 'head';
function $clinit_ImageElement(){
  $clinit_ImageElement = emptyMethod;
  $clinit_Element();
}

function $getSrc(this$static){
  $clinit_ImageElement();
  return this$static.src;
}

function $setSrc(this$static, src_0){
  $clinit_ImageElement();
  this$static.src = src_0;
}

var TAG_2 = 'img';
function $clinit_NativeEvent(){
  $clinit_NativeEvent = emptyMethod;
  $clinit_JavaScriptObject();
}

function $getCurrentEventTarget(this$static){
  $clinit_NativeEvent();
  return ($clinit_DOMImpl() , impl_0).eventGetCurrentTarget(this$static);
}

function $getRelatedEventTarget(this$static){
  $clinit_NativeEvent();
  return ($clinit_DOMImpl() , impl_0).eventGetRelatedTarget(this$static);
}

function $getString_0(this$static){
  return ($clinit_DOMImpl() , impl_0).eventToString(this$static);
}

function $getType(this$static){
  $clinit_NativeEvent();
  return ($clinit_DOMImpl() , impl_0).eventGetType(this$static);
}

function $preventDefault(this$static){
  $clinit_NativeEvent();
  ($clinit_DOMImpl() , impl_0).eventPreventDefault(this$static);
}

function $stopPropagation(this$static){
  $clinit_NativeEvent();
  ($clinit_DOMImpl() , impl_0).eventStopPropagation(this$static);
}

var BUTTON_LEFT = 1, BUTTON_MIDDLE = 4, BUTTON_RIGHT = 2;
function $clinit_NodeList(){
  $clinit_NodeList = emptyMethod;
  $clinit_JavaScriptObject();
}

function $getItem(this$static, index_0){
  $clinit_NodeList();
  return this$static[index_0];
}

function $clinit_Style(){
  $clinit_Style = emptyMethod;
  $clinit_JavaScriptObject();
}

function $assertCamelCase(this$static, name_0){
}

function $setProperty(this$static, name_0, value_0){
  $clinit_Style();
  $assertCamelCase(this$static, name_0);
  $setPropertyImpl(this$static, name_0, value_0);
}

function $setPropertyImpl(this$static, name_0, value_0){
  this$static[name_0] = value_0;
}

var BORDER_STYLE_DASHED = 'dashed', BORDER_STYLE_DOTTED = 'dotted', BORDER_STYLE_HIDDEN = 'hidden', BORDER_STYLE_NONE = 'none', BORDER_STYLE_SOLID = 'solid', CLEAR_BOTH = 'both', CLEAR_LEFT = 'left', CLEAR_NONE = 'none', CLEAR_RIGHT = 'right', CURSOR_AUTO = 'auto', CURSOR_COL_RESIZE = 'col-resize', CURSOR_CROSSHAIR = 'crosshair', CURSOR_DEFAULT = 'default', CURSOR_E_RESIZE = 'e-resize', CURSOR_HELP = 'help', CURSOR_MOVE = 'move', CURSOR_NE_RESIZE = 'ne-resize', CURSOR_NW_RESIZE = 'nw-resize', CURSOR_N_RESIZE = 'n-resize', CURSOR_POINTER = 'pointer', CURSOR_ROW_RESIZE = 'row-resize', CURSOR_SE_RESIZE = 'se-resize', CURSOR_SW_RESIZE = 'sw-resize', CURSOR_S_RESIZE = 's-resize', CURSOR_TEXT = 'text', CURSOR_WAIT = 'wait', CURSOR_W_RESIZE = 'w-resize', DISPLAY_BLOCK = 'block', DISPLAY_FLEX = 'flex', DISPLAY_INITIAL = 'initial', DISPLAY_INLINE = 'inline', DISPLAY_INLINE_BLOCK = 'inline-block', DISPLAY_INLINE_FLEX = 'inline-flex', DISPLAY_INLINE_TABLE = 'inline-table', DISPLAY_LIST_ITEM = 'list-item', DISPLAY_NONE = 'none', DISPLAY_RUN_IN = 'run-in', DISPLAY_TABLE = 'table', DISPLAY_TABLE_CAPTION = 'table-caption', DISPLAY_TABLE_CELL = 'table-cell', DISPLAY_TABLE_COLUMN = 'table-column', DISPLAY_TABLE_COLUMN_GROUP = 'table-column-group', DISPLAY_TABLE_FOOTER_GROUP = 'table-footer-group', DISPLAY_TABLE_HEADER_GROUP = 'table-header-group', DISPLAY_TABLE_ROW = 'table-row', DISPLAY_TABLE_ROW_GROUP = 'table-row-group', FLOAT_LEFT = 'left', FLOAT_NONE = 'none', FLOAT_RIGHT = 'right', FONT_STYLE_ITALIC = 'italic', FONT_STYLE_NORMAL = 'normal', FONT_STYLE_OBLIQUE = 'oblique', FONT_WEIGHT_BOLD = 'bold', FONT_WEIGHT_BOLDER = 'bolder', FONT_WEIGHT_LIGHTER = 'lighter', FONT_WEIGHT_NORMAL = 'normal', LIST_STYLE_TYPE_CIRCLE = 'circle', LIST_STYLE_TYPE_DECIMAL = 'decimal', LIST_STYLE_TYPE_DISC = 'disc', LIST_STYLE_TYPE_LOWER_ALPHA = 'lower-alpha', LIST_STYLE_TYPE_LOWER_ROMAN = 'lower-roman', LIST_STYLE_TYPE_NONE = 'none', LIST_STYLE_TYPE_SQUARE = 'square', LIST_STYLE_TYPE_UPPER_ALPHA = 'upper-alpha', LIST_STYLE_TYPE_UPPER_ROMAN = 'upper-roman', OUTLINE_STYLE_DASHED = 'dashed', OUTLINE_STYLE_DOTTED = 'dotted', OUTLINE_STYLE_DOUBLE = 'double', OUTLINE_STYLE_GROOVE = 'groove', OUTLINE_STYLE_INSET = 'inset', OUTLINE_STYLE_NONE = 'none', OUTLINE_STYLE_OUTSET = 'outset', OUTLINE_STYLE_RIDGE = 'ridge', OUTLINE_STYLE_SOLID = 'solid', OVERFLOW_AUTO = 'auto', OVERFLOW_HIDDEN = 'hidden', OVERFLOW_SCROLL = 'scroll', OVERFLOW_VISIBLE = 'visible', POSITION_ABSOLUTE = 'absolute', POSITION_FIXED = 'fixed', POSITION_RELATIVE = 'relative', POSITION_STATIC = 'static', STYLE_BACKGROUND_COLOR = 'backgroundColor', STYLE_BACKGROUND_IMAGE = 'backgroundImage', STYLE_BORDER_COLOR = 'borderColor', STYLE_BORDER_STYLE = 'borderStyle', STYLE_BORDER_WIDTH = 'borderWidth', STYLE_BOTTOM = 'bottom', STYLE_CLEAR = 'clear', STYLE_COLOR = 'color', STYLE_CURSOR = 'cursor', STYLE_DISPLAY = 'display', STYLE_FONT_SIZE = 'fontSize', STYLE_FONT_STYLE = 'fontStyle', STYLE_FONT_WEIGHT = 'fontWeight', STYLE_HEIGHT = 'height', STYLE_LEFT = 'left', STYLE_LINE_HEIGHT = 'lineHeight', STYLE_LIST_STYLE_TYPE = 'listStyleType', STYLE_MARGIN = 'margin', STYLE_MARGIN_BOTTOM = 'marginBottom', STYLE_MARGIN_LEFT = 'marginLeft', STYLE_MARGIN_RIGHT = 'marginRight', STYLE_MARGIN_TOP = 'marginTop', STYLE_OPACITY = 'opacity', STYLE_OUTLINE_COLOR = 'outlineColor', STYLE_OUTLINE_STYLE = 'outlineStyle', STYLE_OUTLINE_WIDTH = 'outlineWidth', STYLE_OVERFLOW = 'overflow', STYLE_OVERFLOW_X = 'overflowX', STYLE_OVERFLOW_Y = 'overflowY', STYLE_PADDING = 'padding', STYLE_PADDING_BOTTOM = 'paddingBottom', STYLE_PADDING_LEFT = 'paddingLeft', STYLE_PADDING_RIGHT = 'paddingRight', STYLE_PADDING_TOP = 'paddingTop', STYLE_POSITION = 'position', STYLE_RIGHT = 'right', STYLE_TABLE_LAYOUT = 'tableLayout', STYLE_TEXT_ALIGN = 'textAlign', STYLE_TEXT_DECORATION = 'textDecoration', STYLE_TEXT_INDENT = 'textIndent', STYLE_TEXT_JUSTIFY = 'textJustify', STYLE_TEXT_OVERFLOW = 'textOverflow', STYLE_TEXT_TRANSFORM = 'textTransform', STYLE_TOP = 'top', STYLE_VERTICAL_ALIGN = 'verticalAlign', STYLE_VISIBILITY = 'visibility', STYLE_WHITE_SPACE = 'whiteSpace', STYLE_WIDTH = 'width', STYLE_Z_INDEX = 'zIndex', TABLE_LAYOUT_AUTO = 'auto', TABLE_LAYOUT_FIXED = 'fixed', TEXT_ALIGN_CENTER = 'center', TEXT_ALIGN_JUSTIFY = 'justify', TEXT_ALIGN_LEFT = 'left', TEXT_ALIGN_RIGHT = 'right', TEXT_DECORATION_BLINK = 'blink', TEXT_DECORATION_LINE_THROUGH = 'line-through', TEXT_DECORATION_NONE = 'none', TEXT_DECORATION_OVERLINE = 'overline', TEXT_DECORATION_UNDERLINE = 'underline', TEXT_JUSTIFY_AUTO = 'auto', TEXT_JUSTIFY_DISTRIBUTE = 'distribute', TEXT_JUSTIFY_INTER_CLUSTER = 'inter-cluster', TEXT_JUSTIFY_INTER_IDEOGRAPH = 'inter-ideograph', TEXT_JUSTIFY_INTER_WORD = 'inter-word', TEXT_JUSTIFY_KASHIDA = 'kashida', TEXT_JUSTIFY_NONE = 'none', TEXT_OVERFLOW_CLIP = 'clip', TEXT_OVERFLOW_ELLIPSIS = 'ellipsis', TEXT_TRANSFORM_CAPITALIZE = 'capitalize', TEXT_TRANSFORM_LOWERCASE = 'lowercase', TEXT_TRANSFORM_NONE = 'none', TEXT_TRANSFORM_UPPERCASE = 'uppercase', UNIT_CM = 'cm', UNIT_EM = 'em', UNIT_EX = 'ex', UNIT_IN = 'in', UNIT_MM = 'mm', UNIT_PC = 'pc', UNIT_PCT = '%', UNIT_PT = 'pt', UNIT_PX = 'px', VERTICAL_ALIGN_BASELINE = 'baseline', VERTICAL_ALIGN_BOTTOM = 'bottom', VERTICAL_ALIGN_MIDDLE = 'middle', VERTICAL_ALIGN_SUB = 'sub', VERTICAL_ALIGN_SUPER = 'super', VERTICAL_ALIGN_TEXT_BOTTOM = 'text-bottom', VERTICAL_ALIGN_TEXT_TOP = 'text-top', VERTICAL_ALIGN_TOP = 'top', VISIBILITY_HIDDEN = 'hidden', VISIBILITY_VISIBLE = 'visible', WHITE_SPACE_NORMAL = 'normal', WHITE_SPACE_NOWRAP = 'nowrap', WHITE_SPACE_PRE = 'pre', WHITE_SPACE_PRE_LINE = 'pre-line', WHITE_SPACE_PRE_WRAP = 'pre-wrap';
function $clinit_Style$HasCssName(){
  $clinit_Style$HasCssName = emptyMethod;
}

var Lcom_google_gwt_dom_client_Style$HasCssName_2_classLit = createForInterface('com.google.gwt.dom.client', 'Style/HasCssName');
function $clinit_Style$BorderStyle(){
  $clinit_Style$BorderStyle = emptyMethod;
}

defineClass(464, 5, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$BorderStyle_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/BorderStyle', 464, Ljava_lang_Enum_2_classLit, null, null);
function $clinit_Style$BorderStyle$1(){
  $clinit_Style$BorderStyle$1 = emptyMethod;
}

defineClass(494, 464, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$BorderStyle$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/BorderStyle/1', 494, Lcom_google_gwt_dom_client_Style$BorderStyle_2_classLit, null, null);
function $clinit_Style$BorderStyle$2(){
  $clinit_Style$BorderStyle$2 = emptyMethod;
}

defineClass(495, 464, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$BorderStyle$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/BorderStyle/2', 495, Lcom_google_gwt_dom_client_Style$BorderStyle_2_classLit, null, null);
function $clinit_Style$BorderStyle$3(){
  $clinit_Style$BorderStyle$3 = emptyMethod;
}

defineClass(496, 464, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$BorderStyle$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/BorderStyle/3', 496, Lcom_google_gwt_dom_client_Style$BorderStyle_2_classLit, null, null);
function $clinit_Style$BorderStyle$4(){
  $clinit_Style$BorderStyle$4 = emptyMethod;
}

defineClass(497, 464, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$BorderStyle$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/BorderStyle/4', 497, Lcom_google_gwt_dom_client_Style$BorderStyle_2_classLit, null, null);
function $clinit_Style$BorderStyle$5(){
  $clinit_Style$BorderStyle$5 = emptyMethod;
}

defineClass(498, 464, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$BorderStyle$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/BorderStyle/5', 498, Lcom_google_gwt_dom_client_Style$BorderStyle_2_classLit, null, null);
function $clinit_Style$BorderStyle$Map(){
  $clinit_Style$BorderStyle$Map = emptyMethod;
}

defineClass(499, 1, {1:1});
var Lcom_google_gwt_dom_client_Style$BorderStyle$Map_2_classLit = createForClass('com.google.gwt.dom.client', 'Style/BorderStyle/Map', 499, Ljava_lang_Object_2_classLit);
function $clinit_Style$Clear(){
  $clinit_Style$Clear = emptyMethod;
}

defineClass(465, 5, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Clear_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Clear', 465, Ljava_lang_Enum_2_classLit, null, null);
function $clinit_Style$Clear$1(){
  $clinit_Style$Clear$1 = emptyMethod;
}

defineClass(500, 465, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Clear$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Clear/1', 500, Lcom_google_gwt_dom_client_Style$Clear_2_classLit, null, null);
function $clinit_Style$Clear$2(){
  $clinit_Style$Clear$2 = emptyMethod;
}

defineClass(501, 465, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Clear$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Clear/2', 501, Lcom_google_gwt_dom_client_Style$Clear_2_classLit, null, null);
function $clinit_Style$Clear$3(){
  $clinit_Style$Clear$3 = emptyMethod;
}

defineClass(502, 465, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Clear$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Clear/3', 502, Lcom_google_gwt_dom_client_Style$Clear_2_classLit, null, null);
function $clinit_Style$Clear$4(){
  $clinit_Style$Clear$4 = emptyMethod;
}

defineClass(503, 465, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Clear$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Clear/4', 503, Lcom_google_gwt_dom_client_Style$Clear_2_classLit, null, null);
function $clinit_Style$Clear$Map(){
  $clinit_Style$Clear$Map = emptyMethod;
}

defineClass(504, 1, {1:1});
var Lcom_google_gwt_dom_client_Style$Clear$Map_2_classLit = createForClass('com.google.gwt.dom.client', 'Style/Clear/Map', 504, Ljava_lang_Object_2_classLit);
function $clinit_Style$Cursor(){
  $clinit_Style$Cursor = emptyMethod;
}

defineClass(466, 5, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Cursor_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor', 466, Ljava_lang_Enum_2_classLit, null, null);
function $clinit_Style$Cursor$1(){
  $clinit_Style$Cursor$1 = emptyMethod;
}

defineClass(505, 466, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Cursor$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/1', 505, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null, null);
function $clinit_Style$Cursor$10(){
  $clinit_Style$Cursor$10 = emptyMethod;
}

defineClass(514, 466, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Cursor$10_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/10', 514, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null, null);
function $clinit_Style$Cursor$11(){
  $clinit_Style$Cursor$11 = emptyMethod;
}

defineClass(515, 466, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Cursor$11_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/11', 515, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null, null);
function $clinit_Style$Cursor$12(){
  $clinit_Style$Cursor$12 = emptyMethod;
}

defineClass(516, 466, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Cursor$12_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/12', 516, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null, null);
function $clinit_Style$Cursor$13(){
  $clinit_Style$Cursor$13 = emptyMethod;
}

defineClass(517, 466, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Cursor$13_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/13', 517, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null, null);
function $clinit_Style$Cursor$14(){
  $clinit_Style$Cursor$14 = emptyMethod;
}

defineClass(518, 466, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Cursor$14_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/14', 518, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null, null);
function $clinit_Style$Cursor$15(){
  $clinit_Style$Cursor$15 = emptyMethod;
}

defineClass(519, 466, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Cursor$15_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/15', 519, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null, null);
function $clinit_Style$Cursor$16(){
  $clinit_Style$Cursor$16 = emptyMethod;
}

defineClass(520, 466, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Cursor$16_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/16', 520, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null, null);
function $clinit_Style$Cursor$17(){
  $clinit_Style$Cursor$17 = emptyMethod;
}

defineClass(521, 466, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Cursor$17_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/17', 521, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null, null);
function $clinit_Style$Cursor$18(){
  $clinit_Style$Cursor$18 = emptyMethod;
}

defineClass(522, 466, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Cursor$18_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/18', 522, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null, null);
function $clinit_Style$Cursor$2(){
  $clinit_Style$Cursor$2 = emptyMethod;
}

defineClass(506, 466, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Cursor$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/2', 506, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null, null);
function $clinit_Style$Cursor$3(){
  $clinit_Style$Cursor$3 = emptyMethod;
}

defineClass(507, 466, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Cursor$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/3', 507, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null, null);
function $clinit_Style$Cursor$4(){
  $clinit_Style$Cursor$4 = emptyMethod;
}

defineClass(508, 466, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Cursor$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/4', 508, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null, null);
function $clinit_Style$Cursor$5(){
  $clinit_Style$Cursor$5 = emptyMethod;
}

defineClass(509, 466, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Cursor$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/5', 509, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null, null);
function $clinit_Style$Cursor$6(){
  $clinit_Style$Cursor$6 = emptyMethod;
}

defineClass(510, 466, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Cursor$6_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/6', 510, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null, null);
function $clinit_Style$Cursor$7(){
  $clinit_Style$Cursor$7 = emptyMethod;
}

defineClass(511, 466, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Cursor$7_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/7', 511, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null, null);
function $clinit_Style$Cursor$8(){
  $clinit_Style$Cursor$8 = emptyMethod;
}

defineClass(512, 466, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Cursor$8_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/8', 512, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null, null);
function $clinit_Style$Cursor$9(){
  $clinit_Style$Cursor$9 = emptyMethod;
}

defineClass(513, 466, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Cursor$9_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Cursor/9', 513, Lcom_google_gwt_dom_client_Style$Cursor_2_classLit, null, null);
function $clinit_Style$Cursor$Map(){
  $clinit_Style$Cursor$Map = emptyMethod;
}

defineClass(523, 1, {1:1});
var Lcom_google_gwt_dom_client_Style$Cursor$Map_2_classLit = createForClass('com.google.gwt.dom.client', 'Style/Cursor/Map', 523, Ljava_lang_Object_2_classLit);
function $clinit_Style$Display(){
  $clinit_Style$Display = emptyMethod;
}

defineClass(467, 5, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Display_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display', 467, Ljava_lang_Enum_2_classLit, null, null);
function $clinit_Style$Display$1(){
  $clinit_Style$Display$1 = emptyMethod;
}

defineClass(524, 467, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Display$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/1', 524, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null, null);
function $clinit_Style$Display$10(){
  $clinit_Style$Display$10 = emptyMethod;
}

defineClass(533, 467, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Display$10_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/10', 533, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null, null);
function $clinit_Style$Display$11(){
  $clinit_Style$Display$11 = emptyMethod;
}

defineClass(534, 467, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Display$11_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/11', 534, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null, null);
function $clinit_Style$Display$12(){
  $clinit_Style$Display$12 = emptyMethod;
}

defineClass(535, 467, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Display$12_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/12', 535, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null, null);
function $clinit_Style$Display$13(){
  $clinit_Style$Display$13 = emptyMethod;
}

defineClass(536, 467, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Display$13_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/13', 536, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null, null);
function $clinit_Style$Display$14(){
  $clinit_Style$Display$14 = emptyMethod;
}

defineClass(537, 467, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Display$14_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/14', 537, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null, null);
function $clinit_Style$Display$15(){
  $clinit_Style$Display$15 = emptyMethod;
}

defineClass(538, 467, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Display$15_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/15', 538, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null, null);
function $clinit_Style$Display$16(){
  $clinit_Style$Display$16 = emptyMethod;
}

defineClass(539, 467, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Display$16_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/16', 539, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null, null);
function $clinit_Style$Display$17(){
  $clinit_Style$Display$17 = emptyMethod;
}

defineClass(540, 467, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Display$17_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/17', 540, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null, null);
function $clinit_Style$Display$18(){
  $clinit_Style$Display$18 = emptyMethod;
}

defineClass(541, 467, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Display$18_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/18', 541, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null, null);
function $clinit_Style$Display$19(){
  $clinit_Style$Display$19 = emptyMethod;
}

defineClass(542, 467, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Display$19_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/19', 542, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null, null);
function $clinit_Style$Display$2(){
  $clinit_Style$Display$2 = emptyMethod;
}

defineClass(525, 467, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Display$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/2', 525, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null, null);
function $clinit_Style$Display$3(){
  $clinit_Style$Display$3 = emptyMethod;
}

defineClass(526, 467, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Display$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/3', 526, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null, null);
function $clinit_Style$Display$4(){
  $clinit_Style$Display$4 = emptyMethod;
}

defineClass(527, 467, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Display$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/4', 527, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null, null);
function $clinit_Style$Display$5(){
  $clinit_Style$Display$5 = emptyMethod;
}

defineClass(528, 467, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Display$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/5', 528, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null, null);
function $clinit_Style$Display$6(){
  $clinit_Style$Display$6 = emptyMethod;
}

defineClass(529, 467, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Display$6_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/6', 529, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null, null);
function $clinit_Style$Display$7(){
  $clinit_Style$Display$7 = emptyMethod;
}

defineClass(530, 467, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Display$7_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/7', 530, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null, null);
function $clinit_Style$Display$8(){
  $clinit_Style$Display$8 = emptyMethod;
}

defineClass(531, 467, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Display$8_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/8', 531, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null, null);
function $clinit_Style$Display$9(){
  $clinit_Style$Display$9 = emptyMethod;
}

defineClass(532, 467, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Display$9_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/9', 532, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null, null);
function $clinit_Style$Display$Map(){
  $clinit_Style$Display$Map = emptyMethod;
}

defineClass(543, 1, {1:1});
var Lcom_google_gwt_dom_client_Style$Display$Map_2_classLit = createForClass('com.google.gwt.dom.client', 'Style/Display/Map', 543, Ljava_lang_Object_2_classLit);
function $clinit_Style$Float(){
  $clinit_Style$Float = emptyMethod;
}

defineClass(468, 5, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Float_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Float', 468, Ljava_lang_Enum_2_classLit, null, null);
function $clinit_Style$Float$1(){
  $clinit_Style$Float$1 = emptyMethod;
}

defineClass(544, 468, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Float$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Float/1', 544, Lcom_google_gwt_dom_client_Style$Float_2_classLit, null, null);
function $clinit_Style$Float$2(){
  $clinit_Style$Float$2 = emptyMethod;
}

defineClass(545, 468, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Float$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Float/2', 545, Lcom_google_gwt_dom_client_Style$Float_2_classLit, null, null);
function $clinit_Style$Float$3(){
  $clinit_Style$Float$3 = emptyMethod;
}

defineClass(546, 468, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Float$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Float/3', 546, Lcom_google_gwt_dom_client_Style$Float_2_classLit, null, null);
function $clinit_Style$Float$Map(){
  $clinit_Style$Float$Map = emptyMethod;
}

defineClass(547, 1, {1:1});
var Lcom_google_gwt_dom_client_Style$Float$Map_2_classLit = createForClass('com.google.gwt.dom.client', 'Style/Float/Map', 547, Ljava_lang_Object_2_classLit);
function $clinit_Style$FontStyle(){
  $clinit_Style$FontStyle = emptyMethod;
}

defineClass(469, 5, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$FontStyle_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/FontStyle', 469, Ljava_lang_Enum_2_classLit, null, null);
function $clinit_Style$FontStyle$1(){
  $clinit_Style$FontStyle$1 = emptyMethod;
}

defineClass(548, 469, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$FontStyle$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/FontStyle/1', 548, Lcom_google_gwt_dom_client_Style$FontStyle_2_classLit, null, null);
function $clinit_Style$FontStyle$2(){
  $clinit_Style$FontStyle$2 = emptyMethod;
}

defineClass(549, 469, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$FontStyle$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/FontStyle/2', 549, Lcom_google_gwt_dom_client_Style$FontStyle_2_classLit, null, null);
function $clinit_Style$FontStyle$3(){
  $clinit_Style$FontStyle$3 = emptyMethod;
}

defineClass(550, 469, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$FontStyle$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/FontStyle/3', 550, Lcom_google_gwt_dom_client_Style$FontStyle_2_classLit, null, null);
function $clinit_Style$FontStyle$Map(){
  $clinit_Style$FontStyle$Map = emptyMethod;
}

defineClass(551, 1, {1:1});
var Lcom_google_gwt_dom_client_Style$FontStyle$Map_2_classLit = createForClass('com.google.gwt.dom.client', 'Style/FontStyle/Map', 551, Ljava_lang_Object_2_classLit);
function $clinit_Style$FontWeight(){
  $clinit_Style$FontWeight = emptyMethod;
}

defineClass(470, 5, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$FontWeight_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/FontWeight', 470, Ljava_lang_Enum_2_classLit, null, null);
function $clinit_Style$FontWeight$1(){
  $clinit_Style$FontWeight$1 = emptyMethod;
}

defineClass(552, 470, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$FontWeight$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/FontWeight/1', 552, Lcom_google_gwt_dom_client_Style$FontWeight_2_classLit, null, null);
function $clinit_Style$FontWeight$2(){
  $clinit_Style$FontWeight$2 = emptyMethod;
}

defineClass(553, 470, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$FontWeight$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/FontWeight/2', 553, Lcom_google_gwt_dom_client_Style$FontWeight_2_classLit, null, null);
function $clinit_Style$FontWeight$3(){
  $clinit_Style$FontWeight$3 = emptyMethod;
}

defineClass(554, 470, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$FontWeight$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/FontWeight/3', 554, Lcom_google_gwt_dom_client_Style$FontWeight_2_classLit, null, null);
function $clinit_Style$FontWeight$4(){
  $clinit_Style$FontWeight$4 = emptyMethod;
}

defineClass(555, 470, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$FontWeight$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/FontWeight/4', 555, Lcom_google_gwt_dom_client_Style$FontWeight_2_classLit, null, null);
function $clinit_Style$FontWeight$Map(){
  $clinit_Style$FontWeight$Map = emptyMethod;
}

defineClass(556, 1, {1:1});
var Lcom_google_gwt_dom_client_Style$FontWeight$Map_2_classLit = createForClass('com.google.gwt.dom.client', 'Style/FontWeight/Map', 556, Ljava_lang_Object_2_classLit);
function $clinit_Style$ListStyleType(){
  $clinit_Style$ListStyleType = emptyMethod;
}

defineClass(471, 5, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$ListStyleType_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/ListStyleType', 471, Ljava_lang_Enum_2_classLit, null, null);
function $clinit_Style$ListStyleType$1(){
  $clinit_Style$ListStyleType$1 = emptyMethod;
}

defineClass(557, 471, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$ListStyleType$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/ListStyleType/1', 557, Lcom_google_gwt_dom_client_Style$ListStyleType_2_classLit, null, null);
function $clinit_Style$ListStyleType$2(){
  $clinit_Style$ListStyleType$2 = emptyMethod;
}

defineClass(558, 471, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$ListStyleType$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/ListStyleType/2', 558, Lcom_google_gwt_dom_client_Style$ListStyleType_2_classLit, null, null);
function $clinit_Style$ListStyleType$3(){
  $clinit_Style$ListStyleType$3 = emptyMethod;
}

defineClass(559, 471, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$ListStyleType$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/ListStyleType/3', 559, Lcom_google_gwt_dom_client_Style$ListStyleType_2_classLit, null, null);
function $clinit_Style$ListStyleType$4(){
  $clinit_Style$ListStyleType$4 = emptyMethod;
}

defineClass(560, 471, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$ListStyleType$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/ListStyleType/4', 560, Lcom_google_gwt_dom_client_Style$ListStyleType_2_classLit, null, null);
function $clinit_Style$ListStyleType$5(){
  $clinit_Style$ListStyleType$5 = emptyMethod;
}

defineClass(561, 471, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$ListStyleType$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/ListStyleType/5', 561, Lcom_google_gwt_dom_client_Style$ListStyleType_2_classLit, null, null);
function $clinit_Style$ListStyleType$6(){
  $clinit_Style$ListStyleType$6 = emptyMethod;
}

defineClass(562, 471, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$ListStyleType$6_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/ListStyleType/6', 562, Lcom_google_gwt_dom_client_Style$ListStyleType_2_classLit, null, null);
function $clinit_Style$ListStyleType$7(){
  $clinit_Style$ListStyleType$7 = emptyMethod;
}

defineClass(563, 471, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$ListStyleType$7_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/ListStyleType/7', 563, Lcom_google_gwt_dom_client_Style$ListStyleType_2_classLit, null, null);
function $clinit_Style$ListStyleType$8(){
  $clinit_Style$ListStyleType$8 = emptyMethod;
}

defineClass(564, 471, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$ListStyleType$8_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/ListStyleType/8', 564, Lcom_google_gwt_dom_client_Style$ListStyleType_2_classLit, null, null);
function $clinit_Style$ListStyleType$9(){
  $clinit_Style$ListStyleType$9 = emptyMethod;
}

defineClass(565, 471, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$ListStyleType$9_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/ListStyleType/9', 565, Lcom_google_gwt_dom_client_Style$ListStyleType_2_classLit, null, null);
function $clinit_Style$ListStyleType$Map(){
  $clinit_Style$ListStyleType$Map = emptyMethod;
}

defineClass(566, 1, {1:1});
var Lcom_google_gwt_dom_client_Style$ListStyleType$Map_2_classLit = createForClass('com.google.gwt.dom.client', 'Style/ListStyleType/Map', 566, Ljava_lang_Object_2_classLit);
function $clinit_Style$OutlineStyle(){
  $clinit_Style$OutlineStyle = emptyMethod;
}

defineClass(472, 5, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/OutlineStyle', 472, Ljava_lang_Enum_2_classLit, null, null);
function $clinit_Style$OutlineStyle$1(){
  $clinit_Style$OutlineStyle$1 = emptyMethod;
}

defineClass(567, 472, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$OutlineStyle$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/OutlineStyle/1', 567, Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit, null, null);
function $clinit_Style$OutlineStyle$2(){
  $clinit_Style$OutlineStyle$2 = emptyMethod;
}

defineClass(568, 472, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$OutlineStyle$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/OutlineStyle/2', 568, Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit, null, null);
function $clinit_Style$OutlineStyle$3(){
  $clinit_Style$OutlineStyle$3 = emptyMethod;
}

defineClass(569, 472, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$OutlineStyle$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/OutlineStyle/3', 569, Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit, null, null);
function $clinit_Style$OutlineStyle$4(){
  $clinit_Style$OutlineStyle$4 = emptyMethod;
}

defineClass(570, 472, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$OutlineStyle$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/OutlineStyle/4', 570, Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit, null, null);
function $clinit_Style$OutlineStyle$5(){
  $clinit_Style$OutlineStyle$5 = emptyMethod;
}

defineClass(571, 472, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$OutlineStyle$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/OutlineStyle/5', 571, Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit, null, null);
function $clinit_Style$OutlineStyle$6(){
  $clinit_Style$OutlineStyle$6 = emptyMethod;
}

defineClass(572, 472, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$OutlineStyle$6_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/OutlineStyle/6', 572, Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit, null, null);
function $clinit_Style$OutlineStyle$7(){
  $clinit_Style$OutlineStyle$7 = emptyMethod;
}

defineClass(573, 472, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$OutlineStyle$7_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/OutlineStyle/7', 573, Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit, null, null);
function $clinit_Style$OutlineStyle$8(){
  $clinit_Style$OutlineStyle$8 = emptyMethod;
}

defineClass(574, 472, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$OutlineStyle$8_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/OutlineStyle/8', 574, Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit, null, null);
function $clinit_Style$OutlineStyle$9(){
  $clinit_Style$OutlineStyle$9 = emptyMethod;
}

defineClass(575, 472, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$OutlineStyle$9_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/OutlineStyle/9', 575, Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit, null, null);
function $clinit_Style$OutlineStyle$Map(){
  $clinit_Style$OutlineStyle$Map = emptyMethod;
}

defineClass(576, 1, {1:1});
var Lcom_google_gwt_dom_client_Style$OutlineStyle$Map_2_classLit = createForClass('com.google.gwt.dom.client', 'Style/OutlineStyle/Map', 576, Ljava_lang_Object_2_classLit);
function $clinit_Style$Overflow(){
  $clinit_Style$Overflow = emptyMethod;
}

defineClass(473, 5, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Overflow_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow', 473, Ljava_lang_Enum_2_classLit, null, null);
function $clinit_Style$Overflow$1(){
  $clinit_Style$Overflow$1 = emptyMethod;
}

defineClass(577, 473, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Overflow$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/1', 577, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, null, null);
function $clinit_Style$Overflow$2(){
  $clinit_Style$Overflow$2 = emptyMethod;
}

defineClass(578, 473, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Overflow$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/2', 578, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, null, null);
function $clinit_Style$Overflow$3(){
  $clinit_Style$Overflow$3 = emptyMethod;
}

defineClass(579, 473, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Overflow$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/3', 579, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, null, null);
function $clinit_Style$Overflow$4(){
  $clinit_Style$Overflow$4 = emptyMethod;
}

defineClass(580, 473, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Overflow$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/4', 580, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, null, null);
function $clinit_Style$Overflow$Map(){
  $clinit_Style$Overflow$Map = emptyMethod;
}

defineClass(581, 1, {1:1});
var Lcom_google_gwt_dom_client_Style$Overflow$Map_2_classLit = createForClass('com.google.gwt.dom.client', 'Style/Overflow/Map', 581, Ljava_lang_Object_2_classLit);
function $clinit_Style$Position(){
  $clinit_Style$Position = emptyMethod;
}

defineClass(474, 5, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Position_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position', 474, Ljava_lang_Enum_2_classLit, null, null);
function $clinit_Style$Position$1(){
  $clinit_Style$Position$1 = emptyMethod;
}

defineClass(582, 474, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Position$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/1', 582, Lcom_google_gwt_dom_client_Style$Position_2_classLit, null, null);
function $clinit_Style$Position$2(){
  $clinit_Style$Position$2 = emptyMethod;
}

defineClass(583, 474, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Position$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/2', 583, Lcom_google_gwt_dom_client_Style$Position_2_classLit, null, null);
function $clinit_Style$Position$3(){
  $clinit_Style$Position$3 = emptyMethod;
}

defineClass(584, 474, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Position$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/3', 584, Lcom_google_gwt_dom_client_Style$Position_2_classLit, null, null);
function $clinit_Style$Position$4(){
  $clinit_Style$Position$4 = emptyMethod;
}

defineClass(585, 474, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Position$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/4', 585, Lcom_google_gwt_dom_client_Style$Position_2_classLit, null, null);
function $clinit_Style$Position$Map(){
  $clinit_Style$Position$Map = emptyMethod;
}

defineClass(586, 1, {1:1});
var Lcom_google_gwt_dom_client_Style$Position$Map_2_classLit = createForClass('com.google.gwt.dom.client', 'Style/Position/Map', 586, Ljava_lang_Object_2_classLit);
function $clinit_Style$TableLayout(){
  $clinit_Style$TableLayout = emptyMethod;
}

defineClass(475, 5, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$TableLayout_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TableLayout', 475, Ljava_lang_Enum_2_classLit, null, null);
function $clinit_Style$TableLayout$1(){
  $clinit_Style$TableLayout$1 = emptyMethod;
}

defineClass(587, 475, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$TableLayout$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TableLayout/1', 587, Lcom_google_gwt_dom_client_Style$TableLayout_2_classLit, null, null);
function $clinit_Style$TableLayout$2(){
  $clinit_Style$TableLayout$2 = emptyMethod;
}

defineClass(588, 475, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$TableLayout$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TableLayout/2', 588, Lcom_google_gwt_dom_client_Style$TableLayout_2_classLit, null, null);
function $clinit_Style$TableLayout$Map(){
  $clinit_Style$TableLayout$Map = emptyMethod;
}

defineClass(589, 1, {1:1});
var Lcom_google_gwt_dom_client_Style$TableLayout$Map_2_classLit = createForClass('com.google.gwt.dom.client', 'Style/TableLayout/Map', 589, Ljava_lang_Object_2_classLit);
function $clinit_Style$TextAlign(){
  $clinit_Style$TextAlign = emptyMethod;
}

defineClass(476, 5, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign', 476, Ljava_lang_Enum_2_classLit, null, null);
function $clinit_Style$TextAlign$1(){
  $clinit_Style$TextAlign$1 = emptyMethod;
}

defineClass(590, 476, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$TextAlign$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/1', 590, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, null, null);
function $clinit_Style$TextAlign$2(){
  $clinit_Style$TextAlign$2 = emptyMethod;
}

defineClass(591, 476, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$TextAlign$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/2', 591, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, null, null);
function $clinit_Style$TextAlign$3(){
  $clinit_Style$TextAlign$3 = emptyMethod;
}

defineClass(592, 476, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$TextAlign$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/3', 592, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, null, null);
function $clinit_Style$TextAlign$4(){
  $clinit_Style$TextAlign$4 = emptyMethod;
}

defineClass(593, 476, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$TextAlign$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/4', 593, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, null, null);
function $clinit_Style$TextAlign$Map(){
  $clinit_Style$TextAlign$Map = emptyMethod;
}

defineClass(594, 1, {1:1});
var Lcom_google_gwt_dom_client_Style$TextAlign$Map_2_classLit = createForClass('com.google.gwt.dom.client', 'Style/TextAlign/Map', 594, Ljava_lang_Object_2_classLit);
function $clinit_Style$TextDecoration(){
  $clinit_Style$TextDecoration = emptyMethod;
}

defineClass(477, 5, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$TextDecoration_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextDecoration', 477, Ljava_lang_Enum_2_classLit, null, null);
function $clinit_Style$TextDecoration$1(){
  $clinit_Style$TextDecoration$1 = emptyMethod;
}

defineClass(595, 477, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$TextDecoration$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextDecoration/1', 595, Lcom_google_gwt_dom_client_Style$TextDecoration_2_classLit, null, null);
function $clinit_Style$TextDecoration$2(){
  $clinit_Style$TextDecoration$2 = emptyMethod;
}

defineClass(596, 477, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$TextDecoration$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextDecoration/2', 596, Lcom_google_gwt_dom_client_Style$TextDecoration_2_classLit, null, null);
function $clinit_Style$TextDecoration$3(){
  $clinit_Style$TextDecoration$3 = emptyMethod;
}

defineClass(597, 477, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$TextDecoration$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextDecoration/3', 597, Lcom_google_gwt_dom_client_Style$TextDecoration_2_classLit, null, null);
function $clinit_Style$TextDecoration$4(){
  $clinit_Style$TextDecoration$4 = emptyMethod;
}

defineClass(598, 477, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$TextDecoration$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextDecoration/4', 598, Lcom_google_gwt_dom_client_Style$TextDecoration_2_classLit, null, null);
function $clinit_Style$TextDecoration$5(){
  $clinit_Style$TextDecoration$5 = emptyMethod;
}

defineClass(599, 477, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$TextDecoration$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextDecoration/5', 599, Lcom_google_gwt_dom_client_Style$TextDecoration_2_classLit, null, null);
function $clinit_Style$TextDecoration$Map(){
  $clinit_Style$TextDecoration$Map = emptyMethod;
}

defineClass(600, 1, {1:1});
var Lcom_google_gwt_dom_client_Style$TextDecoration$Map_2_classLit = createForClass('com.google.gwt.dom.client', 'Style/TextDecoration/Map', 600, Ljava_lang_Object_2_classLit);
function $clinit_Style$TextJustify(){
  $clinit_Style$TextJustify = emptyMethod;
}

defineClass(478, 5, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$TextJustify_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextJustify', 478, Ljava_lang_Enum_2_classLit, null, null);
function $clinit_Style$TextJustify$1(){
  $clinit_Style$TextJustify$1 = emptyMethod;
}

defineClass(601, 478, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$TextJustify$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextJustify/1', 601, Lcom_google_gwt_dom_client_Style$TextJustify_2_classLit, null, null);
function $clinit_Style$TextJustify$2(){
  $clinit_Style$TextJustify$2 = emptyMethod;
}

defineClass(602, 478, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$TextJustify$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextJustify/2', 602, Lcom_google_gwt_dom_client_Style$TextJustify_2_classLit, null, null);
function $clinit_Style$TextJustify$3(){
  $clinit_Style$TextJustify$3 = emptyMethod;
}

defineClass(603, 478, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$TextJustify$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextJustify/3', 603, Lcom_google_gwt_dom_client_Style$TextJustify_2_classLit, null, null);
function $clinit_Style$TextJustify$4(){
  $clinit_Style$TextJustify$4 = emptyMethod;
}

defineClass(604, 478, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$TextJustify$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextJustify/4', 604, Lcom_google_gwt_dom_client_Style$TextJustify_2_classLit, null, null);
function $clinit_Style$TextJustify$5(){
  $clinit_Style$TextJustify$5 = emptyMethod;
}

defineClass(605, 478, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$TextJustify$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextJustify/5', 605, Lcom_google_gwt_dom_client_Style$TextJustify_2_classLit, null, null);
function $clinit_Style$TextJustify$6(){
  $clinit_Style$TextJustify$6 = emptyMethod;
}

defineClass(606, 478, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$TextJustify$6_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextJustify/6', 606, Lcom_google_gwt_dom_client_Style$TextJustify_2_classLit, null, null);
function $clinit_Style$TextJustify$7(){
  $clinit_Style$TextJustify$7 = emptyMethod;
}

defineClass(607, 478, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$TextJustify$7_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextJustify/7', 607, Lcom_google_gwt_dom_client_Style$TextJustify_2_classLit, null, null);
function $clinit_Style$TextJustify$Map(){
  $clinit_Style$TextJustify$Map = emptyMethod;
}

defineClass(608, 1, {1:1});
var Lcom_google_gwt_dom_client_Style$TextJustify$Map_2_classLit = createForClass('com.google.gwt.dom.client', 'Style/TextJustify/Map', 608, Ljava_lang_Object_2_classLit);
function $clinit_Style$TextOverflow(){
  $clinit_Style$TextOverflow = emptyMethod;
}

defineClass(479, 5, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$TextOverflow_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextOverflow', 479, Ljava_lang_Enum_2_classLit, null, null);
function $clinit_Style$TextOverflow$1(){
  $clinit_Style$TextOverflow$1 = emptyMethod;
}

defineClass(609, 479, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$TextOverflow$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextOverflow/1', 609, Lcom_google_gwt_dom_client_Style$TextOverflow_2_classLit, null, null);
function $clinit_Style$TextOverflow$2(){
  $clinit_Style$TextOverflow$2 = emptyMethod;
}

defineClass(610, 479, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$TextOverflow$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextOverflow/2', 610, Lcom_google_gwt_dom_client_Style$TextOverflow_2_classLit, null, null);
function $clinit_Style$TextOverflow$Map(){
  $clinit_Style$TextOverflow$Map = emptyMethod;
}

defineClass(611, 1, {1:1});
var Lcom_google_gwt_dom_client_Style$TextOverflow$Map_2_classLit = createForClass('com.google.gwt.dom.client', 'Style/TextOverflow/Map', 611, Ljava_lang_Object_2_classLit);
function $clinit_Style$TextTransform(){
  $clinit_Style$TextTransform = emptyMethod;
}

defineClass(480, 5, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$TextTransform_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextTransform', 480, Ljava_lang_Enum_2_classLit, null, null);
function $clinit_Style$TextTransform$1(){
  $clinit_Style$TextTransform$1 = emptyMethod;
}

defineClass(612, 480, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$TextTransform$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextTransform/1', 612, Lcom_google_gwt_dom_client_Style$TextTransform_2_classLit, null, null);
function $clinit_Style$TextTransform$2(){
  $clinit_Style$TextTransform$2 = emptyMethod;
}

defineClass(613, 480, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$TextTransform$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextTransform/2', 613, Lcom_google_gwt_dom_client_Style$TextTransform_2_classLit, null, null);
function $clinit_Style$TextTransform$3(){
  $clinit_Style$TextTransform$3 = emptyMethod;
}

defineClass(614, 480, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$TextTransform$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextTransform/3', 614, Lcom_google_gwt_dom_client_Style$TextTransform_2_classLit, null, null);
function $clinit_Style$TextTransform$4(){
  $clinit_Style$TextTransform$4 = emptyMethod;
}

defineClass(615, 480, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$TextTransform$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextTransform/4', 615, Lcom_google_gwt_dom_client_Style$TextTransform_2_classLit, null, null);
function $clinit_Style$TextTransform$Map(){
  $clinit_Style$TextTransform$Map = emptyMethod;
}

defineClass(616, 1, {1:1});
var Lcom_google_gwt_dom_client_Style$TextTransform$Map_2_classLit = createForClass('com.google.gwt.dom.client', 'Style/TextTransform/Map', 616, Ljava_lang_Object_2_classLit);
function $clinit_Style$Unit(){
  $clinit_Style$Unit = emptyMethod;
}

defineClass(463, 5, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Unit_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit', 463, Ljava_lang_Enum_2_classLit, null, null);
function $clinit_Style$Unit$1(){
  $clinit_Style$Unit$1 = emptyMethod;
}

defineClass(484, 463, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Unit$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/1', 484, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null, null);
function $clinit_Style$Unit$2(){
  $clinit_Style$Unit$2 = emptyMethod;
}

defineClass(485, 463, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Unit$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/2', 485, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null, null);
function $clinit_Style$Unit$3(){
  $clinit_Style$Unit$3 = emptyMethod;
}

defineClass(486, 463, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Unit$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/3', 486, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null, null);
function $clinit_Style$Unit$4(){
  $clinit_Style$Unit$4 = emptyMethod;
}

defineClass(487, 463, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Unit$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/4', 487, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null, null);
function $clinit_Style$Unit$5(){
  $clinit_Style$Unit$5 = emptyMethod;
}

defineClass(488, 463, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Unit$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/5', 488, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null, null);
function $clinit_Style$Unit$6(){
  $clinit_Style$Unit$6 = emptyMethod;
}

defineClass(489, 463, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Unit$6_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/6', 489, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null, null);
function $clinit_Style$Unit$7(){
  $clinit_Style$Unit$7 = emptyMethod;
}

defineClass(490, 463, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Unit$7_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/7', 490, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null, null);
function $clinit_Style$Unit$8(){
  $clinit_Style$Unit$8 = emptyMethod;
}

defineClass(491, 463, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Unit$8_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/8', 491, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null, null);
function $clinit_Style$Unit$9(){
  $clinit_Style$Unit$9 = emptyMethod;
}

defineClass(492, 463, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Unit$9_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/9', 492, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null, null);
function $clinit_Style$Unit$Map(){
  $clinit_Style$Unit$Map = emptyMethod;
}

defineClass(493, 1, {1:1});
var Lcom_google_gwt_dom_client_Style$Unit$Map_2_classLit = createForClass('com.google.gwt.dom.client', 'Style/Unit/Map', 493, Ljava_lang_Object_2_classLit);
function $clinit_Style$VerticalAlign(){
  $clinit_Style$VerticalAlign = emptyMethod;
}

defineClass(481, 5, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$VerticalAlign_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/VerticalAlign', 481, Ljava_lang_Enum_2_classLit, null, null);
function $clinit_Style$VerticalAlign$1(){
  $clinit_Style$VerticalAlign$1 = emptyMethod;
}

defineClass(617, 481, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$VerticalAlign$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/VerticalAlign/1', 617, Lcom_google_gwt_dom_client_Style$VerticalAlign_2_classLit, null, null);
function $clinit_Style$VerticalAlign$2(){
  $clinit_Style$VerticalAlign$2 = emptyMethod;
}

defineClass(618, 481, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$VerticalAlign$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/VerticalAlign/2', 618, Lcom_google_gwt_dom_client_Style$VerticalAlign_2_classLit, null, null);
function $clinit_Style$VerticalAlign$3(){
  $clinit_Style$VerticalAlign$3 = emptyMethod;
}

defineClass(619, 481, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$VerticalAlign$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/VerticalAlign/3', 619, Lcom_google_gwt_dom_client_Style$VerticalAlign_2_classLit, null, null);
function $clinit_Style$VerticalAlign$4(){
  $clinit_Style$VerticalAlign$4 = emptyMethod;
}

defineClass(620, 481, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$VerticalAlign$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/VerticalAlign/4', 620, Lcom_google_gwt_dom_client_Style$VerticalAlign_2_classLit, null, null);
function $clinit_Style$VerticalAlign$5(){
  $clinit_Style$VerticalAlign$5 = emptyMethod;
}

defineClass(621, 481, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$VerticalAlign$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/VerticalAlign/5', 621, Lcom_google_gwt_dom_client_Style$VerticalAlign_2_classLit, null, null);
function $clinit_Style$VerticalAlign$6(){
  $clinit_Style$VerticalAlign$6 = emptyMethod;
}

defineClass(622, 481, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$VerticalAlign$6_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/VerticalAlign/6', 622, Lcom_google_gwt_dom_client_Style$VerticalAlign_2_classLit, null, null);
function $clinit_Style$VerticalAlign$7(){
  $clinit_Style$VerticalAlign$7 = emptyMethod;
}

defineClass(623, 481, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$VerticalAlign$7_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/VerticalAlign/7', 623, Lcom_google_gwt_dom_client_Style$VerticalAlign_2_classLit, null, null);
function $clinit_Style$VerticalAlign$8(){
  $clinit_Style$VerticalAlign$8 = emptyMethod;
}

defineClass(624, 481, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$VerticalAlign$8_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/VerticalAlign/8', 624, Lcom_google_gwt_dom_client_Style$VerticalAlign_2_classLit, null, null);
function $clinit_Style$VerticalAlign$Map(){
  $clinit_Style$VerticalAlign$Map = emptyMethod;
}

defineClass(625, 1, {1:1});
var Lcom_google_gwt_dom_client_Style$VerticalAlign$Map_2_classLit = createForClass('com.google.gwt.dom.client', 'Style/VerticalAlign/Map', 625, Ljava_lang_Object_2_classLit);
function $clinit_Style$Visibility(){
  $clinit_Style$Visibility = emptyMethod;
}

defineClass(482, 5, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Visibility_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Visibility', 482, Ljava_lang_Enum_2_classLit, null, null);
function $clinit_Style$Visibility$1(){
  $clinit_Style$Visibility$1 = emptyMethod;
}

defineClass(626, 482, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Visibility$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Visibility/1', 626, Lcom_google_gwt_dom_client_Style$Visibility_2_classLit, null, null);
function $clinit_Style$Visibility$2(){
  $clinit_Style$Visibility$2 = emptyMethod;
}

defineClass(627, 482, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$Visibility$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Visibility/2', 627, Lcom_google_gwt_dom_client_Style$Visibility_2_classLit, null, null);
function $clinit_Style$Visibility$Map(){
  $clinit_Style$Visibility$Map = emptyMethod;
}

defineClass(628, 1, {1:1});
var Lcom_google_gwt_dom_client_Style$Visibility$Map_2_classLit = createForClass('com.google.gwt.dom.client', 'Style/Visibility/Map', 628, Ljava_lang_Object_2_classLit);
function $clinit_Style$WhiteSpace(){
  $clinit_Style$WhiteSpace = emptyMethod;
}

defineClass(483, 5, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace', 483, Ljava_lang_Enum_2_classLit, null, null);
function $clinit_Style$WhiteSpace$1(){
  $clinit_Style$WhiteSpace$1 = emptyMethod;
}

defineClass(629, 483, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$WhiteSpace$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace/1', 629, Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, null, null);
function $clinit_Style$WhiteSpace$2(){
  $clinit_Style$WhiteSpace$2 = emptyMethod;
}

defineClass(630, 483, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$WhiteSpace$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace/2', 630, Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, null, null);
function $clinit_Style$WhiteSpace$3(){
  $clinit_Style$WhiteSpace$3 = emptyMethod;
}

defineClass(631, 483, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$WhiteSpace$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace/3', 631, Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, null, null);
function $clinit_Style$WhiteSpace$4(){
  $clinit_Style$WhiteSpace$4 = emptyMethod;
}

defineClass(632, 483, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$WhiteSpace$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace/4', 632, Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, null, null);
function $clinit_Style$WhiteSpace$5(){
  $clinit_Style$WhiteSpace$5 = emptyMethod;
}

defineClass(633, 483, {3:1, 4:1, 5:1, 1:1});
var Lcom_google_gwt_dom_client_Style$WhiteSpace$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace/5', 633, Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, null, null);
function $clinit_Style$WhiteSpace$Map(){
  $clinit_Style$WhiteSpace$Map = emptyMethod;
}

defineClass(634, 1, {1:1});
var Lcom_google_gwt_dom_client_Style$WhiteSpace$Map_2_classLit = createForClass('com.google.gwt.dom.client', 'Style/WhiteSpace/Map', 634, Ljava_lang_Object_2_classLit);
function $clinit_StyleElement(){
  $clinit_StyleElement = emptyMethod;
  $clinit_Element();
}

function $getType_0(this$static){
  return this$static.type;
}

function $setType(this$static, type_0){
  this$static.type = type_0;
}

var TAG_3 = 'style';
function $clinit_StyleInjector(){
  $clinit_StyleInjector = emptyMethod;
  $clinit_Object();
  toInject = $cast(createArray());
  toInjectAtEnd = $cast(createArray());
  toInjectAtStart = $cast(createArray());
  flusher = new StyleInjector$1;
}

function flush(which){
  $clinit_StyleInjector();
  var css, maybeReturn, toReturn;
  toReturn = null;
  if ($length_0(toInjectAtStart) != 0) {
    css = $join_0(toInjectAtStart, '');
    maybeReturn = ($clinit_StyleInjector$StyleInjectorImpl() , IMPL).injectStyleSheetAtStart(css);
    if (jsEquals(toInjectAtStart, which)) {
      toReturn = maybeReturn;
    }
    $setLength_0(toInjectAtStart, 0);
  }
  if ($length_0(toInject) != 0) {
    css = $join_0(toInject, '');
    maybeReturn = ($clinit_StyleInjector$StyleInjectorImpl() , IMPL).injectStyleSheet(css);
    if (jsEquals(toInject, which)) {
      toReturn = maybeReturn;
    }
    $setLength_0(toInject, 0);
  }
  if ($length_0(toInjectAtEnd) != 0) {
    css = $join_0(toInjectAtEnd, '');
    maybeReturn = ($clinit_StyleInjector$StyleInjectorImpl() , IMPL).injectStyleSheetAtEnd(css);
    if (jsEquals(toInjectAtEnd, which)) {
      toReturn = maybeReturn;
    }
    $setLength_0(toInjectAtEnd, 0);
  }
  needsInjection = false;
  return toReturn;
}

function inject_1(css){
  $clinit_StyleInjector();
  inject_2(css, false);
}

function inject_2(css, immediate){
  $push_0(toInject, css);
  inject_3(immediate);
}

function inject_3(immediate){
  if (immediate) {
    flush(null);
  }
   else {
    schedule();
  }
}

function schedule(){
  if (!needsInjection) {
    needsInjection = true;
    get_0().scheduleFinally(flusher);
  }
}

defineClass(647, 1, {1:1});
var flusher, needsInjection = false, toInject, toInjectAtEnd, toInjectAtStart;
var Lcom_google_gwt_dom_client_StyleInjector_2_classLit = createForClass('com.google.gwt.dom.client', 'StyleInjector', 647, Ljava_lang_Object_2_classLit);
function $clinit_StyleInjector$1(){
  $clinit_StyleInjector$1 = emptyMethod;
  $clinit_Object();
}

function StyleInjector$1(){
  $clinit_StyleInjector$1();
  Object_0.call(this);
  this.$init_38();
}

defineClass(293, 1, {1:1}, StyleInjector$1);
_.$init_38 = function $init_38(){
}
;
_.execute_0 = function execute_4(){
  if ($clinit_StyleInjector() , needsInjection) {
    flush(null);
  }
}
;
var Lcom_google_gwt_dom_client_StyleInjector$1_2_classLit = createForClass('com.google.gwt.dom.client', 'StyleInjector/1', 293, Ljava_lang_Object_2_classLit);
function $clinit_StyleInjector$StyleInjectorImpl(){
  $clinit_StyleInjector$StyleInjectorImpl = emptyMethod;
  $clinit_Object();
  IMPL = castTo(new StyleInjector$StyleInjectorImpl, 82);
}

function StyleInjector$StyleInjectorImpl(){
  Object_0.call(this);
  this.$init_39();
}

defineClass(82, 1, {82:1, 1:1}, StyleInjector$StyleInjectorImpl);
_.$init_39 = function $init_39(){
}
;
_.createElement_1 = function createElement_0(contents){
  var style;
  style = $createStyleElement(get_1());
  $setPropertyString(style, 'language', 'text/css');
  this.setContents(style, contents);
  return style;
}
;
_.getHead = function getHead(){
  var elt;
  if (isNull(this.head_0)) {
    elt = $getItem($getElementsByTagName_0(get_1(), 'head'), 0);
    this.head_0 = as(elt);
  }
  return this.head_0;
}
;
_.injectStyleSheet = function injectStyleSheet(contents){
  var style;
  style = this.createElement_1(contents);
  $appendChild(this.getHead(), style);
  return style;
}
;
_.injectStyleSheetAtEnd = function injectStyleSheetAtEnd(contents){
  return this.injectStyleSheet(contents);
}
;
_.injectStyleSheetAtStart = function injectStyleSheetAtStart(contents){
  var style;
  style = this.createElement_1(contents);
  $insertBefore(this.getHead(), style, $getFirstChild(this.head_0));
  return style;
}
;
_.setContents = function setContents(style, contents){
  $setInnerText(style, contents);
}
;
var IMPL;
var Lcom_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_2_classLit = createForClass('com.google.gwt.dom.client', 'StyleInjector/StyleInjectorImpl', 82, Ljava_lang_Object_2_classLit);
function $clinit_StyleInjector$StyleInjectorImplIE(){
  $clinit_StyleInjector$StyleInjectorImplIE = emptyMethod;
}

defineClass(648, 82, {82:1, 1:1});
var Lcom_google_gwt_dom_client_StyleInjector$StyleInjectorImplIE_2_classLit = createForClass('com.google.gwt.dom.client', 'StyleInjector/StyleInjectorImplIE', 648, Lcom_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_2_classLit);
function $clinit_Event(){
  $clinit_Event = emptyMethod;
  $clinit_Object();
}

function Event_0(){
  $clinit_Event();
  Object_0.call(this);
  this.$init_40();
}

defineClass(89, 1, {1:1});
_.$init_40 = function $init_40(){
}
;
_.getSource = function getSource(){
  return this.source;
}
;
_.setSource = function setSource(source){
  this.source = source;
}
;
_.toString_0 = function toString_5(){
  return 'An event type';
}
;
var Lcom_google_web_bindery_event_shared_Event_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event', 89, Ljava_lang_Object_2_classLit);
function $clinit_GwtEvent(){
  $clinit_GwtEvent = emptyMethod;
  $clinit_Event();
}

function GwtEvent(){
  $clinit_GwtEvent();
  Event_0.call(this);
  this.$init_41();
}

defineClass(17, 89, {1:1});
_.$init_41 = function $init_41(){
}
;
_.dispatch = function dispatch(handler){
  this.dispatch_0(castTo(handler, 19));
}
;
_.getAssociatedType = function getAssociatedType(){
  return this.getAssociatedType_0();
}
;
_.assertLive = function assertLive(){
}
;
_.getSource = function getSource_0(){
  this.assertLive();
  return getClassPrototype(89).getSource.call(this);
}
;
_.isLive = function isLive(){
  return !this.dead;
}
;
_.kill = function kill(){
  this.dead = true;
  this.setSource(null);
}
;
_.overrideSource = function overrideSource(source){
  getClassPrototype(89).setSource.call(this, source);
}
;
_.revive = function revive(){
  this.dead = false;
  this.setSource(null);
}
;
_.dead = false;
var Lcom_google_gwt_event_shared_GwtEvent_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent', 17, Lcom_google_web_bindery_event_shared_Event_2_classLit);
function $clinit_HasNativeEvent(){
  $clinit_HasNativeEvent = emptyMethod;
}

var Lcom_google_gwt_event_dom_client_HasNativeEvent_2_classLit = createForInterface('com.google.gwt.event.dom.client', 'HasNativeEvent');
function $clinit_DomEvent(){
  $clinit_DomEvent = emptyMethod;
  $clinit_GwtEvent();
}

function DomEvent(){
  $clinit_DomEvent();
  GwtEvent.call(this);
  this.$init_42();
}

function fireNativeEvent(nativeEvent, handlerSource, relativeElem){
  $clinit_DomEvent();
  var currentNative, currentRelativeElem, type_0, type$iterator, types;
  if (isNotNull(registered)) {
    types = castTo(registered.unsafeGet($getType(nativeEvent)), 21);
    if (isNotNull(types)) {
      for (type$iterator = types.iterator(); type$iterator.hasNext_0();) {
        type_0 = castTo(type$iterator.next_1(), 98);
        currentNative = type_0.flyweight.nativeEvent;
        currentRelativeElem = type_0.flyweight.relativeElem;
        type_0.flyweight.setNativeEvent(nativeEvent);
        type_0.flyweight.setRelativeElement(relativeElem);
        handlerSource.fireEvent(type_0.flyweight);
        type_0.flyweight.setNativeEvent(currentNative);
        type_0.flyweight.setRelativeElement(currentRelativeElem);
      }
    }
  }
}

function init(){
  $clinit_DomEvent();
  registered = new PrivateMap;
}

defineClass(255, 17, {1:1});
_.$init_42 = function $init_42(){
}
;
_.getAssociatedType_0 = function getAssociatedType_0(){
  return this.getAssociatedType_1();
}
;
_.preventDefault_0 = function preventDefault(){
  this.assertLive();
  $preventDefault(this.nativeEvent);
}
;
_.setNativeEvent = function setNativeEvent(nativeEvent){
  this.nativeEvent = nativeEvent;
}
;
_.setRelativeElement = function setRelativeElement(relativeElem){
  this.relativeElem = relativeElem;
}
;
_.stopPropagation_0 = function stopPropagation(){
  this.assertLive();
  $stopPropagation(this.nativeEvent);
}
;
var registered;
var Lcom_google_gwt_event_dom_client_DomEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'DomEvent', 255, Lcom_google_gwt_event_shared_GwtEvent_2_classLit);
function $clinit_HumanInputEvent(){
  $clinit_HumanInputEvent = emptyMethod;
  $clinit_DomEvent();
}

function HumanInputEvent(){
  $clinit_HumanInputEvent();
  DomEvent.call(this);
  this.$init_43();
}

defineClass(256, 255, {1:1});
_.$init_43 = function $init_43(){
}
;
var Lcom_google_gwt_event_dom_client_HumanInputEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'HumanInputEvent', 256, Lcom_google_gwt_event_dom_client_DomEvent_2_classLit);
function $clinit_MouseEvent(){
  $clinit_MouseEvent = emptyMethod;
  $clinit_HumanInputEvent();
}

function MouseEvent_0(){
  $clinit_MouseEvent();
  HumanInputEvent.call(this);
  this.$init_44();
}

defineClass(257, 256, {1:1});
_.$init_44 = function $init_44(){
}
;
var Lcom_google_gwt_event_dom_client_MouseEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseEvent', 257, Lcom_google_gwt_event_dom_client_HumanInputEvent_2_classLit);
function $clinit_ClickEvent(){
  $clinit_ClickEvent = emptyMethod;
  $clinit_MouseEvent();
  TYPE = new DomEvent$Type('click', new ClickEvent);
}

function ClickEvent(){
  MouseEvent_0.call(this);
  this.$init_45();
}

function getType(){
  $clinit_ClickEvent();
  return TYPE;
}

defineClass(258, 257, {1:1}, ClickEvent);
_.$init_45 = function $init_45(){
}
;
_.dispatch_0 = function dispatch_1(handler){
  this.dispatch_1(castTo(handler, 41));
}
;
_.dispatch_1 = function dispatch_0(handler){
  handler.onClick(this);
}
;
_.getAssociatedType_1 = function getAssociatedType_1(){
  return TYPE;
}
;
var TYPE;
var Lcom_google_gwt_event_dom_client_ClickEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'ClickEvent', 258, Lcom_google_gwt_event_dom_client_MouseEvent_2_classLit);
function $clinit_EventHandler(){
  $clinit_EventHandler = emptyMethod;
}

var Lcom_google_gwt_event_shared_EventHandler_2_classLit = createForInterface('com.google.gwt.event.shared', 'EventHandler');
function $clinit_ClickHandler(){
  $clinit_ClickHandler = emptyMethod;
}

var Lcom_google_gwt_event_dom_client_ClickHandler_2_classLit = createForInterface('com.google.gwt.event.dom.client', 'ClickHandler');
function $clinit_Event$Type(){
  $clinit_Event$Type = emptyMethod;
  $clinit_Object();
}

function Event$Type(){
  $clinit_Event$Type();
  Object_0.call(this);
  this.$init_46();
  this.index_0 = ++nextHashCode;
}

defineClass(210, 1, {1:1});
_.$init_46 = function $init_46(){
}
;
_.hashCode = function hashCode_2(){
  return this.index_0;
}
;
_.toString_0 = function toString_6(){
  return 'Event type';
}
;
_.index_0 = 0;
var nextHashCode = 0;
var Lcom_google_web_bindery_event_shared_Event$Type_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event/Type', 210, Ljava_lang_Object_2_classLit);
function $clinit_GwtEvent$Type(){
  $clinit_GwtEvent$Type = emptyMethod;
  $clinit_Event$Type();
}

function GwtEvent$Type(){
  $clinit_GwtEvent$Type();
  Event$Type.call(this);
  this.$init_47();
}

defineClass(16, 210, {16:1, 1:1}, GwtEvent$Type);
_.$init_47 = function $init_47(){
}
;
var Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent/Type', 16, Lcom_google_web_bindery_event_shared_Event$Type_2_classLit);
function $clinit_DomEvent$Type(){
  $clinit_DomEvent$Type = emptyMethod;
  $clinit_GwtEvent$Type();
}

function DomEvent$Type(eventName, flyweight){
  $clinit_DomEvent$Type();
  var types;
  GwtEvent$Type.call(this);
  this.$init_48();
  this.flyweight = flyweight;
  if (isNull(($clinit_DomEvent() , registered))) {
    init();
  }
  types = castTo(($clinit_DomEvent() , registered).unsafeGet(eventName), 21);
  if (isNull(types)) {
    types = new ArrayList;
    ($clinit_DomEvent() , registered).unsafePut(eventName, types);
  }
  types.add_3(this);
  this.name_0 = eventName;
}

defineClass(98, 16, {98:1, 16:1, 1:1}, DomEvent$Type);
_.$init_48 = function $init_48(){
}
;
_.getName = function getName_0(){
  return this.name_0;
}
;
var Lcom_google_gwt_event_dom_client_DomEvent$Type_2_classLit = createForClass('com.google.gwt.event.dom.client', 'DomEvent/Type', 98, Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit);
function $clinit_HasHandlers(){
  $clinit_HasHandlers = emptyMethod;
}

var Lcom_google_gwt_event_shared_HasHandlers_2_classLit = createForInterface('com.google.gwt.event.shared', 'HasHandlers');
function $clinit_HasDragEndHandlers(){
  $clinit_HasDragEndHandlers = emptyMethod;
}

var Lcom_google_gwt_event_dom_client_HasDragEndHandlers_2_classLit = createForInterface('com.google.gwt.event.dom.client', 'HasDragEndHandlers');
function $clinit_HasDragEnterHandlers(){
  $clinit_HasDragEnterHandlers = emptyMethod;
}

var Lcom_google_gwt_event_dom_client_HasDragEnterHandlers_2_classLit = createForInterface('com.google.gwt.event.dom.client', 'HasDragEnterHandlers');
function $clinit_HasDragLeaveHandlers(){
  $clinit_HasDragLeaveHandlers = emptyMethod;
}

var Lcom_google_gwt_event_dom_client_HasDragLeaveHandlers_2_classLit = createForInterface('com.google.gwt.event.dom.client', 'HasDragLeaveHandlers');
function $clinit_HasDragHandlers(){
  $clinit_HasDragHandlers = emptyMethod;
}

var Lcom_google_gwt_event_dom_client_HasDragHandlers_2_classLit = createForInterface('com.google.gwt.event.dom.client', 'HasDragHandlers');
function $clinit_HasDragOverHandlers(){
  $clinit_HasDragOverHandlers = emptyMethod;
}

var Lcom_google_gwt_event_dom_client_HasDragOverHandlers_2_classLit = createForInterface('com.google.gwt.event.dom.client', 'HasDragOverHandlers');
function $clinit_HasDragStartHandlers(){
  $clinit_HasDragStartHandlers = emptyMethod;
}

var Lcom_google_gwt_event_dom_client_HasDragStartHandlers_2_classLit = createForInterface('com.google.gwt.event.dom.client', 'HasDragStartHandlers');
function $clinit_HasDropHandlers(){
  $clinit_HasDropHandlers = emptyMethod;
}

var Lcom_google_gwt_event_dom_client_HasDropHandlers_2_classLit = createForInterface('com.google.gwt.event.dom.client', 'HasDropHandlers');
function $clinit_HasAllDragAndDropHandlers(){
  $clinit_HasAllDragAndDropHandlers = emptyMethod;
}

var Lcom_google_gwt_event_dom_client_HasAllDragAndDropHandlers_2_classLit = createForInterface('com.google.gwt.event.dom.client', 'HasAllDragAndDropHandlers');
function $clinit_HasGestureStartHandlers(){
  $clinit_HasGestureStartHandlers = emptyMethod;
}

var Lcom_google_gwt_event_dom_client_HasGestureStartHandlers_2_classLit = createForInterface('com.google.gwt.event.dom.client', 'HasGestureStartHandlers');
function $clinit_HasGestureChangeHandlers(){
  $clinit_HasGestureChangeHandlers = emptyMethod;
}

var Lcom_google_gwt_event_dom_client_HasGestureChangeHandlers_2_classLit = createForInterface('com.google.gwt.event.dom.client', 'HasGestureChangeHandlers');
function $clinit_HasGestureEndHandlers(){
  $clinit_HasGestureEndHandlers = emptyMethod;
}

var Lcom_google_gwt_event_dom_client_HasGestureEndHandlers_2_classLit = createForInterface('com.google.gwt.event.dom.client', 'HasGestureEndHandlers');
function $clinit_HasAllGestureHandlers(){
  $clinit_HasAllGestureHandlers = emptyMethod;
}

var Lcom_google_gwt_event_dom_client_HasAllGestureHandlers_2_classLit = createForInterface('com.google.gwt.event.dom.client', 'HasAllGestureHandlers');
function $clinit_HasMouseDownHandlers(){
  $clinit_HasMouseDownHandlers = emptyMethod;
}

var Lcom_google_gwt_event_dom_client_HasMouseDownHandlers_2_classLit = createForInterface('com.google.gwt.event.dom.client', 'HasMouseDownHandlers');
function $clinit_HasMouseUpHandlers(){
  $clinit_HasMouseUpHandlers = emptyMethod;
}

var Lcom_google_gwt_event_dom_client_HasMouseUpHandlers_2_classLit = createForInterface('com.google.gwt.event.dom.client', 'HasMouseUpHandlers');
function $clinit_HasMouseOutHandlers(){
  $clinit_HasMouseOutHandlers = emptyMethod;
}

var Lcom_google_gwt_event_dom_client_HasMouseOutHandlers_2_classLit = createForInterface('com.google.gwt.event.dom.client', 'HasMouseOutHandlers');
function $clinit_HasMouseOverHandlers(){
  $clinit_HasMouseOverHandlers = emptyMethod;
}

var Lcom_google_gwt_event_dom_client_HasMouseOverHandlers_2_classLit = createForInterface('com.google.gwt.event.dom.client', 'HasMouseOverHandlers');
function $clinit_HasMouseMoveHandlers(){
  $clinit_HasMouseMoveHandlers = emptyMethod;
}

var Lcom_google_gwt_event_dom_client_HasMouseMoveHandlers_2_classLit = createForInterface('com.google.gwt.event.dom.client', 'HasMouseMoveHandlers');
function $clinit_HasMouseWheelHandlers(){
  $clinit_HasMouseWheelHandlers = emptyMethod;
}

var Lcom_google_gwt_event_dom_client_HasMouseWheelHandlers_2_classLit = createForInterface('com.google.gwt.event.dom.client', 'HasMouseWheelHandlers');
function $clinit_HasAllMouseHandlers(){
  $clinit_HasAllMouseHandlers = emptyMethod;
}

var Lcom_google_gwt_event_dom_client_HasAllMouseHandlers_2_classLit = createForInterface('com.google.gwt.event.dom.client', 'HasAllMouseHandlers');
function $clinit_HasTouchStartHandlers(){
  $clinit_HasTouchStartHandlers = emptyMethod;
}

var Lcom_google_gwt_event_dom_client_HasTouchStartHandlers_2_classLit = createForInterface('com.google.gwt.event.dom.client', 'HasTouchStartHandlers');
function $clinit_HasTouchMoveHandlers(){
  $clinit_HasTouchMoveHandlers = emptyMethod;
}

var Lcom_google_gwt_event_dom_client_HasTouchMoveHandlers_2_classLit = createForInterface('com.google.gwt.event.dom.client', 'HasTouchMoveHandlers');
function $clinit_HasTouchEndHandlers(){
  $clinit_HasTouchEndHandlers = emptyMethod;
}

var Lcom_google_gwt_event_dom_client_HasTouchEndHandlers_2_classLit = createForInterface('com.google.gwt.event.dom.client', 'HasTouchEndHandlers');
function $clinit_HasTouchCancelHandlers(){
  $clinit_HasTouchCancelHandlers = emptyMethod;
}

var Lcom_google_gwt_event_dom_client_HasTouchCancelHandlers_2_classLit = createForInterface('com.google.gwt.event.dom.client', 'HasTouchCancelHandlers');
function $clinit_HasAllTouchHandlers(){
  $clinit_HasAllTouchHandlers = emptyMethod;
}

var Lcom_google_gwt_event_dom_client_HasAllTouchHandlers_2_classLit = createForInterface('com.google.gwt.event.dom.client', 'HasAllTouchHandlers');
function $clinit_HasClickHandlers(){
  $clinit_HasClickHandlers = emptyMethod;
}

var Lcom_google_gwt_event_dom_client_HasClickHandlers_2_classLit = createForInterface('com.google.gwt.event.dom.client', 'HasClickHandlers');
function $clinit_HasDoubleClickHandlers(){
  $clinit_HasDoubleClickHandlers = emptyMethod;
}

var Lcom_google_gwt_event_dom_client_HasDoubleClickHandlers_2_classLit = createForInterface('com.google.gwt.event.dom.client', 'HasDoubleClickHandlers');
function $clinit_HasErrorHandlers(){
  $clinit_HasErrorHandlers = emptyMethod;
}

var Lcom_google_gwt_event_dom_client_HasErrorHandlers_2_classLit = createForInterface('com.google.gwt.event.dom.client', 'HasErrorHandlers');
function $clinit_HasLoadHandlers(){
  $clinit_HasLoadHandlers = emptyMethod;
}

var Lcom_google_gwt_event_dom_client_HasLoadHandlers_2_classLit = createForInterface('com.google.gwt.event.dom.client', 'HasLoadHandlers');
function $clinit_PrivateMap(){
  $clinit_PrivateMap = emptyMethod;
  $clinit_Object();
}

function PrivateMap(){
  $clinit_PrivateMap();
  Object_0.call(this);
  this.$init_49();
  if (isScript()) {
    this.map_0 = $cast(create_1());
  }
   else {
    this.javaMap = new HashMap;
  }
}

defineClass(269, 1, {1:1}, PrivateMap);
_.$init_49 = function $init_49(){
}
;
_.get_0 = function get_2(key){
  if (isScript()) {
    return $unsafeGet(this.map_0, key);
  }
   else {
    return this.javaMap.get_2(key + '');
  }
}
;
_.unsafeGet = function unsafeGet(key){
  if (isScript()) {
    return $unsafeGet_0(this.map_0, key);
  }
   else {
    return this.javaMap.get_2(key);
  }
}
;
_.unsafePut = function unsafePut(key, value_0){
  if (isScript()) {
    $unsafePut(this.map_0, key, value_0);
  }
   else {
    this.javaMap.put(key, value_0);
  }
}
;
var Lcom_google_gwt_event_dom_client_PrivateMap_2_classLit = createForClass('com.google.gwt.event.dom.client', 'PrivateMap', 269, Ljava_lang_Object_2_classLit);
function $clinit_PrivateMap$JsMap(){
  $clinit_PrivateMap$JsMap = emptyMethod;
  $clinit_JavaScriptObject();
}

function $unsafeGet(this$static, key){
  $clinit_PrivateMap$JsMap();
  return this$static[key];
}

function $unsafeGet_0(this$static, key){
  $clinit_PrivateMap$JsMap();
  return this$static[key];
}

function $unsafePut(this$static, key, value_0){
  $clinit_PrivateMap$JsMap();
  this$static[key] = value_0;
}

function create_1(){
  $clinit_PrivateMap$JsMap();
  return $cast(createObject());
}

function $clinit_AttachEvent(){
  $clinit_AttachEvent = emptyMethod;
  $clinit_GwtEvent();
}

function AttachEvent(attached){
  GwtEvent.call(this);
  this.$init_50();
  this.attached = attached;
}

function fire(source, attached){
  $clinit_AttachEvent();
  var event_0;
  if (isNotNull(TYPE_0)) {
    event_0 = new AttachEvent(attached);
    source.fireEvent(event_0);
  }
}

defineClass(267, 17, {1:1}, AttachEvent);
_.$init_50 = function $init_50(){
}
;
_.dispatch_0 = function dispatch_3(handler){
  this.dispatch_2(castTo(handler, 680));
}
;
_.dispatch_2 = function dispatch_2(handler){
  handler.onAttachOrDetach(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_2(){
  return TYPE_0;
}
;
_.isAttached = function isAttached(){
  return this.attached;
}
;
_.attached = false;
var TYPE_0;
var Lcom_google_gwt_event_logical_shared_AttachEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'AttachEvent', 267, Lcom_google_gwt_event_shared_GwtEvent_2_classLit);
function $clinit_AttachEvent$Handler(){
  $clinit_AttachEvent$Handler = emptyMethod;
}

var Lcom_google_gwt_event_logical_shared_AttachEvent$Handler_2_classLit = createForInterface('com.google.gwt.event.logical.shared', 'AttachEvent/Handler');
function $clinit_CloseEvent(){
  $clinit_CloseEvent = emptyMethod;
  $clinit_GwtEvent();
}

function CloseEvent_0(target, autoClosed){
  GwtEvent.call(this);
  this.$init_51();
  this.autoClosed = autoClosed;
  this.target = target;
}

function fire_0(source, target){
  $clinit_CloseEvent();
  fire_1(source, target, false);
}

function fire_1(source, target, autoClosed){
  var event_0;
  if (isNotNull(TYPE_1)) {
    event_0 = new CloseEvent_0(target, autoClosed);
    source.fireEvent(event_0);
  }
}

function getType_0(){
  $clinit_CloseEvent();
  return isNotNull(TYPE_1)?TYPE_1:(TYPE_1 = new GwtEvent$Type);
}

defineClass(266, 17, {1:1}, CloseEvent_0);
_.$init_51 = function $init_51(){
}
;
_.dispatch_0 = function dispatch_5(handler){
  this.dispatch_3(castTo(handler, 306));
}
;
_.dispatch_3 = function dispatch_4(handler){
  handler.onClose(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_3(){
  return castTo(TYPE_1, 16);
}
;
_.autoClosed = false;
var TYPE_1;
var Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'CloseEvent', 266, Lcom_google_gwt_event_shared_GwtEvent_2_classLit);
function $clinit_CloseHandler(){
  $clinit_CloseHandler = emptyMethod;
}

var Lcom_google_gwt_event_logical_shared_CloseHandler_2_classLit = createForInterface('com.google.gwt.event.logical.shared', 'CloseHandler');
function $clinit_HasAttachHandlers(){
  $clinit_HasAttachHandlers = emptyMethod;
}

var Lcom_google_gwt_event_logical_shared_HasAttachHandlers_2_classLit = createForInterface('com.google.gwt.event.logical.shared', 'HasAttachHandlers');
function $clinit_HasCloseHandlers(){
  $clinit_HasCloseHandlers = emptyMethod;
}

var Lcom_google_gwt_event_logical_shared_HasCloseHandlers_2_classLit = createForInterface('com.google.gwt.event.logical.shared', 'HasCloseHandlers');
function $clinit_HasResizeHandlers(){
  $clinit_HasResizeHandlers = emptyMethod;
}

var Lcom_google_gwt_event_logical_shared_HasResizeHandlers_2_classLit = createForInterface('com.google.gwt.event.logical.shared', 'HasResizeHandlers');
function $clinit_ResizeHandler(){
  $clinit_ResizeHandler = emptyMethod;
}

var Lcom_google_gwt_event_logical_shared_ResizeHandler_2_classLit = createForInterface('com.google.gwt.event.logical.shared', 'ResizeHandler');
function $clinit_HandlerManager(){
  $clinit_HandlerManager = emptyMethod;
  $clinit_Object();
}

function HandlerManager(source){
  $clinit_HandlerManager();
  HandlerManager_0.call(this, source, false);
}

function HandlerManager_0(source, fireInReverseOrder){
  Object_0.call(this);
  this.$init_52();
  this.eventBus = new HandlerManager$Bus(fireInReverseOrder);
  this.source = source;
}

defineClass(96, 1, {1:1}, HandlerManager);
_.$init_52 = function $init_52(){
}
;
_.addHandler = function addHandler(type_0, handler){
  return new LegacyHandlerWrapper(this.eventBus.addHandler_0(type_0, handler));
}
;
_.fireEvent = function fireEvent(event_0){
  var e, oldSource;
  if (!event_0.isLive()) {
    event_0.revive();
  }
  oldSource = event_0.getSource();
  event_0.overrideSource(this.source);
  try {
    this.eventBus.fireEvent_0(event_0);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 49)) {
      e = $e0;
      throw toJs(new UmbrellaException_0(e.getCauses()));
    }
     else 
      throw toJs($e0);
  }
   finally {
    if (jsEquals(oldSource, null)) {
      event_0.kill();
    }
     else {
      event_0.overrideSource(oldSource);
    }
  }
}
;
_.isEventHandled = function isEventHandled(e){
  return this.eventBus.isEventHandled_0(e);
}
;
var Lcom_google_gwt_event_shared_HandlerManager_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager', 96, Ljava_lang_Object_2_classLit);
function $clinit_EventBus(){
  $clinit_EventBus = emptyMethod;
  $clinit_Object();
}

function EventBus(){
  $clinit_EventBus();
  Object_0.call(this);
  this.$init_53();
}

function dispatchEvent_1(event_0, handler){
  $clinit_EventBus();
  event_0.dispatch(handler);
}

function setSourceOfEvent(event_0, source){
  $clinit_EventBus();
  event_0.setSource(source);
}

defineClass(68, 1, {1:1});
_.$init_53 = function $init_53(){
}
;
var Lcom_google_web_bindery_event_shared_EventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'EventBus', 68, Ljava_lang_Object_2_classLit);
function $clinit_SimpleEventBus(){
  $clinit_SimpleEventBus = emptyMethod;
  $clinit_EventBus();
}

function SimpleEventBus(){
  $clinit_SimpleEventBus();
  SimpleEventBus_0.call(this, false);
}

function SimpleEventBus_0(fireInReverseOrder){
  $clinit_SimpleEventBus();
  EventBus.call(this);
  this.$init_54();
  this.isReverseOrder = fireInReverseOrder;
}

defineClass(55, 68, {68:1, 1:1}, SimpleEventBus);
_.$init_54 = function $init_54(){
  this.firingDepth = 0;
  this.map_0 = new HashMap;
}
;
_.addHandler_0 = function addHandler_0(type_0, handler){
  return this.doAdd(type_0, null, handler);
}
;
_.defer_0 = function defer_0(command){
  if (isNull(this.deferredDeltas)) {
    this.deferredDeltas = new ArrayList;
  }
  this.deferredDeltas.add_3(command);
}
;
_.doAdd = function doAdd(type_0, source, handler){
  if (isNull(type_0)) {
    throw toJs(new NullPointerException_0('Cannot add a handler with a null type'));
  }
  if (jsEquals(handler, null)) {
    throw toJs(new NullPointerException_0('Cannot add a null handler'));
  }
  if (this.firingDepth > 0) {
    this.enqueueAdd(type_0, source, handler);
  }
   else {
    this.doAddNow(type_0, source, handler);
  }
  return new SimpleEventBus$1(this, type_0, source, handler);
}
;
_.doAddNow = function doAddNow(type_0, source, handler){
  $clinit_SimpleEventBus();
  var l;
  l = this.ensureHandlerList(type_0, source);
  l.add_3(handler);
}
;
_.doFire = function doFire(event_0, source){
  var causes, e, handler, handlers, it;
  if (isNull(event_0)) {
    throw toJs(new NullPointerException_0('Cannot fire null event'));
  }
  try {
    this.firingDepth++;
    if (jsNotEquals(source, null)) {
      setSourceOfEvent(event_0, source);
    }
    handlers = this.getDispatchList(event_0.getAssociatedType(), source);
    causes = null;
    it = this.isReverseOrder?handlers.listIterator_0(handlers.size_1()):handlers.listIterator();
    while (this.isReverseOrder?it.hasPrevious():it.hasNext_0()) {
      handler = this.isReverseOrder?it.previous():it.next_1();
      try {
        dispatchEvent_1(event_0, handler);
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 8)) {
          e = $e0;
          if (isNull(causes)) {
            causes = new HashSet;
          }
          causes.add_3(e);
        }
         else 
          throw toJs($e0);
      }
    }
    if (isNotNull(causes)) {
      throw toJs(new UmbrellaException(causes));
    }
  }
   finally {
    this.firingDepth--;
    if (this.firingDepth == 0) {
      this.handleQueuedAddsAndRemoves();
    }
  }
}
;
_.enqueueAdd = function enqueueAdd(type_0, source, handler){
  this.defer_0(new SimpleEventBus$2(this, type_0, source, handler));
}
;
_.ensureHandlerList = function ensureHandlerList(type_0, source){
  var handlers, sourceMap;
  sourceMap = castTo(this.map_0.get_2(type_0), 33);
  if (isNull(sourceMap)) {
    sourceMap = new HashMap;
    this.map_0.put(type_0, sourceMap);
  }
  handlers = castTo(castTo(sourceMap.get_2(source), 21), 21);
  if (isNull(handlers)) {
    handlers = new ArrayList;
    sourceMap.put(source, handlers);
  }
  return handlers;
}
;
_.fireEvent_0 = function fireEvent_0(event_0){
  this.doFire(event_0, null);
}
;
_.getDispatchList = function getDispatchList(type_0, source){
  var directHandlers, globalHandlers, rtn;
  directHandlers = this.getHandlerList(type_0, source);
  if (jsEquals(source, null)) {
    return directHandlers;
  }
  globalHandlers = this.getHandlerList(type_0, null);
  rtn = new ArrayList_0(directHandlers);
  rtn.addAll(globalHandlers);
  return rtn;
}
;
_.getHandlerList = function getHandlerList(type_0, source){
  var handlers, sourceMap;
  sourceMap = castTo(this.map_0.get_2(type_0), 33);
  if (isNull(sourceMap)) {
    return emptyList();
  }
  handlers = castTo(castTo(sourceMap.get_2(source), 21), 21);
  if (isNull(handlers)) {
    return emptyList();
  }
  return handlers;
}
;
_.handleQueuedAddsAndRemoves = function handleQueuedAddsAndRemoves(){
  var c, c$iterator;
  if (isNotNull(this.deferredDeltas)) {
    try {
      for (c$iterator = this.deferredDeltas.iterator(); c$iterator.hasNext_0();) {
        c = castTo(c$iterator.next_1(), 305);
        c.execute_0();
      }
    }
     finally {
      this.deferredDeltas = null;
    }
  }
}
;
_.isEventHandled_0 = function isEventHandled_0(eventKey){
  return this.map_0.containsKey(eventKey);
}
;
_.firingDepth = 0;
_.isReverseOrder = false;
var Lcom_google_web_bindery_event_shared_SimpleEventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus', 55, Lcom_google_web_bindery_event_shared_EventBus_2_classLit);
function $clinit_HandlerManager$Bus(){
  $clinit_HandlerManager$Bus = emptyMethod;
  $clinit_SimpleEventBus();
}

function HandlerManager$Bus(fireInReverseOrder){
  $clinit_HandlerManager$Bus();
  SimpleEventBus_0.call(this, fireInReverseOrder);
  this.$init_55();
}

defineClass(246, 55, {68:1, 1:1}, HandlerManager$Bus);
_.$init_55 = function $init_55(){
}
;
_.isEventHandled_0 = function isEventHandled_1(eventKey){
  return getClassPrototype(55).isEventHandled_0.call(this, eventKey);
}
;
var Lcom_google_gwt_event_shared_HandlerManager$Bus_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager/Bus', 246, Lcom_google_web_bindery_event_shared_SimpleEventBus_2_classLit);
function $clinit_HandlerRegistration_0(){
  $clinit_HandlerRegistration_0 = emptyMethod;
}

var Lcom_google_web_bindery_event_shared_HandlerRegistration_2_classLit = createForInterface('com.google.web.bindery.event.shared', 'HandlerRegistration');
function $clinit_HandlerRegistration(){
  $clinit_HandlerRegistration = emptyMethod;
}

var Lcom_google_gwt_event_shared_HandlerRegistration_2_classLit = createForInterface('com.google.gwt.event.shared', 'HandlerRegistration');
function $clinit_LegacyHandlerWrapper(){
  $clinit_LegacyHandlerWrapper = emptyMethod;
  $clinit_Object();
}

function LegacyHandlerWrapper(real){
  $clinit_LegacyHandlerWrapper();
  Object_0.call(this);
  this.$init_56();
  this.real = real;
}

defineClass(270, 1, {1:1}, LegacyHandlerWrapper);
_.$init_56 = function $init_56(){
}
;
var Lcom_google_gwt_event_shared_LegacyHandlerWrapper_2_classLit = createForClass('com.google.gwt.event.shared', 'LegacyHandlerWrapper', 270, Ljava_lang_Object_2_classLit);
function $clinit_UmbrellaException(){
  $clinit_UmbrellaException = emptyMethod;
  $clinit_RuntimeException();
}

function UmbrellaException(causes){
  $clinit_UmbrellaException();
  var cause, cause$iterator, i_0;
  RuntimeException_2.call(this, makeMessage(causes), makeCause(causes));
  this.$init_57();
  this.causes = causes;
  i_0 = 0;
  for (cause$iterator = causes.iterator(); cause$iterator.hasNext_0();) {
    cause = castTo(cause$iterator.next_1(), 8);
    if (i_0++ == 0) {
      continue;
    }
    this.addSuppressed(cause);
  }
}

function makeCause(causes){
  return causes.isEmpty_0()?null:castTo(causes.iterator().next_1(), 8);
}

function makeMessage(causes){
  var b, count, first, t, t$iterator;
  count = causes.size_1();
  if (count == 0) {
    return null;
  }
  b = new StringBuilder_1(count == 1?'Exception caught: ':count + ' exceptions caught: ');
  first = true;
  for (t$iterator = causes.iterator(); t$iterator.hasNext_0();) {
    t = castTo(t$iterator.next_1(), 8);
    if (first) {
      first = false;
    }
     else {
      b.append_2('; ');
    }
    b.append_2(t.getMessage());
  }
  return b.toString_0();
}

defineClass(49, 9, {49:1, 3:1, 10:1, 1:1, 9:1, 8:1}, UmbrellaException);
_.$init_57 = function $init_57(){
}
;
_.getCauses = function getCauses(){
  return this.causes;
}
;
var MULTIPLE = ' exceptions caught: ', ONE = 'Exception caught: ';
var Lcom_google_web_bindery_event_shared_UmbrellaException_2_classLit = createForClass('com.google.web.bindery.event.shared', 'UmbrellaException', 49, Ljava_lang_RuntimeException_2_classLit);
function $clinit_UmbrellaException_0(){
  $clinit_UmbrellaException_0 = emptyMethod;
  $clinit_UmbrellaException();
}

function UmbrellaException_0(causes){
  $clinit_UmbrellaException_0();
  UmbrellaException.call(this, causes);
  this.$init_58();
}

defineClass(119, 49, {49:1, 3:1, 10:1, 1:1, 9:1, 8:1}, UmbrellaException_0);
_.$init_58 = function $init_58(){
}
;
var Lcom_google_gwt_event_shared_UmbrellaException_2_classLit = createForClass('com.google.gwt.event.shared', 'UmbrellaException', 119, Lcom_google_web_bindery_event_shared_UmbrellaException_2_classLit);
function $clinit_Position(){
  $clinit_Position = emptyMethod;
}

var Lcom_google_gwt_geolocation_client_Position_2_classLit = createForInterface('com.google.gwt.geolocation.client', 'Position');
function $clinit_Position$Coordinates(){
  $clinit_Position$Coordinates = emptyMethod;
}

var Lcom_google_gwt_geolocation_client_Position$Coordinates_2_classLit = createForInterface('com.google.gwt.geolocation.client', 'Position/Coordinates');
function $clinit_PositionImpl(){
  $clinit_PositionImpl = emptyMethod;
  $clinit_JavaScriptObject();
}

function $clinit_PositionImpl$CoordinatesImpl(){
  $clinit_PositionImpl$CoordinatesImpl = emptyMethod;
  $clinit_JavaScriptObject();
}

function $clinit_BidiUtils(){
  $clinit_BidiUtils = emptyMethod;
  $clinit_Object();
}

function getDirectionOnElement(elem){
  var dirPropertyValue;
  dirPropertyValue = $getPropertyString(elem, 'dir');
  if (equalsIgnoreCase_Ljava_lang_String__Z__devirtual$('rtl', dirPropertyValue)) {
    return $clinit_HasDirection$Direction() , RTL;
  }
   else if (equalsIgnoreCase_Ljava_lang_String__Z__devirtual$('ltr', dirPropertyValue)) {
    return $clinit_HasDirection$Direction() , LTR;
  }
  return $clinit_HasDirection$Direction() , DEFAULT;
}

function setDirectionOnElement(elem, direction){
  $clinit_BidiUtils();
  switch (direction.ordinal_0()) {
    case ($clinit_HasDirection$Direction() , RTL).ordinal_0():
      {
        $setPropertyString(elem, 'dir', 'rtl');
        break;
      }

    case ($clinit_HasDirection$Direction() , LTR).ordinal_0():
      {
        $setPropertyString(elem, 'dir', 'ltr');
        break;
      }

    case ($clinit_HasDirection$Direction() , DEFAULT).ordinal_0():
      {
        if (jsNotEquals(getDirectionOnElement(elem), ($clinit_HasDirection$Direction() , DEFAULT))) {
          $setPropertyString(elem, 'dir', '');
        }
        break;
      }

  }
}

defineClass(461, 1, {1:1});
var DIR_PROPERTY_NAME = 'dir', DIR_PROPERTY_VALUE_LTR = 'ltr', DIR_PROPERTY_VALUE_RTL = 'rtl';
var Lcom_google_gwt_i18n_client_BidiUtils_2_classLit = createForClass('com.google.gwt.i18n.client', 'BidiUtils', 461, Ljava_lang_Object_2_classLit);
function $clinit_CurrencyData(){
  $clinit_CurrencyData = emptyMethod;
}

var Lcom_google_gwt_i18n_client_CurrencyData_2_classLit = createForInterface('com.google.gwt.i18n.client', 'CurrencyData');
function $clinit_HasDirection(){
  $clinit_HasDirection = emptyMethod;
}

var Lcom_google_gwt_i18n_client_HasDirection_2_classLit = createForInterface('com.google.gwt.i18n.client', 'HasDirection');
function $clinit_HasDirection$Direction(){
  $clinit_HasDirection$Direction = emptyMethod;
  $clinit_Enum();
  RTL = new HasDirection$Direction('RTL', 0);
  LTR = new HasDirection$Direction('LTR', 1);
  DEFAULT = new HasDirection$Direction('DEFAULT', 2);
}

function HasDirection$Direction(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
  this.$init_59();
}

function valueOf_1(name_0){
  $clinit_HasDirection$Direction();
  return valueOf(($clinit_HasDirection$Direction$Map() , $MAP_0), name_0);
}

function values_1(){
  $clinit_HasDirection$Direction();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit, 1), {3:1, 1:1, 7:1}, 67, 0, [RTL, LTR, DEFAULT]);
}

defineClass(67, 5, {67:1, 3:1, 4:1, 5:1, 1:1}, HasDirection$Direction);
_.$init_59 = function $init_59(){
}
;
var DEFAULT, LTR, RTL;
var Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit = createForEnum('com.google.gwt.i18n.client', 'HasDirection/Direction', 67, Ljava_lang_Enum_2_classLit, values_1, valueOf_1);
function $clinit_HasDirection$Direction$Map(){
  $clinit_HasDirection$Direction$Map = emptyMethod;
  $MAP_0 = createValueOfMap(values_1());
}

defineClass(462, 1, {1:1});
var $MAP_0;
var Lcom_google_gwt_i18n_client_HasDirection$Direction$Map_2_classLit = createForClass('com.google.gwt.i18n.client', 'HasDirection/Direction/Map', 462, Ljava_lang_Object_2_classLit);
function $clinit_LocaleInfo(){
  $clinit_LocaleInfo = emptyMethod;
  $clinit_Object();
  instance_0 = new LocaleInfo(castTo(castTo(new LocaleInfoImpl_, 51), 51), castTo(castTo(new CldrImpl, 80), 80));
}

function LocaleInfo(impl, cldr){
  Object_0.call(this);
  this.$init_60();
  this.infoImpl = impl;
  this.cldrImpl = cldr;
}

function getCurrentLocale(){
  $clinit_LocaleInfo();
  return instance_0;
}

defineClass(248, 1, {1:1}, LocaleInfo);
_.$init_60 = function $init_60(){
}
;
_.isRTL = function isRTL(){
  return this.cldrImpl.isRTL();
}
;
var instance_0;
var Lcom_google_gwt_i18n_client_LocaleInfo_2_classLit = createForClass('com.google.gwt.i18n.client', 'LocaleInfo', 248, Ljava_lang_Object_2_classLit);
function $clinit_Localizable_0(){
  $clinit_Localizable_0 = emptyMethod;
}

var Lcom_google_gwt_i18n_shared_Localizable_2_classLit = createForInterface('com.google.gwt.i18n.shared', 'Localizable');
function $clinit_Localizable(){
  $clinit_Localizable = emptyMethod;
}

var Lcom_google_gwt_i18n_client_Localizable_2_classLit = createForInterface('com.google.gwt.i18n.client', 'Localizable');
function $clinit_CldrImpl(){
  $clinit_CldrImpl = emptyMethod;
  $clinit_Object();
}

function CldrImpl(){
  $clinit_CldrImpl();
  Object_0.call(this);
  this.$init_61();
}

defineClass(80, 1, {80:1, 1:1}, CldrImpl);
_.$init_61 = function $init_61(){
}
;
_.isRTL = function isRTL_0(){
  return false;
}
;
var Lcom_google_gwt_i18n_client_impl_CldrImpl_2_classLit = createForClass('com.google.gwt.i18n.client.impl', 'CldrImpl', 80, Ljava_lang_Object_2_classLit);
function $clinit_CurrencyDataJso(){
  $clinit_CurrencyDataJso = emptyMethod;
  $clinit_JavaScriptObject();
}

function $clinit_LocaleInfoImpl(){
  $clinit_LocaleInfoImpl = emptyMethod;
  $clinit_Object();
}

function LocaleInfoImpl(){
  $clinit_LocaleInfoImpl();
  Object_0.call(this);
  this.$init_62();
}

defineClass(51, 1, {51:1, 1:1});
_.$init_62 = function $init_62(){
}
;
var Lcom_google_gwt_i18n_client_impl_LocaleInfoImpl_2_classLit = createForClass('com.google.gwt.i18n.client.impl', 'LocaleInfoImpl', 51, Ljava_lang_Object_2_classLit);
function $clinit_LocaleInfoImpl_shared(){
  $clinit_LocaleInfoImpl_shared = emptyMethod;
  $clinit_LocaleInfoImpl();
}

function LocaleInfoImpl_shared(){
  $clinit_LocaleInfoImpl_shared();
  LocaleInfoImpl.call(this);
  this.$init_63();
}

defineClass(261, 51, {51:1, 1:1});
_.$init_63 = function $init_63(){
}
;
var Lcom_google_gwt_i18n_client_impl_LocaleInfoImpl_1shared_2_classLit = createForClass('com.google.gwt.i18n.client.impl', 'LocaleInfoImpl_shared', 261, Lcom_google_gwt_i18n_client_impl_LocaleInfoImpl_2_classLit);
function $clinit_LocaleInfoImpl_(){
  $clinit_LocaleInfoImpl_ = emptyMethod;
  $clinit_LocaleInfoImpl_shared();
}

function LocaleInfoImpl_(){
  $clinit_LocaleInfoImpl_();
  LocaleInfoImpl_shared.call(this);
  this.$init_64();
}

defineClass(262, 261, {51:1, 1:1}, LocaleInfoImpl_);
_.$init_64 = function $init_64(){
}
;
var Lcom_google_gwt_i18n_client_impl_LocaleInfoImpl_1_2_classLit = createForClass('com.google.gwt.i18n.client.impl', 'LocaleInfoImpl_', 262, Lcom_google_gwt_i18n_client_impl_LocaleInfoImpl_1shared_2_classLit);
function $clinit_Array(){
  $clinit_Array = emptyMethod;
  $clinit_Object();
}

function Array_0(){
  Object_0.call(this);
  this.$init_65();
}

function asArray(array){
  return array;
}

function canSet(array, value_0){
  switch (getElementTypeCategory(array)) {
    case 6:
      return instanceOfString(value_0);
    case 7:
      return instanceOfDouble(value_0);
    case 8:
      return instanceOfBoolean(value_0);
    case 3:
      return instanceOfArray(value_0);
    case 11:
      return instanceOfFunction(value_0);
    case 12:
      return instanceOfJsObject(value_0);
    case 0:
      return canCast(value_0, getElementTypeId(array));
    case 2:
      return isJavaScriptObject(value_0);
    case 1:
      return isJavaScriptObject(value_0) || canCast(value_0, getElementTypeId(array));
    default:return true;
  }
}

function ensureNotNull(array){
  $clinit_Array();
  return checkNotNull_0(array);
}

function getClassLiteralForArray(clazz, dimensions){
  $clinit_Array();
  return getClassLiteralForArrayImpl(clazz, dimensions);
}

function getClassLiteralForArrayImpl(clazz, dimensions){
  return getClassLiteralForArray_0(clazz, dimensions);
}

function getElementTypeCategory(array){
  return array.__elementTypeCategory$ == null?10:array.__elementTypeCategory$;
}

function getElementTypeId(array){
  return array.__elementTypeId$;
}

function initMultidimensionalArray(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, count){
  $clinit_Array();
  return initMultidimensionalArray_0(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, 0, count);
}

function initMultidimensionalArray_0(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, index_0, count){
  var elementTypeCategory, i_0, isLastDimension, length_0, result;
  length_0 = dimExprs[index_0];
  isLastDimension = index_0 == count - 1;
  elementTypeCategory = isLastDimension?leafElementTypeCategory:0;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  if (leafElementTypeCategory != 10) {
    stampJavaTypeInfo(getClassLiteralForArray(leafClassLiteral, count - index_0), castableTypeMapExprs[index_0], elementTypeIds[index_0], elementTypeCategory, result);
  }
  if (!isLastDimension) {
    ++index_0;
    for (i_0 = 0; i_0 < length_0; ++i_0) {
      set_0(result, i_0, initMultidimensionalArray_0(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, index_0, count));
    }
  }
  return result;
}

function initUnidimensionalArray(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  $clinit_Array();
  var result;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  if (elementTypeCategory != 10) {
    stampJavaTypeInfo(getClassLiteralForArray(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  }
  return result;
}

function initializeArrayElementsWithDefaults(elementTypeCategory, length_0){
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case 14:
    case 15:
      initValue = 0;
      break;
    case 16:
      initValue = false;
      break;
    default:return array;
  }
  for (var i_0 = 0; i_0 < length_0; ++i_0) {
    array[i_0] = initValue;
  }
  return array;
}

function isJavaArray(src_0){
  $clinit_Array();
  return isArray(src_0) && hasTypeMarker(src_0);
}

function isPrimitiveArray(array){
  $clinit_Array();
  var elementTypeCategory;
  elementTypeCategory = getElementTypeCategory(array);
  return elementTypeCategory >= 14 && elementTypeCategory <= 16;
}

function newArray_0(size_0){
  $clinit_Array();
  return new Array(size_0);
}

function set_0(array, index_0, value_0){
  return array[index_0] = value_0;
}

function setCheck(array, index_0, value_0){
  $clinit_Array();
  checkArrayType(jsEquals(value_0, null) || canSet(array, value_0));
  return set_0(array, index_0, value_0);
}

function setClass(o, clazz){
  o.___clazz = clazz;
}

function setElementTypeCategory(array, elementTypeCategory){
  array.__elementTypeCategory$ = elementTypeCategory;
}

function setElementTypeId(array, elementTypeId){
  array.__elementTypeId$ = elementTypeId;
}

function stampJavaTypeInfo(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  $clinit_Array();
  setClass(array, arrayClass);
  setCastableTypeMap(array, castableTypeMap);
  setTypeMarker(array);
  setElementTypeId(array, elementTypeId);
  setElementTypeCategory(array, elementTypeCategory);
  return array;
}

function stampJavaTypeInfo_0(array, referenceType){
  $clinit_Array();
  if (getElementTypeCategory(referenceType) != 10) {
    stampJavaTypeInfo(getClass__Ljava_lang_Class___devirtual$(referenceType), getCastableTypeMap(referenceType), getElementTypeId(referenceType), getElementTypeCategory(referenceType), array);
  }
  return asArray(array);
}

defineClass(330, 1, {1:1});
_.$init_65 = function $init_65(){
}
;
var TYPE_ARRAY = 3, TYPE_JAVA_LANG_BOOLEAN = 8, TYPE_JAVA_LANG_DOUBLE = 7, TYPE_JAVA_LANG_OBJECT = 5, TYPE_JAVA_LANG_STRING = 6, TYPE_JAVA_OBJECT = 0, TYPE_JAVA_OBJECT_OR_JSO = 1, TYPE_JSO = 2, TYPE_JSO_ARRAY = 4, TYPE_JS_ARRAY = 13, TYPE_JS_FUNCTION = 11, TYPE_JS_NATIVE = 9, TYPE_JS_OBJECT = 12, TYPE_JS_UNKNOWN_NATIVE = 10, TYPE_PRIMITIVE_BOOLEAN = 16, TYPE_PRIMITIVE_LONG = 14, TYPE_PRIMITIVE_NUMBER = 15;
var Lcom_google_gwt_lang_Array_2_classLit = createForClass('com.google.gwt.lang', 'Array', 330, Ljava_lang_Object_2_classLit);
function $clinit_BigLongLibBase(){
  $clinit_BigLongLibBase = emptyMethod;
  $clinit_Object();
  BITS01 = 2 * 22;
  BITS2 = 64 - 44;
  MASK = (1 << 22) - 1;
  MASK_2 = (1 << 20) - 1;
  SIGN_BIT = 20 - 1;
  SIGN_BIT_VALUE = 1 << 19;
  TWO_PWR_31_DBL = 65536 * 32768;
  TWO_PWR_32_DBL = 65536 * 65536;
  TWO_PWR_44_DBL = 4194304 * 4194304;
  TWO_PWR_63_DBL = 4294967296 * 2147483648;
}

function create_2(){
  if ($clinit_LongLib() , RUN_IN_JVM) {
    return new BigLongLibBase$BigLong;
  }
  return create0(0, 0, 0);
}

function create_3(value_0){
  $clinit_BigLongLibBase();
  var a, a0, a1, a2;
  a0 = value_0 & 4194303;
  a1 = value_0 >> 22 & 4194303;
  a2 = value_0 < 0?1048575:0;
  if ($clinit_LongLib() , RUN_IN_JVM) {
    a = new BigLongLibBase$BigLong;
    a.l_0 = a0;
    a.m_0 = a1;
    a.h_0 = a2;
    return a;
  }
  return create0(a0, a1, a2);
}

function create_4(a0, a1, a2){
  $clinit_BigLongLibBase();
  var a;
  if ($clinit_LongLib() , RUN_IN_JVM) {
    a = new BigLongLibBase$BigLong;
    a.l_0 = a0;
    a.m_0 = a1;
    a.h_0 = a2;
    return a;
  }
  return create0(a0, a1, a2);
}

function create_5(a){
  $clinit_BigLongLibBase();
  var b;
  if ($clinit_LongLib() , RUN_IN_JVM) {
    b = new BigLongLibBase$BigLong;
    b.l_0 = getL(a);
    b.m_0 = getM(a);
    b.h_0 = getH(a);
    return b;
  }
  return create0(getL(a), getM(a), getH(a));
}

function create0(l, m, h){
  return {l:l, m:m, h:h};
}

function divMod(a, b, computeRemainder){
  $clinit_BigLongLibBase();
  var aIsCopy, aIsMinValue, aIsNegative, bpower, c, negative;
  if (isZero(b)) {
    throw toJs(new ArithmeticException('divide by zero'));
  }
  if (isZero(a)) {
    if (computeRemainder) {
      remainder = create_2();
    }
    return create_2();
  }
  if (isMinValue(b)) {
    return divModByMinValue(a, computeRemainder);
  }
  negative = false;
  if (isNegative(b)) {
    b = neg(b);
    negative = !negative;
  }
  bpower = powerOfTwo(b);
  aIsNegative = false;
  aIsMinValue = false;
  aIsCopy = false;
  if (isMinValue(a)) {
    aIsMinValue = true;
    aIsNegative = true;
    if (bpower == -1) {
      a = create_5(($clinit_BigLongLib$Const() , MAX_VALUE));
      aIsCopy = true;
      negative = !negative;
    }
     else {
      c = shr(a, bpower);
      if (negative) {
        negate(c);
      }
      if (computeRemainder) {
        remainder = create_2();
      }
      return c;
    }
  }
   else if (isNegative(a)) {
    aIsNegative = true;
    a = neg(a);
    aIsCopy = true;
    negative = !negative;
  }
  if (bpower != -1) {
    return divModByShift(a, bpower, negative, aIsNegative, computeRemainder);
  }
  if (compare(a, b) < 0) {
    if (computeRemainder) {
      if (aIsNegative) {
        remainder = neg(a);
      }
       else {
        remainder = create_5(a);
      }
    }
    return create_2();
  }
  return divModHelper(aIsCopy?a:create_5(a), b, negative, aIsNegative, aIsMinValue, computeRemainder);
}

function divModByMinValue(a, computeRemainder){
  if (isMinValue(a)) {
    if (computeRemainder) {
      remainder = create_2();
    }
    return create_5(($clinit_BigLongLib$Const() , ONE_0));
  }
  if (computeRemainder) {
    remainder = create_5(a);
  }
  return create_2();
}

function divModByShift(a, bpower, negative, aIsNegative, computeRemainder){
  var c;
  c = shr(a, bpower);
  if (negative) {
    negate(c);
  }
  if (computeRemainder) {
    a = maskRight(a, bpower);
    if (aIsNegative) {
      remainder = neg(a);
    }
     else {
      remainder = create_5(a);
    }
  }
  return c;
}

function divModHelper(a, b, negative, aIsNegative, aIsMinValue, computeRemainder){
  var bshift, gte, quotient, shift_0;
  shift_0 = numberOfLeadingZeros(b) - numberOfLeadingZeros(a);
  bshift = shl(b, shift_0);
  quotient = create_2();
  while (shift_0 >= 0) {
    gte = trialSubtract(a, bshift);
    if (gte) {
      setBit(quotient, shift_0);
      if (isZero(a)) {
        break;
      }
    }
    toShru1(bshift);
    shift_0--;
  }
  if (negative) {
    negate(quotient);
  }
  if (computeRemainder) {
    if (aIsNegative) {
      remainder = neg(a);
      if (aIsMinValue) {
        remainder = sub_0(remainder, ($clinit_BigLongLib$Const() , ONE_0));
      }
    }
     else {
      remainder = create_5(a);
    }
  }
  return quotient;
}

function getH(a){
  $clinit_BigLongLibBase();
  if ($clinit_LongLib() , RUN_IN_JVM) {
    return a.h_0;
  }
  return getHNative(a);
}

function getHNative(a){
  return a.h;
}

function getL(a){
  $clinit_BigLongLibBase();
  if ($clinit_LongLib() , RUN_IN_JVM) {
    return a.l_0;
  }
  return getLNative(a);
}

function getLNative(a){
  return a.l;
}

function getM(a){
  $clinit_BigLongLibBase();
  if ($clinit_LongLib() , RUN_IN_JVM) {
    return a.m_0;
  }
  return getMNative(a);
}

function getMNative(a){
  return a.m;
}

function isMinValue(a){
  $clinit_BigLongLibBase();
  return getH(a) == 524288 && getM(a) == 0 && getL(a) == 0;
}

function isNegative(a){
  $clinit_BigLongLibBase();
  return sign(a) != 0;
}

function isZero(a){
  $clinit_BigLongLibBase();
  return getL(a) == 0 && getM(a) == 0 && getH(a) == 0;
}

function maskRight(a, bits){
  var b0, b1, b2;
  if (bits <= 22) {
    b0 = getL(a) & (1 << bits) - 1;
    b1 = b2 = 0;
  }
   else if (bits <= 44) {
    b0 = getL(a);
    b1 = getM(a) & (1 << bits - 22) - 1;
    b2 = 0;
  }
   else {
    b0 = getL(a);
    b1 = getM(a);
    b2 = getH(a) & (1 << bits - 44) - 1;
  }
  return create_4(b0, b1, b2);
}

function negate(a){
  $clinit_BigLongLibBase();
  var neg0, neg1, neg2;
  neg0 = ~getL(a) + 1 & 4194303;
  neg1 = ~getM(a) + (neg0 == 0?1:0) & 4194303;
  neg2 = ~getH(a) + (neg0 == 0 && neg1 == 0?1:0) & 1048575;
  if ($clinit_LongLib() , RUN_IN_JVM) {
    a.l_0 = neg0;
    a.m_0 = neg1;
    a.h_0 = neg2;
  }
   else {
    setL(a, neg0);
    setM(a, neg1);
    setH(a, neg2);
  }
}

function numberOfLeadingZeros(a){
  var b1, b2;
  b2 = numberOfLeadingZeros_0(getH(a));
  if (b2 == 32) {
    b1 = numberOfLeadingZeros_0(getM(a));
    if (b1 == 32) {
      return numberOfLeadingZeros_0(getL(a)) + 32;
    }
     else {
      return b1 + 20 - (32 - 22);
    }
  }
   else {
    return b2 - (32 - 20);
  }
}

function powerOfTwo(a){
  var h, l, m;
  l = getL(a);
  if ((l & l - 1) != 0) {
    return -1;
  }
  m = getM(a);
  if ((m & m - 1) != 0) {
    return -1;
  }
  h = getH(a);
  if ((h & h - 1) != 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l == 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l != 0) {
    return numberOfTrailingZeros(l);
  }
  if (h == 0 && m != 0 && l == 0) {
    return numberOfTrailingZeros(m) + 22;
  }
  if (h != 0 && m == 0 && l == 0) {
    return numberOfTrailingZeros(h) + 44;
  }
  return -1;
}

function setBit(a, bit){
  if ($clinit_LongLib() , RUN_IN_JVM) {
    if (bit < 22) {
      a.l_0 |= 1 << bit;
    }
     else if (bit < 44) {
      a.m_0 |= 1 << bit - 22;
    }
     else {
      a.h_0 |= 1 << bit - 44;
    }
  }
   else {
    if (bit < 22) {
      setBitL(a, bit);
    }
     else if (bit < 44) {
      setBitM(a, bit - 22);
    }
     else {
      setBitH(a, bit - 44);
    }
  }
}

function setBitH(a, bit){
  a.h |= 1 << bit;
}

function setBitL(a, bit){
  a.l |= 1 << bit;
}

function setBitM(a, bit){
  a.m |= 1 << bit;
}

function setH(a, x_0){
  a.h = x_0;
}

function setL(a, x_0){
  a.l = x_0;
}

function setM(a, x_0){
  a.m = x_0;
}

function sign(a){
  $clinit_BigLongLibBase();
  return getH(a) >> 20 - 1;
}

function toDoubleHelper(a){
  $clinit_BigLongLibBase();
  return getL(a) + getM(a) * 4194304 + getH(a) * 17592186044416;
}

function toShru1(a){
  var a0, a1, a2;
  a1 = getM(a);
  a2 = getH(a);
  a0 = getL(a);
  if ($clinit_LongLib() , RUN_IN_JVM) {
    a.h_0 = a2 >>> 1;
    a.m_0 = a1 >>> 1 | (a2 & 1) << 22 - 1;
    a.l_0 = a0 >>> 1 | (a1 & 1) << 22 - 1;
  }
   else {
    setH(a, a2 >>> 1);
    setM(a, a1 >>> 1 | (a2 & 1) << 22 - 1);
    setL(a, a0 >>> 1 | (a1 & 1) << 22 - 1);
  }
}

function trialSubtract(a, b){
  var sum0, sum1, sum2;
  sum2 = getH(a) - getH(b);
  if (sum2 < 0) {
    return false;
  }
  sum0 = getL(a) - getL(b);
  sum1 = getM(a) - getM(b) + (sum0 >> 22);
  sum2 += sum1 >> 22;
  if (sum2 < 0) {
    return false;
  }
  if ($clinit_LongLib() , RUN_IN_JVM) {
    a.l_0 = sum0 & 4194303;
    a.m_0 = sum1 & 4194303;
    a.h_0 = sum2 & 1048575;
  }
   else {
    setL(a, sum0 & 4194303);
    setM(a, sum1 & 4194303);
    setH(a, sum2 & 1048575);
  }
  return true;
}

defineClass(357, 1, {1:1});
var BITS = 22, BITS01 = 0, BITS2 = 0, MASK = 0, MASK_2 = 0, SIGN_BIT = 0, SIGN_BIT_VALUE = 0, TWO_PWR_15_DBL = 32768, TWO_PWR_16_DBL = 65536, TWO_PWR_22_DBL = 4194304, TWO_PWR_31_DBL = 0, TWO_PWR_32_DBL = 0, TWO_PWR_44_DBL = 0, TWO_PWR_63_DBL = 0, remainder;
var Lcom_google_gwt_lang_BigLongLibBase_2_classLit = createForClass('com.google.gwt.lang', 'BigLongLibBase', 357, Ljava_lang_Object_2_classLit);
function $clinit_BigLongLib(){
  $clinit_BigLongLib = emptyMethod;
  $clinit_BigLongLibBase();
}

function add_2(a, b){
  $clinit_BigLongLib();
  var sum0, sum1, sum2;
  sum0 = getL(a) + getL(b);
  sum1 = getM(a) + getM(b) + (sum0 >> 22);
  sum2 = getH(a) + getH(b) + (sum1 >> 22);
  return create_4(sum0 & 4194303, sum1 & 4194303, sum2 & 1048575);
}

function and(a, b){
  $clinit_BigLongLib();
  return create_4(getL(a) & getL(b), getM(a) & getM(b), getH(a) & getH(b));
}

function compare(a, b){
  $clinit_BigLongLib();
  var a0, a1, a2, b0, b1, b2, signA, signB;
  signA = sign(a);
  signB = sign(b);
  if (signA != signB) {
    return signB - signA;
  }
  a2 = getH(a);
  b2 = getH(b);
  if (a2 != b2) {
    return a2 - b2;
  }
  a1 = getM(a);
  b1 = getM(b);
  if (a1 != b1) {
    return a1 - b1;
  }
  a0 = getL(a);
  b0 = getL(b);
  return a0 - b0;
}

function div(a, b){
  $clinit_BigLongLib();
  return divMod(a, b, false);
}

function fromDouble(value_0){
  $clinit_BigLongLib();
  var a0, a1, a2, negative, result;
  if (isNaN_0(value_0)) {
    return $clinit_BigLongLib$Const() , ZERO;
  }
  if (value_0 < -9223372036854775807) {
    return $clinit_BigLongLib$Const() , MIN_VALUE;
  }
  if (value_0 >= 9223372036854775807) {
    return $clinit_BigLongLib$Const() , MAX_VALUE;
  }
  negative = false;
  if (value_0 < 0) {
    negative = true;
    value_0 = -value_0;
  }
  a2 = 0;
  if (value_0 >= 17592186044416) {
    a2 = round_int(value_0 / 17592186044416);
    value_0 -= a2 * 17592186044416;
  }
  a1 = 0;
  if (value_0 >= 4194304) {
    a1 = round_int(value_0 / 4194304);
    value_0 -= a1 * 4194304;
  }
  a0 = round_int(value_0);
  result = create_4(a0, a1, a2);
  if (negative) {
    negate(result);
  }
  return result;
}

function fromInt(value_0){
  $clinit_BigLongLib();
  return create_3(value_0);
}

function getAsLongArray(l){
  $clinit_BigLongLib();
  var a;
  a = initUnidimensionalArray(J_classLit, {3:1, 1:1}, 56, 3, 14, 1);
  a[0] = fromInt_0(toInt_0(and_0(l, 4194303)));
  a[1] = fromInt_0(toInt_0(and_0(shr_0(l, 22), 4194303)));
  a[2] = fromInt_0(toInt_0(and_0(shr_0(l, 44), 1048575)));
  return a;
}

function mod(a, b){
  $clinit_BigLongLib();
  divMod(a, b, true);
  return $clinit_BigLongLibBase() , remainder;
}

function mul(a, b){
  $clinit_BigLongLib();
  var a0, a1, a2, a3, a4, b0, b1, b2, b3, b4, c0, c00, c01, c1, c10, c11, c12, c13, c2, c22, c23, c24, p0, p1, p2, p3, p4;
  a0 = getL(a) & 8191;
  a1 = getL(a) >> 13 | (getM(a) & 15) << 9;
  a2 = getM(a) >> 4 & 8191;
  a3 = getM(a) >> 17 | (getH(a) & 255) << 5;
  a4 = (getH(a) & 1048320) >> 8;
  b0 = getL(b) & 8191;
  b1 = getL(b) >> 13 | (getM(b) & 15) << 9;
  b2 = getM(b) >> 4 & 8191;
  b3 = getM(b) >> 17 | (getH(b) & 255) << 5;
  b4 = (getH(b) & 1048320) >> 8;
  p0 = a0 * b0;
  p1 = a1 * b0;
  p2 = a2 * b0;
  p3 = a3 * b0;
  p4 = a4 * b0;
  if (b1 != 0) {
    p1 += a0 * b1;
    p2 += a1 * b1;
    p3 += a2 * b1;
    p4 += a3 * b1;
  }
  if (b2 != 0) {
    p2 += a0 * b2;
    p3 += a1 * b2;
    p4 += a2 * b2;
  }
  if (b3 != 0) {
    p3 += a0 * b3;
    p4 += a1 * b3;
  }
  if (b4 != 0) {
    p4 += a0 * b4;
  }
  c00 = p0 & 4194303;
  c01 = (p1 & 511) << 13;
  c0 = c00 + c01;
  c10 = p0 >> 22;
  c11 = p1 >> 9;
  c12 = (p2 & 262143) << 4;
  c13 = (p3 & 31) << 17;
  c1 = c10 + c11 + c12 + c13;
  c22 = p2 >> 18;
  c23 = p3 >> 5;
  c24 = (p4 & 4095) << 8;
  c2 = c22 + c23 + c24;
  c1 += c0 >> 22;
  c0 &= 4194303;
  c2 += c1 >> 22;
  c1 &= 4194303;
  c2 &= 1048575;
  return create_4(c0, c1, c2);
}

function neg(a){
  $clinit_BigLongLib();
  var neg0, neg1, neg2;
  neg0 = ~getL(a) + 1 & 4194303;
  neg1 = ~getM(a) + (neg0 == 0?1:0) & 4194303;
  neg2 = ~getH(a) + (neg0 == 0 && neg1 == 0?1:0) & 1048575;
  return create_4(neg0, neg1, neg2);
}

function not(a){
  $clinit_BigLongLib();
  return create_4(~getL(a) & 4194303, ~getM(a) & 4194303, ~getH(a) & 1048575);
}

function or(a, b){
  $clinit_BigLongLib();
  return create_4(getL(a) | getL(b), getM(a) | getM(b), getH(a) | getH(b));
}

function shl(a, n){
  $clinit_BigLongLib();
  var res0, res1, res2;
  n &= 63;
  if (n < 22) {
    res0 = getL(a) << n;
    res1 = getM(a) << n | getL(a) >> 22 - n;
    res2 = getH(a) << n | getM(a) >> 22 - n;
  }
   else if (n < 44) {
    res0 = 0;
    res1 = getL(a) << n - 22;
    res2 = getM(a) << n - 22 | getL(a) >> 44 - n;
  }
   else {
    res0 = 0;
    res1 = 0;
    res2 = getL(a) << n - 44;
  }
  return create_4(res0 & 4194303, res1 & 4194303, res2 & 1048575);
}

function shr(a, n){
  $clinit_BigLongLib();
  var a2, negative, res0, res1, res2;
  n &= 63;
  a2 = getH(a);
  negative = (a2 & 524288) != 0;
  if (negative) {
    a2 |= ~1048575;
  }
  if (n < 22) {
    res2 = a2 >> n;
    res1 = getM(a) >> n | a2 << 22 - n;
    res0 = getL(a) >> n | getM(a) << 22 - n;
  }
   else if (n < 44) {
    res2 = negative?1048575:0;
    res1 = a2 >> n - 22;
    res0 = getM(a) >> n - 22 | a2 << 44 - n;
  }
   else {
    res2 = negative?1048575:0;
    res1 = negative?4194303:0;
    res0 = a2 >> n - 44;
  }
  return create_4(res0 & 4194303, res1 & 4194303, res2 & 1048575);
}

function shru(a, n){
  $clinit_BigLongLib();
  var a2, res0, res1, res2;
  n &= 63;
  a2 = getH(a) & 1048575;
  if (n < 22) {
    res2 = a2 >>> n;
    res1 = getM(a) >> n | a2 << 22 - n;
    res0 = getL(a) >> n | getM(a) << 22 - n;
  }
   else if (n < 44) {
    res2 = 0;
    res1 = a2 >>> n - 22;
    res0 = getM(a) >> n - 22 | getH(a) << 44 - n;
  }
   else {
    res2 = 0;
    res1 = 0;
    res0 = a2 >>> n - 44;
  }
  return create_4(res0 & 4194303, res1 & 4194303, res2 & 1048575);
}

function sub_0(a, b){
  $clinit_BigLongLib();
  var sum0, sum1, sum2;
  sum0 = getL(a) - getL(b);
  sum1 = getM(a) - getM(b) + (sum0 >> 22);
  sum2 = getH(a) - getH(b) + (sum1 >> 22);
  return create_4(sum0 & 4194303, sum1 & 4194303, sum2 & 1048575);
}

function toDouble(a){
  $clinit_BigLongLib();
  if (compare(a, ($clinit_BigLongLib$Const() , ZERO)) < 0) {
    return -toDoubleHelper(neg(a));
  }
  return toDoubleHelper(a);
}

function toInt(a){
  $clinit_BigLongLib();
  return getL(a) | getM(a) << 22;
}

function toString_7(a){
  $clinit_BigLongLib();
  var digits, rem, res, tenPower, tenPowerLong, tenPowerZeroes, zeroesNeeded;
  if (isZero(a)) {
    return '0';
  }
  if (isMinValue(a)) {
    return '-9223372036854775808';
  }
  if (isNegative(a)) {
    return '-' + toString_7(neg(a));
  }
  rem = a;
  res = '';
  while (!isZero(rem)) {
    tenPowerZeroes = 9;
    tenPower = 1000000000;
    tenPowerLong = fromInt(1000000000);
    rem = divMod(rem, tenPowerLong, true);
    digits = '' + toInt(($clinit_BigLongLibBase() , remainder));
    if (!isZero(rem)) {
      zeroesNeeded = 9 - length__I__devirtual$_0(digits);
      for (; zeroesNeeded > 0; zeroesNeeded--) {
        digits = '0' + digits;
      }
    }
    res = digits + ('' + res);
  }
  return res;
}

function xor(a, b){
  $clinit_BigLongLib();
  return create_4(getL(a) ^ getL(b), getM(a) ^ getM(b), getH(a) ^ getH(b));
}

defineClass(363, 357, {1:1});
var Lcom_google_gwt_lang_BigLongLib_2_classLit = createForClass('com.google.gwt.lang', 'BigLongLib', 363, Lcom_google_gwt_lang_BigLongLibBase_2_classLit);
function $clinit_BigLongLib$Const(){
  $clinit_BigLongLib$Const = emptyMethod;
  $clinit_Object();
  MAX_VALUE = create_4(4194303, 4194303, 1048575 >> 1);
  MIN_VALUE = create_4(0, 0, 524288);
  ONE_0 = fromInt(1);
  TWO = fromInt(2);
  ZERO = fromInt(0);
}

defineClass(364, 1, {1:1});
var MAX_VALUE, MIN_VALUE, ONE_0, TWO, ZERO;
var Lcom_google_gwt_lang_BigLongLib$Const_2_classLit = createForClass('com.google.gwt.lang', 'BigLongLib/Const', 364, Ljava_lang_Object_2_classLit);
function $clinit_BigLongLibBase$BigLong(){
  $clinit_BigLongLibBase$BigLong = emptyMethod;
  $clinit_Object();
}

function BigLongLibBase$BigLong(){
  $clinit_BigLongLibBase$BigLong();
  Object_0.call(this);
  this.$init_66();
}

defineClass(72, 1, {1:1}, BigLongLibBase$BigLong);
_.$init_66 = function $init_66(){
}
;
_.h_0 = 0;
_.l_0 = 0;
_.m_0 = 0;
var Lcom_google_gwt_lang_BigLongLibBase$BigLong_2_classLit = createForClass('com.google.gwt.lang', 'BigLongLibBase/BigLong', 72, Ljava_lang_Object_2_classLit);
function $clinit_Exceptions(){
  $clinit_Exceptions = emptyMethod;
  $clinit_Object();
}

function Exceptions(){
  Object_0.call(this);
  this.$init_68();
}

function checkNotNull(arg){
  $clinit_Exceptions();
  if (arg == null) {
    throw new TypeError('null pointer');
  }
  return arg;
}

function getJavaException(e){
  return e && e['__java$exception'];
}

function makeAssertionError(){
  $clinit_Exceptions();
  return new AssertionError;
}

function makeAssertionError_Object(message){
  $clinit_Exceptions();
  return new AssertionError_5(message);
}

function makeAssertionError_boolean(message){
  $clinit_Exceptions();
  return new AssertionError_7(message);
}

function makeAssertionError_char(message){
  $clinit_Exceptions();
  return new AssertionError_0(message);
}

function makeAssertionError_double(message){
  $clinit_Exceptions();
  return new AssertionError_1(message);
}

function makeAssertionError_float(message){
  $clinit_Exceptions();
  return new AssertionError_2(message);
}

function makeAssertionError_int(message){
  $clinit_Exceptions();
  return new AssertionError_3(message);
}

function makeAssertionError_long(message){
  $clinit_Exceptions();
  return new AssertionError_4(message);
}

function safeClose(resource, mainException){
  $clinit_Exceptions();
  var e;
  if (isNull(resource)) {
    return mainException;
  }
  try {
    resource.close_0();
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 8)) {
      e = $e0;
      if (isNull(mainException)) {
        return e;
      }
      mainException.addSuppressed(e);
    }
     else 
      throw toJs($e0);
  }
  return mainException;
}

function toJava(e){
  $clinit_Exceptions();
  var javaException;
  if (instanceOf(e, 8)) {
    return e;
  }
  javaException = getJavaException(e);
  if (isNull(javaException)) {
    javaException = new JavaScriptException(e);
    captureStackTrace_0(javaException);
  }
  return javaException;
}

function toJs(t){
  $clinit_Exceptions();
  return t.backingJsObject;
}

defineClass(333, 1, {1:1});
_.$init_68 = function $init_68(){
}
;
var Lcom_google_gwt_lang_Exceptions_2_classLit = createForClass('com.google.gwt.lang', 'Exceptions', 333, Ljava_lang_Object_2_classLit);
function $clinit_LongLib(){
  $clinit_LongLib = emptyMethod;
  $clinit_Object();
}

function LongLib(){
  Object_0.call(this);
  this.$init_69();
}

function add_3(a, b){
  $clinit_LongLib();
  var result;
  if (isSmallLong(a) && isSmallLong(b)) {
    result = asDouble(a) + asDouble(b);
    if (isSafeIntegerRange(result)) {
      return createSmallLongEmul(result);
    }
  }
  return createLongEmul(add_2(toBigLong(a), toBigLong(b)));
}

function and_0(a, b){
  $clinit_LongLib();
  return createLongEmul(and(toBigLong(a), toBigLong(b)));
}

function asBigLong(value_0){
  $clinit_LongLib();
  if (RUN_IN_JVM) {
    return value_0.big_0;
  }
  return asBigLong0(value_0);
}

function asBigLong0(value_0){
  return value_0;
}

function asDouble(value_0){
  return asDouble_0(asSmallLong(value_0));
}

function asDouble_0(value_0){
  if (RUN_IN_JVM) {
    return isNull(value_0)?NaN:value_0.d;
  }
  return asDouble0(value_0);
}

function asDouble0(value_0){
  return value_0;
}

function asSmallLong(value_0){
  if (RUN_IN_JVM) {
    return value_0.small_0;
  }
  return asSmallLong0(value_0);
}

function asSmallLong0(value_0){
  return value_0;
}

function coerceToInt(value_0){
  if (RUN_IN_JVM) {
    return toInt_0(fromDouble_0(value_0));
  }
  return coerceToInt0(value_0);
}

function coerceToInt0(value_0){
  return value_0 | 0;
}

function compare_0(a, b){
  $clinit_LongLib();
  var result;
  if (isSmallLong(a) && isSmallLong(b)) {
    result = asDouble(a) - asDouble(b);
    if (!isNaN_0(result)) {
      return result;
    }
  }
  return compare(toBigLong(a), toBigLong(b));
}

function copy(value_0){
  $clinit_LongLib();
  if (isSmallLong(value_0)) {
    return createSmallLongEmul(asDouble(value_0));
  }
   else {
    return createBigLongEmul(create_5(asBigLong(value_0)));
  }
}

function createBigLongEmul(big_0){
  var emul;
  if (RUN_IN_JVM) {
    emul = new LongLib$LongEmul;
    emul.big_0 = big_0;
    return emul;
  }
  return createBigLongEmul0(big_0);
}

function createBigLongEmul0(value_0){
  return value_0;
}

function createLongEmul(big_0){
  var a2;
  a2 = getH(big_0);
  if (a2 == 0) {
    return createSmallLongEmul(getL(big_0) + getM(big_0) * 4194304);
  }
  if (a2 == 1048575) {
    return createSmallLongEmul(getL(big_0) + getM(big_0) * 4194304 - 17592186044416);
  }
  return createBigLongEmul(big_0);
}

function createSmallLongEmul(value_0){
  var emul, small_0;
  if (RUN_IN_JVM) {
    small_0 = new LongLib$SmallLong;
    small_0.d = value_0;
    emul = new LongLib$LongEmul;
    emul.small_0 = small_0;
    return emul;
  }
  return createSmallLongEmul0(value_0);
}

function createSmallLongEmul0(value_0){
  return value_0;
}

function div_0(a, b){
  $clinit_LongLib();
  var result;
  if (isSmallLong(a) && isSmallLong(b)) {
    result = asDouble(a) / asDouble(b);
    if (isSafeIntegerRange(result)) {
      return createSmallLongEmul(truncate(result));
    }
  }
  return createLongEmul(div(toBigLong(a), toBigLong(b)));
}

function eq(a, b){
  $clinit_LongLib();
  return compare_0(a, b) == 0;
}

function fromDouble_0(value_0){
  $clinit_LongLib();
  if (isSafeIntegerRange(value_0)) {
    return createSmallLongEmul(truncate(value_0));
  }
  return createLongEmul(fromDouble(value_0));
}

function fromInt_0(value_0){
  $clinit_LongLib();
  return createSmallLongEmul(value_0);
}

function getAsLongArray_0(l){
  $clinit_LongLib();
  if (isSafeIntegerRange(toDouble_0(l))) {
    return stampJavaTypeInfo(getClassLiteralForArray(J_classLit, 1), {3:1, 1:1}, 56, 14, [l]);
  }
  return getAsLongArray(l);
}

function gt(a, b){
  $clinit_LongLib();
  return compare_0(a, b) > 0;
}

function gte_0(a, b){
  $clinit_LongLib();
  return compare_0(a, b) >= 0;
}

function isSafeIntegerRange(value_0){
  return -17592186044416 < value_0 && value_0 < 17592186044416;
}

function isSmallLong(value_0){
  if (RUN_IN_JVM) {
    return isNotNull(value_0.small_0);
  }
  return isSmallLong0(value_0);
}

function isSmallLong0(value_0){
  return typeof value_0 === 'number';
}

function lt(a, b){
  $clinit_LongLib();
  return compare_0(a, b) < 0;
}

function lte(a, b){
  $clinit_LongLib();
  return compare_0(a, b) <= 0;
}

function mod_0(a, b){
  $clinit_LongLib();
  var result;
  if (isSmallLong(a) && isSmallLong(b)) {
    result = asDouble(a) % asDouble(b);
    if (isSafeIntegerRange(result)) {
      return createSmallLongEmul(result);
    }
  }
  return createLongEmul(mod(toBigLong(a), toBigLong(b)));
}

function mul_0(a, b){
  $clinit_LongLib();
  var result;
  if (isSmallLong(a) && isSmallLong(b)) {
    result = asDouble(a) * asDouble(b);
    if (isSafeIntegerRange(result)) {
      return createSmallLongEmul(result);
    }
  }
  return createLongEmul(mul(toBigLong(a), toBigLong(b)));
}

function neg_0(a){
  $clinit_LongLib();
  var result;
  if (isSmallLong(a)) {
    result = 0 - asDouble(a);
    if (!isNaN_0(result)) {
      return createSmallLongEmul(result);
    }
  }
  return createLongEmul(neg(asBigLong(a)));
}

function neq(a, b){
  $clinit_LongLib();
  return compare_0(a, b) != 0;
}

function not_0(a){
  $clinit_LongLib();
  return createLongEmul(not(toBigLong(a)));
}

function or_0(a, b){
  $clinit_LongLib();
  return createLongEmul(or(toBigLong(a), toBigLong(b)));
}

function shl_0(a, n){
  $clinit_LongLib();
  return createLongEmul(shl(toBigLong(a), n));
}

function shr_0(a, n){
  $clinit_LongLib();
  return createLongEmul(shr(toBigLong(a), n));
}

function shru_0(a, n){
  $clinit_LongLib();
  return createLongEmul(shru(toBigLong(a), n));
}

function sub_1(a, b){
  $clinit_LongLib();
  var result;
  if (isSmallLong(a) && isSmallLong(b)) {
    result = asDouble(a) - asDouble(b);
    if (isSafeIntegerRange(result)) {
      return createSmallLongEmul(result);
    }
  }
  return createLongEmul(sub_0(toBigLong(a), toBigLong(b)));
}

function toBigLong(value_0){
  return isSmallLong(value_0)?toBigLong_0(asSmallLong(value_0)):asBigLong(value_0);
}

function toBigLong_0(longValue){
  var a0, a1, a3, value_0;
  value_0 = asDouble_0(longValue);
  a3 = 0;
  if (value_0 < 0) {
    value_0 += 17592186044416;
    a3 = 1048575;
  }
  a1 = round_int(value_0 / 4194304);
  a0 = round_int(value_0 - a1 * 4194304);
  return create_4(a0, a1, a3);
}

function toDouble_0(a){
  $clinit_LongLib();
  var d;
  if (isSmallLong(a)) {
    d = asDouble(a);
    return d == -0?0:d;
  }
  return toDouble(asBigLong(a));
}

function toInt_0(a){
  $clinit_LongLib();
  if (isSmallLong(a)) {
    return coerceToInt(asDouble(a));
  }
  return toInt(asBigLong(a));
}

function toString_8(value_0){
  if (RUN_IN_JVM) {
    return valueOf_16(fromDouble_0(value_0));
  }
  return valueOf_13(value_0);
}

function toString_9(a){
  $clinit_LongLib();
  if (isSmallLong(a)) {
    return toString_8(asDouble(a));
  }
  return toString_7(asBigLong(a));
}

function truncate(value_0){
  return value_0 < 0?ceil_0(value_0):floor_0(value_0);
}

function xor_0(a, b){
  $clinit_LongLib();
  return createLongEmul(xor(toBigLong(a), toBigLong(b)));
}

defineClass(334, 1, {1:1});
_.$init_69 = function $init_69(){
}
;
var RUN_IN_JVM = false;
var Lcom_google_gwt_lang_LongLib_2_classLit = createForClass('com.google.gwt.lang', 'LongLib', 334, Ljava_lang_Object_2_classLit);
function $clinit_LongLib$LongEmul(){
  $clinit_LongLib$LongEmul = emptyMethod;
  $clinit_Object();
}

function LongLib$LongEmul(){
  $clinit_LongLib$LongEmul();
  Object_0.call(this);
  this.$init_70();
}

defineClass(110, 1, {1:1}, LongLib$LongEmul);
_.$init_70 = function $init_70(){
}
;
var Lcom_google_gwt_lang_LongLib$LongEmul_2_classLit = createForClass('com.google.gwt.lang', 'LongLib/LongEmul', 110, Ljava_lang_Object_2_classLit);
function $clinit_LongLib$SmallLong(){
  $clinit_LongLib$SmallLong = emptyMethod;
  $clinit_Object();
}

function LongLib$SmallLong(){
  $clinit_LongLib$SmallLong();
  Object_0.call(this);
  this.$init_71();
}

defineClass(151, 1, {1:1}, LongLib$SmallLong);
_.$init_71 = function $init_71(){
}
;
_.d = 0;
var Lcom_google_gwt_lang_LongLib$SmallLong_2_classLit = createForClass('com.google.gwt.lang', 'LongLib/SmallLong', 151, Ljava_lang_Object_2_classLit);
function $clinit_Stats(){
  $clinit_Stats = emptyMethod;
  $clinit_Object();
}

function Stats(){
  Object_0.call(this);
  this.$init_72();
}

function isStatsAvailable_0(){
  $clinit_Stats();
  return !!$stats;
}

function onModuleStart(mainClassName){
  $clinit_Stats();
  return $stats({moduleName:$moduleName, sessionId:$sessionId, subSystem:'startup', evtGroup:'moduleStartup', millis:(new Date).getTime(), type:'onModuleLoadStart', className:mainClassName});
}

defineClass(337, 1, {1:1});
_.$init_72 = function $init_72(){
}
;
var Lcom_google_gwt_lang_Stats_2_classLit = createForClass('com.google.gwt.lang', 'Stats', 337, Ljava_lang_Object_2_classLit);
function $clinit_com_00046mckesson_00046mg2_00046WorklistProto__EntryMethodHolder(){
  $clinit_com_00046mckesson_00046mg2_00046WorklistProto__EntryMethodHolder = emptyMethod;
  $clinit_Object();
}

function init_0(){
  $clinit_com_00046mckesson_00046mg2_00046WorklistProto__EntryMethodHolder();
  castTo(new UserAgentAsserter, 42).onModuleLoad();
  castTo(new DocumentModeAsserter, 42).onModuleLoad();
  castTo(new LogConfiguration, 42).onModuleLoad();
  castTo(new WorklistProto, 42).onModuleLoad();
}

defineClass(311, 1, {1:1});
var Lcom_google_gwt_lang_com_100046mckesson_100046mg2_100046WorklistProto_1_1EntryMethodHolder_2_classLit = createForClass('com.google.gwt.lang', 'com_00046mckesson_00046mg2_00046WorklistProto__EntryMethodHolder', 311, Ljava_lang_Object_2_classLit);
function $clinit_LogConfiguration(){
  $clinit_LogConfiguration = emptyMethod;
  $clinit_Object();
  impl_1 = castTo(new LogConfiguration$LogConfigurationImplNull, 319);
}

function LogConfiguration(){
  $clinit_LogConfiguration();
  Object_0.call(this);
  this.$init_74();
}

defineClass(126, 1, {42:1, 1:1}, LogConfiguration);
_.$init_74 = function $init_74(){
}
;
_.onModuleLoad = function onModuleLoad(){
  var log_0;
  impl_1.configureClientSideLogging();
  if (impl_1.loggingIsEnabled()) {
    if (isNull(getUncaughtExceptionHandler())) {
      log_0 = getLogger_0(Lcom_google_gwt_logging_client_LogConfiguration_2_classLit.getName());
      setUncaughtExceptionHandler(new LogConfiguration$1(this, log_0));
    }
  }
}
;
var impl_1;
var Lcom_google_gwt_logging_client_LogConfiguration_2_classLit = createForClass('com.google.gwt.logging.client', 'LogConfiguration', 126, Ljava_lang_Object_2_classLit);
function $clinit_LogConfiguration$1(){
  $clinit_LogConfiguration$1 = emptyMethod;
  $clinit_Object();
}

function LogConfiguration$1(this$0, val$log){
  $clinit_LogConfiguration$1();
  this.this$01 = this$0;
  this.val$log2 = val$log;
  Object_0.call(this);
  this.$init_75();
}

defineClass(133, 1, {1:1}, LogConfiguration$1);
_.$init_75 = function $init_75(){
}
;
_.onUncaughtException = function onUncaughtException(e){
  this.val$log2.log_3(($clinit_Level() , SEVERE), e.getMessage(), e);
}
;
var Lcom_google_gwt_logging_client_LogConfiguration$1_2_classLit = createForClass('com.google.gwt.logging.client', 'LogConfiguration/1', 133, Ljava_lang_Object_2_classLit);
function $clinit_LogConfiguration$LogConfigurationImpl(){
  $clinit_LogConfiguration$LogConfigurationImpl = emptyMethod;
}

var Lcom_google_gwt_logging_client_LogConfiguration$LogConfigurationImpl_2_classLit = createForInterface('com.google.gwt.logging.client', 'LogConfiguration/LogConfigurationImpl');
function $clinit_LogConfiguration$LogConfigurationImplNull(){
  $clinit_LogConfiguration$LogConfigurationImplNull = emptyMethod;
  $clinit_Object();
}

function LogConfiguration$LogConfigurationImplNull(){
  $clinit_LogConfiguration$LogConfigurationImplNull();
  Object_0.call(this);
  this.$init_76();
}

defineClass(132, 1, {319:1, 1:1}, LogConfiguration$LogConfigurationImplNull);
_.$init_76 = function $init_76(){
}
;
_.configureClientSideLogging = function configureClientSideLogging(){
}
;
_.loggingIsEnabled = function loggingIsEnabled(){
  return false;
}
;
var Lcom_google_gwt_logging_client_LogConfiguration$LogConfigurationImplNull_2_classLit = createForClass('com.google.gwt.logging.client', 'LogConfiguration/LogConfigurationImplNull', 132, Ljava_lang_Object_2_classLit);
function $clinit_LogConfiguration$LogConfigurationImplRegular(){
  $clinit_LogConfiguration$LogConfigurationImplRegular = emptyMethod;
}

defineClass(320, 1, {1:1});
var Lcom_google_gwt_logging_client_LogConfiguration$LogConfigurationImplRegular_2_classLit = createForClass('com.google.gwt.logging.client', 'LogConfiguration/LogConfigurationImplRegular', 320, Ljava_lang_Object_2_classLit);
function $clinit_LogConfiguration$LogConfigurationImplSevere(){
  $clinit_LogConfiguration$LogConfigurationImplSevere = emptyMethod;
}

defineClass(321, 320, {1:1});
var Lcom_google_gwt_logging_client_LogConfiguration$LogConfigurationImplSevere_2_classLit = createForClass('com.google.gwt.logging.client', 'LogConfiguration/LogConfigurationImplSevere', 321, Lcom_google_gwt_logging_client_LogConfiguration$LogConfigurationImplRegular_2_classLit);
function $clinit_LogConfiguration$LogConfigurationImplWarning(){
  $clinit_LogConfiguration$LogConfigurationImplWarning = emptyMethod;
}

defineClass(322, 320, {1:1});
var Lcom_google_gwt_logging_client_LogConfiguration$LogConfigurationImplWarning_2_classLit = createForClass('com.google.gwt.logging.client', 'LogConfiguration/LogConfigurationImplWarning', 322, Lcom_google_gwt_logging_client_LogConfiguration$LogConfigurationImplRegular_2_classLit);
function $clinit_Handler(){
  $clinit_Handler = emptyMethod;
  $clinit_Object();
}

function Handler(){
  $clinit_Handler();
  Object_0.call(this);
  this.$init_77();
}

defineClass(23, 1, {1:1, 23:1});
_.$init_77 = function $init_77(){
}
;
_.getLevel = function getLevel(){
  if (isNotNull(this.level_0)) {
    return this.level_0;
  }
  return $clinit_Level() , ALL;
}
;
_.isLoggable = function isLoggable(record){
  return this.getLevel().intValue() <= record.getLevel().intValue();
}
;
_.setLevel = function setLevel(newLevel){
  this.level_0 = newLevel;
}
;
var Ljava_util_logging_Handler_2_classLit = createForClass('java.util.logging', 'Handler', 23, Ljava_lang_Object_2_classLit);
function $clinit_NullLogHandler(){
  $clinit_NullLogHandler = emptyMethod;
  $clinit_Handler();
}

function NullLogHandler(){
  $clinit_NullLogHandler();
  Handler.call(this);
  this.$init_78();
}

defineClass(62, 23, {62:1, 1:1, 23:1}, NullLogHandler);
_.$init_78 = function $init_78(){
}
;
_.close_0 = function close_0(){
}
;
_.flush = function flush_0(){
}
;
_.publish = function publish(record){
}
;
var Lcom_google_gwt_logging_client_NullLogHandler_2_classLit = createForClass('com.google.gwt.logging.client', 'NullLogHandler', 62, Ljava_util_logging_Handler_2_classLit);
function $clinit_RemoteLogHandlerBase(){
  $clinit_RemoteLogHandlerBase = emptyMethod;
}

defineClass(446, 23, {1:1, 23:1});
var Lcom_google_gwt_logging_client_RemoteLogHandlerBase_2_classLit = createForClass('com.google.gwt.logging.client', 'RemoteLogHandlerBase', 446, Ljava_util_logging_Handler_2_classLit);
function $clinit_RegExp(){
  $clinit_RegExp = emptyMethod;
  $clinit_JavaScriptObject();
}

function $replace(this$static, input_0, replacement){
  $clinit_RegExp();
  return input_0.replace(this$static, replacement);
}

function $test(this$static, input_0){
  $clinit_RegExp();
  return this$static.test(input_0);
}

function compile(pattern){
  $clinit_RegExp();
  return new RegExp(pattern);
}

function compile_0(pattern, flags){
  $clinit_RegExp();
  return new RegExp(pattern, flags);
}

function $clinit_ClientBundle(){
  $clinit_ClientBundle = emptyMethod;
}

var Lcom_google_gwt_resources_client_ClientBundle_2_classLit = createForInterface('com.google.gwt.resources.client', 'ClientBundle');
function $clinit_Annotation(){
  $clinit_Annotation = emptyMethod;
}

var Ljava_lang_annotation_Annotation_2_classLit = createForInterface('java.lang.annotation', 'Annotation');
function $clinit_ClientBundle$Source(){
  $clinit_ClientBundle$Source = emptyMethod;
}

var Lcom_google_gwt_resources_client_ClientBundle$Source_2_classLit = createForInterface('com.google.gwt.resources.client', 'ClientBundle/Source');
function $clinit_ResourcePrototype(){
  $clinit_ResourcePrototype = emptyMethod;
}

var Lcom_google_gwt_resources_client_ResourcePrototype_2_classLit = createForInterface('com.google.gwt.resources.client', 'ResourcePrototype');
function $clinit_CssResourceBase(){
  $clinit_CssResourceBase = emptyMethod;
}

var Lcom_google_gwt_resources_client_CssResourceBase_2_classLit = createForInterface('com.google.gwt.resources.client', 'CssResourceBase');
function $clinit_CssResource(){
  $clinit_CssResource = emptyMethod;
}

var Lcom_google_gwt_resources_client_CssResource_2_classLit = createForInterface('com.google.gwt.resources.client', 'CssResource');
function $clinit_CssResource$ClassName(){
  $clinit_CssResource$ClassName = emptyMethod;
}

var Lcom_google_gwt_resources_client_CssResource$ClassName_2_classLit = createForInterface('com.google.gwt.resources.client', 'CssResource/ClassName');
function $clinit_CssResource$Import(){
  $clinit_CssResource$Import = emptyMethod;
}

var Lcom_google_gwt_resources_client_CssResource$Import_2_classLit = createForInterface('com.google.gwt.resources.client', 'CssResource/Import');
function $clinit_CssResource$ImportedWithPrefix(){
  $clinit_CssResource$ImportedWithPrefix = emptyMethod;
}

var Lcom_google_gwt_resources_client_CssResource$ImportedWithPrefix_2_classLit = createForInterface('com.google.gwt.resources.client', 'CssResource/ImportedWithPrefix');
function $clinit_CssResource$NotStrict(){
  $clinit_CssResource$NotStrict = emptyMethod;
}

var Lcom_google_gwt_resources_client_CssResource$NotStrict_2_classLit = createForInterface('com.google.gwt.resources.client', 'CssResource/NotStrict');
function $clinit_CssResource$Shared(){
  $clinit_CssResource$Shared = emptyMethod;
}

var Lcom_google_gwt_resources_client_CssResource$Shared_2_classLit = createForInterface('com.google.gwt.resources.client', 'CssResource/Shared');
function $clinit_CssResource$Strict(){
  $clinit_CssResource$Strict = emptyMethod;
}

var Lcom_google_gwt_resources_client_CssResource$Strict_2_classLit = createForInterface('com.google.gwt.resources.client', 'CssResource/Strict');
function $clinit_SafeHtmlTemplates(){
  $clinit_SafeHtmlTemplates = emptyMethod;
}

var Lcom_google_gwt_safehtml_client_SafeHtmlTemplates_2_classLit = createForInterface('com.google.gwt.safehtml.client', 'SafeHtmlTemplates');
function $clinit_SafeHtmlTemplates$Template(){
  $clinit_SafeHtmlTemplates$Template = emptyMethod;
}

var Lcom_google_gwt_safehtml_client_SafeHtmlTemplates$Template_2_classLit = createForInterface('com.google.gwt.safehtml.client', 'SafeHtmlTemplates/Template');
function $clinit_SafeHtml(){
  $clinit_SafeHtml = emptyMethod;
}

var Lcom_google_gwt_safehtml_shared_SafeHtml_2_classLit = createForInterface('com.google.gwt.safehtml.shared', 'SafeHtml');
function $clinit_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(){
  $clinit_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml = emptyMethod;
  $clinit_Object();
}

function OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(html){
  $clinit_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml();
  Object_0.call(this);
  this.$init_79();
  if (jsEquals(html, null)) {
    throw toJs(new NullPointerException_0('html is null'));
  }
  this.html = html;
}

defineClass(12, 1, {83:1, 3:1, 1:1}, OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml);
_.$init_79 = function $init_79(){
}
;
_.asString = function asString(){
  return this.html;
}
;
_.equals = function equals_1(obj){
  if (!instanceOf(obj, 83)) {
    return false;
  }
  return equals_Ljava_lang_Object__Z__devirtual$_2(this.html, castTo(obj, 83).asString());
}
;
_.hashCode = function hashCode_3(){
  return hashCode__I__devirtual$_2(this.html);
}
;
var Lcom_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_2_classLit = createForClass('com.google.gwt.safehtml.shared', 'OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml', 12, Ljava_lang_Object_2_classLit);
function $clinit_SafeHtmlString(){
  $clinit_SafeHtmlString = emptyMethod;
  $clinit_Object();
}

function SafeHtmlString(html){
  $clinit_SafeHtmlString();
  Object_0.call(this);
  this.$init_80();
  if (jsEquals(html, null)) {
    throw toJs(new NullPointerException_0('html is null'));
  }
  this.html = html;
}

defineClass(280, 1, {83:1, 3:1, 1:1}, SafeHtmlString);
_.$init_80 = function $init_80(){
}
;
_.asString = function asString_0(){
  return this.html;
}
;
_.equals = function equals_2(obj){
  if (!instanceOf(obj, 83)) {
    return false;
  }
  return equals_Ljava_lang_Object__Z__devirtual$_2(this.html, castTo(obj, 83).asString());
}
;
_.hashCode = function hashCode_4(){
  return hashCode__I__devirtual$_2(this.html);
}
;
_.toString_0 = function toString_10(){
  return 'safe: "' + this.asString() + '"';
}
;
var Lcom_google_gwt_safehtml_shared_SafeHtmlString_2_classLit = createForClass('com.google.gwt.safehtml.shared', 'SafeHtmlString', 280, Ljava_lang_Object_2_classLit);
function $clinit_SafeHtmlUtils(){
  $clinit_SafeHtmlUtils = emptyMethod;
  $clinit_Object();
  EMPTY_SAFE_HTML = new SafeHtmlString('');
  HTML_CHARS_RE = compile('[&<>\'"]');
  AMP_RE = compile_0('&', 'g');
  GT_RE = compile_0('>', 'g');
  LT_RE = compile_0('<', 'g');
  SQUOT_RE = compile_0("'", 'g');
  QUOT_RE = compile_0('"', 'g');
}

function htmlEscape(s){
  $clinit_SafeHtmlUtils();
  if (!$test(HTML_CHARS_RE, s)) {
    return s;
  }
  if (indexOf_Ljava_lang_String__I__devirtual$(s, '&') != -1) {
    s = $replace(AMP_RE, s, '&amp;');
  }
  if (indexOf_Ljava_lang_String__I__devirtual$(s, '<') != -1) {
    s = $replace(LT_RE, s, '&lt;');
  }
  if (indexOf_Ljava_lang_String__I__devirtual$(s, '>') != -1) {
    s = $replace(GT_RE, s, '&gt;');
  }
  if (indexOf_Ljava_lang_String__I__devirtual$(s, '"') != -1) {
    s = $replace(QUOT_RE, s, '&quot;');
  }
  if (indexOf_Ljava_lang_String__I__devirtual$(s, "'") != -1) {
    s = $replace(SQUOT_RE, s, '&#39;');
  }
  return s;
}

defineClass(645, 1, {1:1});
var AMP_RE, EMPTY_SAFE_HTML, GT_RE, HTML_CHARS_RE, HTML_ENTITY_REGEX = '[a-z]+|#[0-9]+|#x[0-9a-fA-F]+', LT_RE, QUOT_RE, SQUOT_RE;
var Lcom_google_gwt_safehtml_shared_SafeHtmlUtils_2_classLit = createForClass('com.google.gwt.safehtml.shared', 'SafeHtmlUtils', 645, Ljava_lang_Object_2_classLit);
function $clinit_SafeUri(){
  $clinit_SafeUri = emptyMethod;
}

var Lcom_google_gwt_safehtml_shared_SafeUri_2_classLit = createForInterface('com.google.gwt.safehtml.shared', 'SafeUri');
function $clinit_SafeUriString(){
  $clinit_SafeUriString = emptyMethod;
  $clinit_Object();
}

function SafeUriString(uri_0){
  $clinit_SafeUriString();
  Object_0.call(this);
  this.$init_81();
  if (jsEquals(uri_0, null)) {
    throw toJs(new NullPointerException_0('uri is null'));
  }
  this.uri_0 = uri_0;
}

defineClass(301, 1, {310:1, 1:1}, SafeUriString);
_.$init_81 = function $init_81(){
}
;
_.asString = function asString_1(){
  return this.uri_0;
}
;
_.equals = function equals_3(obj){
  if (!instanceOf(obj, 310)) {
    return false;
  }
  return equals_Ljava_lang_Object__Z__devirtual$_2(this.uri_0, castTo(obj, 310).asString());
}
;
_.hashCode = function hashCode_5(){
  return hashCode__I__devirtual$_2(this.uri_0);
}
;
_.toString_0 = function toString_11(){
  return 'safe: "' + this.asString() + '"';
}
;
var Lcom_google_gwt_safehtml_shared_SafeUriString_2_classLit = createForClass('com.google.gwt.safehtml.shared', 'SafeUriString', 301, Ljava_lang_Object_2_classLit);
function $clinit_UriUtils(){
  $clinit_UriUtils = emptyMethod;
  $clinit_Object();
  ESCAPED_LBRACKET_RE = isScript_0()?compile_0('%5B', 'g'):null;
  ESCAPED_RBRACKET_RE = isScript_0()?compile_0('%5D', 'g'):null;
}

function unsafeCastFromUntrustedString(s){
  $clinit_UriUtils();
  return new SafeUriString(s);
}

defineClass(651, 1, {1:1});
var DONT_NEED_ENCODING = ";/?:@&=+$,-_.!~*'()#[]", ESCAPED_LBRACKET_RE, ESCAPED_RBRACKET_RE;
var Lcom_google_gwt_safehtml_shared_UriUtils_2_classLit = createForClass('com.google.gwt.safehtml.shared', 'UriUtils', 651, Ljava_lang_Object_2_classLit);
function $clinit_ArrayBuffer(){
  $clinit_ArrayBuffer = emptyMethod;
}

var Lcom_google_gwt_typedarrays_shared_ArrayBuffer_2_classLit = createForInterface('com.google.gwt.typedarrays.shared', 'ArrayBuffer');
function $clinit_ArrayBufferNative(){
  $clinit_ArrayBufferNative = emptyMethod;
  $clinit_JavaScriptObject();
}

function $clinit_ArrayBufferView(){
  $clinit_ArrayBufferView = emptyMethod;
}

var Lcom_google_gwt_typedarrays_shared_ArrayBufferView_2_classLit = createForInterface('com.google.gwt.typedarrays.shared', 'ArrayBufferView');
function $clinit_ArrayBufferViewNative(){
  $clinit_ArrayBufferViewNative = emptyMethod;
  $clinit_JavaScriptObject();
}

function $clinit_DataView(){
  $clinit_DataView = emptyMethod;
}

var Lcom_google_gwt_typedarrays_shared_DataView_2_classLit = createForInterface('com.google.gwt.typedarrays.shared', 'DataView');
function $clinit_DataViewNative(){
  $clinit_DataViewNative = emptyMethod;
  $clinit_ArrayBufferViewNative();
}

function $clinit_Float32Array(){
  $clinit_Float32Array = emptyMethod;
}

var BYTES_PER_ELEMENT = 4;
var Lcom_google_gwt_typedarrays_shared_Float32Array_2_classLit = createForInterface('com.google.gwt.typedarrays.shared', 'Float32Array');
function $clinit_Float32ArrayNative(){
  $clinit_Float32ArrayNative = emptyMethod;
  $clinit_ArrayBufferViewNative();
}

function $length_1(this$static){
  return this$static.length;
}

function $clinit_Float64Array(){
  $clinit_Float64Array = emptyMethod;
}

var BYTES_PER_ELEMENT_0 = 8;
var Lcom_google_gwt_typedarrays_shared_Float64Array_2_classLit = createForInterface('com.google.gwt.typedarrays.shared', 'Float64Array');
function $clinit_Float64ArrayNative(){
  $clinit_Float64ArrayNative = emptyMethod;
  $clinit_ArrayBufferViewNative();
}

function $length_2(this$static){
  return this$static.length;
}

function $clinit_Int16Array(){
  $clinit_Int16Array = emptyMethod;
}

var BYTES_PER_ELEMENT_1 = 2;
var Lcom_google_gwt_typedarrays_shared_Int16Array_2_classLit = createForInterface('com.google.gwt.typedarrays.shared', 'Int16Array');
function $clinit_Int16ArrayNative(){
  $clinit_Int16ArrayNative = emptyMethod;
  $clinit_ArrayBufferViewNative();
}

function $length_3(this$static){
  return this$static.length;
}

function $clinit_Int32Array(){
  $clinit_Int32Array = emptyMethod;
}

var BYTES_PER_ELEMENT_2 = 4;
var Lcom_google_gwt_typedarrays_shared_Int32Array_2_classLit = createForInterface('com.google.gwt.typedarrays.shared', 'Int32Array');
function $clinit_Int32ArrayNative(){
  $clinit_Int32ArrayNative = emptyMethod;
  $clinit_ArrayBufferViewNative();
}

function $get_2(this$static, index_0){
  return this$static[index_0];
}

function $length_4(this$static){
  return this$static.length;
}

function $clinit_Int8Array(){
  $clinit_Int8Array = emptyMethod;
}

var BYTES_PER_ELEMENT_3 = 1;
var Lcom_google_gwt_typedarrays_shared_Int8Array_2_classLit = createForInterface('com.google.gwt.typedarrays.shared', 'Int8Array');
function $clinit_Int8ArrayNative(){
  $clinit_Int8ArrayNative = emptyMethod;
  $clinit_ArrayBufferViewNative();
}

function $length_5(this$static){
  return this$static.length;
}

function $clinit_Uint16Array(){
  $clinit_Uint16Array = emptyMethod;
}

var BYTES_PER_ELEMENT_4 = 2;
var Lcom_google_gwt_typedarrays_shared_Uint16Array_2_classLit = createForInterface('com.google.gwt.typedarrays.shared', 'Uint16Array');
function $clinit_Uint16ArrayNative(){
  $clinit_Uint16ArrayNative = emptyMethod;
  $clinit_ArrayBufferViewNative();
}

function $get_3(this$static, index_0){
  return this$static[index_0];
}

function $length_6(this$static){
  return this$static.length;
}

function $clinit_Uint32Array(){
  $clinit_Uint32Array = emptyMethod;
}

var BYTES_PER_ELEMENT_5 = 4;
var Lcom_google_gwt_typedarrays_shared_Uint32Array_2_classLit = createForInterface('com.google.gwt.typedarrays.shared', 'Uint32Array');
function $clinit_Uint32ArrayNative(){
  $clinit_Uint32ArrayNative = emptyMethod;
  $clinit_ArrayBufferViewNative();
}

function $length_7(this$static){
  return this$static.length;
}

function $clinit_Uint8Array(){
  $clinit_Uint8Array = emptyMethod;
}

var BYTES_PER_ELEMENT_6 = 1;
var Lcom_google_gwt_typedarrays_shared_Uint8Array_2_classLit = createForInterface('com.google.gwt.typedarrays.shared', 'Uint8Array');
function $clinit_Uint8ClampedArray(){
  $clinit_Uint8ClampedArray = emptyMethod;
}

var Lcom_google_gwt_typedarrays_shared_Uint8ClampedArray_2_classLit = createForInterface('com.google.gwt.typedarrays.shared', 'Uint8ClampedArray');
function $clinit_Uint8ArrayNative(){
  $clinit_Uint8ArrayNative = emptyMethod;
  $clinit_ArrayBufferViewNative();
}

function $length_8(this$static){
  return this$static.length;
}

function $clinit_LazyDomElement(){
  $clinit_LazyDomElement = emptyMethod;
  $clinit_Object();
}

function LazyDomElement(domId){
  $clinit_LazyDomElement();
  Object_0.call(this);
  this.$init_82();
  this.domId = domId;
}

defineClass(13, 1, {1:1}, LazyDomElement);
_.$init_82 = function $init_82(){
}
;
_.get_1 = function get_3(){
  if (isNull(this.element)) {
    this.element = $cast($getElementById(get_1(), this.domId));
    if (isNull(this.element)) {
      throw toJs(new RuntimeException_1('Cannot find element with id "' + this.domId + '". Perhaps it is not attached to the document body.'));
    }
    $removeAttribute(this.element, 'id');
  }
  return this.element;
}
;
var Lcom_google_gwt_uibinder_client_LazyDomElement_2_classLit = createForClass('com.google.gwt.uibinder.client', 'LazyDomElement', 13, Ljava_lang_Object_2_classLit);
function $clinit_UiBinder(){
  $clinit_UiBinder = emptyMethod;
}

var Lcom_google_gwt_uibinder_client_UiBinder_2_classLit = createForInterface('com.google.gwt.uibinder.client', 'UiBinder');
function $clinit_UiBinderUtil(){
  $clinit_UiBinderUtil = emptyMethod;
  $clinit_Object();
}

function attachToDom(element){
  $clinit_UiBinderUtil();
  var origParent, origSibling;
  ensureHiddenDiv();
  origParent = $getParentElement(element);
  origSibling = $getNextSiblingElement(element);
  $appendChild(hiddenDiv, element);
  return new UiBinderUtil$TempAttachment(origParent, origSibling, element);
}

function ensureHiddenDiv(){
  if (isNull(hiddenDiv)) {
    hiddenDiv = $createDivElement(get_1());
    setVisible(hiddenDiv, false);
    $appendChild(getBodyElement(), hiddenDiv);
  }
}

function orphan(node){
  $clinit_UiBinderUtil();
  $removeChild($getParentNode(node), node);
}

defineClass(642, 1, {1:1});
var hiddenDiv;
var Lcom_google_gwt_uibinder_client_UiBinderUtil_2_classLit = createForClass('com.google.gwt.uibinder.client', 'UiBinderUtil', 642, Ljava_lang_Object_2_classLit);
function $clinit_UiBinderUtil$TempAttachment(){
  $clinit_UiBinderUtil$TempAttachment = emptyMethod;
  $clinit_Object();
}

function UiBinderUtil$TempAttachment(origParent, origSibling, element){
  $clinit_UiBinderUtil$TempAttachment();
  Object_0.call(this);
  this.$init_83();
  this.origParent = origParent;
  this.origSibling = origSibling;
  this.element = element;
}

defineClass(271, 1, {1:1}, UiBinderUtil$TempAttachment);
_.$init_83 = function $init_83(){
}
;
_.detach = function detach(){
  if (isNotNull(this.origParent)) {
    $insertBefore(this.origParent, this.element, this.origSibling);
  }
   else {
    orphan(this.element);
  }
}
;
var Lcom_google_gwt_uibinder_client_UiBinderUtil$TempAttachment_2_classLit = createForClass('com.google.gwt.uibinder.client', 'UiBinderUtil/TempAttachment', 271, Ljava_lang_Object_2_classLit);
function $clinit_BaseListenerWrapper(){
  $clinit_BaseListenerWrapper = emptyMethod;
}

defineClass(636, 1, {19:1, 1:1});
var Lcom_google_gwt_user_client_BaseListenerWrapper_2_classLit = createForClass('com.google.gwt.user.client', 'BaseListenerWrapper', 636, Ljava_lang_Object_2_classLit);
function $clinit_Window$ClosingHandler(){
  $clinit_Window$ClosingHandler = emptyMethod;
}

var Lcom_google_gwt_user_client_Window$ClosingHandler_2_classLit = createForInterface('com.google.gwt.user.client', 'Window/ClosingHandler');
function $clinit_BaseListenerWrapper$WrapWindowClose(){
  $clinit_BaseListenerWrapper$WrapWindowClose = emptyMethod;
}

defineClass(638, 636, {306:1, 19:1, 657:1, 1:1});
var Lcom_google_gwt_user_client_BaseListenerWrapper$WrapWindowClose_2_classLit = createForClass('com.google.gwt.user.client', 'BaseListenerWrapper/WrapWindowClose', 638, Lcom_google_gwt_user_client_BaseListenerWrapper_2_classLit);
function $clinit_BaseListenerWrapper$WrapWindowResize(){
  $clinit_BaseListenerWrapper$WrapWindowResize = emptyMethod;
}

defineClass(639, 636, {19:1, 1:1});
var Lcom_google_gwt_user_client_BaseListenerWrapper$WrapWindowResize_2_classLit = createForClass('com.google.gwt.user.client', 'BaseListenerWrapper/WrapWindowResize', 639, Lcom_google_gwt_user_client_BaseListenerWrapper_2_classLit);
function $clinit_Window$ScrollHandler(){
  $clinit_Window$ScrollHandler = emptyMethod;
}

var Lcom_google_gwt_user_client_Window$ScrollHandler_2_classLit = createForInterface('com.google.gwt.user.client', 'Window/ScrollHandler');
function $clinit_BaseListenerWrapper$WrapWindowScroll(){
  $clinit_BaseListenerWrapper$WrapWindowScroll = emptyMethod;
}

defineClass(640, 636, {19:1, 1:1});
var Lcom_google_gwt_user_client_BaseListenerWrapper$WrapWindowScroll_2_classLit = createForClass('com.google.gwt.user.client', 'BaseListenerWrapper/WrapWindowScroll', 640, Lcom_google_gwt_user_client_BaseListenerWrapper_2_classLit);
function $clinit_Cookies(){
  $clinit_Cookies = emptyMethod;
  $clinit_Object();
}

function ensureCookies(){
  var newCachedCookies;
  if (isNull(cachedCookies) || needsRefresh()) {
    newCachedCookies = new HashMap;
    loadCookies(newCachedCookies);
    cachedCookies = newCachedCookies;
  }
  return cachedCookies;
}

function getCookie(name_0){
  $clinit_Cookies();
  var cookiesMap;
  cookiesMap = ensureCookies();
  return castToString(cookiesMap.get_2(name_0));
}

function isValidCookieName(name_0){
  if (uriEncoding) {
    return true;
  }
   else if (contains_Ljava_lang_CharSequence__Z__devirtual$(name_0, '=') || contains_Ljava_lang_CharSequence__Z__devirtual$(name_0, ';') || contains_Ljava_lang_CharSequence__Z__devirtual$(name_0, ',') || startsWith_Ljava_lang_String__Z__devirtual$(name_0, '$') || matches_Ljava_lang_String__Z__devirtual$(name_0, '.*\\s+.*')) {
    return false;
  }
   else {
    return true;
  }
}

function isValidCookieValue(value_0){
  if (uriEncoding) {
    return true;
  }
  if (contains_Ljava_lang_CharSequence__Z__devirtual$(value_0, '=') || contains_Ljava_lang_CharSequence__Z__devirtual$(value_0, ';')) {
    return false;
  }
   else {
    return true;
  }
}

function loadCookies(m){
  var docCookie = $doc.cookie;
  if (docCookie && docCookie != '') {
    var crumbs = docCookie.split('; ');
    for (var i_0 = crumbs.length - 1; i_0 >= 0; --i_0) {
      var name_0, value_0;
      var eqIdx = crumbs[i_0].indexOf('=');
      if (eqIdx == -1) {
        name_0 = crumbs[i_0];
        value_0 = '';
      }
       else {
        name_0 = crumbs[i_0].substring(0, eqIdx);
        value_0 = crumbs[i_0].substring(eqIdx + 1);
      }
      if (uriEncoding) {
        try {
          name_0 = decodeURIComponent(name_0);
        }
         catch (e) {
        }
        try {
          value_0 = decodeURIComponent(value_0);
        }
         catch (e) {
        }
      }
      m.put(name_0, value_0);
    }
  }
}

function needsRefresh(){
  var docCookie = $doc.cookie;
  if (docCookie != rawCookies) {
    rawCookies = docCookie;
    return true;
  }
   else {
    return false;
  }
}

function setCookie(name_0, value_0, expires){
  $clinit_Cookies();
  setCookie_0(name_0, value_0, expires, null, null, false);
}

function setCookie_0(name_0, value_0, expires, domain, path, secure){
  if (uriEncoding) {
    name_0 = uriEncode(name_0);
    value_0 = uriEncode(value_0);
  }
   else if (!isValidCookieName(name_0)) {
    throw toJs(new IllegalArgumentException('Illegal cookie format: ' + name_0 + ' is not a valid cookie name.'));
  }
   else if (!isValidCookieValue(value_0)) {
    throw toJs(new IllegalArgumentException('Illegal cookie format: ' + value_0 + ' is not a valid cookie value.'));
  }
  setCookieImpl(name_0, value_0, toDouble_0(isNull(expires)?0:expires.getTime_0()), domain, path, secure);
}

function setCookieImpl(name_0, value_0, expires, domain, path, secure){
  var c = name_0 + '=' + value_0;
  if (expires)
    c += ';expires=' + (new Date(expires)).toGMTString();
  if (domain)
    c += ';domain=' + domain;
  if (path)
    c += ';path=' + path;
  if (secure)
    c += ';secure';
  $doc.cookie = c;
}

function uriEncode(s){
  return encodeURIComponent(s);
}

defineClass(453, 1, {1:1});
var cachedCookies = null, isCookieChecked = false, isCookieEnabled = false, rawCookies, uriEncoding = true;
var Lcom_google_gwt_user_client_Cookies_2_classLit = createForClass('com.google.gwt.user.client', 'Cookies', 453, Ljava_lang_Object_2_classLit);
function $clinit_DOM(){
  $clinit_DOM = emptyMethod;
  $clinit_Object();
  impl_2 = castTo(new DOMImplWebkit_0, 99);
}

function appendChild(parent_0, child){
  $clinit_DOM();
  $appendChild(parent_0, resolve(child));
}

function asOld(elem){
  $clinit_DOM();
  return elem;
}

function dispatchEvent_2(evt, elem){
  $clinit_DOM();
  var eventListener;
  eventListener = getEventListener(elem);
  if (isNull(eventListener)) {
    return false;
  }
  dispatchEvent_3(evt, elem, eventListener);
  return true;
}

function dispatchEvent_3(evt, elem, listener){
  $clinit_DOM();
  var prevCurrentEvent;
  prevCurrentEvent = currentEvent;
  currentEvent = evt;
  dispatchEventImpl(evt, elem, listener);
  currentEvent = prevCurrentEvent;
}

function dispatchEventImpl(evt, elem, listener){
  if (jsEquals(elem, sCaptureElem)) {
    if (eventGetType_0(evt) == 8192) {
      sCaptureElem = null;
    }
  }
  listener.onBrowserEvent(evt);
}

function eventGetType_0(evt){
  $clinit_DOM();
  return impl_2.eventGetTypeInt(evt);
}

function getEventListener(elem){
  $clinit_DOM();
  return getEventListener_1(elem);
}

function getEventsSunk(elem){
  $clinit_DOM();
  return impl_2.getEventsSunk(elem);
}

function getParent(elem){
  $clinit_DOM();
  return asOld($getParentElement(elem));
}

function insertChild(parent_0, child, index_0){
  $clinit_DOM();
  impl_2.insertChild(parent_0, resolve(child), index_0);
}

function isPotential(o){
  $clinit_DOM();
  try {
    return !!o && !!o.__gwt_resolve;
  }
   catch (e) {
    return false;
  }
}

function previewEvent(evt){
  $clinit_DOM();
  var ret;
  ret = fireNativePreviewEvent(evt);
  if (!ret && isNotNull(evt)) {
    $stopPropagation(evt);
    $preventDefault(evt);
  }
  return ret;
}

function resolve(maybePotential){
  return maybePotential.__gwt_resolve?maybePotential.__gwt_resolve():maybePotential;
}

function setEventListener(elem, listener){
  $clinit_DOM();
  setEventListener_0(elem, listener);
}

function sinkBitlessEvent(elem, eventTypeName){
  $clinit_DOM();
  impl_2.sinkBitlessEvent(elem, eventTypeName);
}

function sinkEvents(elem, eventBits){
  $clinit_DOM();
  impl_2.sinkEvents(elem, eventBits);
}

defineClass(635, 1, {1:1});
var currentEvent = null, impl_2, sCaptureElem;
var Lcom_google_gwt_user_client_DOM_2_classLit = createForClass('com.google.gwt.user.client', 'DOM', 635, Ljava_lang_Object_2_classLit);
function $clinit_Event$NativePreviewHandler(){
  $clinit_Event$NativePreviewHandler = emptyMethod;
}

var Lcom_google_gwt_user_client_Event$NativePreviewHandler_2_classLit = createForInterface('com.google.gwt.user.client', 'Event/NativePreviewHandler');
function $clinit_DOM$NativePreview(){
  $clinit_DOM$NativePreview = emptyMethod;
}

defineClass(637, 636, {19:1, 1:1});
var Lcom_google_gwt_user_client_DOM$NativePreview_2_classLit = createForClass('com.google.gwt.user.client', 'DOM/NativePreview', 637, Lcom_google_gwt_user_client_BaseListenerWrapper_2_classLit);
function $clinit_DocumentModeAsserter(){
  $clinit_DocumentModeAsserter = emptyMethod;
  $clinit_Object();
}

function DocumentModeAsserter(){
  $clinit_DocumentModeAsserter();
  Object_0.call(this);
  this.$init_84();
}

defineClass(125, 1, {42:1, 1:1}, DocumentModeAsserter);
_.$init_84 = function $init_84(){
}
;
_.onModuleLoad = function onModuleLoad_0(){
  var allowedModes, currentMode, i_0, impl, message, severity;
  impl = castTo(new DocumentModeAsserter_DocumentModeProperty, 317);
  severity = impl.getDocumentModeSeverity();
  if (jsEquals(severity, ($clinit_DocumentModeAsserter$Severity() , IGNORE))) {
    return;
  }
  currentMode = $getCompatMode(get_1());
  allowedModes = impl.getAllowedDocumentModes();
  for (i_0 = 0; i_0 < allowedModes.length; i_0++) {
    if (equals_Ljava_lang_Object__Z__devirtual$_2(allowedModes[i_0], currentMode)) {
      return;
    }
  }
  if (allowedModes.length == 1 && equals_Ljava_lang_Object__Z__devirtual$_2('CSS1Compat', allowedModes[0]) && equals_Ljava_lang_Object__Z__devirtual$_2('BackCompat', currentMode)) {
    message = "GWT no longer supports Quirks Mode (document.compatMode=' " + 'BackCompat' + "').<br>Make sure your application's host HTML page has a Standards Mode " + "(document.compatMode=' " + 'CSS1Compat' + "') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML " + 'page.<br><br>To continue using this unsupported rendering mode and risk layout problems, ' + 'suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>' + '&nbsp;&nbsp;&lt;extend-configuration-property name="document.compatMode" value="' + currentMode + '"/&gt;';
  }
   else {
    message = "Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
  }
  if (jsEquals(severity, ($clinit_DocumentModeAsserter$Severity() , ERROR))) {
    throw toJs(new RuntimeException_1(message));
  }
  log_1(message);
}
;
var PROPERTY_DOCUMENT_COMPATMODE = 'document.compatMode', PROPERTY_DOCUMENT_COMPATMODE_SEVERITY = 'document.compatMode.severity', QUIRKS_MODE_BACK_COMPAT = 'BackCompat', STANDARDS_MODE_CSS1_COMPAT = 'CSS1Compat';
var Lcom_google_gwt_user_client_DocumentModeAsserter_2_classLit = createForClass('com.google.gwt.user.client', 'DocumentModeAsserter', 125, Ljava_lang_Object_2_classLit);
function $clinit_DocumentModeAsserter$DocumentModeProperty(){
  $clinit_DocumentModeAsserter$DocumentModeProperty = emptyMethod;
}

var Lcom_google_gwt_user_client_DocumentModeAsserter$DocumentModeProperty_2_classLit = createForInterface('com.google.gwt.user.client', 'DocumentModeAsserter/DocumentModeProperty');
function $clinit_DocumentModeAsserter$Severity(){
  $clinit_DocumentModeAsserter$Severity = emptyMethod;
  $clinit_Enum();
  ERROR = new DocumentModeAsserter$Severity('ERROR', 0);
  IGNORE = new DocumentModeAsserter$Severity('IGNORE', 1);
  WARN = new DocumentModeAsserter$Severity('WARN', 2);
}

function DocumentModeAsserter$Severity(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
  this.$init_85();
}

function valueOf_2(name_0){
  $clinit_DocumentModeAsserter$Severity();
  return valueOf(($clinit_DocumentModeAsserter$Severity$Map() , $MAP_1), name_0);
}

function values_2(){
  $clinit_DocumentModeAsserter$Severity();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_user_client_DocumentModeAsserter$Severity_2_classLit, 1), {3:1, 1:1, 7:1}, 54, 0, [ERROR, IGNORE, WARN]);
}

defineClass(54, 5, {54:1, 3:1, 4:1, 5:1, 1:1}, DocumentModeAsserter$Severity);
_.$init_85 = function $init_85(){
}
;
var ERROR, IGNORE, WARN;
var Lcom_google_gwt_user_client_DocumentModeAsserter$Severity_2_classLit = createForEnum('com.google.gwt.user.client', 'DocumentModeAsserter/Severity', 54, Ljava_lang_Enum_2_classLit, values_2, valueOf_2);
function $clinit_DocumentModeAsserter$Severity$Map(){
  $clinit_DocumentModeAsserter$Severity$Map = emptyMethod;
  $MAP_1 = createValueOfMap(values_2());
}

defineClass(318, 1, {1:1});
var $MAP_1;
var Lcom_google_gwt_user_client_DocumentModeAsserter$Severity$Map_2_classLit = createForClass('com.google.gwt.user.client', 'DocumentModeAsserter/Severity/Map', 318, Ljava_lang_Object_2_classLit);
function $clinit_DocumentModeAsserter_DocumentModeProperty(){
  $clinit_DocumentModeAsserter_DocumentModeProperty = emptyMethod;
  $clinit_Object();
}

function DocumentModeAsserter_DocumentModeProperty(){
  $clinit_DocumentModeAsserter_DocumentModeProperty();
  Object_0.call(this);
  this.$init_86();
}

defineClass(131, 1, {317:1, 1:1}, DocumentModeAsserter_DocumentModeProperty);
_.$init_86 = function $init_86(){
}
;
_.getAllowedDocumentModes = function getAllowedDocumentModes(){
  return stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {3:1, 1:1, 7:1}, 2, 6, ['CSS1Compat']);
}
;
_.getDocumentModeSeverity = function getDocumentModeSeverity(){
  return $clinit_DocumentModeAsserter$Severity() , WARN;
}
;
var Lcom_google_gwt_user_client_DocumentModeAsserter_1DocumentModeProperty_2_classLit = createForClass('com.google.gwt.user.client', 'DocumentModeAsserter_DocumentModeProperty', 131, Ljava_lang_Object_2_classLit);
function $clinit_Element_0(){
  $clinit_Element_0 = emptyMethod;
  $clinit_Element();
}

function $clinit_Event_0(){
  $clinit_Event_0 = emptyMethod;
  $clinit_NativeEvent();
  FOCUSEVENTS = 2048 | 4096;
  KEYEVENTS = 128 | 256 | 512;
  MOUSEEVENTS = 4 | 8 | 64 | 16 | 32;
  TOUCHEVENTS = 1048576 | 2097152 | 4194304 | 8388608;
  GESTUREEVENTS = 16777216 | 33554432 | 67108864;
}

function $getTypeInt(this$static){
  $clinit_Event_0();
  return eventGetType_0(this$static);
}

function fireNativePreviewEvent(nativeEvent){
  $clinit_Event_0();
  return fire_2(handlers_0, nativeEvent);
}

function getEventListener_0(elem){
  $clinit_Event_0();
  return getEventListener(elem);
}

function getTypeInt(typeName){
  $clinit_Event_0();
  return ($clinit_DOM() , impl_2).eventGetTypeInt_0(typeName);
}

function sinkEvents_0(elem, eventBits){
  $clinit_Event_0();
  sinkEvents(elem, eventBits);
}

var FOCUSEVENTS = 0, GESTUREEVENTS = 0, KEYEVENTS = 0, MOUSEEVENTS = 0, ONBLUR = 4096, ONCHANGE = 1024, ONCLICK = 1, ONCONTEXTMENU = 262144, ONDBLCLICK = 2, ONERROR = 65536, ONFOCUS = 2048, ONGESTURECHANGE = 33554432, ONGESTUREEND = 67108864, ONGESTURESTART = 16777216, ONKEYDOWN = 128, ONKEYPRESS = 256, ONKEYUP = 512, ONLOAD = 32768, ONLOSECAPTURE = 8192, ONMOUSEDOWN = 4, ONMOUSEMOVE = 64, ONMOUSEOUT = 32, ONMOUSEOVER = 16, ONMOUSEUP = 8, ONMOUSEWHEEL = 131072, ONPASTE = 524288, ONSCROLL = 16384, ONTOUCHCANCEL = 8388608, ONTOUCHEND = 4194304, ONTOUCHMOVE = 2097152, ONTOUCHSTART = 1048576, TOUCHEVENTS = 0, UNDEFINED = 0, handlers_0;
function $clinit_Event$NativePreviewEvent(){
  $clinit_Event$NativePreviewEvent = emptyMethod;
  $clinit_GwtEvent();
}

function fire_2(handlers, nativeEvent){
  $clinit_Event$NativePreviewEvent();
  var lastIsCanceled, lastIsConsumed, lastIsFirstHandler, lastNativeEvent, ret;
  if (isNotNull(TYPE_2) && isNotNull(handlers) && handlers.isEventHandled(TYPE_2)) {
    lastIsCanceled = singleton.isCanceled;
    lastIsConsumed = singleton.isConsumed;
    lastIsFirstHandler = singleton.isFirstHandler;
    lastNativeEvent = singleton.nativeEvent;
    singleton.revive();
    singleton.setNativeEvent_0(nativeEvent);
    handlers.fireEvent(singleton);
    ret = !(singleton.isCanceled_0() && !singleton.isConsumed_0());
    singleton.isCanceled = lastIsCanceled;
    singleton.isConsumed = lastIsConsumed;
    singleton.isFirstHandler = lastIsFirstHandler;
    singleton.nativeEvent = lastNativeEvent;
    return ret;
  }
  return true;
}

defineClass(641, 17, {1:1});
_.isCanceled_0 = function isCanceled(){
  return this.isCanceled;
}
;
_.isConsumed_0 = function isConsumed(){
  return this.isConsumed;
}
;
_.revive = function revive_0(){
  getClassPrototype(17).revive.call(this);
  this.isCanceled = false;
  this.isConsumed = false;
  this.isFirstHandler = true;
  this.nativeEvent = null;
}
;
_.setNativeEvent_0 = function setNativeEvent_0(nativeEvent){
  this.nativeEvent = nativeEvent;
}
;
_.isCanceled = false;
_.isConsumed = false;
_.isFirstHandler = false;
var TYPE_2, singleton;
var Lcom_google_gwt_user_client_Event$NativePreviewEvent_2_classLit = createForClass('com.google.gwt.user.client', 'Event/NativePreviewEvent', 641, Lcom_google_gwt_event_shared_GwtEvent_2_classLit);
function $clinit_EventListener(){
  $clinit_EventListener = emptyMethod;
}

var Lcom_google_gwt_user_client_EventListener_2_classLit = createForInterface('com.google.gwt.user.client', 'EventListener');
function $clinit_Timer(){
  $clinit_Timer = emptyMethod;
  $clinit_Object();
}

function Timer(){
  $clinit_Timer();
  Object_0.call(this);
  this.$init_87();
}

function clearInterval_0(timerId){
  $wnd.clearInterval(timerId);
}

function clearTimeout_0(timerId){
  $wnd.clearTimeout(timerId);
}

function createCallback(timer, cancelCounter){
  return $entry(function(){
    timer.fire(cancelCounter);
  }
  );
}

function setTimeout_0(func, time){
  return $wnd.setTimeout(func, time);
}

defineClass(112, 1, {1:1});
_.$init_87 = function $init_87(){
  this.timerId = null;
  this.cancelCounter = 0;
}
;
_.cancel = function cancel(){
  if (!this.isRunning()) {
    return;
  }
  this.cancelCounter++;
  if (this.isRepeating) {
    clearInterval_0(this.timerId.intValue());
  }
   else {
    clearTimeout_0(this.timerId.intValue());
  }
  this.timerId = null;
}
;
_.fire = function fire_3(scheduleCancelCounter){
  if (scheduleCancelCounter != this.cancelCounter) {
    return;
  }
  if (!this.isRepeating) {
    this.timerId = null;
  }
  this.run();
}
;
_.isRunning = function isRunning(){
  return isNotNull(this.timerId);
}
;
_.schedule = function schedule_0(delayMillis){
  if (delayMillis < 0) {
    throw toJs(new IllegalArgumentException('must be non-negative'));
  }
  if (this.isRunning()) {
    this.cancel();
  }
  this.isRepeating = false;
  this.timerId = valueOf_9(setTimeout_0(createCallback(this, this.cancelCounter), delayMillis));
}
;
_.cancelCounter = 0;
_.isRepeating = false;
var Lcom_google_gwt_user_client_Timer_2_classLit = createForClass('com.google.gwt.user.client', 'Timer', 112, Ljava_lang_Object_2_classLit);
function $clinit_Window(){
  $clinit_Window = emptyMethod;
  $clinit_Object();
  impl_3 = castTo(new WindowImpl, 97);
}

function addCloseHandler(handler){
  $clinit_Window();
  maybeInitializeCloseHandlers();
  return addHandler_1(getType_0(), handler);
}

function addHandler_1(type_0, handler){
  return getHandlers().addHandler(type_0, handler);
}

function alert_0(msg){
  $clinit_Window();
  $wnd.alert(msg);
}

function fireEvent_1(event_0){
  if (isNotNull(handlers_1)) {
    handlers_1.fireEvent(event_0);
  }
}

function getClientHeight(){
  $clinit_Window();
  return $getClientHeight_0(get_1());
}

function getHandlers(){
  if (isNull(handlers_1)) {
    handlers_1 = new Window$WindowHandlers;
  }
  return handlers_1;
}

function maybeInitializeCloseHandlers(){
  if (isClient() && !closeHandlersInitialized) {
    impl_3.initWindowCloseHandler();
    closeHandlersInitialized = true;
  }
}

function onClosed(){
  $clinit_Window();
  if (closeHandlersInitialized) {
    fire_0(getHandlers(), null);
  }
}

function onClosing(){
  $clinit_Window();
  var event_0;
  if (closeHandlersInitialized) {
    event_0 = new Window$ClosingEvent;
    fireEvent_1(event_0);
    return event_0.getMessage();
  }
  return null;
}

defineClass(457, 1, {1:1});
var closeHandlersInitialized = false, handlers_1, impl_3;
var Lcom_google_gwt_user_client_Window_2_classLit = createForClass('com.google.gwt.user.client', 'Window', 457, Ljava_lang_Object_2_classLit);
function $clinit_Window$ClosingEvent(){
  $clinit_Window$ClosingEvent = emptyMethod;
  $clinit_GwtEvent();
  TYPE_3 = new GwtEvent$Type;
}

function Window$ClosingEvent(){
  $clinit_Window$ClosingEvent();
  GwtEvent.call(this);
  this.$init_88();
}

defineClass(244, 17, {1:1}, Window$ClosingEvent);
_.$init_88 = function $init_88(){
  this.message_0 = null;
}
;
_.dispatch_0 = function dispatch_6(handler){
  this.dispatch_4(castTo(handler, 657));
}
;
_.dispatch_4 = function dispatch_7(handler){
  handler.onWindowClosing(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_4(){
  return TYPE_3;
}
;
_.getMessage = function getMessage_1(){
  return this.message_0;
}
;
var TYPE_3;
var Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit = createForClass('com.google.gwt.user.client', 'Window/ClosingEvent', 244, Lcom_google_gwt_event_shared_GwtEvent_2_classLit);
function $clinit_Window$Location(){
  $clinit_Window$Location = emptyMethod;
}

defineClass(458, 1, {1:1});
var Lcom_google_gwt_user_client_Window$Location_2_classLit = createForClass('com.google.gwt.user.client', 'Window/Location', 458, Ljava_lang_Object_2_classLit);
function $clinit_Window$Navigator(){
  $clinit_Window$Navigator = emptyMethod;
}

defineClass(459, 1, {1:1});
var Lcom_google_gwt_user_client_Window$Navigator_2_classLit = createForClass('com.google.gwt.user.client', 'Window/Navigator', 459, Ljava_lang_Object_2_classLit);
function $clinit_Window$ScrollEvent(){
  $clinit_Window$ScrollEvent = emptyMethod;
}

defineClass(460, 17, {1:1});
var Lcom_google_gwt_user_client_Window$ScrollEvent_2_classLit = createForClass('com.google.gwt.user.client', 'Window/ScrollEvent', 460, Lcom_google_gwt_event_shared_GwtEvent_2_classLit);
function $clinit_Window$WindowHandlers(){
  $clinit_Window$WindowHandlers = emptyMethod;
  $clinit_HandlerManager();
}

function Window$WindowHandlers(){
  $clinit_Window$WindowHandlers();
  HandlerManager.call(this, null);
  this.$init_89();
}

defineClass(245, 96, {1:1}, Window$WindowHandlers);
_.$init_89 = function $init_89(){
}
;
var Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit = createForClass('com.google.gwt.user.client', 'Window/WindowHandlers', 245, Lcom_google_gwt_event_shared_HandlerManager_2_classLit);
function $clinit_DOMImpl_0(){
  $clinit_DOMImpl_0 = emptyMethod;
  $clinit_Object();
}

function DOMImpl_0(){
  $clinit_DOMImpl_0();
  Object_0.call(this);
  this.$init_90();
}

function getEventListener_1(elem){
  $clinit_DOMImpl_0();
  var maybeListener = elem.__listener;
  return isMyListener(maybeListener)?maybeListener:null;
}

function isMyListener(object){
  return !instanceOfJso(object) && instanceOf(object, 15);
}

function setEventListener_0(elem, listener){
  $clinit_DOMImpl_0();
  elem.__listener = listener;
}

defineClass(99, 1, {1:1});
_.$init_90 = function $init_90(){
}
;
_.eventGetTypeInt = function eventGetTypeInt(evt){
  return this.eventGetTypeInt_0($getType(evt));
}
;
_.eventGetTypeInt_0 = function eventGetTypeInt_0(eventType){
  switch (eventType) {
    case 'blur':
      return 4096;
    case 'change':
      return 1024;
    case 'click':
      return 1;
    case 'dblclick':
      return 2;
    case 'focus':
      return 2048;
    case 'keydown':
      return 128;
    case 'keypress':
      return 256;
    case 'keyup':
      return 512;
    case 'load':
      return 32768;
    case 'losecapture':
      return 8192;
    case 'mousedown':
      return 4;
    case 'mousemove':
      return 64;
    case 'mouseout':
      return 32;
    case 'mouseover':
      return 16;
    case 'mouseup':
      return 8;
    case 'scroll':
      return 16384;
    case 'error':
      return 65536;
    case 'mousewheel':
      return 131072;
    case 'DOMMouseScroll':
      return 131072;
    case 'contextmenu':
      return 262144;
    case 'paste':
      return 524288;
    case 'touchstart':
      return 1048576;
    case 'touchmove':
      return 2097152;
    case 'touchend':
      return 4194304;
    case 'touchcancel':
      return 8388608;
    case 'gesturestart':
      return 16777216;
    case 'gesturechange':
      return 33554432;
    case 'gestureend':
      return 67108864;
    default:return -1;
  }
}
;
_.getEventsSunk = function getEventsSunk_0(elem){
  return elem.__eventBits || 0;
}
;
_.maybeInitializeEventSystem = function maybeInitializeEventSystem(){
  if (!eventSystemIsInitialized) {
    this.initEventSystem();
    eventSystemIsInitialized = true;
  }
}
;
var eventSystemIsInitialized = false;
var Lcom_google_gwt_user_client_impl_DOMImpl_2_classLit = createForClass('com.google.gwt.user.client.impl', 'DOMImpl', 99, Ljava_lang_Object_2_classLit);
function $clinit_DOMImplStandard_0(){
  $clinit_DOMImplStandard_0 = emptyMethod;
  $clinit_DOMImpl_0();
  bitlessEventDispatchers = getBitlessEventDispatchers();
  captureEventDispatchers = getCaptureEventDispatchers();
}

function DOMImplStandard_0(){
  $clinit_DOMImplStandard_0();
  DOMImpl_0.call(this);
  this.$init_91();
}

function dispatchCapturedEvent(evt){
  previewEvent(evt);
}

function dispatchCapturedMouseEvent(evt){
  var cancelled;
  cancelled = !previewEvent(evt);
  if (cancelled || isNull(captureElem)) {
    return;
  }
  if (dispatchEvent_2(evt, captureElem)) {
    $stopPropagation(evt);
  }
}

function dispatchDragEvent(evt){
  $preventDefault(evt);
  dispatchEvent_5(evt);
}

function dispatchEvent_5(evt){
  var element;
  element = getFirstAncestorWithListener(evt);
  if (isNull(element)) {
    return;
  }
  dispatchEvent_3(evt, $getNodeType(element) != 1?null:element, getEventListener_1(element));
}

function dispatchUnhandledEvent_0(evt){
  var element;
  element = $cast($getCurrentEventTarget(evt));
  $setPropertyString(element, '__gwtLastUnhandledEvent', $getType(evt));
  dispatchEvent_5(evt);
}

function getBitlessEventDispatchers(){
  return {_default_:dispatchEvent_5, dragenter:dispatchDragEvent, dragover:dispatchDragEvent};
}

function getCaptureEventDispatchers(){
  return {click:dispatchCapturedMouseEvent, dblclick:dispatchCapturedMouseEvent, mousedown:dispatchCapturedMouseEvent, mouseup:dispatchCapturedMouseEvent, mousemove:dispatchCapturedMouseEvent, mouseover:dispatchCapturedMouseEvent, mouseout:dispatchCapturedMouseEvent, mousewheel:dispatchCapturedMouseEvent, keydown:dispatchCapturedEvent, keyup:dispatchCapturedEvent, keypress:dispatchCapturedEvent, touchstart:dispatchCapturedMouseEvent, touchend:dispatchCapturedMouseEvent, touchmove:dispatchCapturedMouseEvent, touchcancel:dispatchCapturedMouseEvent, gesturestart:dispatchCapturedMouseEvent, gestureend:dispatchCapturedMouseEvent, gesturechange:dispatchCapturedMouseEvent};
}

function getFirstAncestorWithListener(evt){
  var curElem;
  curElem = $cast($getCurrentEventTarget(evt));
  while (isNotNull(curElem) && isNull(getEventListener_1(curElem))) {
    curElem = $cast($getParentNode(curElem));
  }
  return curElem;
}

defineClass(263, 99, {1:1});
_.$init_91 = function $init_91(){
}
;
_.initEventSystem = function initEventSystem(){
  dispatchEvent_4 = $entry(dispatchEvent_5);
  dispatchUnhandledEvent = $entry(dispatchUnhandledEvent_0);
  var foreach = foreach_0;
  var bitlessEvents = bitlessEventDispatchers;
  foreach(bitlessEvents, function(e, fn){
    bitlessEvents[e] = $entry(fn);
  }
  );
  var captureEvents_0 = captureEventDispatchers;
  foreach(captureEvents_0, function(e, fn){
    captureEvents_0[e] = $entry(fn);
  }
  );
  foreach(captureEvents_0, function(e, fn){
    $wnd.addEventListener(e, fn, true);
  }
  );
}
;
_.insertChild = function insertChild_0(parent_0, toAdd, index_0){
  var count = 0, child = parent_0.firstChild, before = null;
  while (child) {
    if (child.nodeType == 1) {
      if (count == index_0) {
        before = child;
        break;
      }
      ++count;
    }
    child = child.nextSibling;
  }
  parent_0.insertBefore(toAdd, before);
}
;
_.sinkBitlessEvent = function sinkBitlessEvent_0(elem, eventTypeName){
  this.maybeInitializeEventSystem();
  this.sinkBitlessEventImpl(elem, eventTypeName);
}
;
_.sinkBitlessEventImpl = function sinkBitlessEventImpl(elem, eventTypeName){
  var dispatchMap = bitlessEventDispatchers;
  var dispatcher = dispatchMap[eventTypeName] || dispatchMap['_default_'];
  elem.addEventListener(eventTypeName, dispatcher, false);
}
;
_.sinkEvents = function sinkEvents_1(elem, bits){
  this.maybeInitializeEventSystem();
  this.sinkEventsImpl(elem, bits);
}
;
_.sinkEventsImpl = function sinkEventsImpl(elem, bits){
  var chMask = (elem.__eventBits || 0) ^ bits;
  elem.__eventBits = bits;
  if (!chMask)
    return;
  if (chMask & 1)
    elem.onclick = bits & 1?dispatchEvent_4:null;
  if (chMask & 2)
    elem.ondblclick = bits & 2?dispatchEvent_4:null;
  if (chMask & 4)
    elem.onmousedown = bits & 4?dispatchEvent_4:null;
  if (chMask & 8)
    elem.onmouseup = bits & 8?dispatchEvent_4:null;
  if (chMask & 16)
    elem.onmouseover = bits & 16?dispatchEvent_4:null;
  if (chMask & 32)
    elem.onmouseout = bits & 32?dispatchEvent_4:null;
  if (chMask & 64)
    elem.onmousemove = bits & 64?dispatchEvent_4:null;
  if (chMask & 128)
    elem.onkeydown = bits & 128?dispatchEvent_4:null;
  if (chMask & 256)
    elem.onkeypress = bits & 256?dispatchEvent_4:null;
  if (chMask & 512)
    elem.onkeyup = bits & 512?dispatchEvent_4:null;
  if (chMask & 1024)
    elem.onchange = bits & 1024?dispatchEvent_4:null;
  if (chMask & 2048)
    elem.onfocus = bits & 2048?dispatchEvent_4:null;
  if (chMask & 4096)
    elem.onblur = bits & 4096?dispatchEvent_4:null;
  if (chMask & 8192)
    elem.onlosecapture = bits & 8192?dispatchEvent_4:null;
  if (chMask & 16384)
    elem.onscroll = bits & 16384?dispatchEvent_4:null;
  if (chMask & 32768)
    elem.onload = bits & 32768?dispatchUnhandledEvent:null;
  if (chMask & 65536)
    elem.onerror = bits & 65536?dispatchEvent_4:null;
  if (chMask & 131072)
    elem.onmousewheel = bits & 131072?dispatchEvent_4:null;
  if (chMask & 262144)
    elem.oncontextmenu = bits & 262144?dispatchEvent_4:null;
  if (chMask & 524288)
    elem.onpaste = bits & 524288?dispatchEvent_4:null;
  if (chMask & 1048576)
    elem.ontouchstart = bits & 1048576?dispatchEvent_4:null;
  if (chMask & 2097152)
    elem.ontouchmove = bits & 2097152?dispatchEvent_4:null;
  if (chMask & 4194304)
    elem.ontouchend = bits & 4194304?dispatchEvent_4:null;
  if (chMask & 8388608)
    elem.ontouchcancel = bits & 8388608?dispatchEvent_4:null;
  if (chMask & 16777216)
    elem.ongesturestart = bits & 16777216?dispatchEvent_4:null;
  if (chMask & 33554432)
    elem.ongesturechange = bits & 33554432?dispatchEvent_4:null;
  if (chMask & 67108864)
    elem.ongestureend = bits & 67108864?dispatchEvent_4:null;
}
;
var bitlessEventDispatchers, captureElem, captureEventDispatchers, dispatchEvent_4, dispatchUnhandledEvent;
var Lcom_google_gwt_user_client_impl_DOMImplStandard_2_classLit = createForClass('com.google.gwt.user.client.impl', 'DOMImplStandard', 263, Lcom_google_gwt_user_client_impl_DOMImpl_2_classLit);
function $clinit_DOMImplStandardBase_0(){
  $clinit_DOMImplStandardBase_0 = emptyMethod;
  $clinit_DOMImplStandard_0();
}

function DOMImplStandardBase_0(){
  $clinit_DOMImplStandardBase_0();
  DOMImplStandard_0.call(this);
  this.$init_92();
}

defineClass(264, 263, {1:1});
_.$init_92 = function $init_92(){
}
;
var Lcom_google_gwt_user_client_impl_DOMImplStandardBase_2_classLit = createForClass('com.google.gwt.user.client.impl', 'DOMImplStandardBase', 264, Lcom_google_gwt_user_client_impl_DOMImplStandard_2_classLit);
function $clinit_DOMImplWebkit_0(){
  $clinit_DOMImplWebkit_0 = emptyMethod;
  $clinit_DOMImplStandardBase_0();
}

function DOMImplWebkit_0(){
  $clinit_DOMImplWebkit_0();
  DOMImplStandardBase_0.call(this);
  this.$init_93();
}

defineClass(265, 264, {99:1, 1:1}, DOMImplWebkit_0);
_.$init_93 = function $init_93(){
}
;
var Lcom_google_gwt_user_client_impl_DOMImplWebkit_2_classLit = createForClass('com.google.gwt.user.client.impl', 'DOMImplWebkit', 265, Lcom_google_gwt_user_client_impl_DOMImplStandardBase_2_classLit);
function $clinit_EventMap(){
  $clinit_EventMap = emptyMethod;
  $clinit_JavaScriptObject();
}

function foreach_0(map_0, fn){
  $clinit_EventMap();
  for (var e in map_0) {
    if (map_0.hasOwnProperty(e)) {
      fn(e, map_0[e]);
    }
  }
}

function $clinit_WindowImpl(){
  $clinit_WindowImpl = emptyMethod;
  $clinit_Object();
}

function WindowImpl(){
  $clinit_WindowImpl();
  Object_0.call(this);
  this.$init_94();
}

defineClass(97, 1, {97:1, 1:1}, WindowImpl);
_.$init_94 = function $init_94(){
}
;
_.initWindowCloseHandler = function initWindowCloseHandler(){
  var oldOnBeforeUnload = $wnd.onbeforeunload;
  var oldOnUnload = $wnd.onunload;
  $wnd.onbeforeunload = function(evt){
    var ret, oldRet;
    try {
      ret = $entry(onClosing)();
    }
     finally {
      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);
    }
    if (ret != null) {
      return ret;
    }
    if (oldRet != null) {
      return oldRet;
    }
  }
  ;
  $wnd.onunload = $entry(function(evt){
    try {
      onClosed();
    }
     finally {
      oldOnUnload && oldOnUnload(evt);
      $wnd.onresize = null;
      $wnd.onscroll = null;
      $wnd.onbeforeunload = null;
      $wnd.onunload = null;
    }
  }
  );
}
;
var Lcom_google_gwt_user_client_impl_WindowImpl_2_classLit = createForClass('com.google.gwt.user.client.impl', 'WindowImpl', 97, Ljava_lang_Object_2_classLit);
function $clinit_AsyncCallback(){
  $clinit_AsyncCallback = emptyMethod;
}

var Lcom_google_gwt_user_client_rpc_AsyncCallback_2_classLit = createForInterface('com.google.gwt.user.client.rpc', 'AsyncCallback');
function $clinit_HasVisibility(){
  $clinit_HasVisibility = emptyMethod;
}

var Lcom_google_gwt_user_client_ui_HasVisibility_2_classLit = createForInterface('com.google.gwt.user.client.ui', 'HasVisibility');
function $clinit_UIObject(){
  $clinit_UIObject = emptyMethod;
  $clinit_Object();
  debugIdImpl = castTo(new UIObject$DebugIdImplEnabled, 95);
}

function UIObject(){
  $clinit_UIObject();
  Object_0.call(this);
  this.$init_95();
}

function setStyleName(elem, styleName){
  $setClassName(elem, styleName);
}

function setStyleName_0(elem, style, add_0){
  if (isNull(elem)) {
    throw toJs(new RuntimeException_1('Null widget handle. If you are creating a composite, ensure that initWidget() has been called.'));
  }
  style = trim__Ljava_lang_String___devirtual$(style);
  if (length__I__devirtual$_0(style) == 0) {
    throw toJs(new IllegalArgumentException('Style names cannot be empty'));
  }
  if (add_0) {
    $addClassName(elem, style);
  }
   else {
    $removeClassName(elem, style);
  }
}

function setVisible(elem, visible){
  $clinit_UIObject();
  elem.style.display = visible?'':'none';
  if (visible) {
    elem.removeAttribute('aria-hidden');
  }
   else {
    elem.setAttribute('aria-hidden', 'true');
  }
}

defineClass(94, 1, {1:1});
_.$init_95 = function $init_95(){
}
;
_.addStyleName = function addStyleName(style){
  this.setStyleName_0(style, true);
}
;
_.extractLengthValue = function extractLengthValue(s){
  if (s == 'auto' || (s == 'inherit' || s == '')) {
    return 0;
  }
   else {
    var numberRegex = numberRegex_0;
    if (!numberRegex) {
      numberRegex = numberRegex_0 = /^(\s*[+-]?((\d+\.?\d*)|(\.\d+))([eE][+-]?\d+)?)(.*)$/;
    }
    s = s.replace(numberRegex, '$1');
    return parseFloat(s);
  }
}
;
_.getElement = function getElement(){
  return asOld(this.element);
}
;
_.getStyleElement = function getStyleElement(){
  return this.getElement();
}
;
_.replaceElement = function replaceElement(elem){
  if (isNotNull(this.element)) {
    this.replaceNode(this.element, elem);
  }
  this.element = elem;
}
;
_.replaceNode = function replaceNode(node, newNode){
  var p = node.parentNode;
  if (!p) {
    return;
  }
  p.insertBefore(newNode, node);
  p.removeChild(node);
}
;
_.resolvePotentialElement = function resolvePotentialElement(){
  throw toJs(new UnsupportedOperationException);
}
;
_.setElement = function setElement(elem){
  this.setElement_0(asOld(elem));
}
;
_.setElement_0 = function setElement_0(elem){
  this.element = elem;
}
;
_.setHeight = function setHeight(height){
  $setProperty($getStyle(this.getElement()), 'height', height);
}
;
_.setStyleName = function setStyleName_1(style){
  setStyleName(this.getStyleElement(), style);
}
;
_.setStyleName_0 = function setStyleName_2(style, add_0){
  setStyleName_0(this.getStyleElement(), style, add_0);
}
;
_.setTitle = function setTitle(title_0){
  if (jsEquals(title_0, null) || length__I__devirtual$_0(title_0) == 0) {
    $removeAttribute(this.getElement(), 'title');
  }
   else {
    $setAttribute(this.getElement(), 'title', title_0);
  }
}
;
_.sinkBitlessEvent_0 = function sinkBitlessEvent_1(eventTypeName){
  sinkBitlessEvent(this.getElement(), eventTypeName);
}
;
_.sinkEvents_0 = function sinkEvents_2(eventBitsToAdd){
  sinkEvents(this.getElement(), eventBitsToAdd | getEventsSunk(this.getElement()));
}
;
_.toString_0 = function toString_12(){
  if (isNull(this.element)) {
    return '(null handle)';
  }
  return $getString(this.getElement());
}
;
var DEBUG_ID_PREFIX = 'gwt-debug-', EMPTY_STYLENAME_MSG = 'Style names cannot be empty', MISSING_ELEMENT_ERROR = "This UIObject's element is not set; you may be missing a call to either Composite.initWidget() or UIObject.setElement()", NULL_HANDLE_MSG = 'Null widget handle. If you are creating a composite, ensure that initWidget() has been called.', SETELEMENT_TWICE_ERROR = 'Element may only be set once', debugIdImpl, numberRegex_0;
var Lcom_google_gwt_user_client_ui_UIObject_2_classLit = createForClass('com.google.gwt.user.client.ui', 'UIObject', 94, Ljava_lang_Object_2_classLit);
function $clinit_IsWidget(){
  $clinit_IsWidget = emptyMethod;
}

var Lcom_google_gwt_user_client_ui_IsWidget_2_classLit = createForInterface('com.google.gwt.user.client.ui', 'IsWidget');
function $clinit_Widget(){
  $clinit_Widget = emptyMethod;
  $clinit_UIObject();
}

function Widget(){
  $clinit_Widget();
  UIObject.call(this);
  this.$init_96();
}

defineClass(6, 94, {15:1, 6:1, 1:1});
_.$init_96 = function $init_96(){
}
;
_.addDomHandler = function addDomHandler(handler, type_0){
  var typeInt;
  typeInt = getTypeInt(type_0.getName());
  if (typeInt == -1) {
    this.sinkBitlessEvent_0(type_0.getName());
  }
   else {
    this.sinkEvents_0(typeInt);
  }
  return this.ensureHandlers().addHandler(type_0, handler);
}
;
_.addHandler_1 = function addHandler_2(handler, type_0){
  return this.ensureHandlers().addHandler(type_0, handler);
}
;
_.createHandlerManager = function createHandlerManager(){
  return new HandlerManager(this);
}
;
_.doAttachChildren = function doAttachChildren(){
}
;
_.doDetachChildren = function doDetachChildren(){
}
;
_.ensureHandlers = function ensureHandlers(){
  return isNull(this.handlerManager)?(this.handlerManager = this.createHandlerManager()):this.handlerManager;
}
;
_.fireEvent = function fireEvent_2(event_0){
  if (isNotNull(this.handlerManager)) {
    this.handlerManager.fireEvent(event_0);
  }
}
;
_.getParent = function getParent_0(){
  return this.parent_0;
}
;
_.isAttached = function isAttached_0(){
  return this.attached;
}
;
_.isOrWasAttached = function isOrWasAttached(){
  return this.eventsToSink == -1;
}
;
_.onAttach = function onAttach(){
  var bitsToAdd;
  if (this.isAttached()) {
    throw toJs(new IllegalStateException_0("Should only call onAttach when the widget is detached from the browser's document"));
  }
  this.attached = true;
  setEventListener(this.getElement(), this);
  bitsToAdd = this.eventsToSink;
  this.eventsToSink = -1;
  if (bitsToAdd > 0) {
    this.sinkEvents_0(bitsToAdd);
  }
  this.doAttachChildren();
  this.onLoad();
  fire(this, true);
}
;
_.onBrowserEvent = function onBrowserEvent(event_0){
  var related;
  switch (eventGetType_0(event_0)) {
    case 16:
    case 32:
      related = $cast($getRelatedEventTarget(event_0));
      if (isNotNull(related) && $isOrHasChild(this.getElement(), related)) {
        return;
      }

      break;
  }
  fireNativeEvent(event_0, this, this.getElement());
}
;
_.onDetach = function onDetach(){
  if (!this.isAttached()) {
    throw toJs(new IllegalStateException_0("Should only call onDetach when the widget is attached to the browser's document"));
  }
  try {
    this.onUnload();
    fire(this, false);
  }
   finally {
    try {
      this.doDetachChildren();
    }
     finally {
      setEventListener(this.getElement(), null);
      this.attached = false;
    }
  }
}
;
_.onLoad = function onLoad_0(){
}
;
_.onUnload = function onUnload(){
}
;
_.removeFromParent = function removeFromParent(){
  if (isNull(this.parent_0)) {
    if (isInDetachList(this)) {
      detachNow(this);
    }
  }
   else if (instanceOf(this.parent_0, 22)) {
    castTo(this.parent_0, 22).remove_1(this);
  }
   else if (isNotNull(this.parent_0)) {
    throw toJs(new IllegalStateException_0("This widget's parent does not implement HasWidgets"));
  }
}
;
_.replaceElement = function replaceElement_0(elem){
  if (this.isAttached()) {
    setEventListener(this.getElement(), null);
  }
  getClassPrototype(94).replaceElement.call(this, elem);
  if (this.isAttached()) {
    setEventListener(this.getElement(), this);
  }
}
;
_.setParent = function setParent(parent_0){
  var oldParent;
  oldParent = this.parent_0;
  if (isNull(parent_0)) {
    try {
      if (isNotNull(oldParent) && oldParent.isAttached()) {
        this.onDetach();
      }
    }
     finally {
      this.parent_0 = null;
    }
  }
   else {
    if (isNotNull(oldParent)) {
      throw toJs(new IllegalStateException_0('Cannot set a new parent without first clearing the old parent'));
    }
    this.parent_0 = parent_0;
    if (parent_0.isAttached()) {
      this.onAttach();
    }
  }
}
;
_.sinkEvents_0 = function sinkEvents_3(eventBitsToAdd){
  if (this.isOrWasAttached()) {
    getClassPrototype(94).sinkEvents_0.call(this, eventBitsToAdd);
  }
   else {
    this.eventsToSink |= eventBitsToAdd;
  }
}
;
_.attached = false;
_.eventsToSink = 0;
var Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Widget', 6, Lcom_google_gwt_user_client_ui_UIObject_2_classLit);
function $clinit_Iterable(){
  $clinit_Iterable = emptyMethod;
}

var Ljava_lang_Iterable_2_classLit = createForInterface('java.lang', 'Iterable');
function $clinit_HasWidgets(){
  $clinit_HasWidgets = emptyMethod;
}

var Lcom_google_gwt_user_client_ui_HasWidgets_2_classLit = createForInterface('com.google.gwt.user.client.ui', 'HasWidgets');
function $clinit_HasWidgets$ForIsWidget(){
  $clinit_HasWidgets$ForIsWidget = emptyMethod;
}

var Lcom_google_gwt_user_client_ui_HasWidgets$ForIsWidget_2_classLit = createForInterface('com.google.gwt.user.client.ui', 'HasWidgets/ForIsWidget');
function $clinit_Panel(){
  $clinit_Panel = emptyMethod;
  $clinit_Widget();
  $clinit_Iterable();
}

function Panel(){
  $clinit_Panel();
  Widget.call(this);
  this.$init_97();
}

defineClass(234, 6, {15:1, 22:1, 6:1, 1:1});
_.$init_97 = function $init_97(){
}
;
_.add_1 = function add_4(child){
  throw toJs(new UnsupportedOperationException_0('This panel does not support no-arg add()'));
}
;
_.adopt = function adopt(child){
  child.setParent(this);
}
;
_.clear_0 = function clear_1(){
  var it;
  it = this.iterator();
  while (it.hasNext_0()) {
    it.next_1();
    it.remove_4();
  }
}
;
_.doAttachChildren = function doAttachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , attachCommand));
}
;
_.doDetachChildren = function doDetachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , detachCommand));
}
;
_.orphan = function orphan_0(child){
  child.setParent(null);
}
;
var Lcom_google_gwt_user_client_ui_Panel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Panel', 234, Lcom_google_gwt_user_client_ui_Widget_2_classLit);
function $clinit_IndexedPanel(){
  $clinit_IndexedPanel = emptyMethod;
}

var Lcom_google_gwt_user_client_ui_IndexedPanel_2_classLit = createForInterface('com.google.gwt.user.client.ui', 'IndexedPanel');
function $clinit_IndexedPanel$ForIsWidget(){
  $clinit_IndexedPanel$ForIsWidget = emptyMethod;
}

var Lcom_google_gwt_user_client_ui_IndexedPanel$ForIsWidget_2_classLit = createForInterface('com.google.gwt.user.client.ui', 'IndexedPanel/ForIsWidget');
function $clinit_ComplexPanel(){
  $clinit_ComplexPanel = emptyMethod;
  $clinit_Panel();
}

function ComplexPanel(){
  $clinit_ComplexPanel();
  Panel.call(this);
  this.$init_98();
}

defineClass(64, 234, {15:1, 22:1, 6:1, 1:1});
_.$init_98 = function $init_98(){
  this.children = new WidgetCollection(this);
}
;
_.add_2 = function add_5(child, container){
  child.removeFromParent();
  this.getChildren().add_1(child);
  appendChild(container, child.getElement());
  this.adopt(child);
}
;
_.adjustIndex = function adjustIndex(child, beforeIndex){
  var idx;
  this.checkIndexBoundsForInsertion(beforeIndex);
  if (jsEquals(child.getParent(), this)) {
    idx = this.getWidgetIndex(child);
    if (idx < beforeIndex) {
      beforeIndex--;
    }
  }
  return beforeIndex;
}
;
_.checkIndexBoundsForInsertion = function checkIndexBoundsForInsertion(index_0){
  if (index_0 < 0 || index_0 > this.getWidgetCount()) {
    throw toJs(new IndexOutOfBoundsException);
  }
}
;
_.getChildren = function getChildren(){
  return this.children;
}
;
_.getWidgetCount = function getWidgetCount(){
  return this.getChildren().size_1();
}
;
_.getWidgetIndex = function getWidgetIndex(child){
  return this.getChildren().indexOf_0(child);
}
;
_.insert = function insert(child, container, beforeIndex, domInsert){
  beforeIndex = this.adjustIndex(child, beforeIndex);
  child.removeFromParent();
  this.getChildren().insert_0(child, beforeIndex);
  if (domInsert) {
    insertChild(container, child.getElement(), beforeIndex);
  }
   else {
    appendChild(container, child.getElement());
  }
  this.adopt(child);
}
;
_.iterator = function iterator_0(){
  return this.getChildren().iterator();
}
;
_.remove_1 = function remove_1(w){
  var elem;
  if (jsNotEquals(w.getParent(), this)) {
    return false;
  }
  try {
    this.orphan(w);
  }
   finally {
    elem = w.getElement();
    $removeChild(getParent(elem), elem);
    this.getChildren().remove_3(w);
  }
  return true;
}
;
var Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ComplexPanel', 64, Lcom_google_gwt_user_client_ui_Panel_2_classLit);
function $clinit_InsertPanel(){
  $clinit_InsertPanel = emptyMethod;
}

var Lcom_google_gwt_user_client_ui_InsertPanel_2_classLit = createForInterface('com.google.gwt.user.client.ui', 'InsertPanel');
function $clinit_InsertPanel$ForIsWidget(){
  $clinit_InsertPanel$ForIsWidget = emptyMethod;
}

var Lcom_google_gwt_user_client_ui_InsertPanel$ForIsWidget_2_classLit = createForInterface('com.google.gwt.user.client.ui', 'InsertPanel/ForIsWidget');
function $clinit_AbsolutePanel(){
  $clinit_AbsolutePanel = emptyMethod;
  $clinit_ComplexPanel();
}

function AbsolutePanel(elem){
  $clinit_AbsolutePanel();
  ComplexPanel.call(this);
  this.$init_99();
  this.setElement(elem);
}

function changeToStaticPositioning(elem){
  $setProperty($getStyle(elem), 'left', '');
  $setProperty($getStyle(elem), 'top', '');
  $setProperty($getStyle(elem), 'position', '');
}

defineClass(235, 64, {15:1, 22:1, 6:1, 1:1});
_.$init_99 = function $init_99(){
}
;
_.add_1 = function add_6(w){
  getClassPrototype(64).add_2.call(this, w, this.getElement());
}
;
_.insert_0 = function insert_0(w, beforeIndex){
  this.insert(w, this.getElement(), beforeIndex, true);
}
;
_.remove_1 = function remove_2(w){
  var removed;
  removed = getClassPrototype(64).remove_1.call(this, w);
  if (removed) {
    changeToStaticPositioning(w.getElement());
  }
  return removed;
}
;
var Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AbsolutePanel', 235, Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit);
function $clinit_AttachDetachException(){
  $clinit_AttachDetachException = emptyMethod;
  $clinit_UmbrellaException_0();
  attachCommand = new AttachDetachException$1;
  detachCommand = new AttachDetachException$2;
}

function AttachDetachException(causes){
  UmbrellaException_0.call(this, causes);
  this.$init_100();
}

function tryCommand(hasWidgets, c){
  $clinit_AttachDetachException();
  var caught, e, w, w$iterator;
  caught = null;
  for (w$iterator = hasWidgets.iterator(); w$iterator.hasNext_0();) {
    w = castTo(w$iterator.next_1(), 6);
    try {
      c.execute_2(w);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 8)) {
        e = $e0;
        if (isNull(caught)) {
          caught = new HashSet;
        }
        caught.add_3(e);
      }
       else 
        throw toJs($e0);
    }
  }
  if (isNotNull(caught)) {
    throw toJs(new AttachDetachException(caught));
  }
}

defineClass(237, 119, {49:1, 3:1, 10:1, 1:1, 9:1, 8:1}, AttachDetachException);
_.$init_100 = function $init_100(){
}
;
var attachCommand, detachCommand;
var Lcom_google_gwt_user_client_ui_AttachDetachException_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException', 237, Lcom_google_gwt_event_shared_UmbrellaException_2_classLit);
function $clinit_AttachDetachException$Command(){
  $clinit_AttachDetachException$Command = emptyMethod;
}

var Lcom_google_gwt_user_client_ui_AttachDetachException$Command_2_classLit = createForInterface('com.google.gwt.user.client.ui', 'AttachDetachException/Command');
function $clinit_AttachDetachException$1(){
  $clinit_AttachDetachException$1 = emptyMethod;
  $clinit_Object();
}

function AttachDetachException$1(){
  $clinit_AttachDetachException$1();
  Object_0.call(this);
  this.$init_101();
}

defineClass(238, 1, {1:1}, AttachDetachException$1);
_.$init_101 = function $init_101(){
}
;
_.execute_2 = function execute_5(w){
  w.onAttach();
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/1', 238, Ljava_lang_Object_2_classLit);
function $clinit_AttachDetachException$2(){
  $clinit_AttachDetachException$2 = emptyMethod;
  $clinit_Object();
}

function AttachDetachException$2(){
  $clinit_AttachDetachException$2();
  Object_0.call(this);
  this.$init_102();
}

defineClass(239, 1, {1:1}, AttachDetachException$2);
_.$init_102 = function $init_102(){
}
;
_.execute_2 = function execute_6(w){
  w.onDetach();
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/2', 239, Ljava_lang_Object_2_classLit);
function $clinit_ComplexPanel$1(){
  $clinit_ComplexPanel$1 = emptyMethod;
}

defineClass(456, 1, {1:1});
var Lcom_google_gwt_user_client_ui_ComplexPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ComplexPanel/1', 456, Ljava_lang_Object_2_classLit);
function $clinit_IsRenderable(){
  $clinit_IsRenderable = emptyMethod;
}

var Lcom_google_gwt_user_client_ui_IsRenderable_2_classLit = createForInterface('com.google.gwt.user.client.ui', 'IsRenderable');
function $clinit_Composite(){
  $clinit_Composite = emptyMethod;
  $clinit_Widget();
}

function Composite(){
  $clinit_Composite();
  Widget.call(this);
  this.$init_103();
}

defineClass(66, 6, {15:1, 40:1, 6:1, 1:1});
_.$init_103 = function $init_103(){
}
;
_.checkInit = function checkInit(){
  if (isNull(this.widget)) {
    throw toJs(new IllegalStateException_0('initWidget() is not called yet'));
  }
}
;
_.initWidget = function initWidget(widget){
  var elem;
  if (isNotNull(this.widget)) {
    throw toJs(new IllegalStateException_0('Composite.initWidget() may only be called once.'));
  }
  if (isNull(widget)) {
    throw toJs(new NullPointerException_0('widget cannot be null'));
  }
  if (instanceOf(widget, 40)) {
    this.renderable = castTo(widget, 40);
  }
  widget.removeFromParent();
  elem = widget.getElement();
  this.setElement(elem);
  if (isPotential_0(elem)) {
    $setResolver(as_0(elem), this);
  }
  this.widget = widget;
  widget.setParent(this);
}
;
_.isAttached = function isAttached_1(){
  if (isNotNull(this.widget)) {
    return this.widget.isAttached();
  }
  return false;
}
;
_.onAttach = function onAttach_0(){
  this.checkInit();
  if (!this.isOrWasAttached()) {
    this.widget.sinkEvents_0(this.eventsToSink);
    this.eventsToSink = -1;
  }
  this.widget.onAttach();
  setEventListener(this.getElement(), this);
  this.doAttachChildren();
  this.onLoad();
  fire(this, true);
}
;
_.onBrowserEvent = function onBrowserEvent_0(event_0){
  getClassPrototype(6).onBrowserEvent.call(this, event_0);
  this.widget.onBrowserEvent(event_0);
}
;
_.onDetach = function onDetach_0(){
  try {
    this.onUnload();
    this.doDetachChildren();
    fire(this, false);
  }
   finally {
    this.widget.onDetach();
  }
}
;
_.resolvePotentialElement = function resolvePotentialElement_0(){
  this.setElement(this.widget.resolvePotentialElement());
  return this.getElement();
}
;
var Lcom_google_gwt_user_client_ui_Composite_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Composite', 66, Lcom_google_gwt_user_client_ui_Widget_2_classLit);
function $clinit_HTMLPanel(){
  $clinit_HTMLPanel = emptyMethod;
  $clinit_ComplexPanel();
}

function HTMLPanel(html){
  $clinit_HTMLPanel();
  ComplexPanel.call(this);
  this.$init_104();
  this.setElement($createDivElement(get_1()));
  $setInnerHTML(this.getElement(), html);
}

function HTMLPanel_0(tag, html){
  $clinit_HTMLPanel();
  var b, scratchDiv;
  ComplexPanel.call(this);
  this.$init_104();
  if (equals_Ljava_lang_Object__Z__devirtual$_2('', html)) {
    this.setElement($createElement(get_1(), tag));
    return;
  }
  b = new StringBuilder;
  b.append(60).append_2(tag).append(62).append_2(html);
  b.append_2('<\/').append_2(tag).append(62);
  scratchDiv = $createDivElement(get_1());
  $setInnerHTML(scratchDiv, b.toString_0());
  this.setElement($getFirstChildElement(scratchDiv));
  $removeFromParent(this.getElement());
}

defineClass(50, 64, {15:1, 22:1, 6:1, 1:1}, HTMLPanel);
_.$init_104 = function $init_104(){
}
;
_.add_1 = function add_7(widget){
  this.add_2(widget, this.getElement());
}
;
_.addAndReplaceElement = function addAndReplaceElement(widget, toReplace){
  this.addAndReplaceElement_0(widget, asOld(toReplace));
}
;
_.addAndReplaceElement_0 = function addAndReplaceElement_0(widget, toReplace){
  var children, next, toRemove;
  if (jsEquals(toReplace, widget.getElement())) {
    return;
  }
  widget.removeFromParent();
  toRemove = null;
  children = this.getChildren().iterator();
  while (children.hasNext_0()) {
    next = castTo(children.next_1(), 6);
    if ($isOrHasChild(toReplace, next.getElement())) {
      if (jsEquals(next.getElement(), toReplace)) {
        toRemove = next;
        break;
      }
      children.remove_4();
    }
  }
  this.getChildren().add_1(widget);
  if (isNull(toRemove)) {
    $replaceChild($getParentNode(toReplace), widget.getElement(), toReplace);
  }
   else {
    $insertBefore($getParentNode(toReplace), widget.getElement(), toReplace);
    this.remove_1(toRemove);
  }
  this.adopt(widget);
}
;
var Lcom_google_gwt_user_client_ui_HTMLPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HTMLPanel', 50, Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit);
function $clinit_SourcesLoadEvents(){
  $clinit_SourcesLoadEvents = emptyMethod;
}

var Lcom_google_gwt_user_client_ui_SourcesLoadEvents_2_classLit = createForInterface('com.google.gwt.user.client.ui', 'SourcesLoadEvents');
function $clinit_SourcesClickEvents(){
  $clinit_SourcesClickEvents = emptyMethod;
}

var Lcom_google_gwt_user_client_ui_SourcesClickEvents_2_classLit = createForInterface('com.google.gwt.user.client.ui', 'SourcesClickEvents');
function $clinit_SourcesMouseEvents(){
  $clinit_SourcesMouseEvents = emptyMethod;
}

var Lcom_google_gwt_user_client_ui_SourcesMouseEvents_2_classLit = createForInterface('com.google.gwt.user.client.ui', 'SourcesMouseEvents');
function $clinit_Image(){
  $clinit_Image = emptyMethod;
  $clinit_Widget();
  prefetchImages = new HashMap;
}

function Image_0(){
  $clinit_Image();
  Widget.call(this);
  this.$init_105();
  this.changeState(new Image$UnclippedState(this));
  this.setStyleName('gwt-Image');
}

defineClass(39, 6, {15:1, 39:1, 6:1, 1:1}, Image_0);
_.$init_105 = function $init_105(){
}
;
_.addClickHandler = function addClickHandler(handler){
  return this.addHandler_1(handler, getType());
}
;
_.changeState = function changeState(newState){
  this.state = newState;
}
;
_.clearUnhandledEvent = function clearUnhandledEvent(){
  $clinit_Image();
  if (isNotNull(this.state)) {
    $setPropertyString(this.state.getImageElement(this), '__gwtLastUnhandledEvent', '');
  }
}
;
_.getUrl = function getUrl_0(){
  return this.state.getUrl_0(this).asString();
}
;
_.onBrowserEvent = function onBrowserEvent_1(event_0){
  if ($getTypeInt(event_0) == 32768) {
    this.clearUnhandledEvent();
    this.state.onLoadEvent(this);
  }
  getClassPrototype(6).onBrowserEvent.call(this, event_0);
}
;
_.onLoad = function onLoad_1(){
  getClassPrototype(6).onLoad.call(this);
  this.state.onLoad_0(this);
}
;
_.setUrl_0 = function setUrl_0(url_0){
  this.state.setUrl_1(this, url_0);
}
;
_.setUrl = function setUrl_1(url_0){
  this.setUrl_0(unsafeCastFromUntrustedString(url_0));
}
;
var UNHANDLED_EVENT_ATTR = '__gwtLastUnhandledEvent', prefetchImages;
var Lcom_google_gwt_user_client_ui_Image_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image', 39, Lcom_google_gwt_user_client_ui_Widget_2_classLit);
function $clinit_Image$State(){
  $clinit_Image$State = emptyMethod;
  $clinit_Object();
}

function Image$State(){
  $clinit_Image$State();
  Object_0.call(this);
  this.$init_106();
}

defineClass(284, 1, {1:1});
_.$init_106 = function $init_106(){
  this.syntheticEventCommand = null;
}
;
_.fireSyntheticLoadEvent = function fireSyntheticLoadEvent(image){
  this.syntheticEventCommand = new Image$State$1(this, image);
  get_0().scheduleDeferred(this.syntheticEventCommand);
}
;
_.onLoad_0 = function onLoad_2(image){
  var unhandledEvent;
  unhandledEvent = $getPropertyString(this.getImageElement(image), '__gwtLastUnhandledEvent');
  if (equals_Ljava_lang_Object__Z__devirtual$_2('load', unhandledEvent)) {
    this.fireSyntheticLoadEvent(image);
  }
}
;
_.onLoadEvent = function onLoadEvent(image){
}
;
var Lcom_google_gwt_user_client_ui_Image$State_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image/State', 284, Ljava_lang_Object_2_classLit);
function $clinit_Image$ClippedState(){
  $clinit_Image$ClippedState = emptyMethod;
}

defineClass(646, 284, {1:1});
var Lcom_google_gwt_user_client_ui_Image$ClippedState_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image/ClippedState', 646, Lcom_google_gwt_user_client_ui_Image$State_2_classLit);
function $clinit_Image$State$1(){
  $clinit_Image$State$1 = emptyMethod;
  $clinit_Object();
}

function Image$State$1(this$1, val$image){
  $clinit_Image$State$1();
  this.this$11 = this$1;
  this.val$image2 = val$image;
  Object_0.call(this);
  this.$init_107();
}

defineClass(286, 1, {1:1}, Image$State$1);
_.$init_107 = function $init_107(){
}
;
_.execute_0 = function execute_7(){
  var evt;
  if (jsNotEquals(this.val$image2.state, this.this$11) || jsNotEquals(this, this.this$11.syntheticEventCommand)) {
    return;
  }
  this.this$11.syntheticEventCommand = null;
  if (!this.val$image2.isAttached()) {
    $setPropertyString(this.this$11.getImageElement(this.val$image2), '__gwtLastUnhandledEvent', 'load');
    return;
  }
  evt = $createLoadEvent(get_1());
  $dispatchEvent(this.this$11.getImageElement(this.val$image2), evt);
}
;
var Lcom_google_gwt_user_client_ui_Image$State$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image/State/1', 286, Ljava_lang_Object_2_classLit);
function $clinit_Image$UnclippedState(){
  $clinit_Image$UnclippedState = emptyMethod;
  $clinit_Image$State();
}

function Image$UnclippedState(image){
  $clinit_Image$UnclippedState();
  Image$State.call(this);
  this.$init_108();
  image.replaceElement($createImageElement(get_1()));
  sinkEvents_0(image.getElement(), 32768);
  image.sinkEvents_0(1 | 2 | 124 | 32768 | 65536 | 131072 | 15728640 | 117440512);
}

defineClass(285, 284, {1:1}, Image$UnclippedState);
_.$init_108 = function $init_108(){
}
;
_.getImageElement = function getImageElement(image){
  return $cast(image.getElement());
}
;
_.getUrl_0 = function getUrl_1(image){
  return unsafeCastFromUntrustedString($getSrc(this.getImageElement(image)));
}
;
_.setUrl_1 = function setUrl_2(image, url_0){
  image.clearUnhandledEvent();
  $setSrc(this.getImageElement(image), url_0.asString());
}
;
var Lcom_google_gwt_user_client_ui_Image$UnclippedState_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image/UnclippedState', 285, Lcom_google_gwt_user_client_ui_Image$State_2_classLit);
function $clinit_PotentialElement(){
  $clinit_PotentialElement = emptyMethod;
  $clinit_Element();
  {
    declareShim();
  }
}

function $setResolver(this$static, resolver){
  $clinit_PotentialElement();
  this$static.__gwt_resolve = buildResolveCallback(resolver);
}

function as_0(e){
  $clinit_PotentialElement();
  return e;
}

function buildResolveCallback(resolver){
  return function(){
    this.__gwt_resolve = cannotResolveTwice;
    return resolver.resolvePotentialElement();
  }
  ;
}

function cannotResolveTwice(){
  throw 'A PotentialElement cannot be resolved twice.';
}

function declareShim(){
  var shim = function(){
  }
  ;
  shim.prototype = {className:'', clientHeight:0, clientWidth:0, dir:'', getAttribute:function(name_0, value_0){
    return this[name_0];
  }
  , href:'', id:'', lang:'', nodeType:1, removeAttribute:function(name_0, value_0){
    this[name_0] = undefined;
  }
  , setAttribute:function(name_0, value_0){
    this[name_0] = value_0;
  }
  , src:'', style:{}, title:''};
  $wnd.GwtPotentialElementShim = shim;
}

function isPotential_0(o){
  $clinit_PotentialElement();
  return isPotential(o);
}

function $clinit_RootPanel(){
  $clinit_RootPanel = emptyMethod;
  $clinit_AbsolutePanel();
  maybeDetachCommand = new RootPanel$1;
  rootPanels = new HashMap;
  widgetsToDetach = new HashSet;
}

function RootPanel(elem){
  $clinit_RootPanel();
  AbsolutePanel.call(this, elem);
  this.$init_109();
  this.onAttach();
}

function detachNow(widget){
  $clinit_RootPanel();
  try {
    widget.onDetach();
  }
   finally {
    widgetsToDetach.remove_5(widget);
  }
}

function detachOnWindowClose(widget){
  widgetsToDetach.add_3(widget);
}

function detachWidgets(){
  $clinit_RootPanel();
  try {
    tryCommand(widgetsToDetach, maybeDetachCommand);
  }
   finally {
    widgetsToDetach.clear_0();
    rootPanels.clear_0();
  }
}

function get_4(){
  $clinit_RootPanel();
  return get_5(null);
}

function get_5(id_0){
  var elem, rp;
  rp = castTo(rootPanels.get_2(id_0), 65);
  elem = null;
  if (jsNotEquals(id_0, null)) {
    if (isNull(elem = $getElementById(get_1(), id_0))) {
      return null;
    }
  }
  if (isNotNull(rp)) {
    if (isNull(elem) || jsEquals(rp.getElement(), elem)) {
      return rp;
    }
  }
  if (rootPanels.size_1() == 0) {
    hookWindowClosing();
    if (getCurrentLocale().isRTL()) {
      setDirectionOnElement(getRootElement(), ($clinit_HasDirection$Direction() , RTL));
    }
  }
  if (isNull(elem)) {
    rp = new RootPanel$DefaultRootPanel;
  }
   else {
    rp = new RootPanel(elem);
  }
  rootPanels.put(id_0, rp);
  detachOnWindowClose(rp);
  return rp;
}

function getBodyElement(){
  $clinit_RootPanel();
  return $doc.body;
}

function getRootElement(){
  return $doc;
}

function hookWindowClosing(){
  addCloseHandler(new RootPanel$2);
}

function isElementChildOfWidget(element){
  var body_0;
  element = $getParentElement(element);
  body_0 = $getBody(get_1());
  while (isNotNull(element) && jsNotEquals(body_0, element)) {
    if (isNotNull(getEventListener_0(element))) {
      return true;
    }
    element = $cast($getParentElement(element));
  }
  return false;
}

function isInDetachList(widget){
  $clinit_RootPanel();
  return widgetsToDetach.contains_0(widget);
}

defineClass(65, 235, {15:1, 22:1, 65:1, 6:1, 1:1}, RootPanel);
_.$init_109 = function $init_109(){
}
;
var maybeDetachCommand, rootPanels, widgetsToDetach;
var Lcom_google_gwt_user_client_ui_RootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel', 65, Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit);
function $clinit_RootPanel$1(){
  $clinit_RootPanel$1 = emptyMethod;
  $clinit_Object();
}

function RootPanel$1(){
  $clinit_RootPanel$1();
  Object_0.call(this);
  this.$init_110();
}

defineClass(241, 1, {1:1}, RootPanel$1);
_.$init_110 = function $init_110(){
}
;
_.execute_2 = function execute_8(w){
  if (w.isAttached()) {
    w.onDetach();
  }
}
;
var Lcom_google_gwt_user_client_ui_RootPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/1', 241, Ljava_lang_Object_2_classLit);
function $clinit_RootPanel$2(){
  $clinit_RootPanel$2 = emptyMethod;
  $clinit_Object();
}

function RootPanel$2(){
  $clinit_RootPanel$2();
  Object_0.call(this);
  this.$init_111();
}

defineClass(242, 1, {306:1, 19:1, 1:1}, RootPanel$2);
_.$init_111 = function $init_111(){
}
;
_.onClose = function onClose(closeEvent){
  detachWidgets();
}
;
var Lcom_google_gwt_user_client_ui_RootPanel$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/2', 242, Ljava_lang_Object_2_classLit);
function $clinit_RootPanel$DefaultRootPanel(){
  $clinit_RootPanel$DefaultRootPanel = emptyMethod;
  $clinit_RootPanel();
}

function RootPanel$DefaultRootPanel(){
  $clinit_RootPanel$DefaultRootPanel();
  RootPanel.call(this, getBodyElement());
  this.$init_112();
}

defineClass(240, 65, {15:1, 22:1, 65:1, 6:1, 1:1}, RootPanel$DefaultRootPanel);
_.$init_112 = function $init_112(){
}
;
var Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/DefaultRootPanel', 240, Lcom_google_gwt_user_client_ui_RootPanel_2_classLit);
function $clinit_UIObject$DebugIdImpl(){
  $clinit_UIObject$DebugIdImpl = emptyMethod;
  $clinit_Object();
}

function UIObject$DebugIdImpl(){
  $clinit_UIObject$DebugIdImpl();
  Object_0.call(this);
  this.$init_113();
}

defineClass(95, 1, {1:1});
_.$init_113 = function $init_113(){
}
;
var Lcom_google_gwt_user_client_ui_UIObject$DebugIdImpl_2_classLit = createForClass('com.google.gwt.user.client.ui', 'UIObject/DebugIdImpl', 95, Ljava_lang_Object_2_classLit);
function $clinit_UIObject$DebugIdImplEnabled(){
  $clinit_UIObject$DebugIdImplEnabled = emptyMethod;
  $clinit_UIObject$DebugIdImpl();
}

function UIObject$DebugIdImplEnabled(){
  $clinit_UIObject$DebugIdImplEnabled();
  UIObject$DebugIdImpl.call(this);
  this.$init_114();
}

defineClass(236, 95, {95:1, 1:1}, UIObject$DebugIdImplEnabled);
_.$init_114 = function $init_114(){
}
;
var Lcom_google_gwt_user_client_ui_UIObject$DebugIdImplEnabled_2_classLit = createForClass('com.google.gwt.user.client.ui', 'UIObject/DebugIdImplEnabled', 236, Lcom_google_gwt_user_client_ui_UIObject$DebugIdImpl_2_classLit);
function $clinit_WidgetCollection(){
  $clinit_WidgetCollection = emptyMethod;
  $clinit_Object();
  $clinit_Iterable();
}

function WidgetCollection(parent_0){
  $clinit_WidgetCollection();
  Object_0.call(this);
  this.$init_115();
  this.parent_0 = parent_0;
  this.array = initUnidimensionalArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, {3:1, 1:1, 7:1}, 6, 4, 0, 1);
}

defineClass(259, 1, {1:1}, WidgetCollection);
_.$init_115 = function $init_115(){
}
;
_.add_1 = function add_8(w){
  this.insert_0(w, this.size_0);
}
;
_.indexOf_0 = function indexOf(w){
  var i_0;
  for (i_0 = 0; i_0 < this.size_0; ++i_0) {
    if (jsEquals(this.array[i_0], w)) {
      return i_0;
    }
  }
  return -1;
}
;
_.insert_0 = function insert_1(w, beforeIndex){
  var i_0, i0, newArray;
  if (beforeIndex < 0 || beforeIndex > this.size_0) {
    throw toJs(new IndexOutOfBoundsException);
  }
  if (this.size_0 == this.array.length) {
    newArray = initUnidimensionalArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, {3:1, 1:1, 7:1}, 6, this.array.length * 2, 0, 1);
    for (i0 = 0; i0 < this.array.length; ++i0) {
      setCheck(newArray, i0, this.array[i0]);
    }
    this.array = newArray;
  }
  ++this.size_0;
  for (i_0 = this.size_0 - 1; i_0 > beforeIndex; --i_0) {
    setCheck(this.array, i_0, this.array[i_0 - 1]);
  }
  setCheck(this.array, beforeIndex, w);
}
;
_.iterator = function iterator_1(){
  return new WidgetCollection$WidgetIterator(this);
}
;
_.remove_2 = function remove_3(index_0){
  var i_0;
  if (index_0 < 0 || index_0 >= this.size_0) {
    throw toJs(new IndexOutOfBoundsException);
  }
  --this.size_0;
  for (i_0 = index_0; i_0 < this.size_0; ++i_0) {
    setCheck(this.array, i_0, this.array[i_0 + 1]);
  }
  setCheck(this.array, this.size_0, null);
}
;
_.remove_3 = function remove_4(w){
  var index_0;
  index_0 = this.indexOf_0(w);
  if (index_0 == -1) {
    throw toJs(new NoSuchElementException);
  }
  this.remove_2(index_0);
}
;
_.size_1 = function size_2(){
  return this.size_0;
}
;
_.size_0 = 0;
var INITIAL_SIZE = 4;
var Lcom_google_gwt_user_client_ui_WidgetCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection', 259, Ljava_lang_Object_2_classLit);
function $clinit_Iterator(){
  $clinit_Iterator = emptyMethod;
}

var Ljava_util_Iterator_2_classLit = createForInterface('java.util', 'Iterator');
function $clinit_WidgetCollection$WidgetIterator(){
  $clinit_WidgetCollection$WidgetIterator = emptyMethod;
  $clinit_Object();
  $clinit_Iterator();
}

function WidgetCollection$WidgetIterator(this$0){
  $clinit_WidgetCollection$WidgetIterator();
  this.this$01 = this$0;
  Object_0.call(this);
  this.$init_116();
}

defineClass(260, 1, {1:1}, WidgetCollection$WidgetIterator);
_.$init_116 = function $init_116(){
  this.index_0 = 0;
}
;
_.next_1 = function next_1(){
  return this.next_0();
}
;
_.hasNext_0 = function hasNext(){
  return this.index_0 < this.this$01.size_0;
}
;
_.next_0 = function next_0(){
  if (this.index_0 >= this.this$01.size_0) {
    throw toJs(new NoSuchElementException);
  }
  this.currentWidget = this.this$01.array[this.index_0];
  this.index_0++;
  return this.currentWidget;
}
;
_.remove_4 = function remove_5(){
  if (isNull(this.currentWidget)) {
    throw toJs(new IllegalStateException);
  }
  this.this$01.parent_0.remove_1(this.currentWidget);
  this.index_0--;
  this.currentWidget = null;
}
;
_.index_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection/WidgetIterator', 260, Ljava_lang_Object_2_classLit);
function $clinit_UserAgent(){
  $clinit_UserAgent = emptyMethod;
}

var Lcom_google_gwt_useragent_client_UserAgent_2_classLit = createForInterface('com.google.gwt.useragent.client', 'UserAgent');
function $clinit_UserAgentAsserter(){
  $clinit_UserAgentAsserter = emptyMethod;
  $clinit_Object();
}

function UserAgentAsserter(){
  $clinit_UserAgentAsserter();
  Object_0.call(this);
  this.$init_117();
}

function assertCompileTimeUserAgent(){
  var compileTimeValue, impl, runtimeValue;
  impl = castTo(new UserAgentImplSafari, 315);
  compileTimeValue = impl.getCompileTimeValue();
  runtimeValue = impl.getRuntimeValue();
  if (!equals_Ljava_lang_Object__Z__devirtual$_2(compileTimeValue, runtimeValue)) {
    throw toJs(new UserAgentAsserter$UserAgentAssertionError(compileTimeValue, runtimeValue));
  }
}

function scheduleUserAgentCheck(){
  $wnd.setTimeout($entry(assertCompileTimeUserAgent));
}

defineClass(124, 1, {42:1, 1:1}, UserAgentAsserter);
_.$init_117 = function $init_117(){
}
;
_.onModuleLoad = function onModuleLoad_1(){
  scheduleUserAgentCheck();
}
;
var Lcom_google_gwt_useragent_client_UserAgentAsserter_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentAsserter', 124, Ljava_lang_Object_2_classLit);
function $clinit_UserAgentAsserter$UserAgentAsserterDisabled(){
  $clinit_UserAgentAsserter$UserAgentAsserterDisabled = emptyMethod;
}

defineClass(316, 1, {1:1});
var Lcom_google_gwt_useragent_client_UserAgentAsserter$UserAgentAsserterDisabled_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAsserterDisabled', 316, Ljava_lang_Object_2_classLit);
function $clinit_Error(){
  $clinit_Error = emptyMethod;
  $clinit_Throwable();
}

function Error_0(){
  $clinit_Error();
  Throwable.call(this);
  this.$init_118();
}

function Error_1(message){
  $clinit_Error();
  Throwable_1.call(this, message);
  this.$init_118();
}

function Error_2(message, cause){
  $clinit_Error();
  Throwable_2.call(this, message, cause);
  this.$init_118();
}

defineClass(84, 8, {3:1, 1:1, 8:1});
_.$init_118 = function $init_118(){
}
;
var Ljava_lang_Error_2_classLit = createForClass('java.lang', 'Error', 84, Ljava_lang_Throwable_2_classLit);
function $clinit_AssertionError(){
  $clinit_AssertionError = emptyMethod;
  $clinit_Error();
}

function AssertionError(){
  $clinit_AssertionError();
  Error_0.call(this);
  this.$init_119();
}

function AssertionError_0(message){
  $clinit_AssertionError();
  AssertionError_6.call(this, valueOf_12(message));
}

function AssertionError_1(message){
  $clinit_AssertionError();
  AssertionError_6.call(this, valueOf_13(message));
}

function AssertionError_2(message){
  $clinit_AssertionError();
  AssertionError_6.call(this, valueOf_14(message));
}

function AssertionError_3(message){
  $clinit_AssertionError();
  AssertionError_6.call(this, valueOf_15(message));
}

function AssertionError_4(message){
  $clinit_AssertionError();
  AssertionError_6.call(this, valueOf_16(message));
}

function AssertionError_5(message){
  $clinit_AssertionError();
  Error_2.call(this, valueOf_17(message), instanceOf(message, 8)?castTo(message, 8):null);
  this.$init_119();
}

function AssertionError_6(message){
  Error_1.call(this, message);
  this.$init_119();
}

function AssertionError_7(message){
  $clinit_AssertionError();
  AssertionError_6.call(this, valueOf_18(message));
}

defineClass(14, 84, {3:1, 1:1, 8:1}, AssertionError, AssertionError_0, AssertionError_1, AssertionError_2, AssertionError_3, AssertionError_4, AssertionError_5, AssertionError_7);
_.$init_119 = function $init_119(){
}
;
var Ljava_lang_AssertionError_2_classLit = createForClass('java.lang', 'AssertionError', 14, Ljava_lang_Error_2_classLit);
function $clinit_UserAgentAsserter$UserAgentAssertionError(){
  $clinit_UserAgentAsserter$UserAgentAssertionError = emptyMethod;
  $clinit_AssertionError();
}

function UserAgentAsserter$UserAgentAssertionError(compileTimeValue, runtimeValue){
  $clinit_UserAgentAsserter$UserAgentAssertionError();
  AssertionError_5.call(this, 'Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (' + compileTimeValue + ') ' + 'does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.');
  this.$init_120();
}

defineClass(130, 14, {3:1, 1:1, 8:1}, UserAgentAsserter$UserAgentAssertionError);
_.$init_120 = function $init_120(){
}
;
var Lcom_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 130, Ljava_lang_AssertionError_2_classLit);
function $clinit_UserAgentImplSafari(){
  $clinit_UserAgentImplSafari = emptyMethod;
  $clinit_Object();
}

function UserAgentImplSafari(){
  $clinit_UserAgentImplSafari();
  Object_0.call(this);
  this.$init_121();
}

defineClass(129, 1, {315:1, 1:1}, UserAgentImplSafari);
_.$init_121 = function $init_121(){
}
;
_.getCompileTimeValue = function getCompileTimeValue(){
  return 'safari';
}
;
_.getRuntimeValue = function getRuntimeValue(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && (docMode >= 10 && docMode < 11);
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && (docMode >= 9 && docMode < 11);
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && (docMode >= 8 && docMode < 11);
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}
;
var Lcom_google_gwt_useragent_client_UserAgentImplSafari_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentImplSafari', 129, Ljava_lang_Object_2_classLit);
function $clinit_SimpleEventBus$1(){
  $clinit_SimpleEventBus$1 = emptyMethod;
  $clinit_Object();
}

function SimpleEventBus$1(this$0, val$type, val$source, val$handler){
  $clinit_SimpleEventBus$1();
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = val$source;
  this.val$handler4 = val$handler;
  Object_0.call(this);
  this.$init_122();
}

defineClass(202, 1, {1:1}, SimpleEventBus$1);
_.$init_122 = function $init_122(){
}
;
var Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/1', 202, Ljava_lang_Object_2_classLit);
function $clinit_SimpleEventBus$Command(){
  $clinit_SimpleEventBus$Command = emptyMethod;
}

var Lcom_google_web_bindery_event_shared_SimpleEventBus$Command_2_classLit = createForInterface('com.google.web.bindery.event.shared', 'SimpleEventBus/Command');
function $clinit_SimpleEventBus$2(){
  $clinit_SimpleEventBus$2 = emptyMethod;
  $clinit_Object();
}

function SimpleEventBus$2(this$0, val$type, val$source, val$handler){
  $clinit_SimpleEventBus$2();
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = val$source;
  this.val$handler4 = val$handler;
  Object_0.call(this);
  this.$init_123();
}

defineClass(203, 1, {305:1, 1:1}, SimpleEventBus$2);
_.$init_123 = function $init_123(){
}
;
_.execute_0 = function execute_9(){
  this.this$01.doAddNow(this.val$type2, this.val$source3, this.val$handler4);
}
;
var Lcom_google_web_bindery_event_shared_SimpleEventBus$2_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/2', 203, Ljava_lang_Object_2_classLit);
function $clinit_SimpleEventBus$3(){
  $clinit_SimpleEventBus$3 = emptyMethod;
}

defineClass(437, 1, {305:1, 1:1});
var Lcom_google_web_bindery_event_shared_SimpleEventBus$3_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/3', 437, Ljava_lang_Object_2_classLit);
function $clinit_PhoneGap(){
  $clinit_PhoneGap = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_PhoneGap_2_classLit = createForInterface('com.googlecode.gwtphonegap.client', 'PhoneGap');
function $clinit_PhoneGapAvailableEvent(){
  $clinit_PhoneGapAvailableEvent = emptyMethod;
  $clinit_GwtEvent();
  TYPE_4 = new GwtEvent$Type;
}

function PhoneGapAvailableEvent(){
  $clinit_PhoneGapAvailableEvent();
  GwtEvent.call(this);
  this.$init_124();
}

defineClass(209, 17, {1:1}, PhoneGapAvailableEvent);
_.$init_124 = function $init_124(){
}
;
_.dispatch_0 = function dispatch_8(handler){
  this.dispatch_5(castTo(handler, 323));
}
;
_.dispatch_5 = function dispatch_9(handler){
  handler.onPhoneGapAvailable(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_5(){
  return TYPE_4;
}
;
var TYPE_4;
var Lcom_googlecode_gwtphonegap_client_PhoneGapAvailableEvent_2_classLit = createForClass('com.googlecode.gwtphonegap.client', 'PhoneGapAvailableEvent', 209, Lcom_google_gwt_event_shared_GwtEvent_2_classLit);
function $clinit_PhoneGapAvailableHandler(){
  $clinit_PhoneGapAvailableHandler = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_PhoneGapAvailableHandler_2_classLit = createForInterface('com.googlecode.gwtphonegap.client', 'PhoneGapAvailableHandler');
function $clinit_PhoneGapStandardImpl(){
  $clinit_PhoneGapStandardImpl = emptyMethod;
  $clinit_Object();
}

function PhoneGapStandardImpl(){
  $clinit_PhoneGapStandardImpl();
  Object_0.call(this);
  this.$init_125();
  this.getLog();
  this.setupReadyHook();
}

defineClass(105, 1, {134:1, 1:1}, PhoneGapStandardImpl);
_.$init_125 = function $init_125(){
  this.plugins = new HashMap;
  this.hasHandlers = false;
  this.handlerManager = new SimpleEventBus;
}
;
_.addHandler_2 = function addHandler_3(handler){
  this.hasHandlers = true;
  return this.handlerManager.addHandler_0(($clinit_PhoneGapAvailableEvent() , TYPE_4), handler);
}
;
_.addHandler_3 = function addHandler_4(handler){
  this.hasHandlers = true;
  return this.handlerManager.addHandler_0(($clinit_PhoneGapTimeoutEvent() , TYPE_5), handler);
}
;
_.constructDevice = function constructDevice(){
  return castTo(new DeviceMobileImpl, 654);
}
;
_.constructEvent = function constructEvent(){
  var event_0;
  event_0 = castTo(new EventJsImpl, 655);
  event_0.setEventBus(this.handlerManager);
  return event_0;
}
;
_.firePhoneGapAvailable = function firePhoneGapAvailable(){
  $clinit_PhoneGapStandardImpl();
  if (!this.getDevice().isAvailable()) {
    this.log_1('Device API is not available - logging will not work');
    this.log_1('e.g.: plugman install --platform android  --project ./platforms/android/ --plugin org.apache.cordova.device');
  }
   else {
    this.phoneGapLog.setClientId(this.getDevice().getUuid());
  }
  this.handlerManager.fireEvent_0(new PhoneGapAvailableEvent);
}
;
_.getDevice = function getDevice(){
  if (isNull(this.device_0)) {
    this.device_0 = this.constructDevice();
  }
  return this.device_0;
}
;
_.getEvent = function getEvent(){
  this.hasHandlers = true;
  if (isNull(this.event_0)) {
    this.event_0 = this.constructEvent();
  }
  return this.event_0;
}
;
_.getLog = function getLog(){
  if (isNull(this.phoneGapLog)) {
    this.phoneGapLog = new PhoneGapLogStandardImpl;
  }
  return this.phoneGapLog;
}
;
_.initializePhoneGap = function initializePhoneGap(){
  this.initializePhoneGap_0(10000);
}
;
_.initializePhoneGap_0 = function initializePhoneGap_0(timeoutInMs){
  var end, timer;
  end = add_3(currentTimeMillis_0(), fromInt_0(timeoutInMs));
  if (this.isPhoneGapInitialized()) {
    this.firePhoneGapAvailable();
  }
   else {
    timer = new PhoneGapStandardImpl$1(this, end);
    timer.schedule(10);
  }
}
;
_.isPhoneGapInitialized = function isPhoneGapInitialized(){
  return this.deviceReady;
}
;
_.log_1 = function log_5(message){
  $wnd.console.log(message);
}
;
_.nativeDeviceReady = function nativeDeviceReady(){
  this.deviceReady = true;
}
;
_.setEventBus = function setEventBus(eventBus){
  this.handlerManager = eventBus;
  this.event_0 = this.constructEvent();
}
;
_.setupReadyHook = function setupReadyHook(){
  var that = this;
  var f = function(){
    that.nativeDeviceReady();
  }
  ;
  $doc.addEventListener('deviceready', $entry(f), false);
}
;
_.deviceReady = false;
_.hasHandlers = false;
var INIT_TICK = 10;
var Lcom_googlecode_gwtphonegap_client_PhoneGapStandardImpl_2_classLit = createForClass('com.googlecode.gwtphonegap.client', 'PhoneGapStandardImpl', 105, Ljava_lang_Object_2_classLit);
function $clinit_PhoneGapBrowserImpl(){
  $clinit_PhoneGapBrowserImpl = emptyMethod;
  $clinit_PhoneGapStandardImpl();
}

function PhoneGapBrowserImpl(){
  PhoneGapStandardImpl.call(this);
  this.$init_126();
}

defineClass(438, 105, {134:1, 1:1});
_.$init_126 = function $init_126(){
}
;
_.isPhoneGapInitialized = function isPhoneGapInitialized_0(){
  return true;
}
;
var Lcom_googlecode_gwtphonegap_client_PhoneGapBrowserImpl_2_classLit = createForClass('com.googlecode.gwtphonegap.client', 'PhoneGapBrowserImpl', 438, Lcom_googlecode_gwtphonegap_client_PhoneGapStandardImpl_2_classLit);
function $clinit_PhoneGapStandardImpl$1(){
  $clinit_PhoneGapStandardImpl$1 = emptyMethod;
  $clinit_Timer();
}

function PhoneGapStandardImpl$1(this$0, val$end){
  $clinit_PhoneGapStandardImpl$1();
  this.this$01 = this$0;
  this.val$end2 = val$end;
  Timer.call(this);
  this.$init_127();
}

defineClass(204, 112, {1:1}, PhoneGapStandardImpl$1);
_.$init_127 = function $init_127(){
}
;
_.run = function run(){
  if (this.this$01.isPhoneGapInitialized()) {
    this.this$01.firePhoneGapAvailable();
    return;
  }
  if (gt(sub_1(currentTimeMillis_0(), this.val$end2), 0)) {
    this.this$01.handlerManager.fireEvent_0(new PhoneGapTimeoutEvent);
  }
   else {
    this.schedule(10);
  }
}
;
_.val$end2 = 0;
var Lcom_googlecode_gwtphonegap_client_PhoneGapStandardImpl$1_2_classLit = createForClass('com.googlecode.gwtphonegap.client', 'PhoneGapStandardImpl/1', 204, Lcom_google_gwt_user_client_Timer_2_classLit);
function $clinit_PhoneGapTimeoutEvent(){
  $clinit_PhoneGapTimeoutEvent = emptyMethod;
  $clinit_GwtEvent();
  TYPE_5 = new GwtEvent$Type;
}

function PhoneGapTimeoutEvent(){
  $clinit_PhoneGapTimeoutEvent();
  GwtEvent.call(this);
  this.$init_128();
}

defineClass(211, 17, {1:1}, PhoneGapTimeoutEvent);
_.$init_128 = function $init_128(){
}
;
_.dispatch_0 = function dispatch_10(handler){
  this.dispatch_6(castTo(handler, 324));
}
;
_.dispatch_6 = function dispatch_11(handler){
  handler.onPhoneGapTimeout(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_6(){
  return TYPE_5;
}
;
var TYPE_5;
var Lcom_googlecode_gwtphonegap_client_PhoneGapTimeoutEvent_2_classLit = createForClass('com.googlecode.gwtphonegap.client', 'PhoneGapTimeoutEvent', 211, Lcom_google_gwt_event_shared_GwtEvent_2_classLit);
function $clinit_PhoneGapTimeoutHandler(){
  $clinit_PhoneGapTimeoutHandler = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_PhoneGapTimeoutHandler_2_classLit = createForInterface('com.googlecode.gwtphonegap.client', 'PhoneGapTimeoutHandler');
function $clinit_Acceleration(){
  $clinit_Acceleration = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_accelerometer_Acceleration_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.accelerometer', 'Acceleration');
function $clinit_AccelerationJsImpl(){
  $clinit_AccelerationJsImpl = emptyMethod;
  $clinit_JavaScriptObject();
}

function $clinit_CameraPopoverHandle(){
  $clinit_CameraPopoverHandle = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_camera_CameraPopoverHandle_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.camera', 'CameraPopoverHandle');
function $clinit_CameraPopoverHandleJsImpl(){
  $clinit_CameraPopoverHandleJsImpl = emptyMethod;
  $clinit_JavaScriptObject();
}

function $clinit_CaptureError(){
  $clinit_CaptureError = emptyMethod;
}

var CAPTURE_APPLICATION_BUSY = 1, CAPTURE_INTERNAL_ERR = 0, CAPTURE_INVALID_ARGUMENT = 2, CAPTURE_NOT_SUPPORTED = 20, CAPTURE_NO_MEDIA_FILES = 3;
var Lcom_googlecode_gwtphonegap_client_capture_CaptureError_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.capture', 'CaptureError');
function $clinit_ConfigurationData(){
  $clinit_ConfigurationData = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_capture_ConfigurationData_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.capture', 'ConfigurationData');
function $clinit_MediaFile(){
  $clinit_MediaFile = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_capture_MediaFile_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.capture', 'MediaFile');
function $clinit_MediaFileData(){
  $clinit_MediaFileData = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_capture_MediaFileData_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.capture', 'MediaFileData');
function $clinit_CaptureErrorJsImpl(){
  $clinit_CaptureErrorJsImpl = emptyMethod;
  $clinit_JavaScriptObject();
}

function $clinit_ConfigurationDataJsImpl(){
  $clinit_ConfigurationDataJsImpl = emptyMethod;
  $clinit_JavaScriptObject();
}

function $getType_1(this$static){
  return this$static.type;
}

function $clinit_MediaFileDataJsImpl(){
  $clinit_MediaFileDataJsImpl = emptyMethod;
  $clinit_JavaScriptObject();
}

function $clinit_MediaFileJsImpl(){
  $clinit_MediaFileJsImpl = emptyMethod;
  $clinit_JavaScriptObject();
}

function $getName(this$static){
  return this$static.name;
}

function $getType_2(this$static){
  return this$static.type;
}

function $clinit_CompassError(){
  $clinit_CompassError = emptyMethod;
}

var COMPASS_INTERNAL_ERR = 0, COMPASS_NOT_SUPPORTED = 20;
var Lcom_googlecode_gwtphonegap_client_compass_CompassError_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.compass', 'CompassError');
function $clinit_CompassHeading(){
  $clinit_CompassHeading = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_compass_CompassHeading_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.compass', 'CompassHeading');
function $clinit_CompassErrorJsImpl(){
  $clinit_CompassErrorJsImpl = emptyMethod;
  $clinit_JavaScriptObject();
}

function $clinit_CompassHeadingJsImpl(){
  $clinit_CompassHeadingJsImpl = emptyMethod;
  $clinit_JavaScriptObject();
}

function $clinit_Contact(){
  $clinit_Contact = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_contacts_Contact_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.contacts', 'Contact');
function $clinit_ContactAddress(){
  $clinit_ContactAddress = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_contacts_ContactAddress_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.contacts', 'ContactAddress');
function $clinit_ContactField(){
  $clinit_ContactField = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_contacts_ContactField_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.contacts', 'ContactField');
function $clinit_ContactName(){
  $clinit_ContactName = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_contacts_ContactName_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.contacts', 'ContactName');
function $clinit_ContactOrganisation(){
  $clinit_ContactOrganisation = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_contacts_ContactOrganisation_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.contacts', 'ContactOrganisation');
function $clinit_ContactAddressJsoImpl(){
  $clinit_ContactAddressJsoImpl = emptyMethod;
  $clinit_JavaScriptObject();
}

function $getType_3(this$static){
  return this$static.type;
}

function $setType_0(this$static, type_0){
  this$static.type = type_0;
}

function $clinit_ContactFieldJsoImpl(){
  $clinit_ContactFieldJsoImpl = emptyMethod;
  $clinit_JavaScriptObject();
}

function $getType_4(this$static){
  return this$static.type;
}

function $setType_1(this$static, type_0){
  this$static.type = type_0;
}

function $clinit_ContactJsoImpl(){
  $clinit_ContactJsoImpl = emptyMethod;
  $clinit_JavaScriptObject();
}

function $remove(this$static){
  this$static.remove();
}

function $clinit_ContactNameJsoImpl(){
  $clinit_ContactNameJsoImpl = emptyMethod;
  $clinit_JavaScriptObject();
}

function $clinit_ContactOrganisationJsoImpl(){
  $clinit_ContactOrganisationJsoImpl = emptyMethod;
  $clinit_JavaScriptObject();
}

function $getName_0(this$static){
  return this$static.name;
}

function $getType_5(this$static){
  return this$static.type;
}

function $setName(this$static, name_0){
  this$static.name = name_0;
}

function $setTitle_1(this$static, title_0){
  this$static.title = title_0;
}

function $setType_2(this$static, type_0){
  this$static.type = type_0;
}

function $clinit_Device(){
  $clinit_Device = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_device_Device_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.device', 'Device');
function $clinit_DeviceBrowserImpl(){
  $clinit_DeviceBrowserImpl = emptyMethod;
  $clinit_Object();
  CHAR_ARRAY = toCharArray___C__devirtual$('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');
}

function DeviceBrowserImpl(){
  Object_0.call(this);
  this.$init_129();
}

function getPseudoGUUID(){
  var buffer, i_0, index_0, random;
  buffer = initUnidimensionalArray(C_classLit, {3:1, 1:1}, 56, 36, 15, 1);
  for (i_0 = 0; i_0 < 36; i_0++) {
    random = round_int(random_0() * 16);
    index_0 = 0;
    if (i_0 == 19) {
      index_0 = random & 3 | 8;
    }
     else {
      index_0 = random & 15;
    }
    buffer[i_0] = CHAR_ARRAY[index_0];
  }
  buffer[8] = buffer[13] = buffer[18] = buffer[23] = 45;
  buffer[14] = 52;
  return $createString(buffer);
}

defineClass(452, 1, {1:1});
_.$init_129 = function $init_129(){
}
;
_.getName = function getName_1(){
  return '';
}
;
_.getUuid = function getUuid(){
  var end, value_0;
  value_0 = getCookie('gwt-phonegap-uuid');
  if (jsEquals(value_0, null)) {
    end = add_3(currentTimeMillis_0(), mul_0(mul_0(mul_0(mul_0(60, 60), 24), 356), 1000));
    value_0 = getPseudoGUUID();
    setCookie('gwt-phonegap-uuid', value_0, new Date_0(end));
  }
  return value_0;
}
;
_.isAvailable = function isAvailable(){
  return true;
}
;
var CHAR_ARRAY;
var Lcom_googlecode_gwtphonegap_client_device_DeviceBrowserImpl_2_classLit = createForClass('com.googlecode.gwtphonegap.client.device', 'DeviceBrowserImpl', 452, Ljava_lang_Object_2_classLit);
function $clinit_DeviceMobileImpl(){
  $clinit_DeviceMobileImpl = emptyMethod;
  $clinit_Object();
}

function DeviceMobileImpl(){
  $clinit_DeviceMobileImpl();
  Object_0.call(this);
  this.$init_130();
}

defineClass(219, 1, {654:1, 1:1}, DeviceMobileImpl);
_.$init_130 = function $init_130(){
}
;
_.getName = function getName_2(){
  return $wnd.device.name;
}
;
_.getUuid = function getUuid_0(){
  return $wnd.device.uuid;
}
;
_.isAvailable = function isAvailable_0(){
  return $wnd.device != null;
}
;
var Lcom_googlecode_gwtphonegap_client_device_DeviceMobileImpl_2_classLit = createForClass('com.googlecode.gwtphonegap.client.device', 'DeviceMobileImpl', 219, Ljava_lang_Object_2_classLit);
function $clinit_BatteryBaseEvent(){
  $clinit_BatteryBaseEvent = emptyMethod;
  $clinit_GwtEvent();
}

function BatteryBaseEvent(level, isPlugged){
  $clinit_BatteryBaseEvent();
  GwtEvent.call(this);
  this.$init_131();
  this.level_0 = level;
  this.isPlugged_0 = isPlugged;
}

defineClass(92, 17, {1:1});
_.$init_131 = function $init_131(){
}
;
_.isPlugged_0 = false;
_.level_0 = 0;
var Lcom_googlecode_gwtphonegap_client_event_BatteryBaseEvent_2_classLit = createForClass('com.googlecode.gwtphonegap.client.event', 'BatteryBaseEvent', 92, Lcom_google_gwt_event_shared_GwtEvent_2_classLit);
function $clinit_BatteryCriticalEvent(){
  $clinit_BatteryCriticalEvent = emptyMethod;
  $clinit_BatteryBaseEvent();
  TYPE_6 = new GwtEvent$Type;
}

function BatteryCriticalEvent(level, isPlugged){
  $clinit_BatteryCriticalEvent();
  BatteryBaseEvent.call(this, level, isPlugged);
  this.$init_132();
}

defineClass(226, 92, {1:1}, BatteryCriticalEvent);
_.$init_132 = function $init_132(){
}
;
_.dispatch_0 = function dispatch_12(handler){
  this.dispatch_7(castTo(handler, 671));
}
;
_.dispatch_7 = function dispatch_13(handler){
  handler.onBatteryCritical(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_7(){
  return TYPE_6;
}
;
var TYPE_6;
var Lcom_googlecode_gwtphonegap_client_event_BatteryCriticalEvent_2_classLit = createForClass('com.googlecode.gwtphonegap.client.event', 'BatteryCriticalEvent', 226, Lcom_googlecode_gwtphonegap_client_event_BatteryBaseEvent_2_classLit);
function $clinit_BatteryCriticalHandler(){
  $clinit_BatteryCriticalHandler = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_event_BatteryCriticalHandler_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.event', 'BatteryCriticalHandler');
function $clinit_BatteryLowEvent(){
  $clinit_BatteryLowEvent = emptyMethod;
  $clinit_BatteryBaseEvent();
  TYPE_7 = new GwtEvent$Type;
}

function BatteryLowEvent(level, isPlugged){
  $clinit_BatteryLowEvent();
  BatteryBaseEvent.call(this, level, isPlugged);
  this.$init_133();
}

defineClass(227, 92, {1:1}, BatteryLowEvent);
_.$init_133 = function $init_133(){
}
;
_.dispatch_0 = function dispatch_14(handler){
  this.dispatch_8(castTo(handler, 672));
}
;
_.dispatch_8 = function dispatch_15(handler){
  handler.onBatteryLow(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_8(){
  return TYPE_7;
}
;
var TYPE_7;
var Lcom_googlecode_gwtphonegap_client_event_BatteryLowEvent_2_classLit = createForClass('com.googlecode.gwtphonegap.client.event', 'BatteryLowEvent', 227, Lcom_googlecode_gwtphonegap_client_event_BatteryBaseEvent_2_classLit);
function $clinit_BatteryLowHandler(){
  $clinit_BatteryLowHandler = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_event_BatteryLowHandler_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.event', 'BatteryLowHandler');
function $clinit_BatteryStatusEvent(){
  $clinit_BatteryStatusEvent = emptyMethod;
  $clinit_BatteryBaseEvent();
  TYPE_8 = new GwtEvent$Type;
}

function BatteryStatusEvent(level, isPlugged){
  $clinit_BatteryStatusEvent();
  BatteryBaseEvent.call(this, level, isPlugged);
  this.$init_134();
}

defineClass(228, 92, {1:1}, BatteryStatusEvent);
_.$init_134 = function $init_134(){
}
;
_.dispatch_0 = function dispatch_16(handler){
  this.dispatch_9(castTo(handler, 673));
}
;
_.dispatch_9 = function dispatch_17(handler){
  handler.onBatteryStatus(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_9(){
  return TYPE_8;
}
;
var TYPE_8;
var Lcom_googlecode_gwtphonegap_client_event_BatteryStatusEvent_2_classLit = createForClass('com.googlecode.gwtphonegap.client.event', 'BatteryStatusEvent', 228, Lcom_googlecode_gwtphonegap_client_event_BatteryBaseEvent_2_classLit);
function $clinit_BatteryStatusHandler(){
  $clinit_BatteryStatusHandler = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_event_BatteryStatusHandler_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.event', 'BatteryStatusHandler');
function $clinit_EndCallButtonPressedEvent(){
  $clinit_EndCallButtonPressedEvent = emptyMethod;
  $clinit_GwtEvent();
  TYPE_9 = new GwtEvent$Type;
}

function EndCallButtonPressedEvent(){
  $clinit_EndCallButtonPressedEvent();
  GwtEvent.call(this);
  this.$init_135();
}

defineClass(230, 17, {1:1}, EndCallButtonPressedEvent);
_.$init_135 = function $init_135(){
}
;
_.dispatch_0 = function dispatch_18(handler){
  this.dispatch_10(castTo(handler, 675));
}
;
_.dispatch_10 = function dispatch_19(handler){
  handler.onEndCallButtonPressed(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_10(){
  return TYPE_9;
}
;
var TYPE_9;
var Lcom_googlecode_gwtphonegap_client_event_EndCallButtonPressedEvent_2_classLit = createForClass('com.googlecode.gwtphonegap.client.event', 'EndCallButtonPressedEvent', 230, Lcom_google_gwt_event_shared_GwtEvent_2_classLit);
function $clinit_EndCallButtonPressedHandler(){
  $clinit_EndCallButtonPressedHandler = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_event_EndCallButtonPressedHandler_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.event', 'EndCallButtonPressedHandler');
function $clinit_Event_1(){
  $clinit_Event_1 = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_event_Event_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.event', 'Event');
function $clinit_EventMock(){
  $clinit_EventMock = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_event_EventMock_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.event', 'EventMock');
function $clinit_EventBaseImpl(){
  $clinit_EventBaseImpl = emptyMethod;
  $clinit_Object();
}

function EventBaseImpl(){
  $clinit_EventBaseImpl();
  Object_0.call(this);
  this.$init_136();
  this.pgImpl = new EventBaseImpl$PhoneGapEventHandlerImpl(this);
}

defineClass(117, 1, {1:1});
_.$init_136 = function $init_136(){
}
;
_.fireBatteryCriticalEvent = function fireBatteryCriticalEvent(level, plugged){
  this.eventBus.fireEvent_0(new BatteryCriticalEvent(level, plugged));
}
;
_.fireBatteryLowEvent = function fireBatteryLowEvent(level, plugged){
  this.eventBus.fireEvent_0(new BatteryLowEvent(level, plugged));
}
;
_.fireBatteryStatusEvent = function fireBatteryStatusEvent(level, plugged){
  this.eventBus.fireEvent_0(new BatteryStatusEvent(level, plugged));
}
;
_.fireEndCallButtonPressedEvent = function fireEndCallButtonPressedEvent(){
  this.eventBus.fireEvent_0(new EndCallButtonPressedEvent);
}
;
_.fireMenuEvent = function fireMenuEvent(){
  this.eventBus.fireEvent_0(new MenuButtonPressedEvent);
}
;
_.fireOfflineEvent = function fireOfflineEvent(){
  this.eventBus.fireEvent_0(new OffLineEvent);
}
;
_.fireOnlineEvent = function fireOnlineEvent(){
  this.eventBus.fireEvent_0(new OnlineEvent);
}
;
_.firePauseEvent = function firePauseEvent(){
  this.eventBus.fireEvent_0(new PauseEvent);
}
;
_.fireResumeEvent = function fireResumeEvent(){
  this.eventBus.fireEvent_0(new ResumeEvent);
}
;
_.fireSearchEvent = function fireSearchEvent(){
  this.eventBus.fireEvent_0(new SearchButtonPressedEvent);
}
;
_.fireStartCallButtonPressedEvent = function fireStartCallButtonPressedEvent(){
  this.eventBus.fireEvent_0(new StartCallButtonPressedEvent);
}
;
_.fireVolumeButtonDownPressedEvent = function fireVolumeButtonDownPressedEvent(){
  this.eventBus.fireEvent_0(new VolumeDownButtonPressedEvent);
}
;
_.fireVolumeButtonUpPressedEvent = function fireVolumeButtonUpPressedEvent(){
  this.eventBus.fireEvent_0(new VolumeUpButtonPressedEvent);
}
;
_.getOffLineHandler = function getOffLineHandler(){
  return this.pgImpl;
}
;
_.getOnlineHandler = function getOnlineHandler(){
  return this.pgImpl;
}
;
_.setEventBus = function setEventBus_0(eventBus){
  this.eventBus = eventBus;
}
;
var Lcom_googlecode_gwtphonegap_client_event_EventBaseImpl_2_classLit = createForClass('com.googlecode.gwtphonegap.client.event', 'EventBaseImpl', 117, Ljava_lang_Object_2_classLit);
function $clinit_HasOfflineHandler(){
  $clinit_HasOfflineHandler = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_event_HasOfflineHandler_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.event', 'HasOfflineHandler');
function $clinit_HasOnlineHandler(){
  $clinit_HasOnlineHandler = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_event_HasOnlineHandler_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.event', 'HasOnlineHandler');
function $clinit_HasResumeHandlers(){
  $clinit_HasResumeHandlers = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_event_HasResumeHandlers_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.event', 'HasResumeHandlers');
function $clinit_HasPauseHandlers(){
  $clinit_HasPauseHandlers = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_event_HasPauseHandlers_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.event', 'HasPauseHandlers');
function $clinit_HasBackButtonPressedHandlers(){
  $clinit_HasBackButtonPressedHandlers = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_event_HasBackButtonPressedHandlers_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.event', 'HasBackButtonPressedHandlers');
function $clinit_HasSearchButtonHandlers(){
  $clinit_HasSearchButtonHandlers = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_event_HasSearchButtonHandlers_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.event', 'HasSearchButtonHandlers');
function $clinit_HasMenuButtonPressedHandlers(){
  $clinit_HasMenuButtonPressedHandlers = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_event_HasMenuButtonPressedHandlers_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.event', 'HasMenuButtonPressedHandlers');
function $clinit_HasBatteryCriticalHandler(){
  $clinit_HasBatteryCriticalHandler = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_event_HasBatteryCriticalHandler_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.event', 'HasBatteryCriticalHandler');
function $clinit_HasBatteryLowHandler(){
  $clinit_HasBatteryLowHandler = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_event_HasBatteryLowHandler_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.event', 'HasBatteryLowHandler');
function $clinit_HasBatteryStatusHandler(){
  $clinit_HasBatteryStatusHandler = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_event_HasBatteryStatusHandler_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.event', 'HasBatteryStatusHandler');
function $clinit_HasStartCallButtonHandler(){
  $clinit_HasStartCallButtonHandler = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_event_HasStartCallButtonHandler_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.event', 'HasStartCallButtonHandler');
function $clinit_HasEndCallButtonHandler(){
  $clinit_HasEndCallButtonHandler = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_event_HasEndCallButtonHandler_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.event', 'HasEndCallButtonHandler');
function $clinit_HasVolumeDownButtonPressedHandler(){
  $clinit_HasVolumeDownButtonPressedHandler = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_event_HasVolumeDownButtonPressedHandler_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.event', 'HasVolumeDownButtonPressedHandler');
function $clinit_HasVolumeUpButtonPressedHandler(){
  $clinit_HasVolumeUpButtonPressedHandler = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_event_HasVolumeUpButtonPressedHandler_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.event', 'HasVolumeUpButtonPressedHandler');
function $clinit_EventBaseImpl$PhoneGapEventHandlerImpl(){
  $clinit_EventBaseImpl$PhoneGapEventHandlerImpl = emptyMethod;
  $clinit_Object();
}

function EventBaseImpl$PhoneGapEventHandlerImpl(this$0){
  $clinit_EventBaseImpl$PhoneGapEventHandlerImpl();
  this.this$01 = this$0;
  Object_0.call(this);
  this.$init_137();
}

defineClass(217, 1, {1:1}, EventBaseImpl$PhoneGapEventHandlerImpl);
_.$init_137 = function $init_137(){
}
;
_.addOfflineHandler = function addOfflineHandler(handler){
  return this.this$01.eventBus.addHandler_0(getType_1(), handler);
}
;
_.addOnlineHandler = function addOnlineHandler(handler){
  return this.this$01.eventBus.addHandler_0(getType_2(), handler);
}
;
_.fireEvent = function fireEvent_3(event_0){
  this.this$01.eventBus.fireEvent_0(event_0);
}
;
var Lcom_googlecode_gwtphonegap_client_event_EventBaseImpl$PhoneGapEventHandlerImpl_2_classLit = createForClass('com.googlecode.gwtphonegap.client.event', 'EventBaseImpl/PhoneGapEventHandlerImpl', 217, Ljava_lang_Object_2_classLit);
function $clinit_MenuButtonPressedEvent(){
  $clinit_MenuButtonPressedEvent = emptyMethod;
  $clinit_GwtEvent();
  TYPE_10 = new GwtEvent$Type;
}

function MenuButtonPressedEvent(){
  $clinit_MenuButtonPressedEvent();
  GwtEvent.call(this);
  this.$init_138();
}

defineClass(225, 17, {1:1}, MenuButtonPressedEvent);
_.$init_138 = function $init_138(){
}
;
_.dispatch_0 = function dispatch_20(handler){
  this.dispatch_11(castTo(handler, 670));
}
;
_.dispatch_11 = function dispatch_21(handler){
  handler.onMenuButtonPressed(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_11(){
  return TYPE_10;
}
;
var TYPE_10;
var Lcom_googlecode_gwtphonegap_client_event_MenuButtonPressedEvent_2_classLit = createForClass('com.googlecode.gwtphonegap.client.event', 'MenuButtonPressedEvent', 225, Lcom_google_gwt_event_shared_GwtEvent_2_classLit);
function $clinit_MenuButtonPressedHandler(){
  $clinit_MenuButtonPressedHandler = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_event_MenuButtonPressedHandler_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.event', 'MenuButtonPressedHandler');
function $clinit_OffLineEvent(){
  $clinit_OffLineEvent = emptyMethod;
  $clinit_GwtEvent();
  TYPE_11 = new GwtEvent$Type;
}

function OffLineEvent(){
  $clinit_OffLineEvent();
  GwtEvent.call(this);
  this.$init_139();
}

function getType_1(){
  $clinit_OffLineEvent();
  return TYPE_11;
}

defineClass(220, 17, {1:1}, OffLineEvent);
_.$init_139 = function $init_139(){
}
;
_.dispatch_0 = function dispatch_22(handler){
  this.dispatch_12(castTo(handler, 325));
}
;
_.dispatch_12 = function dispatch_23(handler){
  handler.onOffLine(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_12(){
  return TYPE_11;
}
;
var TYPE_11;
var Lcom_googlecode_gwtphonegap_client_event_OffLineEvent_2_classLit = createForClass('com.googlecode.gwtphonegap.client.event', 'OffLineEvent', 220, Lcom_google_gwt_event_shared_GwtEvent_2_classLit);
function $clinit_OffLineHandler(){
  $clinit_OffLineHandler = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_event_OffLineHandler_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.event', 'OffLineHandler');
function $clinit_OnlineEvent(){
  $clinit_OnlineEvent = emptyMethod;
  $clinit_GwtEvent();
  TYPE_12 = new GwtEvent$Type;
}

function OnlineEvent(){
  $clinit_OnlineEvent();
  GwtEvent.call(this);
  this.$init_140();
}

function getType_2(){
  $clinit_OnlineEvent();
  return TYPE_12;
}

defineClass(221, 17, {1:1}, OnlineEvent);
_.$init_140 = function $init_140(){
}
;
_.dispatch_0 = function dispatch_24(handler){
  this.dispatch_13(castTo(handler, 326));
}
;
_.dispatch_13 = function dispatch_25(handler){
  handler.onOnlineEvent(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_13(){
  return TYPE_12;
}
;
var TYPE_12;
var Lcom_googlecode_gwtphonegap_client_event_OnlineEvent_2_classLit = createForClass('com.googlecode.gwtphonegap.client.event', 'OnlineEvent', 221, Lcom_google_gwt_event_shared_GwtEvent_2_classLit);
function $clinit_OnlineHandler(){
  $clinit_OnlineHandler = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_event_OnlineHandler_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.event', 'OnlineHandler');
function $clinit_PauseEvent(){
  $clinit_PauseEvent = emptyMethod;
  $clinit_GwtEvent();
  TYPE_13 = new GwtEvent$Type;
}

function PauseEvent(){
  $clinit_PauseEvent();
  GwtEvent.call(this);
  this.$init_141();
}

defineClass(223, 17, {1:1}, PauseEvent);
_.$init_141 = function $init_141(){
}
;
_.dispatch_0 = function dispatch_26(handler){
  this.dispatch_14(castTo(handler, 668));
}
;
_.dispatch_14 = function dispatch_27(handler){
  handler.onPause(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_14(){
  return TYPE_13;
}
;
var TYPE_13;
var Lcom_googlecode_gwtphonegap_client_event_PauseEvent_2_classLit = createForClass('com.googlecode.gwtphonegap.client.event', 'PauseEvent', 223, Lcom_google_gwt_event_shared_GwtEvent_2_classLit);
function $clinit_PauseHandler(){
  $clinit_PauseHandler = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_event_PauseHandler_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.event', 'PauseHandler');
function $clinit_ResumeEvent(){
  $clinit_ResumeEvent = emptyMethod;
  $clinit_GwtEvent();
  TYPE_14 = new GwtEvent$Type;
}

function ResumeEvent(){
  $clinit_ResumeEvent();
  GwtEvent.call(this);
  this.$init_142();
}

defineClass(222, 17, {1:1}, ResumeEvent);
_.$init_142 = function $init_142(){
}
;
_.dispatch_0 = function dispatch_28(handler){
  this.dispatch_15(castTo(handler, 667));
}
;
_.dispatch_15 = function dispatch_29(handler){
  handler.onResumeEvent(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_15(){
  return TYPE_14;
}
;
var TYPE_14;
var Lcom_googlecode_gwtphonegap_client_event_ResumeEvent_2_classLit = createForClass('com.googlecode.gwtphonegap.client.event', 'ResumeEvent', 222, Lcom_google_gwt_event_shared_GwtEvent_2_classLit);
function $clinit_ResumeHandler(){
  $clinit_ResumeHandler = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_event_ResumeHandler_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.event', 'ResumeHandler');
function $clinit_SearchButtonPressedEvent(){
  $clinit_SearchButtonPressedEvent = emptyMethod;
  $clinit_GwtEvent();
  TYPE_15 = new GwtEvent$Type;
}

function SearchButtonPressedEvent(){
  $clinit_SearchButtonPressedEvent();
  GwtEvent.call(this);
  this.$init_143();
}

defineClass(224, 17, {1:1}, SearchButtonPressedEvent);
_.$init_143 = function $init_143(){
}
;
_.dispatch_0 = function dispatch_30(handler){
  this.dispatch_16(castTo(handler, 669));
}
;
_.dispatch_16 = function dispatch_31(handler){
  handler.onSearchButtonPressed(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_16(){
  return TYPE_15;
}
;
var TYPE_15;
var Lcom_googlecode_gwtphonegap_client_event_SearchButtonPressedEvent_2_classLit = createForClass('com.googlecode.gwtphonegap.client.event', 'SearchButtonPressedEvent', 224, Lcom_google_gwt_event_shared_GwtEvent_2_classLit);
function $clinit_SearchButtonPressedHandler(){
  $clinit_SearchButtonPressedHandler = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_event_SearchButtonPressedHandler_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.event', 'SearchButtonPressedHandler');
function $clinit_StartCallButtonPressedEvent(){
  $clinit_StartCallButtonPressedEvent = emptyMethod;
  $clinit_GwtEvent();
  TYPE_16 = new GwtEvent$Type;
}

function StartCallButtonPressedEvent(){
  $clinit_StartCallButtonPressedEvent();
  GwtEvent.call(this);
  this.$init_144();
}

defineClass(229, 17, {1:1}, StartCallButtonPressedEvent);
_.$init_144 = function $init_144(){
}
;
_.dispatch_0 = function dispatch_32(handler){
  this.dispatch_17(castTo(handler, 674));
}
;
_.dispatch_17 = function dispatch_33(handler){
  handler.onStartCallButtonPressed(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_17(){
  return TYPE_16;
}
;
var TYPE_16;
var Lcom_googlecode_gwtphonegap_client_event_StartCallButtonPressedEvent_2_classLit = createForClass('com.googlecode.gwtphonegap.client.event', 'StartCallButtonPressedEvent', 229, Lcom_google_gwt_event_shared_GwtEvent_2_classLit);
function $clinit_StartCallButtonPressedHandler(){
  $clinit_StartCallButtonPressedHandler = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_event_StartCallButtonPressedHandler_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.event', 'StartCallButtonPressedHandler');
function $clinit_VolumeDownButtonPressedEvent(){
  $clinit_VolumeDownButtonPressedEvent = emptyMethod;
  $clinit_GwtEvent();
  TYPE_17 = new GwtEvent$Type;
}

function VolumeDownButtonPressedEvent(){
  $clinit_VolumeDownButtonPressedEvent();
  GwtEvent.call(this);
  this.$init_145();
}

defineClass(231, 17, {1:1}, VolumeDownButtonPressedEvent);
_.$init_145 = function $init_145(){
}
;
_.dispatch_0 = function dispatch_34(handler){
  this.dispatch_18(castTo(handler, 676));
}
;
_.dispatch_18 = function dispatch_35(handler){
  handler.onVolumeDownButtonPressed(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_18(){
  return TYPE_17;
}
;
var TYPE_17;
var Lcom_googlecode_gwtphonegap_client_event_VolumeDownButtonPressedEvent_2_classLit = createForClass('com.googlecode.gwtphonegap.client.event', 'VolumeDownButtonPressedEvent', 231, Lcom_google_gwt_event_shared_GwtEvent_2_classLit);
function $clinit_VolumeDownButtonPressedHandler(){
  $clinit_VolumeDownButtonPressedHandler = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_event_VolumeDownButtonPressedHandler_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.event', 'VolumeDownButtonPressedHandler');
function $clinit_VolumeUpButtonPressedEvent(){
  $clinit_VolumeUpButtonPressedEvent = emptyMethod;
  $clinit_GwtEvent();
  TYPE_18 = new GwtEvent$Type;
}

function VolumeUpButtonPressedEvent(){
  $clinit_VolumeUpButtonPressedEvent();
  GwtEvent.call(this);
  this.$init_146();
}

defineClass(232, 17, {1:1}, VolumeUpButtonPressedEvent);
_.$init_146 = function $init_146(){
}
;
_.dispatch_0 = function dispatch_36(handler){
  this.dispatch_19(castTo(handler, 677));
}
;
_.dispatch_19 = function dispatch_37(handler){
  handler.onVolumeUpButtonPressed(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_19(){
  return TYPE_18;
}
;
var TYPE_18;
var Lcom_googlecode_gwtphonegap_client_event_VolumeUpButtonPressedEvent_2_classLit = createForClass('com.googlecode.gwtphonegap.client.event', 'VolumeUpButtonPressedEvent', 232, Lcom_google_gwt_event_shared_GwtEvent_2_classLit);
function $clinit_VolumeUpButtonPressedHandler(){
  $clinit_VolumeUpButtonPressedHandler = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_event_VolumeUpButtonPressedHandler_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.event', 'VolumeUpButtonPressedHandler');
function $clinit_EventBrowserImpl(){
  $clinit_EventBrowserImpl = emptyMethod;
  $clinit_EventBaseImpl();
}

function EventBrowserImpl(){
  EventBaseImpl.call(this);
  this.$init_147();
}

defineClass(445, 117, {1:1});
_.$init_147 = function $init_147(){
}
;
_.setupEvents = function setupEvents(){
}
;
var Lcom_googlecode_gwtphonegap_client_event_browser_EventBrowserImpl_2_classLit = createForClass('com.googlecode.gwtphonegap.client.event.browser', 'EventBrowserImpl', 445, Lcom_googlecode_gwtphonegap_client_event_EventBaseImpl_2_classLit);
function $clinit_EventJsImpl(){
  $clinit_EventJsImpl = emptyMethod;
  $clinit_EventBaseImpl();
}

function EventJsImpl(){
  $clinit_EventJsImpl();
  EventBaseImpl.call(this);
  this.$init_148();
  this.setupEvents();
}

defineClass(218, 117, {655:1, 1:1}, EventJsImpl);
_.$init_148 = function $init_148(){
}
;
_.setupEvents = function setupEvents_0(){
  var that = this;
  var off = function(){
    that.fireOfflineEvent();
  }
  ;
  $doc.addEventListener('offline', $entry(off), false);
  var on = function(){
    that.fireOnlineEvent();
  }
  ;
  $doc.addEventListener('online', $entry(on), false);
  var resume = function(){
    that.fireResumeEvent();
  }
  ;
  $doc.addEventListener('resume', $entry(resume), false);
  var pause = function(){
    that.firePauseEvent();
  }
  ;
  $doc.addEventListener('pause', $entry(pause), false);
  var search = function(){
    that.fireSearchEvent();
  }
  ;
  $doc.addEventListener('searchbutton', $entry(search), false);
  var menu = function(){
    that.fireMenuEvent();
  }
  ;
  $doc.addEventListener('menubutton', $entry(menu), false);
  var bce = function(info){
    that.fireBatteryCriticalEvent(info.level, info.isPlugged);
  }
  ;
  $wnd.addEventListener('batterycritical', $entry(bce), false);
  var ble = function(info){
    that.fireBatteryLowEvent(info.level, info.isPlugged);
  }
  ;
  $wnd.addEventListener('batterylow', $entry(ble), false);
  var bse = function(info){
    that.fireBatteryStatusEvent(info.level, info.isPlugged);
  }
  ;
  $wnd.addEventListener('batterystatus', $entry(bse), false);
  var sce = function(){
    that.fireStartCallButtonPressedEvent();
  }
  ;
  $doc.addEventListener('startcallbutton', $entry(sce), false);
  var ece = function(){
    that.fireEndCallButtonPressedEvent();
  }
  ;
  $doc.addEventListener('endcallbutton', $entry(ece), false);
  var vdbe = function(){
    that.fireVolumeButtonDownPressedEvent();
  }
  ;
  $doc.addEventListener('volumedownbutton', $entry(vdbe), false);
  var vube = function(){
    that.fireVolumeButtonUpPressedEvent();
  }
  ;
  $doc.addEventListener('volumeupbutton', $entry(vube), false);
}
;
var Lcom_googlecode_gwtphonegap_client_event_js_EventJsImpl_2_classLit = createForClass('com.googlecode.gwtphonegap.client.event.js', 'EventJsImpl', 218, Lcom_googlecode_gwtphonegap_client_event_EventBaseImpl_2_classLit);
function $clinit_EntryBase(){
  $clinit_EntryBase = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_file_EntryBase_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.file', 'EntryBase');
function $clinit_FileError(){
  $clinit_FileError = emptyMethod;
}

var ABORT_ERR = 3, ENCODING_ERR = 5, INVALID_MODIFICATION_ERR = 9, INVALID_STATE_ERR = 7, NOT_FOUND_ERR = 1, NOT_READABLE_ERR = 4, NO_MODIFICATION_ALLOWED_ERR = 6, PATH_EXISTS_ERR = 12, QUOTA_EXCEEDED_ERR = 10, SECURITY_ERR = 2, SYNTAX_ERR = 8, TYPE_MISMATCH_ERR = 11;
var Lcom_googlecode_gwtphonegap_client_file_FileError_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.file', 'FileError');
function $clinit_FileObject(){
  $clinit_FileObject = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_file_FileObject_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.file', 'FileObject');
function $clinit_FileReader(){
  $clinit_FileReader = emptyMethod;
}

var DONE = 2, EMPTY = 0, LOADING = 1;
var Lcom_googlecode_gwtphonegap_client_file_FileReader_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.file', 'FileReader');
function $clinit_FileTransfer(){
  $clinit_FileTransfer = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_file_FileTransfer_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.file', 'FileTransfer');
function $clinit_FileTransferError(){
  $clinit_FileTransferError = emptyMethod;
}

var CONNECTION_ERR = 3, FILE_NOT_FOUND_ERR = 1, INVALID_URL_ERR = 2;
var Lcom_googlecode_gwtphonegap_client_file_FileTransferError_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.file', 'FileTransferError');
function $clinit_FileTransferProgressEvent(){
  $clinit_FileTransferProgressEvent = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_file_FileTransferProgressEvent_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.file', 'FileTransferProgressEvent');
function $clinit_FileUploadResult(){
  $clinit_FileUploadResult = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_file_FileUploadResult_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.file', 'FileUploadResult');
function $clinit_Metadata(){
  $clinit_Metadata = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_file_Metadata_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.file', 'Metadata');
function $clinit_EntryBaseJsImpl(){
  $clinit_EntryBaseJsImpl = emptyMethod;
  $clinit_JavaScriptObject();
}

function $clinit_FileErrorJsImpl(){
  $clinit_FileErrorJsImpl = emptyMethod;
  $clinit_JavaScriptObject();
}

function $clinit_FileObjectJsImpl(){
  $clinit_FileObjectJsImpl = emptyMethod;
  $clinit_JavaScriptObject();
}

function $getName_1(this$static){
  return this$static.name;
}

function $getType_6(this$static){
  return this$static.type;
}

function $clinit_FileReaderJsImpl(){
  $clinit_FileReaderJsImpl = emptyMethod;
  $clinit_JavaScriptObject();
}

function $clinit_FileTransferErrorJsImpl(){
  $clinit_FileTransferErrorJsImpl = emptyMethod;
  $clinit_JavaScriptObject();
}

function $clinit_FileTransferJsImpl(){
  $clinit_FileTransferJsImpl = emptyMethod;
  $clinit_JavaScriptObject();
}

function $clinit_FileTransferProgressEventJsImpl(){
  $clinit_FileTransferProgressEventJsImpl = emptyMethod;
  $clinit_JavaScriptObject();
}

function $clinit_FileUploadResultJsImpl(){
  $clinit_FileUploadResultJsImpl = emptyMethod;
  $clinit_JavaScriptObject();
}

function $clinit_MetaDataJsImpl(){
  $clinit_MetaDataJsImpl = emptyMethod;
  $clinit_JavaScriptObject();
}

function $clinit_Coordinates(){
  $clinit_Coordinates = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_geolocation_Coordinates_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.geolocation', 'Coordinates');
function $clinit_Position_0(){
  $clinit_Position_0 = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_geolocation_Position_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.geolocation', 'Position');
function $clinit_PositionError(){
  $clinit_PositionError = emptyMethod;
}

var PERMISSION_DENIED = 1, POSITION_UNAVAILABLE = 2, TIMEOUT = 3;
var Lcom_googlecode_gwtphonegap_client_geolocation_PositionError_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.geolocation', 'PositionError');
function $clinit_CoordinatesJsImpl(){
  $clinit_CoordinatesJsImpl = emptyMethod;
  $clinit_JavaScriptObject();
}

function $clinit_PositionErrorJSOImpl(){
  $clinit_PositionErrorJSOImpl = emptyMethod;
  $clinit_JavaScriptObject();
}

function $getMessage(this$static){
  return this$static.message;
}

function $clinit_PositionJsImpl(){
  $clinit_PositionJsImpl = emptyMethod;
  $clinit_JavaScriptObject();
}

function $clinit_CNumberPattern(){
  $clinit_CNumberPattern = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_globalization_CNumberPattern_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.globalization', 'CNumberPattern');
function $clinit_CurrencyPattern(){
  $clinit_CurrencyPattern = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_globalization_CurrencyPattern_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.globalization', 'CurrencyPattern');
function $clinit_DateFields(){
  $clinit_DateFields = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_globalization_DateFields_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.globalization', 'DateFields');
function $clinit_DatePattern(){
  $clinit_DatePattern = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_globalization_DatePattern_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.globalization', 'DatePattern');
function $clinit_DayLightSavings(){
  $clinit_DayLightSavings = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_globalization_DayLightSavings_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.globalization', 'DayLightSavings');
function $clinit_GlobalizationArrayValue(){
  $clinit_GlobalizationArrayValue = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_globalization_GlobalizationArrayValue_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.globalization', 'GlobalizationArrayValue');
function $clinit_GlobalizationDoubleValue(){
  $clinit_GlobalizationDoubleValue = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_globalization_GlobalizationDoubleValue_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.globalization', 'GlobalizationDoubleValue');
function $clinit_GlobalizationError(){
  $clinit_GlobalizationError = emptyMethod;
}

var FORMATTING_ERROR = 1, PARSING_ERROR = 2, PATTERN_ERROR = 3, UNKNOWN_ERROR = 0;
var Lcom_googlecode_gwtphonegap_client_globalization_GlobalizationError_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.globalization', 'GlobalizationError');
function $clinit_GlobalizationIntValue(){
  $clinit_GlobalizationIntValue = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_globalization_GlobalizationIntValue_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.globalization', 'GlobalizationIntValue');
function $clinit_GlobalizationStringValue(){
  $clinit_GlobalizationStringValue = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_globalization_GlobalizationStringValue_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.globalization', 'GlobalizationStringValue');
function $clinit_CNumberPatternJsImpl(){
  $clinit_CNumberPatternJsImpl = emptyMethod;
  $clinit_JavaScriptObject();
}

function $clinit_CurrencyPatternJsImpl(){
  $clinit_CurrencyPatternJsImpl = emptyMethod;
  $clinit_JavaScriptObject();
}

function $clinit_DateFieldsJsImpl(){
  $clinit_DateFieldsJsImpl = emptyMethod;
  $clinit_JavaScriptObject();
}

function $getDay_0(this$static){
  return this$static.day;
}

function $getMonth_0(this$static){
  return this$static.month;
}

function $clinit_DatePatternJsImpl(){
  $clinit_DatePatternJsImpl = emptyMethod;
  $clinit_JavaScriptObject();
}

function $clinit_DayLightSavingsJsImpl(){
  $clinit_DayLightSavingsJsImpl = emptyMethod;
  $clinit_JavaScriptObject();
}

function $clinit_GlobalizationArrayValueJsImpl(){
  $clinit_GlobalizationArrayValueJsImpl = emptyMethod;
  $clinit_JavaScriptObject();
}

function $clinit_GlobalizationDoubleValueJsImpl(){
  $clinit_GlobalizationDoubleValueJsImpl = emptyMethod;
  $clinit_JavaScriptObject();
}

function $clinit_GlobalizationErrorJsImpl(){
  $clinit_GlobalizationErrorJsImpl = emptyMethod;
  $clinit_JavaScriptObject();
}

function $getMessage_0(this$static){
  return this$static.message;
}

function $clinit_GlobalizationIntValueJsImpl(){
  $clinit_GlobalizationIntValueJsImpl = emptyMethod;
  $clinit_JavaScriptObject();
}

function $clinit_GlobalizationStringValueJsImpl(){
  $clinit_GlobalizationStringValueJsImpl = emptyMethod;
  $clinit_JavaScriptObject();
}

function $clinit_PhoneGapLog(){
  $clinit_PhoneGapLog = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_log_PhoneGapLog_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.log', 'PhoneGapLog');
function $clinit_PhoneGapLogStandardImpl(){
  $clinit_PhoneGapLogStandardImpl = emptyMethod;
  $clinit_Object();
  rootLogger_0 = getLogger_0('');
}

function PhoneGapLogStandardImpl(){
  $clinit_PhoneGapLogStandardImpl();
  var consoleHandler, remoteHandler;
  Object_0.call(this);
  this.$init_149();
  consoleHandler = castTo(new NullLogHandler, 23);
  if (!instanceOf(consoleHandler, 62)) {
    rootLogger_0.addHandler_4(consoleHandler);
  }
  remoteHandler = castTo(new NullLogHandler, 23);
  if (!instanceOf(remoteHandler, 62)) {
    rootLogger_0.addHandler_4(remoteHandler);
  }
  if (instanceOf(remoteHandler, 90)) {
    this.remoteHandler = castTo(remoteHandler, 90);
  }
}

defineClass(212, 1, {1:1}, PhoneGapLogStandardImpl);
_.$init_149 = function $init_149(){
}
;
_.setClientId = function setClientId(uuid){
  if (isNotNull(this.remoteHandler))
    this.remoteHandler.setClientId(uuid);
}
;
var rootLogger_0;
var Lcom_googlecode_gwtphonegap_client_log_PhoneGapLogStandardImpl_2_classLit = createForClass('com.googlecode.gwtphonegap.client.log', 'PhoneGapLogStandardImpl', 212, Ljava_lang_Object_2_classLit);
function $clinit_PhoneGapRemoteBatchLogHandler(){
  $clinit_PhoneGapRemoteBatchLogHandler = emptyMethod;
}

defineClass(90, 446, {90:1, 1:1, 23:1});
_.setClientId = function setClientId_0(uuid){
  this.clientId = uuid;
}
;
var Lcom_googlecode_gwtphonegap_client_log_PhoneGapRemoteBatchLogHandler_2_classLit = createForClass('com.googlecode.gwtphonegap.client.log', 'PhoneGapRemoteBatchLogHandler', 90, Lcom_google_gwt_logging_client_RemoteLogHandlerBase_2_classLit);
function $clinit_PhoneGapRemoteBatchLogHandler$1(){
  $clinit_PhoneGapRemoteBatchLogHandler$1 = emptyMethod;
}

defineClass(447, 1, {1:1});
var Lcom_googlecode_gwtphonegap_client_log_PhoneGapRemoteBatchLogHandler$1_2_classLit = createForClass('com.googlecode.gwtphonegap.client.log', 'PhoneGapRemoteBatchLogHandler/1', 447, Ljava_lang_Object_2_classLit);
function $clinit_Media(){
  $clinit_Media = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_media_Media_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.media', 'Media');
function $clinit_MediaError(){
  $clinit_MediaError = emptyMethod;
}

var MEDIA_ERR_ABORTED = 1, MEDIA_ERR_DECODE = 3, MEDIA_ERR_NETWORK = 2, MEDIA_ERR_NONE_ACTIVE = 0, MEDIA_ERR_NONE_SUPPORTED = 4, MEDIA_ERR_SRC_NOT_SUPPORTED = 4;
var Lcom_googlecode_gwtphonegap_client_media_MediaError_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.media', 'MediaError');
function $clinit_MediaErrorJsImpl(){
  $clinit_MediaErrorJsImpl = emptyMethod;
  $clinit_JavaScriptObject();
}

function $clinit_MediaJsImpl(){
  $clinit_MediaJsImpl = emptyMethod;
  $clinit_JavaScriptObject();
}

function $clinit_PromptResults(){
  $clinit_PromptResults = emptyMethod;
}

var Lcom_googlecode_gwtphonegap_client_notification_PromptResults_2_classLit = createForInterface('com.googlecode.gwtphonegap.client.notification', 'PromptResults');
function $clinit_PromptResultsJsImpl(){
  $clinit_PromptResultsJsImpl = emptyMethod;
  $clinit_JavaScriptObject();
}

function $clinit_SampleData(){
  $clinit_SampleData = emptyMethod;
  $clinit_Object();
}

function getLabWorklists(){
  $clinit_SampleData();
  console.log('getLabWorklists()');
  return [{'id':1, 'avatar':'images/defaultFemalePatientPhoto-mobile.png', 'uniqueId':'PatientResultHeader1723997', 'patEntityId':1723997, 'patEntityType':'PatientResultHeader', 'patId':530702, 'patName':'release2/8, Test ', 'patGenderAgeDobMrn':'F/38 - 12/07/1977 - 767888', 'patPhone':null, 'dateOfService':'1423422000000', 'dateOfEntry':'1423388577707', 'reviewStatus':'PENDING', 'resultName':'DOG DANDER (E5) IGE', 'resultFlag':'HIGH', 'reviewCategory':'Lab', 'transferred':false, 'patientDisplayString':'release2/8, Test  (F/38 - 12/07/1977 - 767888)', 'beanErrors':null}, {'id':2, 'avatar':'images/defaultFemalePatientPhoto-mobile.png', 'uniqueId':'PatientResultHeader2034336', 'patEntityId':2034336, 'patEntityType':'PatientResultHeader', 'patId':625179, 'patName':'Patch3/22, Test ', 'patGenderAgeDobMrn':'F/36 - 12/01/1979 - 65656', 'patPhone':null, 'dateOfService':'1427010203000', 'dateOfEntry':'1427010220214', 'reviewStatus':'PENDING', 'resultName':'Panel3/22', 'resultFlag':'NORMAL', 'reviewCategory':'Lab', 'transferred':false, 'patientDisplayString':'Patch3/22, Test  (F/36 - 12/01/1979 - 65656)', 'beanErrors':null}, {'id':3, 'avatar':'images/defaultFemalePatientPhoto-mobile.png', 'uniqueId':'PatientResultHeader2175385', 'patEntityId':2175385, 'patEntityType':'PatientResultHeader', 'patId':665862, 'patName':'ZZJones, TestMa1 ', 'patGenderAgeDobMrn':'F/50 - 10/19/1965 - zztestma1', 'patPhone':null, 'dateOfService':'1431445271000', 'dateOfEntry':'1431445324070', 'reviewStatus':'PENDING', 'resultName':'INR', 'resultFlag':'NONE', 'reviewCategory':'Lab', 'transferred':false, 'patientDisplayString':'ZZJones, TestMa1  (F/50 - 10/19/1965 - zztestma1)', 'beanErrors':null}, {'id':4, 'avatar':'images/defaultFemalePatientPhoto-mobile.png', 'uniqueId':'PatientResultHeader2166546', 'patEntityId':2166546, 'patEntityType':'PatientResultHeader', 'patId':661664, 'patName':'pentium, pentium q.', 'patGenderAgeDobMrn':'F/103 - 12/12/1912 - pentium333', 'patPhone':null, 'dateOfService':'1431030311000', 'dateOfEntry':'1431030348618', 'reviewStatus':'PENDING', 'resultName':'CBC w/ Retic', 'resultFlag':'NONE', 'reviewCategory':'Lab', 'transferred':false, 'patientDisplayString':'pentium, pentium q. (F/103 - 12/12/1912 - pentium333)', 'beanErrors':null}, {'id':5, 'avatar':'images/defaultMalePatientPhoto-mobile.png', 'uniqueId':'PatientResultHeader2166465', 'patEntityId':2166465, 'patEntityType':'PatientResultHeader', 'patId':661630, 'patName':'wait, wait q.', 'patGenderAgeDobMrn':'M/103 - 12/12/1912 - TestingAgagin333', 'patPhone':null, 'dateOfService':'1431029485000', 'dateOfEntry':'1431029517016', 'reviewStatus':'PENDING', 'resultName':'CBC w/ Retic', 'resultFlag':'NONE', 'reviewCategory':'Lab', 'transferred':false, 'patientDisplayString':'wait, wait q. (M/103 - 12/12/1912 - TestingAgagin333)', 'beanErrors':null}, {'id':6, 'avatar':'images/defaultMalePatientPhoto-mobile.png', 'uniqueId':'PatientResultHeader2166401', 'patEntityId':2166401, 'patEntityType':'PatientResultHeader', 'patId':661630, 'patName':'wait, wait q.', 'patGenderAgeDobMrn':'M/103 - 12/12/1912 - TestingAgagin333', 'patPhone':null, 'dateOfService':'1431028823000', 'dateOfEntry':'1431028852479', 'reviewStatus':'PENDING', 'resultName':'CBC w/ Retic', 'resultFlag':'NONE', 'reviewCategory':'Lab', 'transferred':false, 'patientDisplayString':'wait, wait q. (M/103 - 12/12/1912 - TestingAgagin333)', 'beanErrors':null}, {'id':1, 'avatar':'images/defaultFemalePatientPhoto-mobile.png', 'uniqueId':'PatientResultHeader1723997', 'patEntityId':1723997, 'patEntityType':'PatientResultHeader', 'patId':530702, 'patName':'release2/8, Test ', 'patGenderAgeDobMrn':'F/38 - 12/07/1977 - 767888', 'patPhone':null, 'dateOfService':'1423422000000', 'dateOfEntry':'1423388577707', 'reviewStatus':'PENDING', 'resultName':'DOG DANDER (E5) IGE', 'resultFlag':'HIGH', 'reviewCategory':'Lab', 'transferred':false, 'patientDisplayString':'release2/8, Test  (F/38 - 12/07/1977 - 767888)', 'beanErrors':null}, {'id':2, 'avatar':'images/defaultFemalePatientPhoto-mobile.png', 'uniqueId':'PatientResultHeader2034336', 'patEntityId':2034336, 'patEntityType':'PatientResultHeader', 'patId':625179, 'patName':'Patch3/22, Test ', 'patGenderAgeDobMrn':'F/36 - 12/01/1979 - 65656', 'patPhone':null, 'dateOfService':'1427010203000', 'dateOfEntry':'1427010220214', 'reviewStatus':'PENDING', 'resultName':'Panel3/22', 'resultFlag':'NORMAL', 'reviewCategory':'Lab', 'transferred':false, 'patientDisplayString':'Patch3/22, Test  (F/36 - 12/01/1979 - 65656)', 'beanErrors':null}, {'id':3, 'avatar':'images/defaultFemalePatientPhoto-mobile.png', 'uniqueId':'PatientResultHeader2175385', 'patEntityId':2175385, 'patEntityType':'PatientResultHeader', 'patId':665862, 'patName':'ZZJones, TestMa1 ', 'patGenderAgeDobMrn':'F/50 - 10/19/1965 - zztestma1', 'patPhone':null, 'dateOfService':'1431445271000', 'dateOfEntry':'1431445324070', 'reviewStatus':'PENDING', 'resultName':'INR', 'resultFlag':'NONE', 'reviewCategory':'Lab', 'transferred':false, 'patientDisplayString':'ZZJones, TestMa1  (F/50 - 10/19/1965 - zztestma1)', 'beanErrors':null}, {'id':4, 'avatar':'images/defaultFemalePatientPhoto-mobile.png', 'uniqueId':'PatientResultHeader2166546', 'patEntityId':2166546, 'patEntityType':'PatientResultHeader', 'patId':661664, 'patName':'pentium, pentium q.', 'patGenderAgeDobMrn':'F/103 - 12/12/1912 - pentium333', 'patPhone':null, 'dateOfService':'1431030311000', 'dateOfEntry':'1431030348618', 'reviewStatus':'PENDING', 'resultName':'CBC w/ Retic', 'resultFlag':'NONE', 'reviewCategory':'Lab', 'transferred':false, 'patientDisplayString':'pentium, pentium q. (F/103 - 12/12/1912 - pentium333)', 'beanErrors':null}, {'id':5, 'avatar':'images/defaultMalePatientPhoto-mobile.png', 'uniqueId':'PatientResultHeader2166465', 'patEntityId':2166465, 'patEntityType':'PatientResultHeader', 'patId':661630, 'patName':'wait, wait q.', 'patGenderAgeDobMrn':'M/103 - 12/12/1912 - TestingAgagin333', 'patPhone':null, 'dateOfService':'1431029485000', 'dateOfEntry':'1431029517016', 'reviewStatus':'PENDING', 'resultName':'CBC w/ Retic', 'resultFlag':'NONE', 'reviewCategory':'Lab', 'transferred':false, 'patientDisplayString':'wait, wait q. (M/103 - 12/12/1912 - TestingAgagin333)', 'beanErrors':null}, {'id':6, 'avatar':'images/defaultMalePatientPhoto-mobile.png', 'uniqueId':'PatientResultHeader2166401', 'patEntityId':2166401, 'patEntityType':'PatientResultHeader', 'patId':661630, 'patName':'wait, wait q.', 'patGenderAgeDobMrn':'M/103 - 12/12/1912 - TestingAgagin333', 'patPhone':null, 'dateOfService':'1431028823000', 'dateOfEntry':'1431028852479', 'reviewStatus':'PENDING', 'resultName':'CBC w/ Retic', 'resultFlag':'NONE', 'reviewCategory':'Lab', 'transferred':false, 'patientDisplayString':'wait, wait q. (M/103 - 12/12/1912 - TestingAgagin333)', 'beanErrors':null}, {'id':1, 'avatar':'images/defaultFemalePatientPhoto-mobile.png', 'uniqueId':'PatientResultHeader1723997', 'patEntityId':1723997, 'patEntityType':'PatientResultHeader', 'patId':530702, 'patName':'release2/8, Test ', 'patGenderAgeDobMrn':'F/38 - 12/07/1977 - 767888', 'patPhone':null, 'dateOfService':'1423422000000', 'dateOfEntry':'1423388577707', 'reviewStatus':'PENDING', 'resultName':'DOG DANDER (E5) IGE', 'resultFlag':'HIGH', 'reviewCategory':'Lab', 'transferred':false, 'patientDisplayString':'release2/8, Test  (F/38 - 12/07/1977 - 767888)', 'beanErrors':null}, {'id':2, 'avatar':'images/defaultFemalePatientPhoto-mobile.png', 'uniqueId':'PatientResultHeader2034336', 'patEntityId':2034336, 'patEntityType':'PatientResultHeader', 'patId':625179, 'patName':'Patch3/22, Test ', 'patGenderAgeDobMrn':'F/36 - 12/01/1979 - 65656', 'patPhone':null, 'dateOfService':'1427010203000', 'dateOfEntry':'1427010220214', 'reviewStatus':'PENDING', 'resultName':'Panel3/22', 'resultFlag':'NORMAL', 'reviewCategory':'Lab', 'transferred':false, 'patientDisplayString':'Patch3/22, Test  (F/36 - 12/01/1979 - 65656)', 'beanErrors':null}, {'id':3, 'avatar':'images/defaultFemalePatientPhoto-mobile.png', 'uniqueId':'PatientResultHeader2175385', 'patEntityId':2175385, 'patEntityType':'PatientResultHeader', 'patId':665862, 'patName':'ZZJones, TestMa1 ', 'patGenderAgeDobMrn':'F/50 - 10/19/1965 - zztestma1', 'patPhone':null, 'dateOfService':'1431445271000', 'dateOfEntry':'1431445324070', 'reviewStatus':'PENDING', 'resultName':'INR', 'resultFlag':'NONE', 'reviewCategory':'Lab', 'transferred':false, 'patientDisplayString':'ZZJones, TestMa1  (F/50 - 10/19/1965 - zztestma1)', 'beanErrors':null}, {'id':4, 'avatar':'images/defaultFemalePatientPhoto-mobile.png', 'uniqueId':'PatientResultHeader2166546', 'patEntityId':2166546, 'patEntityType':'PatientResultHeader', 'patId':661664, 'patName':'pentium, pentium q.', 'patGenderAgeDobMrn':'F/103 - 12/12/1912 - pentium333', 'patPhone':null, 'dateOfService':'1431030311000', 'dateOfEntry':'1431030348618', 'reviewStatus':'PENDING', 'resultName':'CBC w/ Retic', 'resultFlag':'NONE', 'reviewCategory':'Lab', 'transferred':false, 'patientDisplayString':'pentium, pentium q. (F/103 - 12/12/1912 - pentium333)', 'beanErrors':null}, {'id':5, 'avatar':'images/defaultMalePatientPhoto-mobile.png', 'uniqueId':'PatientResultHeader2166465', 'patEntityId':2166465, 'patEntityType':'PatientResultHeader', 'patId':661630, 'patName':'wait, wait q.', 'patGenderAgeDobMrn':'M/103 - 12/12/1912 - TestingAgagin333', 'patPhone':null, 'dateOfService':'1431029485000', 'dateOfEntry':'1431029517016', 'reviewStatus':'PENDING', 'resultName':'CBC w/ Retic', 'resultFlag':'NONE', 'reviewCategory':'Lab', 'transferred':false, 'patientDisplayString':'wait, wait q. (M/103 - 12/12/1912 - TestingAgagin333)', 'beanErrors':null}, {'id':6, 'avatar':'images/defaultMalePatientPhoto-mobile.png', 'uniqueId':'PatientResultHeader2166401', 'patEntityId':2166401, 'patEntityType':'PatientResultHeader', 'patId':661630, 'patName':'wait, wait q.', 'patGenderAgeDobMrn':'M/103 - 12/12/1912 - TestingAgagin333', 'patPhone':null, 'dateOfService':'1431028823000', 'dateOfEntry':'1431028852479', 'reviewStatus':'PENDING', 'resultName':'CBC w/ Retic', 'resultFlag':'NONE', 'reviewCategory':'Lab', 'transferred':false, 'patientDisplayString':'wait, wait q. (M/103 - 12/12/1912 - TestingAgagin333)', 'beanErrors':null}];
}

function getPatients(){
  $clinit_SampleData();
  return [{'id':67647, 'middleName':'D', 'gender':'F', 'avatar':'images/defaultFemalePatientPhoto-mobile.png', 'dob':'02/14/1926', 'firstName':'CAROLYN', 'primaryId':'323bee', 'age':77, 'lastName':'OCHELTREE', 'physician':'Dr. Spock', 'alias':null, 'suffix':null}, {'id':1075137, 'middleName':null, 'gender':'F', 'avatar':'images/defaultFemalePatientPhoto-mobile.png', 'dob':'02/14/1926', 'firstName':'Test', 'primaryId':'1223', 'age':28, 'lastName':'76.8', 'physician':'Dr. Spock', 'alias':null, 'suffix':null}, {'id':213723, 'middleName':'J', 'gender':'F', 'avatar':'images/defaultFemalePatientPhoto-mobile.png', 'dob':'02/14/1926', 'firstName':'Sally', 'primaryId':'E11562959', 'age':76, 'lastName':'Aaronson', 'physician':'Dr. Spock', 'alias':null, 'suffix':null}, {'id':2662, 'middleName':null, 'gender':'F', 'avatar':'images/defaultFemalePatientPhoto-mobile.png', 'dob':'02/14/1926', 'firstName':'Green', 'primaryId':'190735', 'age':39, 'lastName':'Asparagus', 'physician':'Dr. Spock', 'alias':null, 'suffix':null}, {'id':51022, 'middleName':null, 'gender':'F', 'avatar':'images/defaultFemalePatientPhoto-mobile.png', 'dob':'02/14/1926', 'firstName':'Training1', 'primaryId':'06121950', 'age':65, 'lastName':' Niemann', 'physician':'Dr. Spock', 'alias':null, 'suffix':null}, {'id':679266, 'middleName':null, 'gender':'F', 'avatar':'images/defaultFemalePatientPhoto-mobile.png', 'dob':'02/14/1926', 'firstName':'Test', 'primaryId':'75patch2', 'age':28, 'lastName':'75patch2', 'physician':'Dr. Spock', 'alias':null, 'suffix':null}, {'id':1381094, 'middleName':null, 'gender':'M', 'avatar':'images/defaultMalePatientPhoto-mobile.png', 'dob':'02/14/1926', 'firstName':'First001', 'primaryId':'MRN001', 'age':46, 'lastName':'Last001', 'physician':'Dr. Spock', 'alias':null, 'suffix':null}, {'id':421003, 'middleName':null, 'gender':'F', 'avatar':'images/defaultFemalePatientPhoto-mobile.png', 'dob':'02/14/1926', 'firstName':'DIANA', 'primaryId':'326', 'age':59, 'lastName':'PALACIO', 'physician':'Dr. Spock', 'alias':null, 'suffix':null}, {'id':243385, 'middleName':'patch', 'gender':'F', 'avatar':'images/defaultFemalePatientPhoto-mobile.png', 'dob':'02/14/1926', 'firstName':'Test', 'primaryId':'767676', 'age':29, 'lastName':'697.5', 'physician':'Dr. Spock', 'alias':null, 'suffix':null}, {'id':247362, 'middleName':null, 'gender':'M', 'avatar':'images/defaultFemalePatientPhoto-mobile.png', 'dob':'02/14/1926', 'firstName':'Demo', 'primaryId':'demotest2222', 'age':66, 'lastName':'Test', 'physician':'Dr. Spock', 'alias':null, 'suffix':null}, {'id':661630, 'middleName':'qa', 'gender':'M', 'avatar':'images/defaultFemalePatientPhoto-mobile.png', 'dob':'02/14/1926', 'firstName':'wait', 'primaryId':'TestingAgagin333', 'age':103, 'lastName':'wait', 'physician':'Dr. Spock', 'alias':null, 'suffix':null}, {'id':661664, 'middleName':'qa', 'gender':'F', 'avatar':'images/defaultFemalePatientPhoto-mobile.png', 'dob':'02/14/1926', 'firstName':'pentium', 'primaryId':'pentium333', 'age':103, 'lastName':'pentium', 'physician':'Dr. Spock', 'alias':null, 'suffix':null}, {'id':665862, 'middleName':null, 'gender':'F', 'avatar':'images/defaultFemalePatientPhoto-mobile.png', 'dob':'02/14/1926', 'firstName':'TestMa1', 'primaryId':'zztestma1', 'age':50, 'lastName':'ZZJones', 'physician':'Dr. Spock', 'alias':null, 'suffix':null}, {'id':625179, 'middleName':null, 'gender':'F', 'avatar':'images/defaultFemalePatientPhoto-mobile.png', 'dob':'02/14/1926', 'firstName':'Test', 'primaryId':'65656', 'age':36, 'lastName':'Patch3/22', 'physician':'Dr. Spock', 'alias':null, 'suffix':null}, {'id':673515, 'middleName':'release76', 'gender':'F', 'avatar':'images/defaultFemalePatientPhoto-mobile.png', 'dob':'02/14/1926', 'firstName':'Test', 'primaryId':'MCPTest', 'age':36, 'lastName':'5/30', 'physician':'Dr. Spock', 'alias':null, 'suffix':null}, {'id':1379628, 'middleName':null, 'gender':'M', 'avatar':'images/defaultMalePatientPhoto-mobile.png', 'dob':'02/14/1926', 'firstName':'not', 'primaryId':'notyet123', 'age':103, 'lastName':'yet', 'physician':'Dr. Spock', 'alias':null, 'suffix':null}, {'id':1367809, 'middleName':null, 'gender':'U', 'avatar':'images/defaultFemalePatientPhoto-mobile.png', 'dob':'02/14/1926', 'firstName':'g2 ', 'primaryId':'7865', 'age':40, 'lastName':'load', 'physician':'Dr. Spock', 'alias':null, 'suffix':null}, {'id':1381034, 'middleName':null, 'gender':'M', 'avatar':'images/defaultMalePatientPhoto-mobile.png', 'dob':'02/14/1926', 'firstName':'zzJack', 'primaryId':'123456', 'age':67, 'lastName':'zzTest', 'physician':'Dr. Spock', 'alias':null, 'suffix':null}, {'id':1379648, 'middleName':null, 'gender':'M', 'avatar':'images/defaultMalePatientPhoto-mobile.png', 'dob':'02/14/1926', 'firstName':'No', 'primaryId':'notoyes', 'age':103, 'lastName':'Yes', 'physician':'Dr. Spock', 'alias':null, 'suffix':null}, {'id':485143, 'middleName':null, 'gender':'M', 'avatar':'images/defaultMalePatientPhoto-mobile.png', 'dob':'02/14/1926', 'firstName':'AURELIO', 'primaryId':'1090', 'age':74, 'lastName':'BANDERA', 'physician':'Dr. Spock', 'alias':null, 'suffix':null}, {'id':1366690, 'middleName':null, 'gender':'M', 'avatar':'images/defaultMalePatientPhoto-mobile.png', 'dob':'02/14/1926', 'firstName':'11/12', 'primaryId':'k98876', 'age':55, 'lastName':'patch', 'physician':'Dr. Spock', 'alias':null, 'suffix':null}, {'id':64242, 'middleName':null, 'gender':'F', 'avatar':'images/defaultFemalePatientPhoto-mobile.png', 'dob':'02/14/1926', 'firstName':'228', 'primaryId':'zz34y64hs', 'age':66, 'lastName':'zztest', 'physician':'Dr. Spock', 'alias':null, 'suffix':null}, {'id':115383, 'middleName':null, 'gender':'M', 'avatar':'images/defaultMalePatientPhoto-mobile.png', 'dob':'02/14/1926', 'firstName':'test', 'primaryId':'324324', 'age':18, 'lastName':'526', 'physician':'Dr. Spock', 'alias':null, 'suffix':null}, {'id':898312, 'middleName':null, 'gender':'F', 'avatar':'images/defaultFemalePatientPhoto-mobile.png', 'dob':'02/14/1926', 'firstName':'kenneth', 'primaryId':'kmarx1-666', 'age':49, 'lastName':'zzmarx', 'physician':'Dr. Spock', 'alias':null, 'suffix':null}, {'id':9762, 'middleName':'tulsian', 'gender':'M', 'avatar':'images/defaultMalePatientPhoto-mobile.png', 'dob':'02/14/1926', 'firstName':'nithin', 'primaryId':'101196822', 'age':35, 'lastName':'agarwal', 'physician':'Dr. Spock', 'alias':null, 'suffix':null}];
}

defineClass(643, 1, {1:1});
var Lcom_mckesson_mg2_client_SampleData_2_classLit = createForClass('com.mckesson.mg2.client', 'SampleData', 643, Ljava_lang_Object_2_classLit);
function $clinit_SampleData$LabWorklist(){
  $clinit_SampleData$LabWorklist = emptyMethod;
  $clinit_JavaScriptObject();
}

function $clinit_SampleData$Patient(){
  $clinit_SampleData$Patient = emptyMethod;
  $clinit_JavaScriptObject();
}

function $clinit_WorklistProto(){
  $clinit_WorklistProto = emptyMethod;
  $clinit_Object();
  log_6 = new MG2Log(Lcom_mckesson_mg2_client_WorklistProto_2_classLit);
}

function WorklistProto(){
  $clinit_WorklistProto();
  Object_0.call(this);
  this.$init_150();
}

defineClass(127, 1, {42:1, 1:1}, WorklistProto);
_.$init_150 = function $init_150(){
}
;
_.onModuleLoad = function onModuleLoad_2(){
  log_6.info('WorklistProto.onModuleLoad()');
  this.startPolymer();
}
;
_.startApplication = function startApplication(){
  get_4().add_1(castTo(castTo(new LoginView, 6), 6));
}
;
_.startPhoneGap = function startPhoneGap(){
  this.eventBus = castTo(new SimpleEventBus, 68);
  this.phoneGap = castTo(new PhoneGapStandardImpl, 134);
  this.phoneGap.addHandler_2(new WorklistProto$1(this));
  this.phoneGap.addHandler_3(new WorklistProto$2(this));
  this.phoneGap.getEvent().getOffLineHandler().addOfflineHandler(new WorklistProto$3(this));
  this.phoneGap.getEvent().getOnlineHandler().addOnlineHandler(new WorklistProto$4(this));
  this.phoneGap.initializePhoneGap();
}
;
_.startPolymer = function startPolymer(){
  log_6.info('WorklistProto.startPolymer()');
  importHref_0(asList(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {3:1, 1:1, 7:1}, 2, 6, ['iron-icons/iron-icons.html', 'paper-item/all-imports.html', 'iron-icon/iron-icon.html'])), makeLambdaFunction(WorklistProto$5.prototype.call_0, new WorklistProto$5(this)));
  whenReady(makeLambdaFunction(WorklistProto$6.prototype.call_0, new WorklistProto$6(this)));
}
;
var log_6;
var Lcom_mckesson_mg2_client_WorklistProto_2_classLit = createForClass('com.mckesson.mg2.client', 'WorklistProto', 127, Ljava_lang_Object_2_classLit);
function $clinit_WorklistProto$1(){
  $clinit_WorklistProto$1 = emptyMethod;
  $clinit_Object();
}

function WorklistProto$1(this$0){
  $clinit_WorklistProto$1();
  this.this$01 = this$0;
  Object_0.call(this);
  this.$init_151();
}

defineClass(135, 1, {19:1, 323:1, 1:1}, WorklistProto$1);
_.$init_151 = function $init_151(){
}
;
_.onPhoneGapAvailable = function onPhoneGapAvailable(event_0){
  ($clinit_WorklistProto() , log_6).info('PhoneGap.onPhoneGapAvailable()');
  this.this$01.startApplication();
}
;
var Lcom_mckesson_mg2_client_WorklistProto$1_2_classLit = createForClass('com.mckesson.mg2.client', 'WorklistProto/1', 135, Ljava_lang_Object_2_classLit);
function $clinit_WorklistProto$2(){
  $clinit_WorklistProto$2 = emptyMethod;
  $clinit_Object();
}

function WorklistProto$2(this$0){
  $clinit_WorklistProto$2();
  this.this$01 = this$0;
  Object_0.call(this);
  this.$init_152();
}

defineClass(136, 1, {19:1, 324:1, 1:1}, WorklistProto$2);
_.$init_152 = function $init_152(){
}
;
_.onPhoneGapTimeout = function onPhoneGapTimeout(event_0){
  ($clinit_WorklistProto() , log_6).info('PhoneGap.onPhoneGapTimeout()');
}
;
var Lcom_mckesson_mg2_client_WorklistProto$2_2_classLit = createForClass('com.mckesson.mg2.client', 'WorklistProto/2', 136, Ljava_lang_Object_2_classLit);
function $clinit_WorklistProto$3(){
  $clinit_WorklistProto$3 = emptyMethod;
  $clinit_Object();
}

function WorklistProto$3(this$0){
  $clinit_WorklistProto$3();
  this.this$01 = this$0;
  Object_0.call(this);
  this.$init_153();
}

defineClass(137, 1, {19:1, 325:1, 1:1}, WorklistProto$3);
_.$init_153 = function $init_153(){
}
;
_.onOffLine = function onOffLine(event_0){
  ($clinit_WorklistProto() , log_6).info('PhoneGap.onOffLine()');
  this.this$01.eventBus.fireEvent_0(new AppStatusEvent(($clinit_AppStatusLevel() , ERROR_0), 'No Internet Connection'));
}
;
var Lcom_mckesson_mg2_client_WorklistProto$3_2_classLit = createForClass('com.mckesson.mg2.client', 'WorklistProto/3', 137, Ljava_lang_Object_2_classLit);
function $clinit_WorklistProto$4(){
  $clinit_WorklistProto$4 = emptyMethod;
  $clinit_Object();
}

function WorklistProto$4(this$0){
  $clinit_WorklistProto$4();
  this.this$01 = this$0;
  Object_0.call(this);
  this.$init_154();
}

defineClass(138, 1, {19:1, 326:1, 1:1}, WorklistProto$4);
_.$init_154 = function $init_154(){
}
;
_.onOnlineEvent = function onOnlineEvent(event_0){
  ($clinit_WorklistProto() , log_6).info('PhoneGap.onOnlineEvent()');
  this.this$01.eventBus.fireEvent_0(new AppStatusEvent(($clinit_AppStatusLevel() , INFO), 'Restored Internet Connection'));
}
;
var Lcom_mckesson_mg2_client_WorklistProto$4_2_classLit = createForClass('com.mckesson.mg2.client', 'WorklistProto/4', 138, Ljava_lang_Object_2_classLit);
var Lcom_vaadin_polymer_elemental_Function_2_classLit = createForInterface('com.vaadin.polymer.elemental', 'Function');
function $clinit_WorklistProto$5(){
  $clinit_WorklistProto$5 = emptyMethod;
  $clinit_Object();
}

function WorklistProto$5(this$0){
  $clinit_WorklistProto$5();
  this.this$01 = this$0;
  Object_0.call(this);
  this.$init_155();
}

defineClass(139, $wnd.Function, {69:1, 1:1}, WorklistProto$5);
copyObjectProperties(getClassPrototype(1), _);
_.$init_155 = function $init_155(){
}
;
_.call_0 = function call_0(arg){
  ($clinit_WorklistProto() , log_6).info('iron-icons loaded.');
  return null;
}
;
var Lcom_mckesson_mg2_client_WorklistProto$5_2_classLit = createForClass('com.mckesson.mg2.client', 'WorklistProto/5', 139, Ljava_lang_Object_2_classLit);
function $clinit_WorklistProto$6(){
  $clinit_WorklistProto$6 = emptyMethod;
  $clinit_Object();
}

function WorklistProto$6(this$0){
  $clinit_WorklistProto$6();
  this.this$01 = this$0;
  Object_0.call(this);
  this.$init_156();
}

defineClass(140, $wnd.Function, {69:1, 1:1}, WorklistProto$6);
copyObjectProperties(getClassPrototype(1), _);
_.$init_156 = function $init_156(){
}
;
_.call_0 = function call_1(arg){
  this.this$01.startPhoneGap();
  return null;
}
;
var Lcom_mckesson_mg2_client_WorklistProto$6_2_classLit = createForClass('com.mckesson.mg2.client', 'WorklistProto/6', 140, Ljava_lang_Object_2_classLit);
function $clinit_LoginView(){
  $clinit_LoginView = emptyMethod;
  $clinit_Composite();
  uiBinder = castTo(new LoginView_LoginViewUiBinderImpl, 656);
}

function LoginView(){
  $clinit_LoginView();
  Composite.call(this);
  this.$init_157();
  this.initWidget(castTo(uiBinder.createAndBindUi(this), 6));
  this.view.setHeight(getClientHeight() + 'px');
  this.loginButton.addClickHandler(new LoginView$1(this));
}

defineClass(85, 66, {15:1, 40:1, 6:1, 85:1, 1:1}, LoginView);
_.$init_157 = function $init_157(){
}
;
var uiBinder;
var Lcom_mckesson_mg2_client_main_LoginView_2_classLit = createForClass('com.mckesson.mg2.client.main', 'LoginView', 85, Lcom_google_gwt_user_client_ui_Composite_2_classLit);
function $clinit_LoginView$1(){
  $clinit_LoginView$1 = emptyMethod;
  $clinit_Object();
}

function LoginView$1(this$0){
  $clinit_LoginView$1();
  this.this$01 = this$0;
  Object_0.call(this);
  this.$init_158();
}

defineClass(243, 1, {41:1, 19:1, 1:1}, LoginView$1);
_.$init_158 = function $init_158(){
}
;
_.onClick = function onClick(event_0){
  get_4().clear_0();
  get_4().add_1(castTo(castTo(new PatientSearchView, 6), 6));
}
;
var Lcom_mckesson_mg2_client_main_LoginView$1_2_classLit = createForClass('com.mckesson.mg2.client.main', 'LoginView/1', 243, Ljava_lang_Object_2_classLit);
function $clinit_LoginView$LoginViewUiBinder(){
  $clinit_LoginView$LoginViewUiBinder = emptyMethod;
}

var Lcom_mckesson_mg2_client_main_LoginView$LoginViewUiBinder_2_classLit = createForInterface('com.mckesson.mg2.client.main', 'LoginView/LoginViewUiBinder');
function $clinit_LoginView$Style(){
  $clinit_LoginView$Style = emptyMethod;
}

var Lcom_mckesson_mg2_client_main_LoginView$Style_2_classLit = createForInterface('com.mckesson.mg2.client.main', 'LoginView/Style');
function $clinit_LoginView_LoginViewUiBinderImpl(){
  $clinit_LoginView_LoginViewUiBinderImpl = emptyMethod;
  $clinit_Object();
}

function LoginView_LoginViewUiBinderImpl(){
  $clinit_LoginView_LoginViewUiBinderImpl();
  Object_0.call(this);
  this.$init_159();
}

defineClass(249, 1, {656:1, 1:1}, LoginView_LoginViewUiBinderImpl);
_.$init_159 = function $init_159(){
  this.template = castTo(new LoginView_LoginViewUiBinderImpl_TemplateImpl, 658);
}
;
_.createAndBindUi = function createAndBindUi_0(owner){
  return this.createAndBindUi_0(castTo(owner, 85));
}
;
_.createAndBindUi_0 = function createAndBindUi(owner){
  return (new LoginView_LoginViewUiBinderImpl$Widgets(this, owner)).get_view();
}
;
var Lcom_mckesson_mg2_client_main_LoginView_1LoginViewUiBinderImpl_2_classLit = createForClass('com.mckesson.mg2.client.main', 'LoginView_LoginViewUiBinderImpl', 249, Ljava_lang_Object_2_classLit);
function $clinit_LoginView_LoginViewUiBinderImpl$Template(){
  $clinit_LoginView_LoginViewUiBinderImpl$Template = emptyMethod;
}

var Lcom_mckesson_mg2_client_main_LoginView_1LoginViewUiBinderImpl$Template_2_classLit = createForInterface('com.mckesson.mg2.client.main', 'LoginView_LoginViewUiBinderImpl/Template');
function $clinit_LoginView_LoginViewUiBinderImpl$Widgets(){
  $clinit_LoginView_LoginViewUiBinderImpl$Widgets = emptyMethod;
  $clinit_Object();
}

function LoginView_LoginViewUiBinderImpl$Widgets(this$0, owner){
  $clinit_LoginView_LoginViewUiBinderImpl$Widgets();
  this.this$01 = this$0;
  Object_0.call(this);
  this.$init_160();
  this.owner = owner;
  this.build_style();
  this.build_domId0();
  this.build_domId1();
  this.build_domId2();
  this.build_domId0Element();
  this.build_domId1Element();
  this.build_domId2Element();
}

defineClass(250, 1, {1:1}, LoginView_LoginViewUiBinderImpl$Widgets);
_.$init_160 = function $init_160(){
}
;
_.build_clientBundleFieldNameUnlikelyToCollideWithUserSpecifiedFieldOkay = function build_clientBundleFieldNameUnlikelyToCollideWithUserSpecifiedFieldOkay(){
  var clientBundleFieldNameUnlikelyToCollideWithUserSpecifiedFieldOkay;
  clientBundleFieldNameUnlikelyToCollideWithUserSpecifiedFieldOkay = castTo(castTo(new LoginView_LoginViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator, 307), 307);
  return clientBundleFieldNameUnlikelyToCollideWithUserSpecifiedFieldOkay;
}
;
_.build_domId0 = function build_domId0(){
  this.domId0 = $createUniqueId(get_1());
  return this.domId0;
}
;
_.build_domId0Element = function build_domId0Element(){
  this.domId0Element = new LazyDomElement(this.get_domId0());
  return this.domId0Element;
}
;
_.build_domId1 = function build_domId1(){
  this.domId1 = $createUniqueId(get_1());
  return this.domId1;
}
;
_.build_domId1Element = function build_domId1Element(){
  this.domId1Element = new LazyDomElement(this.get_domId1());
  return this.domId1Element;
}
;
_.build_domId2 = function build_domId2(){
  this.domId2 = $createUniqueId(get_1());
  return this.domId2;
}
;
_.build_domId2Element = function build_domId2Element(){
  this.domId2Element = new LazyDomElement(this.get_domId2());
  return this.domId2Element;
}
;
_.build_f_PaperInput1 = function build_f_PaperInput1(){
  var f_PaperInput1;
  f_PaperInput1 = new PaperInput(this.template_html1().asString());
  f_PaperInput1.setLabel('Username');
  f_PaperInput1.setRequired(true);
  return f_PaperInput1;
}
;
_.build_f_PaperInput2 = function build_f_PaperInput2(){
  var f_PaperInput2;
  f_PaperInput2 = new PaperInput(this.template_html2().asString());
  f_PaperInput2.setLabel('Password');
  f_PaperInput2.setType('password');
  f_PaperInput2.setRequired(true);
  return f_PaperInput2;
}
;
_.build_loginButton = function build_loginButton(){
  var loginButton;
  loginButton = new PaperButton(this.template_html3().asString());
  loginButton.setRaised(true);
  this.owner.loginButton = loginButton;
  return loginButton;
}
;
_.build_style = function build_style(){
  this.style_0 = this.get_clientBundleFieldNameUnlikelyToCollideWithUserSpecifiedFieldOkay().style_1();
  this.style_0.ensureInjected();
  return this.style_0;
}
;
_.build_view = function build_view(){
  var __attachRecord__, view;
  view = new HTMLPanel(this.template_html4().asString());
  view.setStyleName('' + this.get_style().view_0() + '');
  {
    __attachRecord__ = attachToDom(view.getElement());
    this.get_domId0Element().get_1();
    this.get_domId1Element().get_1();
    this.get_domId2Element().get_1();
    __attachRecord__.detach();
  }
  view.addAndReplaceElement(this.get_f_PaperInput1(), this.get_domId0Element().get_1());
  view.addAndReplaceElement(this.get_f_PaperInput2(), this.get_domId1Element().get_1());
  view.addAndReplaceElement(this.get_loginButton(), this.get_domId2Element().get_1());
  this.owner.view = view;
  return view;
}
;
_.get_clientBundleFieldNameUnlikelyToCollideWithUserSpecifiedFieldOkay = function get_clientBundleFieldNameUnlikelyToCollideWithUserSpecifiedFieldOkay(){
  return this.build_clientBundleFieldNameUnlikelyToCollideWithUserSpecifiedFieldOkay();
}
;
_.get_domId0 = function get_domId0(){
  return this.domId0;
}
;
_.get_domId0Element = function get_domId0Element(){
  return this.domId0Element;
}
;
_.get_domId1 = function get_domId1(){
  return this.domId1;
}
;
_.get_domId1Element = function get_domId1Element(){
  return this.domId1Element;
}
;
_.get_domId2 = function get_domId2(){
  return this.domId2;
}
;
_.get_domId2Element = function get_domId2Element(){
  return this.domId2Element;
}
;
_.get_f_PaperInput1 = function get_f_PaperInput1(){
  return this.build_f_PaperInput1();
}
;
_.get_f_PaperInput2 = function get_f_PaperInput2(){
  return this.build_f_PaperInput2();
}
;
_.get_loginButton = function get_loginButton(){
  return this.build_loginButton();
}
;
_.get_style = function get_style(){
  return this.style_0;
}
;
_.get_view = function get_view(){
  $clinit_LoginView_LoginViewUiBinderImpl$Widgets();
  return this.build_view();
}
;
_.template_html1 = function template_html1(){
  return this.this$01.template.html1();
}
;
_.template_html2 = function template_html2(){
  return this.this$01.template.html2();
}
;
_.template_html3 = function template_html3(){
  return this.this$01.template.html3();
}
;
_.template_html4 = function template_html4(){
  return this.this$01.template.html4('' + this.get_style().logobar() + '', '' + this.get_style().logobar2() + '', '' + this.get_style().inputForm() + '', this.get_domId0(), this.get_domId1(), this.get_domId2());
}
;
var Lcom_mckesson_mg2_client_main_LoginView_1LoginViewUiBinderImpl$Widgets_2_classLit = createForClass('com.mckesson.mg2.client.main', 'LoginView_LoginViewUiBinderImpl/Widgets', 250, Ljava_lang_Object_2_classLit);
function $clinit_LoginView_LoginViewUiBinderImpl_GenBundle(){
  $clinit_LoginView_LoginViewUiBinderImpl_GenBundle = emptyMethod;
}

var Lcom_mckesson_mg2_client_main_LoginView_1LoginViewUiBinderImpl_1GenBundle_2_classLit = createForInterface('com.mckesson.mg2.client.main', 'LoginView_LoginViewUiBinderImpl_GenBundle');
function $clinit_LoginView_LoginViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator(){
  $clinit_LoginView_LoginViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator = emptyMethod;
  $clinit_Object();
  _instance0 = new LoginView_LoginViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator;
}

function LoginView_LoginViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator(){
  $clinit_LoginView_LoginViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator();
  Object_0.call(this);
  this.$init_161();
}

defineClass(121, 1, {307:1, 1:1}, LoginView_LoginViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator);
_.$init_161 = function $init_161(){
}
;
_.style_1 = function style_1(){
  return get_6();
}
;
_.styleInitializer = function styleInitializer(){
  $clinit_LoginView_LoginViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator();
  style_0 = new LoginView_LoginViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1(this);
}
;
var _instance0, style_0;
var Lcom_mckesson_mg2_client_main_LoginView_1LoginViewUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator_2_classLit = createForClass('com.mckesson.mg2.client.main', 'LoginView_LoginViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator', 121, Ljava_lang_Object_2_classLit);
function $clinit_LoginView_LoginViewUiBinderImpl_GenCss_style(){
  $clinit_LoginView_LoginViewUiBinderImpl_GenCss_style = emptyMethod;
}

var Lcom_mckesson_mg2_client_main_LoginView_1LoginViewUiBinderImpl_1GenCss_1style_2_classLit = createForInterface('com.mckesson.mg2.client.main', 'LoginView_LoginViewUiBinderImpl_GenCss_style');
function $clinit_LoginView_LoginViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){
  $clinit_LoginView_LoginViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1 = emptyMethod;
  $clinit_Object();
}

function LoginView_LoginViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1(this$0){
  $clinit_LoginView_LoginViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1();
  this.this$01 = this$0;
  Object_0.call(this);
  this.$init_162();
}

defineClass(277, 1, {1:1}, LoginView_LoginViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1);
_.$init_162 = function $init_162(){
}
;
_.ensureInjected = function ensureInjected(){
  if (!this.injected) {
    this.injected = true;
    inject_1(this.getText());
    return true;
  }
  return false;
}
;
_.getName = function getName_3(){
  return 'style';
}
;
_.getText = function getText(){
  return '.GN2F-EGCLI{background-color:#005a8c;width:100%;margin:0;padding:0;text-align:center;vertical-align:middle;}.GN2F-EGCII{display:flex;flex-direction:column;align-items:center;}.GN2F-EGCII paper-input{width:20em;}.GN2F-EGCJI{width:' + ('100%' + ';padding:' + '3% 0' + ';border-bottom:' + '2px solid #ccc' + ';}.GN2F-EGCJI img{max-width:' + '44%' + ';}.GN2F-EGCKI{width:' + '100%' + ';padding:' + '3% 0' + ';}.GN2F-EGCKI img{max-width:' + '80%' + ';}.GN2F-EGCHI{margin:' + '1em 0' + ';}.GN2F-EGCHI img{width:' + '75%' + ';}');
}
;
_.inputForm = function inputForm(){
  return 'GN2F-EGCII';
}
;
_.logobar = function logobar(){
  return 'GN2F-EGCJI';
}
;
_.logobar2 = function logobar2(){
  return 'GN2F-EGCKI';
}
;
_.view_0 = function view_0(){
  return 'GN2F-EGCLI';
}
;
_.injected = false;
var Lcom_mckesson_mg2_client_main_LoginView_1LoginViewUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.mckesson.mg2.client.main', 'LoginView_LoginViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 277, Ljava_lang_Object_2_classLit);
function $clinit_LoginView_LoginViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){
  $clinit_LoginView_LoginViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;
  $clinit_Object();
  {
    ($clinit_LoginView_LoginViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator() , _instance0).styleInitializer();
  }
}

function get_6(){
  $clinit_LoginView_LoginViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer();
  return $clinit_LoginView_LoginViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator() , style_0;
}

defineClass(644, 1, {1:1});
var Lcom_mckesson_mg2_client_main_LoginView_1LoginViewUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$styleInitializer_2_classLit = createForClass('com.mckesson.mg2.client.main', 'LoginView_LoginViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator/styleInitializer', 644, Ljava_lang_Object_2_classLit);
function $clinit_LoginView_LoginViewUiBinderImpl_TemplateImpl(){
  $clinit_LoginView_LoginViewUiBinderImpl_TemplateImpl = emptyMethod;
  $clinit_Object();
}

function LoginView_LoginViewUiBinderImpl_TemplateImpl(){
  $clinit_LoginView_LoginViewUiBinderImpl_TemplateImpl();
  Object_0.call(this);
  this.$init_163();
}

defineClass(268, 1, {658:1, 1:1}, LoginView_LoginViewUiBinderImpl_TemplateImpl);
_.$init_163 = function $init_163(){
}
;
_.html1 = function html1(){
  var sb;
  sb = new StringBuilder;
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.toString_0());
}
;
_.html2 = function html2(){
  var sb;
  sb = new StringBuilder;
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.toString_0());
}
;
_.html3 = function html3(){
  var sb;
  sb = new StringBuilder;
  sb.append_2('Log in');
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.toString_0());
}
;
_.html4 = function html4(arg0, arg1, arg2, arg3, arg4, arg5){
  var sb;
  sb = new StringBuilder;
  sb.append_2("<style is='custom-style'> <\/style> <div class='");
  sb.append_2(htmlEscape(arg0));
  sb.append_2("'> <img src='images/logoUSONMobile.png'> <img src='images/logoMSHMobile.png'> <\/div> <div class='");
  sb.append_2(htmlEscape(arg1));
  sb.append_2("'> <img src='images/logoG2Mobile.png'> <\/div> <div class='");
  sb.append_2(htmlEscape(arg2));
  sb.append_2("'> <span id='");
  sb.append_2(htmlEscape(arg3));
  sb.append_2("'><\/span> <span id='");
  sb.append_2(htmlEscape(arg4));
  sb.append_2("'><\/span> <span id='");
  sb.append_2(htmlEscape(arg5));
  sb.append_2("'><\/span> <\/div>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.toString_0());
}
;
var Lcom_mckesson_mg2_client_main_LoginView_1LoginViewUiBinderImpl_1TemplateImpl_2_classLit = createForClass('com.mckesson.mg2.client.main', 'LoginView_LoginViewUiBinderImpl_TemplateImpl', 268, Ljava_lang_Object_2_classLit);
function $clinit_CalendarView(){
  $clinit_CalendarView = emptyMethod;
  $clinit_Composite();
  log_7 = new MG2Log(Lcom_mckesson_mg2_client_patient_CalendarView_2_classLit);
  uiBinder_0 = castTo(new CalendarView_CalendarViewUiBinderImpl, 663);
}

function CalendarView(){
  $clinit_CalendarView();
  Composite.call(this);
  this.$init_164();
  this.initWidget(castTo(uiBinder_0.createAndBindUi(this), 6));
  this.still.addClickHandler(new CalendarView$1(this));
}

defineClass(103, 66, {15:1, 40:1, 6:1, 103:1, 1:1}, CalendarView);
_.$init_164 = function $init_164(){
}
;
var log_7, uiBinder_0;
var Lcom_mckesson_mg2_client_patient_CalendarView_2_classLit = createForClass('com.mckesson.mg2.client.patient', 'CalendarView', 103, Lcom_google_gwt_user_client_ui_Composite_2_classLit);
function $clinit_CalendarView$1(){
  $clinit_CalendarView$1 = emptyMethod;
  $clinit_Object();
}

function CalendarView$1(this$0){
  $clinit_CalendarView$1();
  this.this$01 = this$0;
  Object_0.call(this);
  this.$init_165();
}

defineClass(283, 1, {41:1, 19:1, 1:1}, CalendarView$1);
_.$init_165 = function $init_165(){
}
;
_.onClick = function onClick_0(event_0){
  get_4().clear_0();
  get_4().add_1(castTo(castTo(new PatientSearchView, 6), 6));
}
;
var Lcom_mckesson_mg2_client_patient_CalendarView$1_2_classLit = createForClass('com.mckesson.mg2.client.patient', 'CalendarView/1', 283, Ljava_lang_Object_2_classLit);
function $clinit_CalendarView$CalendarViewUiBinder(){
  $clinit_CalendarView$CalendarViewUiBinder = emptyMethod;
}

var Lcom_mckesson_mg2_client_patient_CalendarView$CalendarViewUiBinder_2_classLit = createForInterface('com.mckesson.mg2.client.patient', 'CalendarView/CalendarViewUiBinder');
function $clinit_CalendarView_CalendarViewUiBinderImpl(){
  $clinit_CalendarView_CalendarViewUiBinderImpl = emptyMethod;
  $clinit_Object();
}

function CalendarView_CalendarViewUiBinderImpl(){
  $clinit_CalendarView_CalendarViewUiBinderImpl();
  Object_0.call(this);
  this.$init_166();
}

defineClass(291, 1, {663:1, 1:1}, CalendarView_CalendarViewUiBinderImpl);
_.$init_166 = function $init_166(){
  this.template = castTo(new CalendarView_CalendarViewUiBinderImpl_TemplateImpl, 666);
}
;
_.createAndBindUi = function createAndBindUi_2(owner){
  return this.createAndBindUi_1(castTo(owner, 103));
}
;
_.createAndBindUi_1 = function createAndBindUi_1(owner){
  return (new CalendarView_CalendarViewUiBinderImpl$Widgets(this, owner)).get_f_HTMLPanel1();
}
;
var Lcom_mckesson_mg2_client_patient_CalendarView_1CalendarViewUiBinderImpl_2_classLit = createForClass('com.mckesson.mg2.client.patient', 'CalendarView_CalendarViewUiBinderImpl', 291, Ljava_lang_Object_2_classLit);
function $clinit_CalendarView_CalendarViewUiBinderImpl$Template(){
  $clinit_CalendarView_CalendarViewUiBinderImpl$Template = emptyMethod;
}

var Lcom_mckesson_mg2_client_patient_CalendarView_1CalendarViewUiBinderImpl$Template_2_classLit = createForInterface('com.mckesson.mg2.client.patient', 'CalendarView_CalendarViewUiBinderImpl/Template');
function $clinit_CalendarView_CalendarViewUiBinderImpl$Widgets(){
  $clinit_CalendarView_CalendarViewUiBinderImpl$Widgets = emptyMethod;
  $clinit_Object();
}

function CalendarView_CalendarViewUiBinderImpl$Widgets(this$0, owner){
  $clinit_CalendarView_CalendarViewUiBinderImpl$Widgets();
  this.this$01 = this$0;
  Object_0.call(this);
  this.$init_167();
  this.owner = owner;
  this.build_style_0();
  this.build_domId0_0();
  this.build_domId0Element_0();
}

defineClass(292, 1, {1:1}, CalendarView_CalendarViewUiBinderImpl$Widgets);
_.$init_167 = function $init_167(){
}
;
_.build_clientBundleFieldNameUnlikelyToCollideWithUserSpecifiedFieldOkay_0 = function build_clientBundleFieldNameUnlikelyToCollideWithUserSpecifiedFieldOkay_0(){
  var clientBundleFieldNameUnlikelyToCollideWithUserSpecifiedFieldOkay;
  clientBundleFieldNameUnlikelyToCollideWithUserSpecifiedFieldOkay = castTo(castTo(new CalendarView_CalendarViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator, 309), 309);
  return clientBundleFieldNameUnlikelyToCollideWithUserSpecifiedFieldOkay;
}
;
_.build_domId0_0 = function build_domId0_0(){
  this.domId0 = $createUniqueId(get_1());
  return this.domId0;
}
;
_.build_domId0Element_0 = function build_domId0Element_0(){
  this.domId0Element = new LazyDomElement(this.get_domId0_0());
  return this.domId0Element;
}
;
_.build_f_HTMLPanel1 = function build_f_HTMLPanel1(){
  var __attachRecord__, f_HTMLPanel1;
  f_HTMLPanel1 = new HTMLPanel(this.template_html1_0().asString());
  {
    __attachRecord__ = attachToDom(f_HTMLPanel1.getElement());
    this.get_domId0Element_0().get_1();
    __attachRecord__.detach();
  }
  f_HTMLPanel1.addAndReplaceElement(this.get_still(), this.get_domId0Element_0().get_1());
  return f_HTMLPanel1;
}
;
_.build_still = function build_still(){
  var still;
  still = castTo(castTo(new Image_0, 39), 39);
  still.setUrl('specs/CalendarView.png');
  this.owner.still = still;
  return still;
}
;
_.build_style_0 = function build_style_0(){
  var style;
  style = this.get_clientBundleFieldNameUnlikelyToCollideWithUserSpecifiedFieldOkay_0().style_2();
  style.ensureInjected();
  return style;
}
;
_.get_clientBundleFieldNameUnlikelyToCollideWithUserSpecifiedFieldOkay_0 = function get_clientBundleFieldNameUnlikelyToCollideWithUserSpecifiedFieldOkay_0(){
  return this.build_clientBundleFieldNameUnlikelyToCollideWithUserSpecifiedFieldOkay_0();
}
;
_.get_domId0_0 = function get_domId0_0(){
  return this.domId0;
}
;
_.get_domId0Element_0 = function get_domId0Element_0(){
  return this.domId0Element;
}
;
_.get_f_HTMLPanel1 = function get_f_HTMLPanel1(){
  $clinit_CalendarView_CalendarViewUiBinderImpl$Widgets();
  return this.build_f_HTMLPanel1();
}
;
_.get_still = function get_still(){
  return this.build_still();
}
;
_.template_html1_0 = function template_html1_0(){
  return this.this$01.template.html1_0(this.get_domId0_0());
}
;
var Lcom_mckesson_mg2_client_patient_CalendarView_1CalendarViewUiBinderImpl$Widgets_2_classLit = createForClass('com.mckesson.mg2.client.patient', 'CalendarView_CalendarViewUiBinderImpl/Widgets', 292, Ljava_lang_Object_2_classLit);
function $clinit_CalendarView_CalendarViewUiBinderImpl_GenBundle(){
  $clinit_CalendarView_CalendarViewUiBinderImpl_GenBundle = emptyMethod;
}

var Lcom_mckesson_mg2_client_patient_CalendarView_1CalendarViewUiBinderImpl_1GenBundle_2_classLit = createForInterface('com.mckesson.mg2.client.patient', 'CalendarView_CalendarViewUiBinderImpl_GenBundle');
function $clinit_CalendarView_CalendarViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator(){
  $clinit_CalendarView_CalendarViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator = emptyMethod;
  $clinit_Object();
  _instance0_0 = new CalendarView_CalendarViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator;
}

function CalendarView_CalendarViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator(){
  $clinit_CalendarView_CalendarViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator();
  Object_0.call(this);
  this.$init_168();
}

defineClass(123, 1, {309:1, 1:1}, CalendarView_CalendarViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator);
_.$init_168 = function $init_168(){
}
;
_.style_2 = function style_3(){
  return get_7();
}
;
_.styleInitializer_0 = function styleInitializer_0(){
  $clinit_CalendarView_CalendarViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator();
  style_2 = new CalendarView_CalendarViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1(this);
}
;
var _instance0_0, style_2;
var Lcom_mckesson_mg2_client_patient_CalendarView_1CalendarViewUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator_2_classLit = createForClass('com.mckesson.mg2.client.patient', 'CalendarView_CalendarViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator', 123, Ljava_lang_Object_2_classLit);
function $clinit_CalendarView_CalendarViewUiBinderImpl_GenCss_style(){
  $clinit_CalendarView_CalendarViewUiBinderImpl_GenCss_style = emptyMethod;
}

var Lcom_mckesson_mg2_client_patient_CalendarView_1CalendarViewUiBinderImpl_1GenCss_1style_2_classLit = createForInterface('com.mckesson.mg2.client.patient', 'CalendarView_CalendarViewUiBinderImpl_GenCss_style');
function $clinit_CalendarView_CalendarViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){
  $clinit_CalendarView_CalendarViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1 = emptyMethod;
  $clinit_Object();
}

function CalendarView_CalendarViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1(this$0){
  $clinit_CalendarView_CalendarViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1();
  this.this$01 = this$0;
  Object_0.call(this);
  this.$init_169();
}

defineClass(300, 1, {1:1}, CalendarView_CalendarViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1);
_.$init_169 = function $init_169(){
}
;
_.ensureInjected = function ensureInjected_0(){
  if (!this.injected) {
    this.injected = true;
    inject_1(this.getText());
    return true;
  }
  return false;
}
;
_.getName = function getName_4(){
  return 'style';
}
;
_.getText = function getText_0(){
  return '';
}
;
_.injected = false;
var Lcom_mckesson_mg2_client_patient_CalendarView_1CalendarViewUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.mckesson.mg2.client.patient', 'CalendarView_CalendarViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 300, Ljava_lang_Object_2_classLit);
function $clinit_CalendarView_CalendarViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){
  $clinit_CalendarView_CalendarViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;
  $clinit_Object();
  {
    ($clinit_CalendarView_CalendarViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator() , _instance0_0).styleInitializer_0();
  }
}

function get_7(){
  $clinit_CalendarView_CalendarViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer();
  return $clinit_CalendarView_CalendarViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator() , style_2;
}

defineClass(650, 1, {1:1});
var Lcom_mckesson_mg2_client_patient_CalendarView_1CalendarViewUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$styleInitializer_2_classLit = createForClass('com.mckesson.mg2.client.patient', 'CalendarView_CalendarViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator/styleInitializer', 650, Ljava_lang_Object_2_classLit);
function $clinit_CalendarView_CalendarViewUiBinderImpl_TemplateImpl(){
  $clinit_CalendarView_CalendarViewUiBinderImpl_TemplateImpl = emptyMethod;
  $clinit_Object();
}

function CalendarView_CalendarViewUiBinderImpl_TemplateImpl(){
  $clinit_CalendarView_CalendarViewUiBinderImpl_TemplateImpl();
  Object_0.call(this);
  this.$init_170();
}

defineClass(296, 1, {666:1, 1:1}, CalendarView_CalendarViewUiBinderImpl_TemplateImpl);
_.$init_170 = function $init_170(){
}
;
_.html1_0 = function html1_0(arg0){
  var sb;
  sb = new StringBuilder;
  sb.append_2("<span id='");
  sb.append_2(htmlEscape(arg0));
  sb.append_2("'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.toString_0());
}
;
var Lcom_mckesson_mg2_client_patient_CalendarView_1CalendarViewUiBinderImpl_1TemplateImpl_2_classLit = createForClass('com.mckesson.mg2.client.patient', 'CalendarView_CalendarViewUiBinderImpl_TemplateImpl', 296, Ljava_lang_Object_2_classLit);
function $clinit_MessageView(){
  $clinit_MessageView = emptyMethod;
  $clinit_Composite();
  log_8 = new MG2Log(Lcom_mckesson_mg2_client_patient_MessageView_2_classLit);
  uiBinder_1 = castTo(new MessageView_MessageViewUiBinderImpl, 662);
}

function MessageView(){
  $clinit_MessageView();
  Composite.call(this);
  this.$init_171();
  this.initWidget(castTo(uiBinder_1.createAndBindUi(this), 6));
  this.still.addClickHandler(new MessageView$1(this));
}

defineClass(102, 66, {15:1, 40:1, 6:1, 102:1, 1:1}, MessageView);
_.$init_171 = function $init_171(){
}
;
var log_8, uiBinder_1;
var Lcom_mckesson_mg2_client_patient_MessageView_2_classLit = createForClass('com.mckesson.mg2.client.patient', 'MessageView', 102, Lcom_google_gwt_user_client_ui_Composite_2_classLit);
function $clinit_MessageView$1(){
  $clinit_MessageView$1 = emptyMethod;
  $clinit_Object();
}

function MessageView$1(this$0){
  $clinit_MessageView$1();
  this.this$01 = this$0;
  Object_0.call(this);
  this.$init_172();
}

defineClass(282, 1, {41:1, 19:1, 1:1}, MessageView$1);
_.$init_172 = function $init_172(){
}
;
_.onClick = function onClick_1(event_0){
  get_4().clear_0();
  get_4().add_1(castTo(castTo(new PatientSearchView, 6), 6));
}
;
var Lcom_mckesson_mg2_client_patient_MessageView$1_2_classLit = createForClass('com.mckesson.mg2.client.patient', 'MessageView/1', 282, Ljava_lang_Object_2_classLit);
function $clinit_MessageView$MessageViewUiBinder(){
  $clinit_MessageView$MessageViewUiBinder = emptyMethod;
}

var Lcom_mckesson_mg2_client_patient_MessageView$MessageViewUiBinder_2_classLit = createForInterface('com.mckesson.mg2.client.patient', 'MessageView/MessageViewUiBinder');
function $clinit_MessageView_MessageViewUiBinderImpl(){
  $clinit_MessageView_MessageViewUiBinderImpl = emptyMethod;
  $clinit_Object();
}

function MessageView_MessageViewUiBinderImpl(){
  $clinit_MessageView_MessageViewUiBinderImpl();
  Object_0.call(this);
  this.$init_173();
}

defineClass(289, 1, {662:1, 1:1}, MessageView_MessageViewUiBinderImpl);
_.$init_173 = function $init_173(){
  this.template = castTo(new MessageView_MessageViewUiBinderImpl_TemplateImpl, 665);
}
;
_.createAndBindUi = function createAndBindUi_4(owner){
  return this.createAndBindUi_2(castTo(owner, 102));
}
;
_.createAndBindUi_2 = function createAndBindUi_3(owner){
  return (new MessageView_MessageViewUiBinderImpl$Widgets(this, owner)).get_f_HTMLPanel1_0();
}
;
var Lcom_mckesson_mg2_client_patient_MessageView_1MessageViewUiBinderImpl_2_classLit = createForClass('com.mckesson.mg2.client.patient', 'MessageView_MessageViewUiBinderImpl', 289, Ljava_lang_Object_2_classLit);
function $clinit_MessageView_MessageViewUiBinderImpl$Template(){
  $clinit_MessageView_MessageViewUiBinderImpl$Template = emptyMethod;
}

var Lcom_mckesson_mg2_client_patient_MessageView_1MessageViewUiBinderImpl$Template_2_classLit = createForInterface('com.mckesson.mg2.client.patient', 'MessageView_MessageViewUiBinderImpl/Template');
function $clinit_MessageView_MessageViewUiBinderImpl$Widgets(){
  $clinit_MessageView_MessageViewUiBinderImpl$Widgets = emptyMethod;
  $clinit_Object();
}

function MessageView_MessageViewUiBinderImpl$Widgets(this$0, owner){
  $clinit_MessageView_MessageViewUiBinderImpl$Widgets();
  this.this$01 = this$0;
  Object_0.call(this);
  this.$init_174();
  this.owner = owner;
  this.build_style_1();
  this.build_domId0_1();
  this.build_domId0Element_1();
}

defineClass(290, 1, {1:1}, MessageView_MessageViewUiBinderImpl$Widgets);
_.$init_174 = function $init_174(){
}
;
_.build_clientBundleFieldNameUnlikelyToCollideWithUserSpecifiedFieldOkay_1 = function build_clientBundleFieldNameUnlikelyToCollideWithUserSpecifiedFieldOkay_1(){
  var clientBundleFieldNameUnlikelyToCollideWithUserSpecifiedFieldOkay;
  clientBundleFieldNameUnlikelyToCollideWithUserSpecifiedFieldOkay = castTo(castTo(new MessageView_MessageViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator, 308), 308);
  return clientBundleFieldNameUnlikelyToCollideWithUserSpecifiedFieldOkay;
}
;
_.build_domId0_1 = function build_domId0_1(){
  this.domId0 = $createUniqueId(get_1());
  return this.domId0;
}
;
_.build_domId0Element_1 = function build_domId0Element_1(){
  this.domId0Element = new LazyDomElement(this.get_domId0_1());
  return this.domId0Element;
}
;
_.build_f_HTMLPanel1_0 = function build_f_HTMLPanel1_0(){
  var __attachRecord__, f_HTMLPanel1;
  f_HTMLPanel1 = new HTMLPanel(this.template_html1_0().asString());
  {
    __attachRecord__ = attachToDom(f_HTMLPanel1.getElement());
    this.get_domId0Element_1().get_1();
    __attachRecord__.detach();
  }
  f_HTMLPanel1.addAndReplaceElement(this.get_still_0(), this.get_domId0Element_1().get_1());
  return f_HTMLPanel1;
}
;
_.build_still_0 = function build_still_0(){
  var still;
  still = castTo(castTo(new Image_0, 39), 39);
  still.setUrl('specs/MessageView.png');
  this.owner.still = still;
  return still;
}
;
_.build_style_1 = function build_style_1(){
  var style;
  style = this.get_clientBundleFieldNameUnlikelyToCollideWithUserSpecifiedFieldOkay_1().style_3();
  style.ensureInjected();
  return style;
}
;
_.get_clientBundleFieldNameUnlikelyToCollideWithUserSpecifiedFieldOkay_1 = function get_clientBundleFieldNameUnlikelyToCollideWithUserSpecifiedFieldOkay_1(){
  return this.build_clientBundleFieldNameUnlikelyToCollideWithUserSpecifiedFieldOkay_1();
}
;
_.get_domId0_1 = function get_domId0_1(){
  return this.domId0;
}
;
_.get_domId0Element_1 = function get_domId0Element_1(){
  return this.domId0Element;
}
;
_.get_f_HTMLPanel1_0 = function get_f_HTMLPanel1_0(){
  $clinit_MessageView_MessageViewUiBinderImpl$Widgets();
  return this.build_f_HTMLPanel1_0();
}
;
_.get_still_0 = function get_still_0(){
  return this.build_still_0();
}
;
_.template_html1_0 = function template_html1_1(){
  return this.this$01.template.html1_0(this.get_domId0_1());
}
;
var Lcom_mckesson_mg2_client_patient_MessageView_1MessageViewUiBinderImpl$Widgets_2_classLit = createForClass('com.mckesson.mg2.client.patient', 'MessageView_MessageViewUiBinderImpl/Widgets', 290, Ljava_lang_Object_2_classLit);
function $clinit_MessageView_MessageViewUiBinderImpl_GenBundle(){
  $clinit_MessageView_MessageViewUiBinderImpl_GenBundle = emptyMethod;
}

var Lcom_mckesson_mg2_client_patient_MessageView_1MessageViewUiBinderImpl_1GenBundle_2_classLit = createForInterface('com.mckesson.mg2.client.patient', 'MessageView_MessageViewUiBinderImpl_GenBundle');
function $clinit_MessageView_MessageViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator(){
  $clinit_MessageView_MessageViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator = emptyMethod;
  $clinit_Object();
  _instance0_1 = new MessageView_MessageViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator;
}

function MessageView_MessageViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator(){
  $clinit_MessageView_MessageViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator();
  Object_0.call(this);
  this.$init_175();
}

defineClass(122, 1, {308:1, 1:1}, MessageView_MessageViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator);
_.$init_175 = function $init_175(){
}
;
_.style_3 = function style_5(){
  return get_8();
}
;
_.styleInitializer_1 = function styleInitializer_1(){
  $clinit_MessageView_MessageViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator();
  style_4 = new MessageView_MessageViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1(this);
}
;
var _instance0_1, style_4;
var Lcom_mckesson_mg2_client_patient_MessageView_1MessageViewUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator_2_classLit = createForClass('com.mckesson.mg2.client.patient', 'MessageView_MessageViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator', 122, Ljava_lang_Object_2_classLit);
function $clinit_MessageView_MessageViewUiBinderImpl_GenCss_style(){
  $clinit_MessageView_MessageViewUiBinderImpl_GenCss_style = emptyMethod;
}

var Lcom_mckesson_mg2_client_patient_MessageView_1MessageViewUiBinderImpl_1GenCss_1style_2_classLit = createForInterface('com.mckesson.mg2.client.patient', 'MessageView_MessageViewUiBinderImpl_GenCss_style');
function $clinit_MessageView_MessageViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){
  $clinit_MessageView_MessageViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1 = emptyMethod;
  $clinit_Object();
}

function MessageView_MessageViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1(this$0){
  $clinit_MessageView_MessageViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1();
  this.this$01 = this$0;
  Object_0.call(this);
  this.$init_176();
}

defineClass(299, 1, {1:1}, MessageView_MessageViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1);
_.$init_176 = function $init_176(){
}
;
_.ensureInjected = function ensureInjected_1(){
  if (!this.injected) {
    this.injected = true;
    inject_1(this.getText());
    return true;
  }
  return false;
}
;
_.getName = function getName_5(){
  return 'style';
}
;
_.getText = function getText_1(){
  return '';
}
;
_.injected = false;
var Lcom_mckesson_mg2_client_patient_MessageView_1MessageViewUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.mckesson.mg2.client.patient', 'MessageView_MessageViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 299, Ljava_lang_Object_2_classLit);
function $clinit_MessageView_MessageViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){
  $clinit_MessageView_MessageViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;
  $clinit_Object();
  {
    ($clinit_MessageView_MessageViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator() , _instance0_1).styleInitializer_1();
  }
}

function get_8(){
  $clinit_MessageView_MessageViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer();
  return $clinit_MessageView_MessageViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator() , style_4;
}

defineClass(649, 1, {1:1});
var Lcom_mckesson_mg2_client_patient_MessageView_1MessageViewUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$styleInitializer_2_classLit = createForClass('com.mckesson.mg2.client.patient', 'MessageView_MessageViewUiBinderImpl_GenBundle_default_InlineClientBundleGenerator/styleInitializer', 649, Ljava_lang_Object_2_classLit);
function $clinit_MessageView_MessageViewUiBinderImpl_TemplateImpl(){
  $clinit_MessageView_MessageViewUiBinderImpl_TemplateImpl = emptyMethod;
  $clinit_Object();
}

function MessageView_MessageViewUiBinderImpl_TemplateImpl(){
  $clinit_MessageView_MessageViewUiBinderImpl_TemplateImpl();
  Object_0.call(this);
  this.$init_177();
}

defineClass(295, 1, {665:1, 1:1}, MessageView_MessageViewUiBinderImpl_TemplateImpl);
_.$init_177 = function $init_177(){
}
;
_.html1_0 = function html1_1(arg0){
  var sb;
  sb = new StringBuilder;
  sb.append_2("<style is='custom-style'><\/style>   <span id='");
  sb.append_2(htmlEscape(arg0));
  sb.append_2("'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.toString_0());
}
;
var Lcom_mckesson_mg2_client_patient_MessageView_1MessageViewUiBinderImpl_1TemplateImpl_2_classLit = createForClass('com.mckesson.mg2.client.patient', 'MessageView_MessageViewUiBinderImpl_TemplateImpl', 295, Ljava_lang_Object_2_classLit);
function $clinit_NavMenuView(){
  $clinit_NavMenuView = emptyMethod;
  $clinit_Composite();
  log_9 = new MG2Log(Lcom_mckesson_mg2_client_patient_NavMenuView_2_classLit);
}

function NavMenuView(){
  $clinit_NavMenuView();
  Composite.call(this);
  this.$init_178();
}

defineClass(81, 66, {15:1, 40:1, 6:1, 1:1});
_.$init_178 = function $init_178(){
}
;
_.clear_0 = function clear_2(){
  get_4().clear_0();
}
;
_.gotoCalendarView = function gotoCalendarView(){
  log_9.info('gotoCalendarView()');
  this.clear_0();
  get_4().add_1(castTo(castTo(new CalendarView, 6), 6));
}
;
_.gotoMessageView = function gotoMessageView(){
  log_9.info('gotoMessageView()');
  this.clear_0();
  get_4().add_1(castTo(castTo(new MessageView, 6), 6));
}
;
_.gotoPatientSearchView = function gotoPatientSearchView(){
  log_9.info('gotoPatientSearchView()');
  this.clear_0();
  get_4().add_1(castTo(castTo(new PatientSearchView, 6), 6));
}
;
_.gotoWorklistView = function gotoWorklistView(){
  log_9.info('gotoWorklistView()');
  this.clear_0();
  get_4().add_1(castTo(castTo(new LabWorklistView, 6), 6));
}
;
_.initWidget = function initWidget_0(widget){
  getClassPrototype(66).initWidget.call(this, widget);
  this.view.setHeight(getClientHeight() + 'px');
  this.navPatientActive.addClickHandler(new NavMenuView$1(this));
  this.navWorklist.addClickHandler(new NavMenuView$2(this));
  this.navMessage.addClickHandler(new NavMenuView$3(this));
  this.navCalendar.addClickHandler(new NavMenuView$4(this));
}
;
var log_9;
var Lcom_mckesson_mg2_client_patient_NavMenuView_2_classLit = createForClass('com.mckesson.mg2.client.patient', 'NavMenuView', 81, Lcom_google_gwt_user_client_ui_Composite_2_classLit);
function $clinit_NavMenuView$1(){
  $clinit_NavMenuView$1 = emptyMethod;
  $clinit_Object();
}

function NavMenuView$1(this$0){
  $clinit_NavMenuView$1();
  this.this$01 = this$0;
  Object_0.call(this);
  this.$init_179();
}

defineClass(273, 1, {41:1, 19:1, 1:1}, NavMenuView$1);
_.$init_179 = function $init_179(){
}
;
_.onClick = function onClick_2(event_0){
  this.this$01.gotoPatientSearchView();
}
;
var Lcom_mckesson_mg2_client_patient_NavMenuView$1_2_classLit = createForClass('com.mckesson.mg2.client.patient', 'NavMenuView/1', 273, Ljava_lang_Object_2_classLit);
function $clinit_NavMenuView$2(){
  $clinit_NavMenuView$2 = emptyMethod;
  $clinit_Object();
}

function NavMenuView$2(this$0){
  $clinit_NavMenuView$2();
  this.this$01 = this$0;
  Object_0.call(this);
  this.$init_180();
}

defineClass(274, 1, {41:1, 19:1, 1:1}, NavMenuView$2);
_.$init_180 = function $init_180(){
}
;
_.onClick = function onClick_3(event_0){
  this.this$01.gotoWorklistView();
}
;
var Lcom_mckesson_mg2_client_patient_NavMenuView$2_2_classLit = createForClass('com.mckesson.mg2.client.patient', 'NavMenuView/2', 274, Ljava_lang_Object_2_classLit);
function $clinit_NavMenuView$3(){
  $clinit_NavMenuView$3 = emptyMethod;
  $clinit_Object();
}

function NavMenuView$3(this$0){
  $clinit_NavMenuView$3();
  this.this$01 = this$0;
  Object_0.call(this);
  this.$init_181();
}

defineClass(275, 1, {41:1, 19:1, 1:1}, NavMenuView$3);
_.$init_181 = function $init_181(){
}
;
_.onClick = function onClick_4(event_0){
  this.this$01.gotoMessageView();
}
;
var Lcom_mckesson_mg2_client_patient_NavMenuView$3_2_classLit = createForClass('com.mckesson.mg2.client.patient', 'NavMenuView/3', 275, Ljava_lang_Object_2_classLit);
function $clinit_NavMenuView$4(){
  $clinit_NavMenuView$4 = emptyMethod;
  $clinit_Object();
}

function NavMenuView$4(this$0){
  $clinit_NavMenuView$4();
  this.this$01 = this$0;
  Object_0.call(this);
  this.$init_182();
}

defineClass(276, 1, {41:1, 19:1, 1:1}, NavMenuView$4);
_.$init_182 = function $init_182(){
}
;
_.onClick = function onClick_5(event_0){
  this.this$01.gotoCalendarView();
}
;
var Lcom_mckesson_mg2_client_patient_NavMenuView$4_2_classLit = createForClass('com.mckesson.mg2.client.patient', 'NavMenuView/4', 276, Ljava_lang_Object_2_classLit);
function $clinit_PatientSearchView(){
  $clinit_PatientSearchView = emptyMethod;
  $clinit_NavMenuView();
  log_10 = new MG2Log(Lcom_mckesson_mg2_client_patient_PatientSearchView_2_classLit);
  uiBinder_2 = castTo(new PatientSearchView_PatientSearchViewUiBinderImpl, 659);
}

function PatientSearchView(){
  $clinit_PatientSearchView();
  NavMenuView.call(this);
  this.$init_183();
  this.initWidget(castTo(uiBinder_2.createAndBindUi(this), 6));
  this.list.setItems(getPatients());
}

defineClass(52, 81, {15:1, 40:1, 6:1, 52:1, 1:1}, PatientSearchView);
_.$init_183 = function $init_183(){
}
;
_.initWidget = function initWidget_1(widget){
  getClassPrototype(81).initWidget.call(this, widget);
  this.search.addClickHandler(new PatientSearchView$1(this));
}
;
var log_10, uiBinder_2;
var Lcom_mckesson_mg2_client_patient_PatientSearchView_2_classLit = createForClass('com.mckesson.mg2.client.patient', 'PatientSearchView', 52, Lcom_mckesson_mg2_client_patient_NavMenuView_2_classLit);
function $clinit_PatientSearchView$1(){
  $clinit_PatientSearchView$1 = emptyMethod;
  $clinit_Object();
}

function PatientSearchView$1(this$0){
  $clinit_PatientSearchView$1();
  this.this$01 = this$0;
  Object_0.call(this);
  this.$init_184();
}

defineClass(272, 1, {41:1, 19:1, 1:1}, PatientSearchView$1);
_.$init_184 = function $init_184(){
}
;
_.onClick = function onClick_6(event_0){
  this.this$01.gotoPatientSearchView();
}
;
var Lcom_mckesson_mg2_client_patient_PatientSearchView$1_2_classLit = createForClass('com.mckesson.mg2.client.patient', 'PatientSearchView/1', 272, Ljava_lang_Object_2_classLit);
function $clinit_PatientSearchView$PatientSearchViewUiBinder(){
  $clinit_PatientSearchView$PatientSearchViewUiBinder = emptyMethod;
}

var Lcom_mckesson_mg2_client_patient_PatientSearchView$PatientSearchViewUiBinder_2_classLit = createForInterface('com.mckesson.mg2.client.patient', 'PatientSearchView/PatientSearchViewUiBinder');
function $clinit_PatientSearchView_PatientSearchViewUiBinderImpl(){
  $clinit_PatientSearchView_PatientSearchViewUiBinderImpl = emptyMethod;
  $clinit_Object();
}

function PatientSearchView_PatientSearchViewUiBinderImpl(){
  $clinit_PatientSearchView_PatientSearchViewUiBinderImpl();
  Object_0.call(this);
  this.$init_185();
}

defineClass(278, 1, {659:1, 1:1}, PatientSearchView_PatientSearchViewUiBinderImpl);
_.$init_185 = function $init_185(){
  this.template = castTo(new PatientSearchView_PatientSearchViewUiBinderImpl_TemplateImpl, 660);
}
;
_.createAndBindUi = function createAndBindUi_6(owner){
  return this.createAndBindUi_3(castTo(owner, 52));
}
;
_.createAndBindUi_3 = function createAndBindUi_5(owner){
  return (new PatientSearchView_PatientSearchViewUiBinderImpl$Widgets(this, owner)).get_view_0();
}
;
var Lcom_mckesson_mg2_client_patient_PatientSearchView_1PatientSearchViewUiBinderImpl_2_classLit = createForClass('com.mckesson.mg2.client.patient', 'PatientSearchView_PatientSearchViewUiBinderImpl', 278, Ljava_lang_Object_2_classLit);
function $clinit_PatientSearchView_PatientSearchViewUiBinderImpl$Template(){
  $clinit_PatientSearchView_PatientSearchViewUiBinderImpl$Template = emptyMethod;
}

var Lcom_mckesson_mg2_client_patient_PatientSearchView_1PatientSearchViewUiBinderImpl$Template_2_classLit = createForInterface('com.mckesson.mg2.client.patient', 'PatientSearchView_PatientSearchViewUiBinderImpl/Template');
function $clinit_PatientSearchView_PatientSearchViewUiBinderImpl$Widgets(){
  $clinit_PatientSearchView_PatientSearchViewUiBinderImpl$Widgets = emptyMethod;
  $clinit_Object();
}

function PatientSearchView_PatientSearchViewUiBinderImpl$Widgets(this$0, owner){
  $clinit_PatientSearchView_PatientSearchViewUiBinderImpl$Widgets();
  this.this$01 = this$0;
  Object_0.call(this);
  this.$init_186();
  this.owner = owner;
  this.build_domId1_0();
  this.build_domId2_0();
  this.build_domId5();
  this.build_domId6();
  this.build_domId7();
  this.build_domId8();
  this.build_domId9();
  this.build_domId0_2();
  this.build_domId3();
  this.build_domId4();
  this.build_domId1Element_0();
  this.build_domId2Element_0();
  this.build_domId5Element();
  this.build_domId6Element();
  this.build_domId7Element();
  this.build_domId8Element();
  this.build_domId9Element();
  this.build_domId0Element_2();
  this.build_domId3Element();
  this.build_domId4Element();
}

defineClass(279, 1, {1:1}, PatientSearchView_PatientSearchViewUiBinderImpl$Widgets);
_.$init_186 = function $init_186(){
}
;
_.build_domId0_2 = function build_domId0_2(){
  this.domId0 = $createUniqueId(get_1());
  return this.domId0;
}
;
_.build_domId0Element_2 = function build_domId0Element_2(){
  this.domId0Element = new LazyDomElement(this.get_domId0_2());
  return this.domId0Element;
}
;
_.build_domId1_0 = function build_domId1_0(){
  this.domId1 = $createUniqueId(get_1());
  return this.domId1;
}
;
_.build_domId1Element_0 = function build_domId1Element_0(){
  this.domId1Element = new LazyDomElement(this.get_domId1_0());
  return this.domId1Element;
}
;
_.build_domId2_0 = function build_domId2_0(){
  this.domId2 = $createUniqueId(get_1());
  return this.domId2;
}
;
_.build_domId2Element_0 = function build_domId2Element_0(){
  this.domId2Element = new LazyDomElement(this.get_domId2_0());
  return this.domId2Element;
}
;
_.build_domId3 = function build_domId3(){
  this.domId3 = $createUniqueId(get_1());
  return this.domId3;
}
;
_.build_domId3Element = function build_domId3Element(){
  this.domId3Element = new LazyDomElement(this.get_domId3());
  return this.domId3Element;
}
;
_.build_domId4 = function build_domId4(){
  this.domId4 = $createUniqueId(get_1());
  return this.domId4;
}
;
_.build_domId4Element = function build_domId4Element(){
  this.domId4Element = new LazyDomElement(this.get_domId4());
  return this.domId4Element;
}
;
_.build_domId5 = function build_domId5(){
  this.domId5 = $createUniqueId(get_1());
  return this.domId5;
}
;
_.build_domId5Element = function build_domId5Element(){
  this.domId5Element = new LazyDomElement(this.get_domId5());
  return this.domId5Element;
}
;
_.build_domId6 = function build_domId6(){
  this.domId6 = $createUniqueId(get_1());
  return this.domId6;
}
;
_.build_domId6Element = function build_domId6Element(){
  this.domId6Element = new LazyDomElement(this.get_domId6());
  return this.domId6Element;
}
;
_.build_domId7 = function build_domId7(){
  this.domId7 = $createUniqueId(get_1());
  return this.domId7;
}
;
_.build_domId7Element = function build_domId7Element(){
  this.domId7Element = new LazyDomElement(this.get_domId7());
  return this.domId7Element;
}
;
_.build_domId8 = function build_domId8(){
  this.domId8 = $createUniqueId(get_1());
  return this.domId8;
}
;
_.build_domId8Element = function build_domId8Element(){
  this.domId8Element = new LazyDomElement(this.get_domId8());
  return this.domId8Element;
}
;
_.build_domId9 = function build_domId9(){
  this.domId9 = $createUniqueId(get_1());
  return this.domId9;
}
;
_.build_domId9Element = function build_domId9Element(){
  this.domId9Element = new LazyDomElement(this.get_domId9());
  return this.domId9Element;
}
;
_.build_f_PaperInput2_0 = function build_f_PaperInput2_0(){
  var f_PaperInput2;
  f_PaperInput2 = new PaperInput(this.template_html1_0().asString());
  f_PaperInput2.setLabel('Search patient name or MRN');
  f_PaperInput2.setType('search');
  f_PaperInput2.setClass('textbox');
  return f_PaperInput2;
}
;
_.build_f_PaperToolbar1 = function build_f_PaperToolbar1(){
  var __attachRecord__, f_PaperToolbar1;
  f_PaperToolbar1 = new PaperToolbar(this.template_html3_0().asString());
  f_PaperToolbar1.addStyleName('header');
  {
    __attachRecord__ = attachToDom(f_PaperToolbar1.getElement());
    this.get_domId1Element_0().get_1();
    this.get_domId2Element_0().get_1();
    __attachRecord__.detach();
  }
  f_PaperToolbar1.addAndReplaceElement(this.get_f_PaperInput2_0(), this.get_domId1Element_0().get_1());
  f_PaperToolbar1.addAndReplaceElement(this.get_search(), this.get_domId2Element_0().get_1());
  return f_PaperToolbar1;
}
;
_.build_f_PaperToolbar3 = function build_f_PaperToolbar3(){
  var __attachRecord__, f_PaperToolbar3;
  f_PaperToolbar3 = new PaperToolbar(this.template_html10().asString());
  f_PaperToolbar3.addStyleName('footer');
  {
    __attachRecord__ = attachToDom(f_PaperToolbar3.getElement());
    this.get_domId5Element().get_1();
    this.get_domId6Element().get_1();
    this.get_domId7Element().get_1();
    this.get_domId8Element().get_1();
    this.get_domId9Element().get_1();
    __attachRecord__.detach();
  }
  f_PaperToolbar3.addAndReplaceElement(this.get_navPatientActive(), this.get_domId5Element().get_1());
  f_PaperToolbar3.addAndReplaceElement(this.get_navWorklist(), this.get_domId6Element().get_1());
  f_PaperToolbar3.addAndReplaceElement(this.get_navMessage(), this.get_domId7Element().get_1());
  f_PaperToolbar3.addAndReplaceElement(this.get_navCalendar(), this.get_domId8Element().get_1());
  f_PaperToolbar3.addAndReplaceElement(this.get_navHamburgerMenu(), this.get_domId9Element().get_1());
  return f_PaperToolbar3;
}
;
_.build_list = function build_list(){
  var list;
  list = new IronList(this.template_html4_0().asString());
  list.addStyleName('mid');
  list.setAs('item');
  this.owner.list = list;
  return list;
}
;
_.build_navCalendar = function build_navCalendar(){
  var navCalendar;
  navCalendar = new PaperIconButton(this.template_html8().asString());
  navCalendar.setSrc('images/navCalendar.png');
  navCalendar.setTitle('Calendar');
  navCalendar.setAriaLabel('Calendar');
  this.owner.navCalendar = navCalendar;
  return navCalendar;
}
;
_.build_navHamburgerMenu = function build_navHamburgerMenu(){
  var navHamburgerMenu;
  navHamburgerMenu = new PaperIconButton(this.template_html9().asString());
  navHamburgerMenu.setSrc('images/navHamburgerMenu.png');
  navHamburgerMenu.setTitle('Nav More');
  navHamburgerMenu.setAriaLabel('Nav More');
  this.owner.navHamburgerMenu = navHamburgerMenu;
  return navHamburgerMenu;
}
;
_.build_navMessage = function build_navMessage(){
  var navMessage;
  navMessage = new PaperIconButton(this.template_html7().asString());
  navMessage.setSrc('images/navMessage.png');
  navMessage.setTitle('Messaging');
  navMessage.setAriaLabel('Messaging');
  this.owner.navMessage = navMessage;
  return navMessage;
}
;
_.build_navPatientActive = function build_navPatientActive(){
  var navPatientActive;
  navPatientActive = new PaperIconButton(this.template_html5().asString());
  navPatientActive.setSrc('images/navPatientActive.png');
  navPatientActive.setTitle('Patient Search');
  navPatientActive.setAriaLabel('Patient Search');
  this.owner.navPatientActive = navPatientActive;
  return navPatientActive;
}
;
_.build_navWorklist = function build_navWorklist(){
  var navWorklist;
  navWorklist = new PaperIconButton(this.template_html6().asString());
  navWorklist.setSrc('images/navWorklist.png');
  navWorklist.setTitle('Worklists');
  navWorklist.setAriaLabel('Worklists');
  this.owner.navWorklist = navWorklist;
  return navWorklist;
}
;
_.build_search = function build_search(){
  var search;
  search = new PaperIconButton(this.template_html2_0().asString());
  search.setIcon('search');
  this.owner.search = search;
  return search;
}
;
_.build_view_0 = function build_view_0(){
  var __attachRecord__, view;
  view = new HTMLPanel(this.template_html11().asString());
  view.setStyleName('view');
  {
    __attachRecord__ = attachToDom(view.getElement());
    this.get_domId0Element_2().get_1();
    this.get_domId3Element().get_1();
    this.get_domId4Element().get_1();
    __attachRecord__.detach();
  }
  view.addAndReplaceElement(this.get_f_PaperToolbar1(), this.get_domId0Element_2().get_1());
  view.addAndReplaceElement(this.get_list(), this.get_domId3Element().get_1());
  view.addAndReplaceElement(this.get_f_PaperToolbar3(), this.get_domId4Element().get_1());
  this.owner.view = view;
  return view;
}
;
_.get_domId0_2 = function get_domId0_2(){
  return this.domId0;
}
;
_.get_domId0Element_2 = function get_domId0Element_2(){
  return this.domId0Element;
}
;
_.get_domId1_0 = function get_domId1_0(){
  return this.domId1;
}
;
_.get_domId1Element_0 = function get_domId1Element_0(){
  return this.domId1Element;
}
;
_.get_domId2_0 = function get_domId2_0(){
  return this.domId2;
}
;
_.get_domId2Element_0 = function get_domId2Element_0(){
  return this.domId2Element;
}
;
_.get_domId3 = function get_domId3(){
  return this.domId3;
}
;
_.get_domId3Element = function get_domId3Element(){
  return this.domId3Element;
}
;
_.get_domId4 = function get_domId4(){
  return this.domId4;
}
;
_.get_domId4Element = function get_domId4Element(){
  return this.domId4Element;
}
;
_.get_domId5 = function get_domId5(){
  return this.domId5;
}
;
_.get_domId5Element = function get_domId5Element(){
  return this.domId5Element;
}
;
_.get_domId6 = function get_domId6(){
  return this.domId6;
}
;
_.get_domId6Element = function get_domId6Element(){
  return this.domId6Element;
}
;
_.get_domId7 = function get_domId7(){
  return this.domId7;
}
;
_.get_domId7Element = function get_domId7Element(){
  return this.domId7Element;
}
;
_.get_domId8 = function get_domId8(){
  return this.domId8;
}
;
_.get_domId8Element = function get_domId8Element(){
  return this.domId8Element;
}
;
_.get_domId9 = function get_domId9(){
  return this.domId9;
}
;
_.get_domId9Element = function get_domId9Element(){
  return this.domId9Element;
}
;
_.get_f_PaperInput2_0 = function get_f_PaperInput2_0(){
  return this.build_f_PaperInput2_0();
}
;
_.get_f_PaperToolbar1 = function get_f_PaperToolbar1(){
  return this.build_f_PaperToolbar1();
}
;
_.get_f_PaperToolbar3 = function get_f_PaperToolbar3(){
  return this.build_f_PaperToolbar3();
}
;
_.get_list = function get_list(){
  return this.build_list();
}
;
_.get_navCalendar = function get_navCalendar(){
  return this.build_navCalendar();
}
;
_.get_navHamburgerMenu = function get_navHamburgerMenu(){
  return this.build_navHamburgerMenu();
}
;
_.get_navMessage = function get_navMessage(){
  return this.build_navMessage();
}
;
_.get_navPatientActive = function get_navPatientActive(){
  return this.build_navPatientActive();
}
;
_.get_navWorklist = function get_navWorklist(){
  return this.build_navWorklist();
}
;
_.get_search = function get_search(){
  return this.build_search();
}
;
_.get_view_0 = function get_view_0(){
  $clinit_PatientSearchView_PatientSearchViewUiBinderImpl$Widgets();
  return this.build_view_0();
}
;
_.template_html1_0 = function template_html1_2(){
  return this.this$01.template.html1();
}
;
_.template_html10 = function template_html10(){
  return this.this$01.template.html10(this.get_domId5(), this.get_domId6(), this.get_domId7(), this.get_domId8(), this.get_domId9());
}
;
_.template_html11 = function template_html11(){
  return this.this$01.template.html11(this.get_domId0_2(), this.get_domId3(), this.get_domId4());
}
;
_.template_html2_0 = function template_html2_0(){
  return this.this$01.template.html2();
}
;
_.template_html3_0 = function template_html3_0(){
  return this.this$01.template.html3_0(this.get_domId1_0(), this.get_domId2_0());
}
;
_.template_html4_0 = function template_html4_0(){
  return this.this$01.template.html4_0();
}
;
_.template_html5 = function template_html5(){
  return this.this$01.template.html5();
}
;
_.template_html6 = function template_html6(){
  return this.this$01.template.html6();
}
;
_.template_html7 = function template_html7(){
  return this.this$01.template.html7();
}
;
_.template_html8 = function template_html8(){
  return this.this$01.template.html8();
}
;
_.template_html9 = function template_html9(){
  return this.this$01.template.html9();
}
;
var Lcom_mckesson_mg2_client_patient_PatientSearchView_1PatientSearchViewUiBinderImpl$Widgets_2_classLit = createForClass('com.mckesson.mg2.client.patient', 'PatientSearchView_PatientSearchViewUiBinderImpl/Widgets', 279, Ljava_lang_Object_2_classLit);
function $clinit_PatientSearchView_PatientSearchViewUiBinderImpl_TemplateImpl(){
  $clinit_PatientSearchView_PatientSearchViewUiBinderImpl_TemplateImpl = emptyMethod;
  $clinit_Object();
}

function PatientSearchView_PatientSearchViewUiBinderImpl_TemplateImpl(){
  $clinit_PatientSearchView_PatientSearchViewUiBinderImpl_TemplateImpl();
  Object_0.call(this);
  this.$init_187();
}

defineClass(281, 1, {660:1, 1:1}, PatientSearchView_PatientSearchViewUiBinderImpl_TemplateImpl);
_.$init_187 = function $init_187(){
}
;
_.html1 = function html1_2(){
  var sb;
  sb = new StringBuilder;
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.toString_0());
}
;
_.html10 = function html10(arg0, arg1, arg2, arg3, arg4){
  var sb;
  sb = new StringBuilder;
  sb.append_2("<span id='");
  sb.append_2(htmlEscape(arg0));
  sb.append_2("'><\/span>  <span id='");
  sb.append_2(htmlEscape(arg1));
  sb.append_2("'><\/span>  <span id='");
  sb.append_2(htmlEscape(arg2));
  sb.append_2("'><\/span>  <span id='");
  sb.append_2(htmlEscape(arg3));
  sb.append_2("'><\/span>  <span id='");
  sb.append_2(htmlEscape(arg4));
  sb.append_2("'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.toString_0());
}
;
_.html11 = function html11(arg0, arg1, arg2){
  var sb;
  sb = new StringBuilder;
  sb.append_2("<style is='custom-style'> .view { background-color: #ffffff; width: 100%; margin: 0; padding: 0; overflow:hidden; display: flex; flex-direction: column; align-items: stretch; } .header { --paper-toolbar-background: #005a8c; flex: 0 1 auto; } .mid { flex: 1 1 auto; } .footer { --paper-toolbar-background: #005a8c; flex: 0 1 auto; } .footer paper-toolbar { --paper-toolbar-background: #005a8c; } .footer #topBar { @apply(--layout-fit); @apply(--layout-horizontal); justify-content: space-between; } /* header */ .textbox { flex: 1; } /* list */ iron-list { background-color: var(--paper-grey-200, #eee); padding-bottom: 16px; } .mid .item { @apply(--layout-horizontal); margin: 16px 16px 0 16px; padding: 10px; border-radius: 8px; background-color: white; border: 1px solid #ddd; } .mid .avatar { height: 40px; width: 40px; border-radius: 20px; box-sizing: border-box; background-color: #DDD; } .mid .pad { padding: 0 16px; @apply(--layout-flex); @apply(--layout-vertical); } .mid .primary { font-size: 16px; font-weight: bold; } .mid .secondary { font-size: 14px; } .mid .dim { color: gray; } <\/style>  <span id='");
  sb.append_2(htmlEscape(arg0));
  sb.append_2("'><\/span> <span id='");
  sb.append_2(htmlEscape(arg1));
  sb.append_2("'><\/span>  <span id='");
  sb.append_2(htmlEscape(arg2));
  sb.append_2("'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.toString_0());
}
;
_.html2 = function html2_0(){
  var sb;
  sb = new StringBuilder;
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.toString_0());
}
;
_.html3_0 = function html3_0(arg0, arg1){
  var sb;
  sb = new StringBuilder;
  sb.append_2("<span id='");
  sb.append_2(htmlEscape(arg0));
  sb.append_2("'><\/span> <span id='");
  sb.append_2(htmlEscape(arg1));
  sb.append_2("'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.toString_0());
}
;
_.html4_0 = function html4_0(){
  var sb;
  sb = new StringBuilder;
  sb.append_2("<template> <div> <div class='item'> <img class='avatar' src='[[item.avatar]]'> <div class='pad'> <div class='primary'>[[item.lastName]], [[item.firstName]] ([[item.gender]]/[[item.age]])<\/div> <div class='secondary'><b>MRN:<\/b>[[item.primaryId]] <b>DOB:<\/b>[[item.dob]]<\/div> <div class='secondary dim'>[[item.longText]]<\/div> <\/div> <\/div> <\/div> <\/template>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.toString_0());
}
;
_.html5 = function html5(){
  var sb;
  sb = new StringBuilder;
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.toString_0());
}
;
_.html6 = function html6(){
  var sb;
  sb = new StringBuilder;
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.toString_0());
}
;
_.html7 = function html7(){
  var sb;
  sb = new StringBuilder;
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.toString_0());
}
;
_.html8 = function html8(){
  var sb;
  sb = new StringBuilder;
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.toString_0());
}
;
_.html9 = function html9(){
  var sb;
  sb = new StringBuilder;
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.toString_0());
}
;
var Lcom_mckesson_mg2_client_patient_PatientSearchView_1PatientSearchViewUiBinderImpl_1TemplateImpl_2_classLit = createForClass('com.mckesson.mg2.client.patient', 'PatientSearchView_PatientSearchViewUiBinderImpl_TemplateImpl', 281, Ljava_lang_Object_2_classLit);
function $clinit_AppContext(){
  $clinit_AppContext = emptyMethod;
  $clinit_Object();
  log_11 = new MG2Log(Lcom_mckesson_mg2_client_utils_AppContext_2_classLit);
}

function isDesktopBrowser(){
  $clinit_AppContext();
  return window.isCordovaApp === undefined;
}

defineClass(376, 1, {1:1});
var log_11;
var Lcom_mckesson_mg2_client_utils_AppContext_2_classLit = createForClass('com.mckesson.mg2.client.utils', 'AppContext', 376, Ljava_lang_Object_2_classLit);
function $clinit_AppStatusEvent(){
  $clinit_AppStatusEvent = emptyMethod;
  $clinit_GwtEvent();
  TYPE_19 = new GwtEvent$Type;
}

function AppStatusEvent(AppStatusLevel, message){
  $clinit_AppStatusEvent();
  GwtEvent.call(this);
  this.$init_188();
  this.appStatusLevel = AppStatusLevel;
  this.message_0 = message;
  this.isEphemeral = false;
}

defineClass(106, 17, {1:1}, AppStatusEvent);
_.$init_188 = function $init_188(){
}
;
_.dispatch_0 = function dispatch_38(handler){
  this.dispatch_20(castTo(handler, 679));
}
;
_.dispatch_20 = function dispatch_39(handler){
  switch (this.appStatusLevel.ordinal_0()) {
    case ($clinit_AppStatusLevel() , ERROR_0).ordinal_0():
    case ($clinit_AppStatusLevel() , INFO).ordinal_0():
    case ($clinit_AppStatusLevel() , WARN_0).ordinal_0():
      handler.showMessage(this.appStatusLevel, this.message_0, this.isEphemeral);
      break;
    case ($clinit_AppStatusLevel() , LOADING_0).ordinal_0():
      handler.showLoading(this.message_0);
      break;
    case ($clinit_AppStatusLevel() , CLEAR).ordinal_0():
    default:handler.clear_0();
      break;
  }
}
;
_.getAssociatedType_0 = function getAssociatedType_20(){
  return TYPE_19;
}
;
_.getMessage = function getMessage_2(){
  return this.message_0;
}
;
_.isEphemeral = false;
var TYPE_19;
var Lcom_mckesson_mg2_client_utils_AppStatusEvent_2_classLit = createForClass('com.mckesson.mg2.client.utils', 'AppStatusEvent', 106, Lcom_google_gwt_event_shared_GwtEvent_2_classLit);
function $clinit_AppStatusEvent$Handler(){
  $clinit_AppStatusEvent$Handler = emptyMethod;
}

var Lcom_mckesson_mg2_client_utils_AppStatusEvent$Handler_2_classLit = createForInterface('com.mckesson.mg2.client.utils', 'AppStatusEvent/Handler');
function $clinit_AppStatusLevel(){
  $clinit_AppStatusLevel = emptyMethod;
  $clinit_Enum();
  CLEAR = new AppStatusLevel_0('CLEAR', 0);
  ERROR_0 = new AppStatusLevel_0('ERROR', 1);
  INFO = new AppStatusLevel_0('INFO', 2);
  LOADING_0 = new AppStatusLevel_0('LOADING', 3);
  WARN_0 = new AppStatusLevel_0('WARN', 4);
}

function AppStatusLevel_0(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
  this.$init_189();
}

function valueOf_3(name_0){
  $clinit_AppStatusLevel();
  return valueOf(($clinit_AppStatusLevel$Map() , $MAP_2), name_0);
}

function values_3(){
  $clinit_AppStatusLevel();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_mckesson_mg2_client_utils_AppStatusLevel_2_classLit, 1), {3:1, 1:1, 7:1}, 37, 0, [CLEAR, ERROR_0, INFO, LOADING_0, WARN_0]);
}

defineClass(37, 5, {37:1, 3:1, 4:1, 5:1, 1:1}, AppStatusLevel_0);
_.$init_189 = function $init_189(){
}
;
var CLEAR, ERROR_0, INFO, LOADING_0, WARN_0;
var Lcom_mckesson_mg2_client_utils_AppStatusLevel_2_classLit = createForEnum('com.mckesson.mg2.client.utils', 'AppStatusLevel', 37, Ljava_lang_Enum_2_classLit, values_3, valueOf_3);
function $clinit_AppStatusLevel$Map(){
  $clinit_AppStatusLevel$Map = emptyMethod;
  $MAP_2 = createValueOfMap(values_3());
}

defineClass(455, 1, {1:1});
var $MAP_2;
var Lcom_mckesson_mg2_client_utils_AppStatusLevel$Map_2_classLit = createForClass('com.mckesson.mg2.client.utils', 'AppStatusLevel/Map', 455, Ljava_lang_Object_2_classLit);
function $clinit_MG2Log(){
  $clinit_MG2Log = emptyMethod;
  $clinit_Object();
}

function MG2Log(clazz){
  $clinit_MG2Log();
  MG2Log_0.call(this, substring_I_Ljava_lang_String___devirtual$(clazz.getName(), lastIndexOf_Ljava_lang_String__I__devirtual$(clazz.getName(), '.') + 1));
}

function MG2Log_0(where){
  Object_0.call(this);
  this.$init_190();
  this.where = jsEquals(where, null) || isEmpty__Z__devirtual$(where)?'':where;
  this.instanceLabel = null;
}

function consolelog(s){
  console.log(s);
}

function log_12(s){
  if (isDesktopBrowser()) {
    consolelog(s);
  }
}

defineClass(31, 1, {1:1}, MG2Log);
_.$init_190 = function $init_190(){
}
;
_.getWhere = function getWhere(){
  return this.where + ('' + (jsEquals(this.instanceLabel, null)?'':'[' + this.instanceLabel + ']')) + ':  ';
}
;
_.info = function info_0(s){
  log_12(this.getWhere() + ('' + s));
}
;
var Lcom_mckesson_mg2_client_utils_MG2Log_2_classLit = createForClass('com.mckesson.mg2.client.utils', 'MG2Log', 31, Ljava_lang_Object_2_classLit);
function $clinit_LabWorklistView(){
  $clinit_LabWorklistView = emptyMethod;
  $clinit_NavMenuView();
  log_13 = new MG2Log(Lcom_mckesson_mg2_client_worklist_LabWorklistView_2_classLit);
}

function LabWorklistView(){
  $clinit_LabWorklistView();
  NavMenuView.call(this);
  this.$init_191();
  this.initWidget(castTo(this.uiBinder.createAndBindUi(this), 6));
  log_13.info('LabWorklistView()');
}

defineClass(101, 81, {15:1, 40:1, 6:1, 101:1, 1:1}, LabWorklistView);
_.$init_191 = function $init_191(){
  this.uiBinder = castTo(new LabWorklistView_LabWorklistViewUiBinderImpl, 661);
}
;
_.initWidget = function initWidget_2(widget){
  getClassPrototype(81).initWidget.call(this, widget);
}
;
_.onLoad = function onLoad_3(){
  getClassPrototype(6).onLoad.call(this);
  this.list.setItems(getLabWorklists());
}
;
var log_13;
var Lcom_mckesson_mg2_client_worklist_LabWorklistView_2_classLit = createForClass('com.mckesson.mg2.client.worklist', 'LabWorklistView', 101, Lcom_mckesson_mg2_client_patient_NavMenuView_2_classLit);
function $clinit_LabWorklistView$LabWorklistViewUiBinder(){
  $clinit_LabWorklistView$LabWorklistViewUiBinder = emptyMethod;
}

var Lcom_mckesson_mg2_client_worklist_LabWorklistView$LabWorklistViewUiBinder_2_classLit = createForInterface('com.mckesson.mg2.client.worklist', 'LabWorklistView/LabWorklistViewUiBinder');
function $clinit_LabWorklistView_LabWorklistViewUiBinderImpl(){
  $clinit_LabWorklistView_LabWorklistViewUiBinderImpl = emptyMethod;
  $clinit_Object();
}

function LabWorklistView_LabWorklistViewUiBinderImpl(){
  $clinit_LabWorklistView_LabWorklistViewUiBinderImpl();
  Object_0.call(this);
  this.$init_192();
}

defineClass(287, 1, {661:1, 1:1}, LabWorklistView_LabWorklistViewUiBinderImpl);
_.$init_192 = function $init_192(){
  this.template = castTo(new LabWorklistView_LabWorklistViewUiBinderImpl_TemplateImpl, 664);
}
;
_.createAndBindUi = function createAndBindUi_8(owner){
  return this.createAndBindUi_4(castTo(owner, 101));
}
;
_.createAndBindUi_4 = function createAndBindUi_7(owner){
  return (new LabWorklistView_LabWorklistViewUiBinderImpl$Widgets(this, owner)).get_view_1();
}
;
var Lcom_mckesson_mg2_client_worklist_LabWorklistView_1LabWorklistViewUiBinderImpl_2_classLit = createForClass('com.mckesson.mg2.client.worklist', 'LabWorklistView_LabWorklistViewUiBinderImpl', 287, Ljava_lang_Object_2_classLit);
function $clinit_LabWorklistView_LabWorklistViewUiBinderImpl$Template(){
  $clinit_LabWorklistView_LabWorklistViewUiBinderImpl$Template = emptyMethod;
}

var Lcom_mckesson_mg2_client_worklist_LabWorklistView_1LabWorklistViewUiBinderImpl$Template_2_classLit = createForInterface('com.mckesson.mg2.client.worklist', 'LabWorklistView_LabWorklistViewUiBinderImpl/Template');
function $clinit_LabWorklistView_LabWorklistViewUiBinderImpl$Widgets(){
  $clinit_LabWorklistView_LabWorklistViewUiBinderImpl$Widgets = emptyMethod;
  $clinit_Object();
}

function LabWorklistView_LabWorklistViewUiBinderImpl$Widgets(this$0, owner){
  $clinit_LabWorklistView_LabWorklistViewUiBinderImpl$Widgets();
  this.this$01 = this$0;
  Object_0.call(this);
  this.$init_193();
  this.owner = owner;
  this.build_domId1_1();
  this.build_domId2_1();
  this.build_domId3_0();
  this.build_domId4_0();
  this.build_domId5_0();
  this.build_domId6_0();
  this.build_domId9_0();
  this.build_domId10();
  this.build_domId11();
  this.build_domId12();
  this.build_domId13();
  this.build_domId0_3();
  this.build_domId7_0();
  this.build_domId8_0();
  this.build_domId1Element_1();
  this.build_domId2Element_1();
  this.build_domId3Element_0();
  this.build_domId4Element_0();
  this.build_domId5Element_0();
  this.build_domId6Element_0();
  this.build_domId9Element_0();
  this.build_domId10Element();
  this.build_domId11Element();
  this.build_domId12Element();
  this.build_domId13Element();
  this.build_domId0Element_3();
  this.build_domId7Element_0();
  this.build_domId8Element_0();
}

defineClass(288, 1, {1:1}, LabWorklistView_LabWorklistViewUiBinderImpl$Widgets);
_.$init_193 = function $init_193(){
}
;
_.build_domId0_3 = function build_domId0_3(){
  this.domId0 = $createUniqueId(get_1());
  return this.domId0;
}
;
_.build_domId0Element_3 = function build_domId0Element_3(){
  this.domId0Element = new LazyDomElement(this.get_domId0_3());
  return this.domId0Element;
}
;
_.build_domId1_1 = function build_domId1_1(){
  this.domId1 = $createUniqueId(get_1());
  return this.domId1;
}
;
_.build_domId10 = function build_domId10(){
  this.domId10 = $createUniqueId(get_1());
  return this.domId10;
}
;
_.build_domId10Element = function build_domId10Element(){
  this.domId10Element = new LazyDomElement(this.get_domId10());
  return this.domId10Element;
}
;
_.build_domId11 = function build_domId11(){
  this.domId11 = $createUniqueId(get_1());
  return this.domId11;
}
;
_.build_domId11Element = function build_domId11Element(){
  this.domId11Element = new LazyDomElement(this.get_domId11());
  return this.domId11Element;
}
;
_.build_domId12 = function build_domId12(){
  this.domId12 = $createUniqueId(get_1());
  return this.domId12;
}
;
_.build_domId12Element = function build_domId12Element(){
  this.domId12Element = new LazyDomElement(this.get_domId12());
  return this.domId12Element;
}
;
_.build_domId13 = function build_domId13(){
  this.domId13 = $createUniqueId(get_1());
  return this.domId13;
}
;
_.build_domId13Element = function build_domId13Element(){
  this.domId13Element = new LazyDomElement(this.get_domId13());
  return this.domId13Element;
}
;
_.build_domId1Element_1 = function build_domId1Element_1(){
  this.domId1Element = new LazyDomElement(this.get_domId1_1());
  return this.domId1Element;
}
;
_.build_domId2_1 = function build_domId2_1(){
  this.domId2 = $createUniqueId(get_1());
  return this.domId2;
}
;
_.build_domId2Element_1 = function build_domId2Element_1(){
  this.domId2Element = new LazyDomElement(this.get_domId2_1());
  return this.domId2Element;
}
;
_.build_domId3_0 = function build_domId3_0(){
  this.domId3 = $createUniqueId(get_1());
  return this.domId3;
}
;
_.build_domId3Element_0 = function build_domId3Element_0(){
  this.domId3Element = new LazyDomElement(this.get_domId3_0());
  return this.domId3Element;
}
;
_.build_domId4_0 = function build_domId4_0(){
  this.domId4 = $createUniqueId(get_1());
  return this.domId4;
}
;
_.build_domId4Element_0 = function build_domId4Element_0(){
  this.domId4Element = new LazyDomElement(this.get_domId4_0());
  return this.domId4Element;
}
;
_.build_domId5_0 = function build_domId5_0(){
  this.domId5 = $createUniqueId(get_1());
  return this.domId5;
}
;
_.build_domId5Element_0 = function build_domId5Element_0(){
  this.domId5Element = new LazyDomElement(this.get_domId5_0());
  return this.domId5Element;
}
;
_.build_domId6_0 = function build_domId6_0(){
  this.domId6 = $createUniqueId(get_1());
  return this.domId6;
}
;
_.build_domId6Element_0 = function build_domId6Element_0(){
  this.domId6Element = new LazyDomElement(this.get_domId6_0());
  return this.domId6Element;
}
;
_.build_domId7_0 = function build_domId7_0(){
  this.domId7 = $createUniqueId(get_1());
  return this.domId7;
}
;
_.build_domId7Element_0 = function build_domId7Element_0(){
  this.domId7Element = new LazyDomElement(this.get_domId7_0());
  return this.domId7Element;
}
;
_.build_domId8_0 = function build_domId8_0(){
  this.domId8 = $createUniqueId(get_1());
  return this.domId8;
}
;
_.build_domId8Element_0 = function build_domId8Element_0(){
  this.domId8Element = new LazyDomElement(this.get_domId8_0());
  return this.domId8Element;
}
;
_.build_domId9_0 = function build_domId9_0(){
  this.domId9 = $createUniqueId(get_1());
  return this.domId9;
}
;
_.build_domId9Element_0 = function build_domId9Element_0(){
  this.domId9Element = new LazyDomElement(this.get_domId9_0());
  return this.domId9Element;
}
;
_.build_f_PaperTabs1 = function build_f_PaperTabs1(){
  var __attachRecord__, f_PaperTabs1;
  f_PaperTabs1 = new PaperTabs(this.template_html7_0().asString());
  f_PaperTabs1.addStyleName('header');
  f_PaperTabs1.setName('labworklist-tabs');
  f_PaperTabs1.setSelected('0');
  f_PaperTabs1.setScrollable(true);
  {
    __attachRecord__ = attachToDom(f_PaperTabs1.getElement());
    this.get_domId1Element_1().get_1();
    this.get_domId2Element_1().get_1();
    this.get_domId3Element_0().get_1();
    this.get_domId4Element_0().get_1();
    this.get_domId5Element_0().get_1();
    this.get_domId6Element_0().get_1();
    __attachRecord__.detach();
  }
  f_PaperTabs1.addAndReplaceElement(this.get_tabLabResults(), this.get_domId1Element_1().get_1());
  f_PaperTabs1.addAndReplaceElement(this.get_tabSignOrders(), this.get_domId2Element_1().get_1());
  f_PaperTabs1.addAndReplaceElement(this.get_tabImaging(), this.get_domId3Element_0().get_1());
  f_PaperTabs1.addAndReplaceElement(this.get_tabReviewNotes(), this.get_domId4Element_0().get_1());
  f_PaperTabs1.addAndReplaceElement(this.get_tabOtherDocuments(), this.get_domId5Element_0().get_1());
  f_PaperTabs1.addAndReplaceElement(this.get_tabERX(), this.get_domId6Element_0().get_1());
  return f_PaperTabs1;
}
;
_.build_f_PaperToolbar2 = function build_f_PaperToolbar2(){
  var __attachRecord__, f_PaperToolbar2;
  f_PaperToolbar2 = new PaperToolbar(this.template_html14().asString());
  f_PaperToolbar2.addStyleName('footer');
  f_PaperToolbar2.setName('labworklist-foot');
  {
    __attachRecord__ = attachToDom(f_PaperToolbar2.getElement());
    this.get_domId9Element_0().get_1();
    this.get_domId10Element().get_1();
    this.get_domId11Element().get_1();
    this.get_domId12Element().get_1();
    this.get_domId13Element().get_1();
    __attachRecord__.detach();
  }
  f_PaperToolbar2.addAndReplaceElement(this.get_navPatientActive_0(), this.get_domId9Element_0().get_1());
  f_PaperToolbar2.addAndReplaceElement(this.get_navWorklist_0(), this.get_domId10Element().get_1());
  f_PaperToolbar2.addAndReplaceElement(this.get_navMessage_0(), this.get_domId11Element().get_1());
  f_PaperToolbar2.addAndReplaceElement(this.get_navCalendar_0(), this.get_domId12Element().get_1());
  f_PaperToolbar2.addAndReplaceElement(this.get_navHamburgerMenu_0(), this.get_domId13Element().get_1());
  return f_PaperToolbar2;
}
;
_.build_list_0 = function build_list_0(){
  var list;
  list = new IronList(this.template_html8_0().asString());
  list.addStyleName('mid');
  list.setAs('item');
  list.setName('labworklist-mid');
  this.owner.list = list;
  return list;
}
;
_.build_navCalendar_0 = function build_navCalendar_0(){
  var navCalendar;
  navCalendar = new PaperIconButton(this.template_html12().asString());
  navCalendar.setSrc('images/navCalendar.png');
  navCalendar.setTitle('Calendar');
  navCalendar.setAriaLabel('Calendar');
  this.owner.navCalendar = navCalendar;
  return navCalendar;
}
;
_.build_navHamburgerMenu_0 = function build_navHamburgerMenu_0(){
  var navHamburgerMenu;
  navHamburgerMenu = new PaperIconButton(this.template_html13().asString());
  navHamburgerMenu.setSrc('images/navHamburgerMenu.png');
  navHamburgerMenu.setTitle('Nav More');
  navHamburgerMenu.setAriaLabel('Nav More');
  this.owner.navHamburgerMenu = navHamburgerMenu;
  return navHamburgerMenu;
}
;
_.build_navMessage_0 = function build_navMessage_0(){
  var navMessage;
  navMessage = new PaperIconButton(this.template_html11_0().asString());
  navMessage.setSrc('images/navMessage.png');
  navMessage.setTitle('Messaging');
  navMessage.setAriaLabel('Messaging');
  this.owner.navMessage = navMessage;
  return navMessage;
}
;
_.build_navPatientActive_0 = function build_navPatientActive_0(){
  var navPatientActive;
  navPatientActive = new PaperIconButton(this.template_html9_0().asString());
  navPatientActive.setSrc('images/navPatientActive.png');
  navPatientActive.setTitle('Patient Search');
  navPatientActive.setAriaLabel('Patient Search');
  this.owner.navPatientActive = navPatientActive;
  return navPatientActive;
}
;
_.build_navWorklist_0 = function build_navWorklist_0(){
  var navWorklist;
  navWorklist = new PaperIconButton(this.template_html10_0().asString());
  navWorklist.setSrc('images/navWorklist.png');
  navWorklist.setTitle('Worklists');
  navWorklist.setAriaLabel('Worklists');
  this.owner.navWorklist = navWorklist;
  return navWorklist;
}
;
_.build_tabERX = function build_tabERX(){
  var tabERX;
  tabERX = new PaperTab(this.template_html6_0().asString());
  return tabERX;
}
;
_.build_tabImaging = function build_tabImaging(){
  var tabImaging;
  tabImaging = new PaperTab(this.template_html3_1().asString());
  return tabImaging;
}
;
_.build_tabLabResults = function build_tabLabResults(){
  var tabLabResults;
  tabLabResults = new PaperTab(this.template_html1_1().asString());
  return tabLabResults;
}
;
_.build_tabOtherDocuments = function build_tabOtherDocuments(){
  var tabOtherDocuments;
  tabOtherDocuments = new PaperTab(this.template_html5_0().asString());
  return tabOtherDocuments;
}
;
_.build_tabReviewNotes = function build_tabReviewNotes(){
  var tabReviewNotes;
  tabReviewNotes = new PaperTab(this.template_html4_1().asString());
  return tabReviewNotes;
}
;
_.build_tabSignOrders = function build_tabSignOrders(){
  var tabSignOrders;
  tabSignOrders = new PaperTab(this.template_html2_1().asString());
  return tabSignOrders;
}
;
_.build_view_1 = function build_view_1(){
  var __attachRecord__, view;
  view = new HTMLPanel(this.template_html15().asString());
  view.setStyleName('view');
  {
    __attachRecord__ = attachToDom(view.getElement());
    this.get_domId0Element_3().get_1();
    this.get_domId7Element_0().get_1();
    this.get_domId8Element_0().get_1();
    __attachRecord__.detach();
  }
  view.addAndReplaceElement(this.get_f_PaperTabs1(), this.get_domId0Element_3().get_1());
  view.addAndReplaceElement(this.get_list_0(), this.get_domId7Element_0().get_1());
  view.addAndReplaceElement(this.get_f_PaperToolbar2(), this.get_domId8Element_0().get_1());
  this.owner.view = view;
  return view;
}
;
_.get_domId0_3 = function get_domId0_3(){
  return this.domId0;
}
;
_.get_domId0Element_3 = function get_domId0Element_3(){
  return this.domId0Element;
}
;
_.get_domId1_1 = function get_domId1_1(){
  return this.domId1;
}
;
_.get_domId10 = function get_domId10(){
  return this.domId10;
}
;
_.get_domId10Element = function get_domId10Element(){
  return this.domId10Element;
}
;
_.get_domId11 = function get_domId11(){
  return this.domId11;
}
;
_.get_domId11Element = function get_domId11Element(){
  return this.domId11Element;
}
;
_.get_domId12 = function get_domId12(){
  return this.domId12;
}
;
_.get_domId12Element = function get_domId12Element(){
  return this.domId12Element;
}
;
_.get_domId13 = function get_domId13(){
  return this.domId13;
}
;
_.get_domId13Element = function get_domId13Element(){
  return this.domId13Element;
}
;
_.get_domId1Element_1 = function get_domId1Element_1(){
  return this.domId1Element;
}
;
_.get_domId2_1 = function get_domId2_1(){
  return this.domId2;
}
;
_.get_domId2Element_1 = function get_domId2Element_1(){
  return this.domId2Element;
}
;
_.get_domId3_0 = function get_domId3_0(){
  return this.domId3;
}
;
_.get_domId3Element_0 = function get_domId3Element_0(){
  return this.domId3Element;
}
;
_.get_domId4_0 = function get_domId4_0(){
  return this.domId4;
}
;
_.get_domId4Element_0 = function get_domId4Element_0(){
  return this.domId4Element;
}
;
_.get_domId5_0 = function get_domId5_0(){
  return this.domId5;
}
;
_.get_domId5Element_0 = function get_domId5Element_0(){
  return this.domId5Element;
}
;
_.get_domId6_0 = function get_domId6_0(){
  return this.domId6;
}
;
_.get_domId6Element_0 = function get_domId6Element_0(){
  return this.domId6Element;
}
;
_.get_domId7_0 = function get_domId7_0(){
  return this.domId7;
}
;
_.get_domId7Element_0 = function get_domId7Element_0(){
  return this.domId7Element;
}
;
_.get_domId8_0 = function get_domId8_0(){
  return this.domId8;
}
;
_.get_domId8Element_0 = function get_domId8Element_0(){
  return this.domId8Element;
}
;
_.get_domId9_0 = function get_domId9_0(){
  return this.domId9;
}
;
_.get_domId9Element_0 = function get_domId9Element_0(){
  return this.domId9Element;
}
;
_.get_f_PaperTabs1 = function get_f_PaperTabs1(){
  return this.build_f_PaperTabs1();
}
;
_.get_f_PaperToolbar2 = function get_f_PaperToolbar2(){
  return this.build_f_PaperToolbar2();
}
;
_.get_list_0 = function get_list_0(){
  return this.build_list_0();
}
;
_.get_navCalendar_0 = function get_navCalendar_0(){
  return this.build_navCalendar_0();
}
;
_.get_navHamburgerMenu_0 = function get_navHamburgerMenu_0(){
  return this.build_navHamburgerMenu_0();
}
;
_.get_navMessage_0 = function get_navMessage_0(){
  return this.build_navMessage_0();
}
;
_.get_navPatientActive_0 = function get_navPatientActive_0(){
  return this.build_navPatientActive_0();
}
;
_.get_navWorklist_0 = function get_navWorklist_0(){
  return this.build_navWorklist_0();
}
;
_.get_tabERX = function get_tabERX(){
  return this.build_tabERX();
}
;
_.get_tabImaging = function get_tabImaging(){
  return this.build_tabImaging();
}
;
_.get_tabLabResults = function get_tabLabResults(){
  return this.build_tabLabResults();
}
;
_.get_tabOtherDocuments = function get_tabOtherDocuments(){
  return this.build_tabOtherDocuments();
}
;
_.get_tabReviewNotes = function get_tabReviewNotes(){
  return this.build_tabReviewNotes();
}
;
_.get_tabSignOrders = function get_tabSignOrders(){
  return this.build_tabSignOrders();
}
;
_.get_view_1 = function get_view_1(){
  $clinit_LabWorklistView_LabWorklistViewUiBinderImpl$Widgets();
  return this.build_view_1();
}
;
_.template_html1_1 = function template_html1_3(){
  return this.this$01.template.html1();
}
;
_.template_html10_0 = function template_html10_0(){
  return this.this$01.template.html10_0();
}
;
_.template_html11_0 = function template_html11_0(){
  return this.this$01.template.html11_0();
}
;
_.template_html12 = function template_html12(){
  return this.this$01.template.html12();
}
;
_.template_html13 = function template_html13(){
  return this.this$01.template.html13();
}
;
_.template_html14 = function template_html14(){
  return this.this$01.template.html14(this.get_domId9_0(), this.get_domId10(), this.get_domId11(), this.get_domId12(), this.get_domId13());
}
;
_.template_html15 = function template_html15(){
  return this.this$01.template.html15(this.get_domId0_3(), this.get_domId7_0(), this.get_domId8_0());
}
;
_.template_html2_1 = function template_html2_1(){
  return this.this$01.template.html2();
}
;
_.template_html3_1 = function template_html3_1(){
  return this.this$01.template.html3();
}
;
_.template_html4_1 = function template_html4_1(){
  return this.this$01.template.html4_0();
}
;
_.template_html5_0 = function template_html5_0(){
  return this.this$01.template.html5();
}
;
_.template_html6_0 = function template_html6_0(){
  return this.this$01.template.html6();
}
;
_.template_html7_0 = function template_html7_0(){
  return this.this$01.template.html7_0(this.get_domId1_1(), this.get_domId2_1(), this.get_domId3_0(), this.get_domId4_0(), this.get_domId5_0(), this.get_domId6_0());
}
;
_.template_html8_0 = function template_html8_0(){
  return this.this$01.template.html8();
}
;
_.template_html9_0 = function template_html9_0(){
  return this.this$01.template.html9();
}
;
var Lcom_mckesson_mg2_client_worklist_LabWorklistView_1LabWorklistViewUiBinderImpl$Widgets_2_classLit = createForClass('com.mckesson.mg2.client.worklist', 'LabWorklistView_LabWorklistViewUiBinderImpl/Widgets', 288, Ljava_lang_Object_2_classLit);
function $clinit_LabWorklistView_LabWorklistViewUiBinderImpl_TemplateImpl(){
  $clinit_LabWorklistView_LabWorklistViewUiBinderImpl_TemplateImpl = emptyMethod;
  $clinit_Object();
}

function LabWorklistView_LabWorklistViewUiBinderImpl_TemplateImpl(){
  $clinit_LabWorklistView_LabWorklistViewUiBinderImpl_TemplateImpl();
  Object_0.call(this);
  this.$init_194();
}

defineClass(294, 1, {664:1, 1:1}, LabWorklistView_LabWorklistViewUiBinderImpl_TemplateImpl);
_.$init_194 = function $init_194(){
}
;
_.html1 = function html1_3(){
  var sb;
  sb = new StringBuilder;
  sb.append_2('Lab Results');
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.toString_0());
}
;
_.html10_0 = function html10_0(){
  var sb;
  sb = new StringBuilder;
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.toString_0());
}
;
_.html11_0 = function html11_0(){
  var sb;
  sb = new StringBuilder;
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.toString_0());
}
;
_.html12 = function html12(){
  var sb;
  sb = new StringBuilder;
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.toString_0());
}
;
_.html13 = function html13(){
  var sb;
  sb = new StringBuilder;
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.toString_0());
}
;
_.html14 = function html14(arg0, arg1, arg2, arg3, arg4){
  var sb;
  sb = new StringBuilder;
  sb.append_2("<span id='");
  sb.append_2(htmlEscape(arg0));
  sb.append_2("'><\/span>  <span id='");
  sb.append_2(htmlEscape(arg1));
  sb.append_2("'><\/span>  <span id='");
  sb.append_2(htmlEscape(arg2));
  sb.append_2("'><\/span>  <span id='");
  sb.append_2(htmlEscape(arg3));
  sb.append_2("'><\/span>  <span id='");
  sb.append_2(htmlEscape(arg4));
  sb.append_2("'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.toString_0());
}
;
_.html15 = function html15(arg0, arg1, arg2){
  var sb;
  sb = new StringBuilder;
  sb.append_2("<style include='iron-flex iron-flex-alignment' is='custom-style'> .view { background-color: #ffffff; width: 100%; margin: 0; padding: 0; overflow:hidden; display: flex; flex-direction: column; align-items: stretch; } .header { flex: 0 1 auto; } .mid { flex: auto; } .footer { --paper-toolbar-background: #005a8c; } /* list */ iron-list { background-color: var(--paper-grey-200, #eee); padding-bottom: 16px; } .mid .item { @apply(--layout-horizontal); margin: 16px 16px 0 16px; padding: 10px; border-radius: 8px; background-color: white; border: 1px solid #ddd; } .mid .avatar { height: 40px; width: 40px; border-radius: 20px; box-sizing: border-box; background-color: #DDD; } .mid .pad { padding: 0 16px; @apply(--layout-flex); @apply(--layout-vertical); } .mid .primary { font-size: 16px; font-weight: bold; } .mid .secondary { font-size: 14px; } .mid .dim { color: gray; } <\/style>  <div class='header'>Worklist<\/div> <span id='");
  sb.append_2(htmlEscape(arg0));
  sb.append_2("'><\/span> <span id='");
  sb.append_2(htmlEscape(arg1));
  sb.append_2("'><\/span>  <span id='");
  sb.append_2(htmlEscape(arg2));
  sb.append_2("'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.toString_0());
}
;
_.html2 = function html2_1(){
  var sb;
  sb = new StringBuilder;
  sb.append_2('Sign Orders');
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.toString_0());
}
;
_.html3 = function html3_1(){
  var sb;
  sb = new StringBuilder;
  sb.append_2('Imaging');
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.toString_0());
}
;
_.html4_0 = function html4_1(){
  var sb;
  sb = new StringBuilder;
  sb.append_2('Review Notes');
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.toString_0());
}
;
_.html5 = function html5_0(){
  var sb;
  sb = new StringBuilder;
  sb.append_2('Other Documents');
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.toString_0());
}
;
_.html6 = function html6_0(){
  var sb;
  sb = new StringBuilder;
  sb.append_2('eRx');
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.toString_0());
}
;
_.html7_0 = function html7_0(arg0, arg1, arg2, arg3, arg4, arg5){
  var sb;
  sb = new StringBuilder;
  sb.append_2("<span id='");
  sb.append_2(htmlEscape(arg0));
  sb.append_2("'><\/span> <span id='");
  sb.append_2(htmlEscape(arg1));
  sb.append_2("'><\/span> <span id='");
  sb.append_2(htmlEscape(arg2));
  sb.append_2("'><\/span> <span id='");
  sb.append_2(htmlEscape(arg3));
  sb.append_2("'><\/span> <span id='");
  sb.append_2(htmlEscape(arg4));
  sb.append_2("'><\/span> <span id='");
  sb.append_2(htmlEscape(arg5));
  sb.append_2("'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.toString_0());
}
;
_.html8 = function html8_0(){
  var sb;
  sb = new StringBuilder;
  sb.append_2("<template> <div> <div class='item'> <img class='avatar' src='[[item.avatar]]'> <div class='pad'> <div class='primary'>[[item.patientDisplayString]]<\/div> <div class='secondary'>[[item.resultName]]<\/div> <div class='secondary dim'>[[item.reviewStatus]]<\/div> <\/div> <\/div> <\/div> <\/template>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.toString_0());
}
;
_.html9 = function html9_0(){
  var sb;
  sb = new StringBuilder;
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.toString_0());
}
;
var Lcom_mckesson_mg2_client_worklist_LabWorklistView_1LabWorklistViewUiBinderImpl_1TemplateImpl_2_classLit = createForClass('com.mckesson.mg2.client.worklist', 'LabWorklistView_LabWorklistViewUiBinderImpl_TemplateImpl', 294, Ljava_lang_Object_2_classLit);
function $clinit_Polymer(){
  $clinit_Polymer = emptyMethod;
  $clinit_Object();
  urlImported = new HashSet;
}

function absoluteHref(hrefOrTag){
  if (!startsWith_Ljava_lang_String__Z__devirtual$(hrefOrTag, 'http')) {
    if (matches_Ljava_lang_String__Z__devirtual$(hrefOrTag, '[\\w-]+')) {
      hrefOrTag = hrefOrTag + '/' + hrefOrTag;
    }
    if (!startsWith_Ljava_lang_String__Z__devirtual$(hrefOrTag, 'bower_components')) {
      hrefOrTag = 'bower_components/' + hrefOrTag;
    }
    if (!matches_Ljava_lang_String__Z__devirtual$(hrefOrTag, '.*\\.html$')) {
      hrefOrTag += '.html';
    }
    hrefOrTag = getModuleBaseForStaticFiles() + ('' + hrefOrTag);
  }
  return hrefOrTag;
}

function ensureCustomElement(elem, imports){
  $clinit_Polymer();
  var src_0, src$array, src$index, src$max;
  if (isRegisteredElement(elem)) {
    return;
  }
  (new Polymer$3(elem)).schedule(0);
  for (src$array = imports , src$index = 0 , src$max = src$array.length; src$index < src$max; ++src$index) {
    src_0 = src$array[src$index];
    importHref(src_0, null, null);
  }
  whenReady_0(makeLambdaFunction(Polymer$4.prototype.call_0, new Polymer$4(elem)), castToJso(elem));
}

function importHref(hrefOrTag, ok, err){
  var href_0;
  href_0 = absoluteHref(hrefOrTag);
  if (!urlImported.contains_0(href_0)) {
    if (!isRegistered(href_0)) {
      whenPolymerLoaded(makeLambdaFunction(Polymer$1.prototype.call_0, new Polymer$1(href_0, ok, err)));
      return;
    }
    urlImported.add_3(href_0);
  }
  if (jsNotEquals(ok, null)) {
    Base.importHref(href_0, ok, err);
  }
}

function importHref_0(hrefs, ok){
  $clinit_Polymer();
  importHref_1(hrefs, ok, null);
}

function importHref_1(hrefs, ok, err){
  var allOk, href_0, href$iterator;
  allOk = jsEquals(ok, null)?ok:makeLambdaFunction(Polymer$2.prototype.call_0, new Polymer$2(hrefs, ok));
  for (href$iterator = hrefs.iterator(); href$iterator.hasNext_0();) {
    href_0 = castToString(href$iterator.next_1());
    importHref(href_0, allOk, err);
  }
}

function isRegistered(hrefOrTag){
  var e;
  e = $createElement(get_1(), replaceFirst_Ljava_lang_String_Ljava_lang_String__Ljava_lang_String___devirtual$(hrefOrTag, '^.*/(.+).html$', '$1'));
  return isRegisteredElement(e);
}

function isRegisteredElement(e){
  return !!e && (e.constructor !== $wnd.HTMLElement && e.constructor != $wnd.HTMLUnknownElement);
}

function onReady(e, f){
  $clinit_Polymer();
  whenReady_0(castToFunction(f), e);
}

function restoreProperties(e){
  $clinit_Polymer();
  if (e && e.__o) {
    onReady(e, function(){
      for (i in e.__o) {
        e[i] = e.__o[i];
      }
      delete e.__o;
    }
    );
  }
}

function saveProperties(e){
  $clinit_Polymer();
  if (!isRegisteredElement(e)) {
    var o = {};
    for (i in e) {
      if (e.hasOwnProperty(i) && !/(^_|_$)/.test(i)) {
        o[i] = e[i];
        delete e[i];
        e.__o = o;
      }
    }
  }
}

function whenPolymerLoaded(ok){
  function done(){
    Polymer = $wnd.Polymer;
    Base = $wnd.Polymer.Base;
    $doc.body.removeAttribute('unresolved');
    ok.call_0();
  }

  if (!$wnd.Polymer) {
    var l = $doc.createElement('link');
    l.rel = 'import';
    l.href = absoluteHref('polymer');
    l.onload = done;
    $doc.head.appendChild(l);
  }
   else {
    done();
  }
}

function whenReady(f){
  $clinit_Polymer();
  whenReady_0(f, null);
}

function whenReady_0(f, e){
  $wnd.HTMLImports.whenReady(!e?f:function(){
    var id_0 = setInterval(function(){
      if (isRegisteredElement(e)) {
        clearInterval(id_0);
        f(e);
      }
    }
    , 0);
  }
  );
}

defineClass(370, 1, {1:1});
var Base, Polymer, urlImported;
var Lcom_vaadin_polymer_Polymer_2_classLit = createForClass('com.vaadin.polymer', 'Polymer', 370, Ljava_lang_Object_2_classLit);
function $clinit_Polymer$1(){
  $clinit_Polymer$1 = emptyMethod;
  $clinit_Object();
}

function Polymer$1(val$href, val$ok, val$err){
  $clinit_Polymer$1();
  this.val$href1 = val$href;
  this.val$ok2 = val$ok;
  this.val$err3 = val$err;
  Object_0.call(this);
  this.$init_195();
}

defineClass(165, $wnd.Function, {69:1, 1:1}, Polymer$1);
copyObjectProperties(getClassPrototype(1), _);
_.$init_195 = function $init_195(){
}
;
_.call_0 = function call_2(arg){
  ($clinit_Polymer() , Base).importHref(this.val$href1, this.val$ok2, this.val$err3);
  return null;
}
;
var Lcom_vaadin_polymer_Polymer$1_2_classLit = createForClass('com.vaadin.polymer', 'Polymer/1', 165, Ljava_lang_Object_2_classLit);
function $clinit_Polymer$2(){
  $clinit_Polymer$2 = emptyMethod;
  $clinit_Object();
}

function Polymer$2(val$hrefs, val$ok){
  $clinit_Polymer$2();
  this.val$hrefs1 = val$hrefs;
  this.val$ok2 = val$ok;
  Object_0.call(this);
  this.$init_196();
}

defineClass(166, $wnd.Function, {69:1, 1:1}, Polymer$2);
copyObjectProperties(getClassPrototype(1), _);
_.$init_196 = function $init_196(){
  this.count = this.val$hrefs1.size_1();
}
;
_.call_0 = function call_3(arg){
  if (--this.count == 0) {
    this.val$ok2(arg);
  }
  return null;
}
;
_.count = 0;
var Lcom_vaadin_polymer_Polymer$2_2_classLit = createForClass('com.vaadin.polymer', 'Polymer/2', 166, Ljava_lang_Object_2_classLit);
function $clinit_Polymer$3(){
  $clinit_Polymer$3 = emptyMethod;
  $clinit_Timer();
}

function Polymer$3(val$elem){
  $clinit_Polymer$3();
  this.val$elem1 = val$elem;
  Timer.call(this);
  this.$init_197();
}

defineClass(167, 112, {1:1}, Polymer$3);
_.$init_197 = function $init_197(){
}
;
_.run = function run_0(){
  saveProperties(castToJso(this.val$elem1));
}
;
var Lcom_vaadin_polymer_Polymer$3_2_classLit = createForClass('com.vaadin.polymer', 'Polymer/3', 167, Lcom_google_gwt_user_client_Timer_2_classLit);
function $clinit_Polymer$4(){
  $clinit_Polymer$4 = emptyMethod;
  $clinit_Object();
}

function Polymer$4(val$elem){
  $clinit_Polymer$4();
  this.val$elem1 = val$elem;
  Object_0.call(this);
  this.$init_198();
}

defineClass(168, $wnd.Function, {69:1, 1:1}, Polymer$4);
copyObjectProperties(getClassPrototype(1), _);
_.$init_198 = function $init_198(){
}
;
_.call_0 = function call_4(arg){
  restoreProperties(castToJso(this.val$elem1));
  return null;
}
;
var Lcom_vaadin_polymer_Polymer$4_2_classLit = createForClass('com.vaadin.polymer', 'Polymer/4', 168, Ljava_lang_Object_2_classLit);
function $clinit_Polymer$5(){
  $clinit_Polymer$5 = emptyMethod;
}

defineClass(371, $wnd.Function, {69:1, 1:1});
copyObjectProperties(getClassPrototype(1), _);
var Lcom_vaadin_polymer_Polymer$5_2_classLit = createForClass('com.vaadin.polymer', 'Polymer/5', 371, Ljava_lang_Object_2_classLit);
function $clinit_Polymer$PolymerRoot(){
  $clinit_Polymer$PolymerRoot = emptyMethod;
}

function $clinit_Polymer$PolymerRoot$Base(){
  $clinit_Polymer$PolymerRoot$Base = emptyMethod;
}

function $clinit_PolymerWidget(){
  $clinit_PolymerWidget = emptyMethod;
  $clinit_HTMLPanel();
}

function PolymerWidget(tag, src_0, html){
  $clinit_PolymerWidget();
  HTMLPanel_0.call(this, tag, html);
  this.$init_199();
  ensureCustomElement(this.getElement(), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {3:1, 1:1, 7:1}, 2, 6, [src_0]));
}

defineClass(38, 50, {15:1, 22:1, 6:1, 1:1});
_.$init_199 = function $init_199(){
}
;
_.addClickHandler = function addClickHandler_0(handler){
  return this.addDomHandler(handler, getType());
}
;
_.jsinteropError = function jsinteropError(){
  alert_0('GWT-Polymer ERROR: Double check that you are compiling your project with the `-XjsInteropMode JS` flag');
}
;
_.setAriaLabel = function setAriaLabel(label_0){
  $setAttribute(this.getElement(), 'aria-label', label_0);
}
;
_.setClass = function setClass_0(clazz){
  $setClassName(this.getElement(), clazz);
}
;
_.setName = function setName(value_0){
  $setAttribute(this.getElement(), 'name', value_0);
}
;
var Lcom_vaadin_polymer_PolymerWidget_2_classLit = createForClass('com.vaadin.polymer', 'PolymerWidget', 38, Lcom_google_gwt_user_client_ui_HTMLPanel_2_classLit);
function $clinit_EventTarget_0(){
  $clinit_EventTarget_0 = emptyMethod;
}

function $clinit_Node_0(){
  $clinit_Node_0 = emptyMethod;
}

function $clinit_Element_1(){
  $clinit_Element_1 = emptyMethod;
}

function $clinit_HTMLElement(){
  $clinit_HTMLElement = emptyMethod;
}

function $clinit_IronListElement(){
  $clinit_IronListElement = emptyMethod;
}

function $clinit_IronList(){
  $clinit_IronList = emptyMethod;
  $clinit_PolymerWidget();
}

function IronList(html){
  $clinit_IronList();
  PolymerWidget.call(this, 'iron-list', 'iron-list/iron-list.html', html);
  this.$init_200();
}

defineClass(120, 38, {15:1, 22:1, 6:1, 1:1}, IronList);
_.$init_200 = function $init_200(){
}
;
_.getPolymerElement = function getPolymerElement(){
  var e;
  try {
    return castToUnknownNative(this.getElement());
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 34)) {
      e = $e0;
      this.jsinteropError();
      return null;
    }
     else 
      throw toJs($e0);
  }
}
;
_.setAs = function setAs(value_0){
  this.getPolymerElement().as = value_0;
}
;
_.setItems = function setItems(value_0){
  this.getPolymerElement().items = value_0;
}
;
var Lcom_vaadin_polymer_iron_widget_IronList_2_classLit = createForClass('com.vaadin.polymer.iron.widget', 'IronList', 120, Lcom_vaadin_polymer_PolymerWidget_2_classLit);
function $clinit_PaperButtonElement(){
  $clinit_PaperButtonElement = emptyMethod;
}

function $clinit_PaperIconButtonElement(){
  $clinit_PaperIconButtonElement = emptyMethod;
}

function $clinit_PaperInputElement(){
  $clinit_PaperInputElement = emptyMethod;
}

function $clinit_PaperTabsElement(){
  $clinit_PaperTabsElement = emptyMethod;
}

function $clinit_PaperButton(){
  $clinit_PaperButton = emptyMethod;
  $clinit_PolymerWidget();
}

function PaperButton(html){
  $clinit_PaperButton();
  PolymerWidget.call(this, 'paper-button', 'paper-button/paper-button.html', html);
  this.$init_201();
}

defineClass(247, 38, {15:1, 22:1, 6:1, 1:1}, PaperButton);
_.$init_201 = function $init_201(){
}
;
_.getPolymerElement_0 = function getPolymerElement_0(){
  var e;
  try {
    return castToUnknownNative(this.getElement());
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 34)) {
      e = $e0;
      this.jsinteropError();
      return null;
    }
     else 
      throw toJs($e0);
  }
}
;
_.setRaised = function setRaised(value_0){
  this.getPolymerElement_0().raised = value_0;
}
;
var Lcom_vaadin_polymer_paper_widget_PaperButton_2_classLit = createForClass('com.vaadin.polymer.paper.widget', 'PaperButton', 247, Lcom_vaadin_polymer_PolymerWidget_2_classLit);
function $clinit_PaperIconButton(){
  $clinit_PaperIconButton = emptyMethod;
  $clinit_PolymerWidget();
}

function PaperIconButton(html){
  $clinit_PaperIconButton();
  PolymerWidget.call(this, 'paper-icon-button', 'paper-icon-button/paper-icon-button.html', html);
  this.$init_202();
}

defineClass(24, 38, {15:1, 22:1, 6:1, 1:1}, PaperIconButton);
_.$init_202 = function $init_202(){
}
;
_.getPolymerElement_1 = function getPolymerElement_1(){
  var e;
  try {
    return castToUnknownNative(this.getElement());
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 34)) {
      e = $e0;
      this.jsinteropError();
      return null;
    }
     else 
      throw toJs($e0);
  }
}
;
_.getSrc = function getSrc(){
  return this.getPolymerElement_1().src;
}
;
_.setIcon = function setIcon(value_0){
  this.getPolymerElement_1().icon = value_0;
}
;
_.setSrc = function setSrc(value_0){
  this.getPolymerElement_1().src = value_0;
}
;
var Lcom_vaadin_polymer_paper_widget_PaperIconButton_2_classLit = createForClass('com.vaadin.polymer.paper.widget', 'PaperIconButton', 24, Lcom_vaadin_polymer_PolymerWidget_2_classLit);
function $clinit_PaperInput(){
  $clinit_PaperInput = emptyMethod;
  $clinit_PolymerWidget();
}

function PaperInput(html){
  $clinit_PaperInput();
  PolymerWidget.call(this, 'paper-input', 'paper-input/paper-input.html', html);
  this.$init_203();
}

defineClass(100, 38, {15:1, 22:1, 6:1, 1:1}, PaperInput);
_.$init_203 = function $init_203(){
}
;
_.getName = function getName_6(){
  return this.getPolymerElement_2().name;
}
;
_.getPolymerElement_2 = function getPolymerElement_2(){
  var e;
  try {
    return castToUnknownNative(this.getElement());
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 34)) {
      e = $e0;
      this.jsinteropError();
      return null;
    }
     else 
      throw toJs($e0);
  }
}
;
_.getType = function getType_3(){
  return this.getPolymerElement_2().type;
}
;
_.setLabel = function setLabel(value_0){
  this.getPolymerElement_2().label = value_0;
}
;
_.setName = function setName_0(value_0){
  this.getPolymerElement_2().name = value_0;
}
;
_.setRequired = function setRequired(value_0){
  this.getPolymerElement_2().required = value_0;
}
;
_.setType = function setType(value_0){
  this.getPolymerElement_2().type = value_0;
}
;
var Lcom_vaadin_polymer_paper_widget_PaperInput_2_classLit = createForClass('com.vaadin.polymer.paper.widget', 'PaperInput', 100, Lcom_vaadin_polymer_PolymerWidget_2_classLit);
function $clinit_PaperTab(){
  $clinit_PaperTab = emptyMethod;
  $clinit_PolymerWidget();
}

function PaperTab(html){
  $clinit_PaperTab();
  PolymerWidget.call(this, 'paper-tab', 'paper-tabs/paper-tabs.html', html);
  this.$init_204();
}

defineClass(53, 38, {15:1, 22:1, 6:1, 1:1}, PaperTab);
_.$init_204 = function $init_204(){
}
;
var Lcom_vaadin_polymer_paper_widget_PaperTab_2_classLit = createForClass('com.vaadin.polymer.paper.widget', 'PaperTab', 53, Lcom_vaadin_polymer_PolymerWidget_2_classLit);
function $clinit_PaperTabsBase(){
  $clinit_PaperTabsBase = emptyMethod;
  $clinit_PolymerWidget();
}

function PaperTabsBase(tag, src_0, html){
  $clinit_PaperTabsBase();
  PolymerWidget.call(this, tag, src_0, html);
  this.$init_205();
}

defineClass(297, 38, {15:1, 22:1, 6:1, 1:1});
_.$init_205 = function $init_205(){
}
;
_.fixTabsSelection = function fixTabsSelection(e){
  onReady(e, function(){
    setTimeout(function(){
      e._onResize();
    }
    , 400);
  }
  );
}
;
_.onAttach = function onAttach_1(){
  getClassPrototype(6).onAttach.call(this);
  this.fixTabsSelection(castToUnknownNative(this.getElement()));
}
;
var Lcom_vaadin_polymer_paper_widget_PaperTabsBase_2_classLit = createForClass('com.vaadin.polymer.paper.widget', 'PaperTabsBase', 297, Lcom_vaadin_polymer_PolymerWidget_2_classLit);
function $clinit_PaperTabs(){
  $clinit_PaperTabs = emptyMethod;
  $clinit_PaperTabsBase();
}

function PaperTabs(html){
  $clinit_PaperTabs();
  PaperTabsBase.call(this, 'paper-tabs', 'paper-tabs/paper-tabs.html', html);
  this.$init_206();
}

defineClass(298, 297, {15:1, 22:1, 6:1, 1:1}, PaperTabs);
_.$init_206 = function $init_206(){
}
;
_.getPolymerElement_3 = function getPolymerElement_3(){
  var e;
  try {
    return castToUnknownNative(this.getElement());
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 34)) {
      e = $e0;
      this.jsinteropError();
      return null;
    }
     else 
      throw toJs($e0);
  }
}
;
_.setItems = function setItems_0(value_0){
  this.getPolymerElement_3().items = value_0;
}
;
_.setScrollable = function setScrollable(value_0){
  this.getPolymerElement_3().scrollable = value_0;
}
;
_.setSelected = function setSelected(value_0){
  this.getPolymerElement_3().selected = value_0;
}
;
var Lcom_vaadin_polymer_paper_widget_PaperTabs_2_classLit = createForClass('com.vaadin.polymer.paper.widget', 'PaperTabs', 298, Lcom_vaadin_polymer_paper_widget_PaperTabsBase_2_classLit);
function $clinit_PaperToolbar(){
  $clinit_PaperToolbar = emptyMethod;
  $clinit_PolymerWidget();
}

function PaperToolbar(html){
  $clinit_PaperToolbar();
  PolymerWidget.call(this, 'paper-toolbar', 'paper-toolbar/paper-toolbar.html', html);
  this.$init_207();
}

defineClass(104, 38, {15:1, 22:1, 6:1, 1:1}, PaperToolbar);
_.$init_207 = function $init_207(){
}
;
var Lcom_vaadin_polymer_paper_widget_PaperToolbar_2_classLit = createForClass('com.vaadin.polymer.paper.widget', 'PaperToolbar', 104, Lcom_vaadin_polymer_PolymerWidget_2_classLit);
function $clinit_AutoCloseable(){
  $clinit_AutoCloseable = emptyMethod;
}

var Ljava_lang_AutoCloseable_2_classLit = createForInterface('java.lang', 'AutoCloseable');
function $clinit_Closeable(){
  $clinit_Closeable = emptyMethod;
}

var Ljava_io_Closeable_2_classLit = createForInterface('java.io', 'Closeable');
function $clinit_Flushable(){
  $clinit_Flushable = emptyMethod;
}

var Ljava_io_Flushable_2_classLit = createForInterface('java.io', 'Flushable');
function $clinit_OutputStream(){
  $clinit_OutputStream = emptyMethod;
  $clinit_Object();
}

function OutputStream(){
  $clinit_OutputStream();
  Object_0.call(this);
  this.$init_208();
}

defineClass(171, 1, {1:1});
_.$init_208 = function $init_208(){
}
;
_.close_0 = function close_1(){
}
;
_.flush = function flush_1(){
}
;
var Ljava_io_OutputStream_2_classLit = createForClass('java.io', 'OutputStream', 171, Ljava_lang_Object_2_classLit);
function $clinit_FilterOutputStream(){
  $clinit_FilterOutputStream = emptyMethod;
  $clinit_OutputStream();
}

function FilterOutputStream(out){
  $clinit_FilterOutputStream();
  OutputStream.call(this);
  this.$init_209();
  this.out = out;
}

defineClass(172, 171, {1:1});
_.$init_209 = function $init_209(){
}
;
_.close_0 = function close_2(){
  var e, thrown;
  thrown = null;
  try {
    this.flush();
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 8)) {
      e = $e0;
      thrown = e;
    }
     else 
      throw toJs($e0);
  }
  try {
    this.out.close_0();
  }
   catch ($e1) {
    $e1 = toJava($e1);
    if (instanceOf($e1, 8)) {
      e = $e1;
      if (isNull(thrown)) {
        thrown = e;
      }
    }
     else 
      throw toJs($e1);
  }
  if (isNotNull(thrown)) {
    throw toJs(new IOException(thrown));
  }
}
;
_.flush = function flush_2(){
  this.out.flush();
}
;
var Ljava_io_FilterOutputStream_2_classLit = createForClass('java.io', 'FilterOutputStream', 172, Ljava_io_OutputStream_2_classLit);
function $clinit_IOException(){
  $clinit_IOException = emptyMethod;
  $clinit_Exception();
}

function IOException(throwable){
  $clinit_IOException();
  Exception_3.call(this, throwable);
  this.$init_210();
}

defineClass(193, 10, {3:1, 10:1, 1:1, 8:1}, IOException);
_.$init_210 = function $init_210(){
}
;
var Ljava_io_IOException_2_classLit = createForClass('java.io', 'IOException', 193, Ljava_lang_Exception_2_classLit);
function $clinit_PrintStream(){
  $clinit_PrintStream = emptyMethod;
  $clinit_FilterOutputStream();
}

function PrintStream(out){
  $clinit_PrintStream();
  FilterOutputStream.call(this, out);
  this.$init_211();
}

defineClass(113, 172, {1:1}, PrintStream);
_.$init_211 = function $init_211(){
}
;
_.print_0 = function print_0(s){
}
;
_.println = function println(s){
}
;
var Ljava_io_PrintStream_2_classLit = createForClass('java.io', 'PrintStream', 113, Ljava_io_FilterOutputStream_2_classLit);
function $clinit_AbstractStringBuilder(){
  $clinit_AbstractStringBuilder = emptyMethod;
  $clinit_Object();
}

function AbstractStringBuilder(string){
  $clinit_AbstractStringBuilder();
  Object_0.call(this);
  this.$init_212();
  this.string = string;
}

defineClass(48, 1, {1:1});
_.$init_212 = function $init_212(){
}
;
_.charAt = function charAt(index_0){
  return charAt_I_C__devirtual$_0(this.string, index_0);
}
;
_.getChars = function getChars(srcStart, srcEnd, dst, dstStart){
  checkStringBounds(srcStart, srcEnd, this.length_0());
  checkStringBounds(dstStart, dstStart + (srcEnd - srcStart), dst.length);
  while (srcStart < srcEnd) {
    dst[dstStart++] = charAt_I_C__devirtual$_0(this.string, srcStart++);
  }
}
;
_.indexOf_1 = function indexOf_0(x_0){
  return indexOf_Ljava_lang_String__I__devirtual$(this.string, x_0);
}
;
_.indexOf_2 = function indexOf_1(x_0, start_0){
  return indexOf_Ljava_lang_String_I_I__devirtual$(this.string, x_0, start_0);
}
;
_.lastIndexOf_0 = function lastIndexOf(s){
  return lastIndexOf_Ljava_lang_String__I__devirtual$(this.string, s);
}
;
_.lastIndexOf_1 = function lastIndexOf_0(s, start_0){
  return lastIndexOf_Ljava_lang_String_I_I__devirtual$(this.string, s, start_0);
}
;
_.length_0 = function length_1(){
  return length__I__devirtual$_0(this.string);
}
;
_.setLength = function setLength(newLength){
  var oldLength;
  oldLength = this.length_0();
  if (newLength < oldLength) {
    this.string = substring_II_Ljava_lang_String___devirtual$(this.string, 0, newLength);
  }
   else if (newLength > oldLength) {
    this.string += '' + valueOf_19(initUnidimensionalArray(C_classLit, {3:1, 1:1}, 56, newLength - oldLength, 15, 1));
  }
}
;
_.substring_0 = function substring(begin){
  return substring_I_Ljava_lang_String___devirtual$(this.string, begin);
}
;
_.substring_1 = function substring_0(begin, end){
  return substring_II_Ljava_lang_String___devirtual$(this.string, begin, end);
}
;
_.toString_0 = function toString_13(){
  return this.string;
}
;
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass('java.lang', 'AbstractStringBuilder', 48, Ljava_lang_Object_2_classLit);
function $clinit_Appendable(){
  $clinit_Appendable = emptyMethod;
}

var Ljava_lang_Appendable_2_classLit = createForInterface('java.lang', 'Appendable');
function $clinit_ArithmeticException(){
  $clinit_ArithmeticException = emptyMethod;
  $clinit_RuntimeException();
}

function ArithmeticException(explanation){
  $clinit_ArithmeticException();
  RuntimeException_1.call(this, explanation);
  this.$init_213();
}

defineClass(163, 9, {3:1, 10:1, 1:1, 9:1, 8:1}, ArithmeticException);
_.$init_213 = function $init_213(){
}
;
var Ljava_lang_ArithmeticException_2_classLit = createForClass('java.lang', 'ArithmeticException', 163, Ljava_lang_RuntimeException_2_classLit);
function $clinit_ArrayStoreException(){
  $clinit_ArrayStoreException = emptyMethod;
  $clinit_RuntimeException();
}

function ArrayStoreException(){
  $clinit_ArrayStoreException();
  RuntimeException.call(this);
  this.$init_214();
}

defineClass(162, 9, {3:1, 10:1, 1:1, 9:1, 8:1}, ArrayStoreException);
_.$init_214 = function $init_214(){
}
;
var Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang', 'ArrayStoreException', 162, Ljava_lang_RuntimeException_2_classLit);
function $clinit_Byte(){
  $clinit_Byte = emptyMethod;
  $clinit_Number();
  MIN_VALUE_0 = narrow_byte(128);
  MAX_VALUE_0 = narrow_byte(127);
  BYTES = narrow_int(8 / 8);
  TYPE_21 = B_classLit;
}

function Byte(value_0){
  Number_0.call(this);
  this.$init_216();
  this.value_0 = value_0;
}

function hashCode_8(b){
  return b;
}

function toString_16(b){
  return valueOf_15(b);
}

function valueOf_5(b){
  var rebase, result;
  rebase = b + 128;
  result = ($clinit_Byte$BoxedValues() , boxedValues)[rebase];
  if (isNull(result)) {
    result = ($clinit_Byte$BoxedValues() , boxedValues)[rebase] = new Byte(b);
  }
  return result;
}

defineClass(58, 43, {3:1, 58:1, 4:1, 1:1}, Byte);
_.$init_216 = function $init_216(){
}
;
_.byteValue = function byteValue_0(){
  return this.value_0;
}
;
_.doubleValue = function doubleValue(){
  return this.value_0;
}
;
_.equals = function equals_4(o){
  return instanceOf(o, 58) && castTo(o, 58).value_0 == this.value_0;
}
;
_.floatValue = function floatValue(){
  return this.value_0;
}
;
_.hashCode = function hashCode_7(){
  return hashCode_8(this.value_0);
}
;
_.intValue = function intValue(){
  return this.value_0;
}
;
_.longValue = function longValue_0(){
  return fromInt_0(this.value_0);
}
;
_.shortValue = function shortValue_0(){
  return this.value_0;
}
;
_.toString_0 = function toString_15(){
  return toString_16(this.value_0);
}
;
_.value_0 = 0;
var BYTES = 0, MAX_VALUE_0 = 0, MIN_VALUE_0 = 0, SIZE = 8, TYPE_21;
var Ljava_lang_Byte_2_classLit = createForClass('java.lang', 'Byte', 58, Ljava_lang_Number_2_classLit);
function $clinit_Byte$BoxedValues(){
  $clinit_Byte$BoxedValues = emptyMethod;
  $clinit_Object();
  boxedValues = initUnidimensionalArray(Ljava_lang_Byte_2_classLit, {3:1, 1:1, 7:1}, 58, 256, 0, 1);
}

defineClass(340, 1, {1:1});
var boxedValues;
var Ljava_lang_Byte$BoxedValues_2_classLit = createForClass('java.lang', 'Byte/BoxedValues', 340, Ljava_lang_Object_2_classLit);
function $clinit_Character(){
  $clinit_Character = emptyMethod;
  $clinit_Object();
  TYPE_22 = Ljava_lang_Character_2_classLit;
  BYTES_0 = narrow_int(16 / 8);
}

function Character(value_0){
  Object_0.call(this);
  this.$init_217();
  this.value_0 = value_0;
}

function getHighSurrogate(codePoint){
  $clinit_Character();
  return narrow_char(55296 + (codePoint - 65536 >> 10 & 1023));
}

function getLowSurrogate(codePoint){
  $clinit_Character();
  return narrow_char(56320 + (codePoint - 65536 & 1023));
}

function hashCode_10(c){
  return c;
}

function valueOf_6(c){
  $clinit_Character();
  var result;
  if (c < 128) {
    result = ($clinit_Character$BoxedValues() , boxedValues_0)[c];
    if (isNull(result)) {
      result = ($clinit_Character$BoxedValues() , boxedValues_0)[c] = new Character(c);
    }
    return result;
  }
  return new Character(c);
}

defineClass(44, 1, {3:1, 44:1, 4:1, 1:1}, Character);
_.$init_217 = function $init_217(){
}
;
_.charValue = function charValue(){
  return this.value_0;
}
;
_.equals = function equals_5(o){
  return instanceOf(o, 44) && castTo(o, 44).value_0 == this.value_0;
}
;
_.hashCode = function hashCode_9(){
  return hashCode_10(this.value_0);
}
;
_.toString_0 = function toString_17(){
  return valueOf_12(this.value_0);
}
;
_.value_0 = 0;
var BYTES_0 = 0, MAX_CODE_POINT = 1114111, MAX_HIGH_SURROGATE = 56319, MAX_LOW_SURROGATE = 57343, MAX_RADIX = 36, MAX_SURROGATE = 57343, MAX_VALUE_1 = 65535, MIN_CODE_POINT = 0, MIN_HIGH_SURROGATE = 55296, MIN_LOW_SURROGATE = 56320, MIN_RADIX = 2, MIN_SUPPLEMENTARY_CODE_POINT = 65536, MIN_SURROGATE = 55296, MIN_VALUE_1 = 0, SIZE_0 = 16, TYPE_22;
var Ljava_lang_Character_2_classLit = createForClass('java.lang', 'Character', 44, Ljava_lang_Object_2_classLit);
function $clinit_Character$BoxedValues(){
  $clinit_Character$BoxedValues = emptyMethod;
  $clinit_Object();
  boxedValues_0 = initUnidimensionalArray(Ljava_lang_Character_2_classLit, {3:1, 1:1, 7:1}, 44, 128, 0, 1);
}

defineClass(344, 1, {1:1});
var boxedValues_0;
var Ljava_lang_Character$BoxedValues_2_classLit = createForClass('java.lang', 'Character/BoxedValues', 344, Ljava_lang_Object_2_classLit);
function $clinit_Character$CharSequenceAdapter(){
  $clinit_Character$CharSequenceAdapter = emptyMethod;
}

defineClass(343, 1, {302:1, 1:1});
var Ljava_lang_Character$CharSequenceAdapter_2_classLit = createForClass('java.lang', 'Character/CharSequenceAdapter', 343, Ljava_lang_Object_2_classLit);
function $clinit_ClassCastException(){
  $clinit_ClassCastException = emptyMethod;
  $clinit_RuntimeException();
}

function ClassCastException(){
  $clinit_ClassCastException();
  RuntimeException.call(this);
  this.$init_219();
}

defineClass(34, 9, {3:1, 34:1, 10:1, 1:1, 9:1, 8:1}, ClassCastException);
_.$init_219 = function $init_219(){
}
;
var Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang', 'ClassCastException', 34, Ljava_lang_RuntimeException_2_classLit);
function $clinit_Cloneable(){
  $clinit_Cloneable = emptyMethod;
}

var Ljava_lang_Cloneable_2_classLit = createForInterface('java.lang', 'Cloneable');
function $clinit_Double$PowersTable(){
  $clinit_Double$PowersTable = emptyMethod;
}

defineClass(346, 1, {1:1});
var Ljava_lang_Double$PowersTable_2_classLit = createForClass('java.lang', 'Double/PowersTable', 346, Ljava_lang_Object_2_classLit);
function $clinit_Float(){
  $clinit_Float = emptyMethod;
  $clinit_Number();
  MIN_EXPONENT_0 = -126;
  NaN_1 = 0 / 0;
  NEGATIVE_INFINITY_0 = -1 / 0;
  POSITIVE_INFINITY_0 = 1 / 0;
  BYTES_2 = narrow_int(32 / 8);
  TYPE_24 = F_classLit;
}

function Float(value_0){
  Number_0.call(this);
  this.$init_220();
  this.value_0 = value_0;
}

function hashCode_13(f){
  return round_int(f);
}

function toString_21(b){
  return valueOf_14(b);
}

function valueOf_8(f){
  return new Float(f);
}

defineClass(71, 43, {3:1, 4:1, 71:1, 1:1}, Float);
_.$init_220 = function $init_220(){
}
;
_.byteValue = function byteValue_1(){
  return round_byte(this.value_0);
}
;
_.doubleValue = function doubleValue_0(){
  return this.value_0;
}
;
_.equals = function equals_6(o){
  return instanceOf(o, 71) && castTo(o, 71).value_0 == this.value_0;
}
;
_.floatValue = function floatValue_0(){
  return this.value_0;
}
;
_.hashCode = function hashCode_12(){
  return hashCode_13(this.value_0);
}
;
_.intValue = function intValue_0(){
  return round_int(this.value_0);
}
;
_.longValue = function longValue_1(){
  return fromDouble_0(this.value_0);
}
;
_.shortValue = function shortValue_1(){
  return round_short(this.value_0);
}
;
_.toString_0 = function toString_20(){
  return toString_21(this.value_0);
}
;
_.value_0 = 0;
var BYTES_2 = 0, MAX_EXPONENT_0 = 127, MAX_VALUE_3 = 3.4028234663852886E38, MIN_EXPONENT_0 = 0, MIN_NORMAL_0 = 1.1754943508222875E-38, MIN_VALUE_3 = 1.401298464324817E-45, NEGATIVE_INFINITY_0 = 0, NaN_1 = 0, POSITIVE_INFINITY_0 = 0, POWER_31_INT = 2147483648, SIZE_2 = 32, TYPE_24;
var Ljava_lang_Float_2_classLit = createForClass('java.lang', 'Float', 71, Ljava_lang_Number_2_classLit);
function $clinit_IllegalArgumentException(){
  $clinit_IllegalArgumentException = emptyMethod;
  $clinit_RuntimeException();
}

function IllegalArgumentException(message){
  $clinit_IllegalArgumentException();
  RuntimeException_1.call(this, message);
  this.$init_221();
}

defineClass(35, 9, {3:1, 10:1, 1:1, 9:1, 8:1}, IllegalArgumentException);
_.$init_221 = function $init_221(){
}
;
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang', 'IllegalArgumentException', 35, Ljava_lang_RuntimeException_2_classLit);
function $clinit_IllegalStateException(){
  $clinit_IllegalStateException = emptyMethod;
  $clinit_RuntimeException();
}

function IllegalStateException(){
  $clinit_IllegalStateException();
  RuntimeException.call(this);
  this.$init_222();
}

function IllegalStateException_0(s){
  $clinit_IllegalStateException();
  RuntimeException_1.call(this, s);
  this.$init_222();
}

defineClass(29, 9, {3:1, 10:1, 1:1, 9:1, 8:1}, IllegalStateException, IllegalStateException_0);
_.$init_222 = function $init_222(){
}
;
var Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang', 'IllegalStateException', 29, Ljava_lang_RuntimeException_2_classLit);
function $clinit_IndexOutOfBoundsException(){
  $clinit_IndexOutOfBoundsException = emptyMethod;
  $clinit_RuntimeException();
}

function IndexOutOfBoundsException(){
  $clinit_IndexOutOfBoundsException();
  RuntimeException.call(this);
  this.$init_223();
}

function IndexOutOfBoundsException_0(message){
  $clinit_IndexOutOfBoundsException();
  RuntimeException_1.call(this, message);
  this.$init_223();
}

defineClass(32, 9, {3:1, 10:1, 1:1, 9:1, 8:1}, IndexOutOfBoundsException, IndexOutOfBoundsException_0);
_.$init_223 = function $init_223(){
}
;
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'IndexOutOfBoundsException', 32, Ljava_lang_RuntimeException_2_classLit);
function $clinit_Integer(){
  $clinit_Integer = emptyMethod;
  $clinit_Number();
  BYTES_3 = narrow_int(32 / 8);
  TYPE_25 = I_classLit;
}

function Integer(value_0){
  Number_0.call(this);
  this.$init_224();
  this.value_0 = value_0;
}

function hashCode_15(i_0){
  return i_0;
}

function numberOfLeadingZeros_0(i_0){
  $clinit_Integer();
  var m, n, y_0;
  if (i_0 < 0) {
    return 0;
  }
   else if (i_0 == 0) {
    return 32;
  }
   else {
    y_0 = -(i_0 >> 16);
    m = y_0 >> 16 & 16;
    n = 16 - m;
    i_0 = i_0 >> m;
    y_0 = i_0 - 256;
    m = y_0 >> 16 & 8;
    n += m;
    i_0 <<= m;
    y_0 = i_0 - 4096;
    m = y_0 >> 16 & 4;
    n += m;
    i_0 <<= m;
    y_0 = i_0 - 16384;
    m = y_0 >> 16 & 2;
    n += m;
    i_0 <<= m;
    y_0 = i_0 >> 14;
    m = y_0 & ~(y_0 >> 1);
    return n + 2 - m;
  }
}

function numberOfTrailingZeros(i_0){
  $clinit_Integer();
  var r, rtn;
  if (i_0 == 0) {
    return 32;
  }
   else {
    rtn = 0;
    for (r = 1; (r & i_0) == 0; r <<= 1) {
      rtn++;
    }
    return rtn;
  }
}

function toHexString(value_0){
  $clinit_Integer();
  return toUnsignedRadixString(value_0, 16);
}

function toString_23(value_0){
  return valueOf_15(value_0);
}

function toUnsignedRadixString(value_0, radix){
  return (value_0 >>> 0).toString(radix);
}

function valueOf_9(i_0){
  $clinit_Integer();
  var rebase, result;
  if (i_0 > -129 && i_0 < 128) {
    rebase = i_0 + 128;
    result = ($clinit_Integer$BoxedValues() , boxedValues_1)[rebase];
    if (isNull(result)) {
      result = ($clinit_Integer$BoxedValues() , boxedValues_1)[rebase] = new Integer(i_0);
    }
    return result;
  }
  return new Integer(i_0);
}

defineClass(45, 43, {3:1, 4:1, 45:1, 1:1}, Integer);
_.$init_224 = function $init_224(){
}
;
_.byteValue = function byteValue_2(){
  return narrow_byte(this.value_0);
}
;
_.doubleValue = function doubleValue_1(){
  return this.value_0;
}
;
_.equals = function equals_7(o){
  return instanceOf(o, 45) && castTo(o, 45).value_0 == this.value_0;
}
;
_.floatValue = function floatValue_1(){
  return this.value_0;
}
;
_.hashCode = function hashCode_14(){
  return hashCode_15(this.value_0);
}
;
_.intValue = function intValue_1(){
  return this.value_0;
}
;
_.longValue = function longValue_2(){
  return fromInt_0(this.value_0);
}
;
_.shortValue = function shortValue_2(){
  return narrow_short(this.value_0);
}
;
_.toString_0 = function toString_22(){
  return toString_23(this.value_0);
}
;
_.value_0 = 0;
var BYTES_3 = 0, MAX_VALUE_4 = 2147483647, MIN_VALUE_4 = -2147483648, SIZE_3 = 32, TYPE_25;
var Ljava_lang_Integer_2_classLit = createForClass('java.lang', 'Integer', 45, Ljava_lang_Number_2_classLit);
function $clinit_Integer$BoxedValues(){
  $clinit_Integer$BoxedValues = emptyMethod;
  $clinit_Object();
  boxedValues_1 = initUnidimensionalArray(Ljava_lang_Integer_2_classLit, {3:1, 1:1, 7:1}, 45, 256, 0, 1);
}

defineClass(347, 1, {1:1});
var boxedValues_1;
var Ljava_lang_Integer$BoxedValues_2_classLit = createForClass('java.lang', 'Integer/BoxedValues', 347, Ljava_lang_Object_2_classLit);
function $clinit_Integer$ReverseNibbles(){
  $clinit_Integer$ReverseNibbles = emptyMethod;
}

defineClass(348, 1, {1:1});
var Ljava_lang_Integer$ReverseNibbles_2_classLit = createForClass('java.lang', 'Integer/ReverseNibbles', 348, Ljava_lang_Object_2_classLit);
function $clinit_Long(){
  $clinit_Long = emptyMethod;
  $clinit_Number();
  BYTES_4 = narrow_int(64 / 8);
  TYPE_26 = J_classLit;
}

function Long(value_0){
  Number_0.call(this);
  this.$init_225();
  this.value_0 = value_0;
}

function hashCode_17(l){
  return toInt_0(l);
}

function toString_25(value_0){
  return valueOf_16(value_0);
}

function valueOf_10(i_0){
  var rebase, result;
  if (gt(i_0, fromInt_0(-129)) && lt(i_0, 128)) {
    rebase = toInt_0(i_0) + 128;
    result = ($clinit_Long$BoxedValues() , boxedValues_2)[rebase];
    if (isNull(result)) {
      result = ($clinit_Long$BoxedValues() , boxedValues_2)[rebase] = new Long(i_0);
    }
    return result;
  }
  return new Long(i_0);
}

defineClass(46, 43, {3:1, 4:1, 46:1, 1:1}, Long);
_.$init_225 = function $init_225(){
}
;
_.byteValue = function byteValue_3(){
  return narrow_byte(toInt_0(this.value_0));
}
;
_.doubleValue = function doubleValue_2(){
  return toDouble_0(this.value_0);
}
;
_.equals = function equals_8(o){
  return instanceOf(o, 46) && eq(castTo(o, 46).value_0, this.value_0);
}
;
_.floatValue = function floatValue_2(){
  return toDouble_0(this.value_0);
}
;
_.hashCode = function hashCode_16(){
  return hashCode_17(this.value_0);
}
;
_.intValue = function intValue_2(){
  return toInt_0(this.value_0);
}
;
_.longValue = function longValue_3(){
  return this.value_0;
}
;
_.shortValue = function shortValue_3(){
  return narrow_short(toInt_0(this.value_0));
}
;
_.toString_0 = function toString_24(){
  return toString_25(this.value_0);
}
;
_.value_0 = 0;
var BYTES_4 = 0, MAX_VALUE_5 = {l:4194303, m:4194303, h:524287}, MIN_VALUE_5 = {l:0, m:0, h:524288}, SIZE_4 = 64, TYPE_26;
var Ljava_lang_Long_2_classLit = createForClass('java.lang', 'Long', 46, Ljava_lang_Number_2_classLit);
function $clinit_Long$BoxedValues(){
  $clinit_Long$BoxedValues = emptyMethod;
  $clinit_Object();
  boxedValues_2 = initUnidimensionalArray(Ljava_lang_Long_2_classLit, {3:1, 1:1, 7:1}, 46, 256, 0, 1);
}

defineClass(349, 1, {1:1});
var boxedValues_2;
var Ljava_lang_Long$BoxedValues_2_classLit = createForClass('java.lang', 'Long/BoxedValues', 349, Ljava_lang_Object_2_classLit);
function $clinit_Math(){
  $clinit_Math = emptyMethod;
  $clinit_Object();
  PI_OVER_180 = 3.141592653589793 / 180;
  PI_UNDER_180 = 180 / 3.141592653589793;
}

function abs_0(x_0){
  $clinit_Math();
  return x_0 < 0?-x_0:x_0;
}

function ceil_0(x_0){
  $clinit_Math();
  return $wnd.Math.ceil(x_0);
}

function floor_0(x_0){
  $clinit_Math();
  return $wnd.Math.floor(x_0);
}

function max_0(x_0, y_0){
  $clinit_Math();
  return x_0 > y_0?x_0:y_0;
}

function min_0(x_0, y_0){
  $clinit_Math();
  return x_0 < y_0?x_0:y_0;
}

function random_0(){
  $clinit_Math();
  return $wnd.Math.random();
}

defineClass(365, 1, {1:1});
var E_0 = 2.718281828459045, PI_0 = 3.141592653589793, PI_OVER_180 = 0, PI_UNDER_180 = 0;
var Ljava_lang_Math_2_classLit = createForClass('java.lang', 'Math', 365, Ljava_lang_Object_2_classLit);
function $clinit_Math$NativeMath(){
  $clinit_Math$NativeMath = emptyMethod;
  $clinit_Object();
}

function $clinit_NullPointerException(){
  $clinit_NullPointerException = emptyMethod;
  $clinit_RuntimeException();
}

function NullPointerException(){
  $clinit_NullPointerException();
  RuntimeException.call(this);
  this.$init_226();
}

function NullPointerException_0(message){
  $clinit_NullPointerException();
  RuntimeException_1.call(this, message);
  this.$init_226();
}

defineClass(26, 9, {3:1, 10:1, 1:1, 9:1, 8:1}, NullPointerException, NullPointerException_0);
_.$init_226 = function $init_226(){
}
;
_.createError = function createError_0(msg){
  return new TypeError(msg);
}
;
var Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang', 'NullPointerException', 26, Ljava_lang_RuntimeException_2_classLit);
function $clinit_Number$__Decode(){
  $clinit_Number$__Decode = emptyMethod;
}

defineClass(341, 1, {1:1});
var Ljava_lang_Number$_1_1Decode_2_classLit = createForClass('java.lang', 'Number/__Decode', 341, Ljava_lang_Object_2_classLit);
function $clinit_Number$__ParseLong(){
  $clinit_Number$__ParseLong = emptyMethod;
}

defineClass(342, 1, {1:1});
var Ljava_lang_Number$_1_1ParseLong_2_classLit = createForClass('java.lang', 'Number/__ParseLong', 342, Ljava_lang_Object_2_classLit);
function $clinit_Short(){
  $clinit_Short = emptyMethod;
  $clinit_Number();
  MIN_VALUE_6 = narrow_short(32768);
  MAX_VALUE_6 = narrow_short(32767);
  BYTES_5 = narrow_int(16 / 8);
  TYPE_27 = S_classLit;
}

function Short(value_0){
  Number_0.call(this);
  this.$init_227();
  this.value_0 = value_0;
}

function hashCode_19(s){
  return s;
}

function toString_27(b){
  return valueOf_15(b);
}

function valueOf_11(s){
  var rebase, result;
  if (s > -129 && s < 128) {
    rebase = s + 128;
    result = ($clinit_Short$BoxedValues() , boxedValues_3)[rebase];
    if (isNull(result)) {
      result = ($clinit_Short$BoxedValues() , boxedValues_3)[rebase] = new Short(s);
    }
    return result;
  }
  return new Short(s);
}

defineClass(47, 43, {3:1, 4:1, 1:1, 47:1}, Short);
_.$init_227 = function $init_227(){
}
;
_.byteValue = function byteValue_4(){
  return narrow_byte(this.value_0);
}
;
_.doubleValue = function doubleValue_3(){
  return this.value_0;
}
;
_.equals = function equals_9(o){
  return instanceOf(o, 47) && castTo(o, 47).value_0 == this.value_0;
}
;
_.floatValue = function floatValue_3(){
  return this.value_0;
}
;
_.hashCode = function hashCode_18(){
  return hashCode_19(this.value_0);
}
;
_.intValue = function intValue_3(){
  return this.value_0;
}
;
_.longValue = function longValue_4(){
  return fromInt_0(this.value_0);
}
;
_.shortValue = function shortValue_4(){
  return this.value_0;
}
;
_.toString_0 = function toString_26(){
  return toString_27(this.value_0);
}
;
_.value_0 = 0;
var BYTES_5 = 0, MAX_VALUE_6 = 0, MIN_VALUE_6 = 0, SIZE_5 = 16, TYPE_27;
var Ljava_lang_Short_2_classLit = createForClass('java.lang', 'Short', 47, Ljava_lang_Number_2_classLit);
function $clinit_Short$BoxedValues(){
  $clinit_Short$BoxedValues = emptyMethod;
  $clinit_Object();
  boxedValues_3 = initUnidimensionalArray(Ljava_lang_Short_2_classLit, {3:1, 1:1, 7:1}, 47, 256, 0, 1);
}

defineClass(350, 1, {1:1});
var boxedValues_3;
var Ljava_lang_Short$BoxedValues_2_classLit = createForClass('java.lang', 'Short/BoxedValues', 350, Ljava_lang_Object_2_classLit);
function $clinit_StackTraceElement(){
  $clinit_StackTraceElement = emptyMethod;
  $clinit_Object();
}

function StackTraceElement(className, methodName, fileName, lineNumber){
  $clinit_StackTraceElement();
  Object_0.call(this);
  this.$init_228();
  this.className_0 = className;
  this.methodName = methodName;
  this.fileName = fileName;
  this.lineNumber = lineNumber;
}

defineClass(25, 1, {3:1, 1:1, 25:1}, StackTraceElement);
_.$init_228 = function $init_228(){
}
;
_.equals = function equals_10(other){
  var st;
  if (instanceOf(other, 25)) {
    st = castTo(other, 25);
    return this.lineNumber == st.lineNumber && equals_20(this.methodName, st.methodName) && equals_20(this.className_0, st.className_0) && equals_20(this.fileName, st.fileName);
  }
  return false;
}
;
_.getClassName = function getClassName(){
  return this.className_0;
}
;
_.getMethodName = function getMethodName(){
  return this.methodName;
}
;
_.hashCode = function hashCode_20(){
  return hash_0(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), {3:1, 1:1, 7:1}, 1, 5, [valueOf_9(this.lineNumber), this.className_0, this.methodName, this.fileName]));
}
;
_.toString_0 = function toString_28(){
  return this.className_0 + '.' + this.methodName + '(' + (jsNotEquals(this.fileName, null)?this.fileName:'Unknown Source') + (this.lineNumber >= 0?':' + this.lineNumber:'') + ')';
}
;
_.lineNumber = 0;
var Ljava_lang_StackTraceElement_2_classLit = createForClass('java.lang', 'StackTraceElement', 25, Ljava_lang_Object_2_classLit);
function $clinit_String$NativeFunction(){
  $clinit_String$NativeFunction = emptyMethod;
  $clinit_Object();
}

function $clinit_String$NativeString(){
  $clinit_String$NativeString = emptyMethod;
  $clinit_Object();
}

function $clinit_StringBuilder(){
  $clinit_StringBuilder = emptyMethod;
  $clinit_AbstractStringBuilder();
}

function StringBuilder(){
  $clinit_StringBuilder();
  AbstractStringBuilder.call(this, '');
  this.$init_230();
}

function StringBuilder_0(ignoredCapacity){
  $clinit_StringBuilder();
  AbstractStringBuilder.call(this, '');
  this.$init_230();
}

function StringBuilder_1(s){
  $clinit_StringBuilder();
  AbstractStringBuilder.call(this, s);
  this.$init_230();
}

defineClass(11, 48, {302:1, 1:1}, StringBuilder, StringBuilder_0, StringBuilder_1);
_.$init_230 = function $init_230(){
}
;
_.charAt = function charAt_0(index_0){
  return getClassPrototype(48).charAt.call(this, index_0);
}
;
_.length_0 = function length_2(){
  return getClassPrototype(48).length_0.call(this);
}
;
_.toString_0 = function toString_29(){
  return getClassPrototype(48).toString_0.call(this);
}
;
_.append = function append(x_0){
  this.string += charToString(x_0);
  return this;
}
;
_.append_0 = function append_0(x_0){
  this.string += '' + x_0;
  return this;
}
;
_.append_1 = function append_1(x_0){
  this.string += '' + x_0;
  return this;
}
;
_.append_2 = function append_2(x_0){
  this.string += '' + x_0;
  return this;
}
;
var Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang', 'StringBuilder', 11, Ljava_lang_AbstractStringBuilder_2_classLit);
function $clinit_StringIndexOutOfBoundsException(){
  $clinit_StringIndexOutOfBoundsException = emptyMethod;
  $clinit_IndexOutOfBoundsException();
}

function StringIndexOutOfBoundsException(message){
  $clinit_StringIndexOutOfBoundsException();
  IndexOutOfBoundsException_0.call(this, message);
  this.$init_231();
}

defineClass(93, 32, {3:1, 10:1, 1:1, 9:1, 8:1}, StringIndexOutOfBoundsException);
_.$init_231 = function $init_231(){
}
;
var Ljava_lang_StringIndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'StringIndexOutOfBoundsException', 93, Ljava_lang_IndexOutOfBoundsException_2_classLit);
function $clinit_System(){
  $clinit_System = emptyMethod;
  $clinit_Object();
  err_0 = new PrintStream(null);
  out_0 = new PrintStream(null);
}

function currentTimeMillis_0(){
  $clinit_System();
  return fromDouble_0(now_2());
}

defineClass(366, 1, {1:1});
var err_0, out_0;
var Ljava_lang_System_2_classLit = createForClass('java.lang', 'System', 366, Ljava_lang_Object_2_classLit);
function $clinit_UnsupportedOperationException(){
  $clinit_UnsupportedOperationException = emptyMethod;
  $clinit_RuntimeException();
}

function UnsupportedOperationException(){
  $clinit_UnsupportedOperationException();
  RuntimeException.call(this);
  this.$init_232();
}

function UnsupportedOperationException_0(message){
  $clinit_UnsupportedOperationException();
  RuntimeException_1.call(this, message);
  this.$init_232();
}

defineClass(36, 9, {3:1, 10:1, 1:1, 9:1, 8:1}, UnsupportedOperationException, UnsupportedOperationException_0);
_.$init_232 = function $init_232(){
}
;
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang', 'UnsupportedOperationException', 36, Ljava_lang_RuntimeException_2_classLit);
function $clinit_Void(){
  $clinit_Void = emptyMethod;
}

defineClass(118, 1, {1:1, 118:1});
var Ljava_lang_Void_2_classLit = createForClass('java.lang', 'Void', 118, Ljava_lang_Object_2_classLit);
function $clinit_Collection(){
  $clinit_Collection = emptyMethod;
}

var Ljava_util_Collection_2_classLit = createForInterface('java.util', 'Collection');
function $clinit_AbstractCollection(){
  $clinit_AbstractCollection = emptyMethod;
  $clinit_Object();
  $clinit_Iterable();
  $clinit_Collection();
}

function AbstractCollection(){
  $clinit_AbstractCollection();
  Object_0.call(this);
  this.$init_233();
}

defineClass(18, 1, {1:1});
_.$init_233 = function $init_233(){
}
;
_.equals = function equals_12(other){
  return getClassPrototype(1).equals.call(this, other);
}
;
_.hashCode = function hashCode_21(){
  return getClassPrototype(1).hashCode.call(this);
}
;
_.add_3 = function add_9(o){
  throw toJs(new UnsupportedOperationException_0('Add not supported on this collection'));
}
;
_.addAll = function addAll(c){
  var changed, e, e$iterator;
  checkNotNull_0(c);
  changed = false;
  for (e$iterator = c.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    changed = changed | this.add_3(e);
  }
  return changed;
}
;
_.advanceToFind = function advanceToFind(o, remove){
  var e, iter;
  for (iter = this.iterator(); iter.hasNext_0();) {
    e = iter.next_1();
    if (equals_20(o, e)) {
      if (remove) {
        iter.remove_4();
      }
      return true;
    }
  }
  return false;
}
;
_.clear_0 = function clear_3(){
  var iter;
  for (iter = this.iterator(); iter.hasNext_0();) {
    iter.next_1();
    iter.remove_4();
  }
}
;
_.contains_0 = function contains(o){
  return this.advanceToFind(o, false);
}
;
_.containsAll = function containsAll(c){
  var e, e$iterator;
  checkNotNull_0(c);
  for (e$iterator = c.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    if (!this.contains_0(e)) {
      return false;
    }
  }
  return true;
}
;
_.isEmpty_0 = function isEmpty_0(){
  return this.size_1() == 0;
}
;
_.remove_5 = function remove_6(o){
  return this.advanceToFind(o, true);
}
;
_.toArray = function toArray(){
  return this.toArray_0(initUnidimensionalArray(Ljava_lang_Object_2_classLit, {3:1, 1:1, 7:1}, 1, this.size_1(), 5, 1));
}
;
_.toArray_0 = function toArray_0(a){
  var i_0, it, result, size_0;
  size_0 = this.size_1();
  if (a.length < size_0) {
    a = createFrom(a, size_0);
  }
  result = a;
  it = this.iterator();
  for (i_0 = 0; i_0 < size_0; ++i_0) {
    setCheck(result, i_0, it.next_1());
  }
  if (a.length > size_0) {
    setCheck(a, size_0, null);
  }
  return a;
}
;
_.toString_0 = function toString_30(){
  var e, e$iterator, joiner;
  joiner = new StringJoiner(', ', '[', ']');
  for (e$iterator = this.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    joiner.add_5(e === this?'(this Collection)':valueOf_17(e));
  }
  return joiner.toString_0();
}
;
var Ljava_util_AbstractCollection_2_classLit = createForClass('java.util', 'AbstractCollection', 18, Ljava_lang_Object_2_classLit);
function $clinit_Map(){
  $clinit_Map = emptyMethod;
}

var Ljava_util_Map_2_classLit = createForInterface('java.util', 'Map');
function $clinit_AbstractMap(){
  $clinit_AbstractMap = emptyMethod;
  $clinit_Object();
}

function AbstractMap(){
  $clinit_AbstractMap();
  Object_0.call(this);
  this.$init_234();
}

function getEntryValueOrNull(entry){
  $clinit_AbstractMap();
  return isNull(entry)?null:entry.getValue();
}

defineClass(114, 1, {1:1, 33:1});
_.$init_234 = function $init_234(){
}
;
_.clear_0 = function clear_4(){
  this.entrySet().clear_0();
}
;
_.containsEntry = function containsEntry(entry){
  var key, ourValue, value_0;
  key = entry.getKey();
  value_0 = entry.getValue();
  ourValue = this.get_2(key);
  if (!equals_20(value_0, ourValue)) {
    return false;
  }
  if (jsEquals(ourValue, null) && !this.containsKey(key)) {
    return false;
  }
  return true;
}
;
_.containsKey = function containsKey(key){
  return isNotNull(this.implFindEntry(key, false));
}
;
_.equals = function equals_13(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 33)) {
    return false;
  }
  otherMap = castTo(obj, 33);
  if (this.size_1() != otherMap.size_1()) {
    return false;
  }
  for (entry$iterator = otherMap.entrySet().iterator(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_1(), 20);
    if (!this.containsEntry(entry)) {
      return false;
    }
  }
  return true;
}
;
_.get_2 = function get_9(key){
  return getEntryValueOrNull(this.implFindEntry(key, false));
}
;
_.hashCode = function hashCode_22(){
  return hashCode_28(this.entrySet());
}
;
_.implFindEntry = function implFindEntry(key, remove){
  var entry, iter, k;
  for (iter = this.entrySet().iterator(); iter.hasNext_0();) {
    entry = castTo(iter.next_1(), 20);
    k = entry.getKey();
    if (equals_20(key, k)) {
      if (remove) {
        entry = new AbstractMap$SimpleEntry(entry.getKey(), entry.getValue());
        iter.remove_4();
      }
      return entry;
    }
  }
  return null;
}
;
_.isEmpty_0 = function isEmpty_1(){
  return this.size_1() == 0;
}
;
_.keySet = function keySet(){
  return new AbstractMap$1(this);
}
;
_.put = function put(key, value_0){
  throw toJs(new UnsupportedOperationException_0('Put not supported on this map'));
}
;
_.remove_6 = function remove_7(key){
  return getEntryValueOrNull(this.implFindEntry(key, true));
}
;
_.size_1 = function size_3(){
  return this.entrySet().size_1();
}
;
_.toString_0 = function toString_31(){
  var entry, entry$iterator, joiner;
  joiner = new StringJoiner(', ', '{', '}');
  for (entry$iterator = this.entrySet().iterator(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_1(), 20);
    joiner.add_5(this.toString_4(entry));
  }
  return joiner.toString_0();
}
;
_.toString_3 = function toString_32(o){
  return o === this?'(this Map)':valueOf_17(o);
}
;
_.toString_4 = function toString_33(entry){
  return this.toString_3(entry.getKey()) + '=' + this.toString_3(entry.getValue());
}
;
var Ljava_util_AbstractMap_2_classLit = createForClass('java.util', 'AbstractMap', 114, Ljava_lang_Object_2_classLit);
function $clinit_AbstractHashMap(){
  $clinit_AbstractHashMap = emptyMethod;
  $clinit_AbstractMap();
}

function AbstractHashMap(){
  $clinit_AbstractHashMap();
  AbstractMap.call(this);
  this.$init_235();
  this.reset_0();
}

defineClass(187, 114, {1:1, 33:1});
_.$init_235 = function $init_235(){
}
;
_.clear_0 = function clear_5(){
  this.reset_0();
}
;
_.containsKey = function containsKey_0(key){
  return instanceOfString(key)?this.hasStringValue(unsafeCastToString(key)):this.hasHashValue(key);
}
;
_.entrySet = function entrySet(){
  return new AbstractHashMap$EntrySet(this);
}
;
_.get_2 = function get_10(key){
  return instanceOfString(key)?this.getStringValue(unsafeCastToString(key)):this.getHashValue(key);
}
;
_.getHashValue = function getHashValue(key){
  return getEntryValueOrNull(this.hashCodeMap.getEntry(key));
}
;
_.getStringValue = function getStringValue(key){
  return jsEquals(key, null)?this.getHashValue(null):this.stringMap.get_3(key);
}
;
_.hasHashValue = function hasHashValue(key){
  return isNotNull(this.hashCodeMap.getEntry(key));
}
;
_.hasStringValue = function hasStringValue(key){
  return jsEquals(key, null)?this.hasHashValue(null):this.stringMap.contains_1(key);
}
;
_.put = function put_0(key, value_0){
  return instanceOfString(key)?this.putStringValue(unsafeCastToString(key), value_0):this.putHashValue(key, value_0);
}
;
_.putHashValue = function putHashValue(key, value_0){
  return this.hashCodeMap.put(key, value_0);
}
;
_.putStringValue = function putStringValue(key, value_0){
  return jsEquals(key, null)?this.putHashValue(null, value_0):this.stringMap.put_0(key, value_0);
}
;
_.remove_6 = function remove_8(key){
  return instanceOfString(key)?this.removeStringValue(unsafeCastToString(key)):this.removeHashValue(key);
}
;
_.removeHashValue = function removeHashValue(key){
  return this.hashCodeMap.remove_6(key);
}
;
_.removeStringValue = function removeStringValue(key){
  return jsEquals(key, null)?this.removeHashValue(null):this.stringMap.remove_8(key);
}
;
_.reset_0 = function reset_0(){
  this.hashCodeMap = new InternalHashCodeMap(this);
  this.stringMap = new InternalStringMap(this);
  structureChanged(this);
}
;
_.size_1 = function size_4(){
  return this.hashCodeMap.size_1() + this.stringMap.size_1();
}
;
var Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util', 'AbstractHashMap', 187, Ljava_util_AbstractMap_2_classLit);
function $clinit_Set(){
  $clinit_Set = emptyMethod;
}

var Ljava_util_Set_2_classLit = createForInterface('java.util', 'Set');
function $clinit_AbstractSet(){
  $clinit_AbstractSet = emptyMethod;
  $clinit_AbstractCollection();
  $clinit_Iterable();
  $clinit_Collection();
  $clinit_Set();
}

function AbstractSet(){
  $clinit_AbstractSet();
  AbstractCollection.call(this);
  this.$init_236();
}

defineClass(76, 18, {1:1, 30:1});
_.$init_236 = function $init_236(){
}
;
_.add_3 = function add_10(o){
  return getClassPrototype(18).add_3.call(this, o);
}
;
_.addAll = function addAll_0(c){
  return getClassPrototype(18).addAll.call(this, c);
}
;
_.clear_0 = function clear_6(){
  getClassPrototype(18).clear_0.call(this);
}
;
_.contains_0 = function contains_0(o){
  return getClassPrototype(18).contains_0.call(this, o);
}
;
_.containsAll = function containsAll_0(c){
  return getClassPrototype(18).containsAll.call(this, c);
}
;
_.isEmpty_0 = function isEmpty_2(){
  return getClassPrototype(18).isEmpty_0.call(this);
}
;
_.remove_5 = function remove_9(o){
  return getClassPrototype(18).remove_5.call(this, o);
}
;
_.toArray = function toArray_1(){
  return getClassPrototype(18).toArray.call(this);
}
;
_.toArray_0 = function toArray_2(a){
  return getClassPrototype(18).toArray_0.call(this, a);
}
;
_.equals = function equals_14(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 30)) {
    return false;
  }
  other = castTo(o, 30);
  if (other.size_1() != this.size_1()) {
    return false;
  }
  return this.containsAll(other);
}
;
_.hashCode = function hashCode_23(){
  return hashCode_28(this);
}
;
var Ljava_util_AbstractSet_2_classLit = createForClass('java.util', 'AbstractSet', 76, Ljava_util_AbstractCollection_2_classLit);
function $clinit_AbstractHashMap$EntrySet(){
  $clinit_AbstractHashMap$EntrySet = emptyMethod;
  $clinit_AbstractSet();
}

function AbstractHashMap$EntrySet(this$0){
  $clinit_AbstractHashMap$EntrySet();
  this.this$01 = this$0;
  AbstractSet.call(this);
  this.$init_237();
}

defineClass(188, 76, {1:1, 30:1}, AbstractHashMap$EntrySet);
_.$init_237 = function $init_237(){
}
;
_.clear_0 = function clear_7(){
  this.this$01.clear_0();
}
;
_.contains_0 = function contains_1(o){
  if (instanceOf(o, 20)) {
    return this.this$01.containsEntry(castTo(o, 20));
  }
  return false;
}
;
_.iterator = function iterator_2(){
  return new AbstractHashMap$EntrySetIterator(this.this$01);
}
;
_.remove_5 = function remove_10(entry){
  var key;
  if (this.contains_0(entry)) {
    key = castTo(entry, 20).getKey();
    this.this$01.remove_6(key);
    return true;
  }
  return false;
}
;
_.size_1 = function size_5(){
  return this.this$01.size_1();
}
;
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySet', 188, Ljava_util_AbstractSet_2_classLit);
function $clinit_AbstractHashMap$EntrySetIterator(){
  $clinit_AbstractHashMap$EntrySetIterator = emptyMethod;
  $clinit_Object();
  $clinit_Iterator();
}

function AbstractHashMap$EntrySetIterator(this$0){
  $clinit_AbstractHashMap$EntrySetIterator();
  this.this$01 = this$0;
  Object_0.call(this);
  this.$init_238();
  recordLastKnownStructure(this$0, this);
}

defineClass(189, 1, {1:1}, AbstractHashMap$EntrySetIterator);
_.$init_238 = function $init_238(){
  this.stringMapEntries = this.this$01.stringMap.iterator();
  this.current = this.stringMapEntries;
  this.hasNext = this.computeHasNext();
}
;
_.next_1 = function next_2(){
  return this.next_2();
}
;
_.computeHasNext = function computeHasNext(){
  if (this.current.hasNext_0()) {
    return true;
  }
  if (jsNotEquals(this.current, this.stringMapEntries)) {
    return false;
  }
  this.current = this.this$01.hashCodeMap.iterator();
  return this.current.hasNext_0();
}
;
_.hasNext_0 = function hasNext_0(){
  return this.hasNext;
}
;
_.next_2 = function next_3(){
  var rv;
  checkStructuralChange(this.this$01, this);
  checkElement(this.hasNext_0());
  this.last = this.current;
  rv = castTo(this.current.next_1(), 20);
  this.hasNext = this.computeHasNext();
  return rv;
}
;
_.remove_4 = function remove_11(){
  checkState(isNotNull(this.last));
  checkStructuralChange(this.this$01, this);
  this.last.remove_4();
  this.last = null;
  this.hasNext = this.computeHasNext();
  recordLastKnownStructure(this.this$01, this);
}
;
_.hasNext = false;
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySetIterator', 189, Ljava_lang_Object_2_classLit);
function $clinit_List(){
  $clinit_List = emptyMethod;
}

var Ljava_util_List_2_classLit = createForInterface('java.util', 'List');
function $clinit_AbstractList(){
  $clinit_AbstractList = emptyMethod;
  $clinit_AbstractCollection();
  $clinit_Iterable();
  $clinit_Collection();
  $clinit_List();
}

function AbstractList(){
  $clinit_AbstractList();
  AbstractCollection.call(this);
  this.$init_239();
}

defineClass(75, 18, {1:1, 21:1});
_.$init_239 = function $init_239(){
}
;
_.addAll = function addAll_1(c){
  return getClassPrototype(18).addAll.call(this, c);
}
;
_.contains_0 = function contains_2(o){
  return getClassPrototype(18).contains_0.call(this, o);
}
;
_.containsAll = function containsAll_1(c){
  return getClassPrototype(18).containsAll.call(this, c);
}
;
_.isEmpty_0 = function isEmpty_3(){
  return getClassPrototype(18).isEmpty_0.call(this);
}
;
_.remove_5 = function remove_13(o){
  return getClassPrototype(18).remove_5.call(this, o);
}
;
_.toArray = function toArray_3(){
  return getClassPrototype(18).toArray.call(this);
}
;
_.toArray_0 = function toArray_4(a){
  return getClassPrototype(18).toArray_0.call(this, a);
}
;
_.add_4 = function add_11(index_0, element){
  throw toJs(new UnsupportedOperationException_0('Add not supported on this list'));
}
;
_.add_3 = function add_12(obj){
  this.add_4(this.size_1(), obj);
  return true;
}
;
_.clear_0 = function clear_8(){
  this.removeRange(0, this.size_1());
}
;
_.equals = function equals_15(o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 21)) {
    return false;
  }
  other = castTo(o, 21);
  if (this.size_1() != other.size_1()) {
    return false;
  }
  iterOther = other.iterator();
  for (elem$iterator = this.iterator(); elem$iterator.hasNext_0();) {
    elem = elem$iterator.next_1();
    elemOther = iterOther.next_1();
    if (!equals_20(elem, elemOther)) {
      return false;
    }
  }
  return true;
}
;
_.hashCode = function hashCode_24(){
  return hashCode_29(this);
}
;
_.indexOf_3 = function indexOf_2(toFind){
  var i_0, n;
  for (i_0 = 0 , n = this.size_1(); i_0 < n; ++i_0) {
    if (equals_20(toFind, this.get_0(i_0))) {
      return i_0;
    }
  }
  return -1;
}
;
_.iterator = function iterator_3(){
  return new AbstractList$IteratorImpl(this);
}
;
_.listIterator = function listIterator(){
  return this.listIterator_0(0);
}
;
_.listIterator_0 = function listIterator_0(from){
  return new AbstractList$ListIteratorImpl(this, from);
}
;
_.remove_7 = function remove_12(index_0){
  throw toJs(new UnsupportedOperationException_0('Remove not supported on this list'));
}
;
_.removeRange = function removeRange(fromIndex, endIndex){
  var i_0, iter;
  iter = this.listIterator_0(fromIndex);
  for (i_0 = fromIndex; i_0 < endIndex; ++i_0) {
    iter.next_1();
    iter.remove_4();
  }
}
;
var Ljava_util_AbstractList_2_classLit = createForClass('java.util', 'AbstractList', 75, Ljava_util_AbstractCollection_2_classLit);
function $clinit_AbstractList$IteratorImpl(){
  $clinit_AbstractList$IteratorImpl = emptyMethod;
  $clinit_Object();
  $clinit_Iterator();
}

function AbstractList$IteratorImpl(this$0){
  $clinit_AbstractList$IteratorImpl();
  this.this$01_0 = this$0;
  Object_0.call(this);
  this.$init_240();
}

defineClass(60, 1, {1:1}, AbstractList$IteratorImpl);
_.$init_240 = function $init_240(){
  this.i = 0;
  this.last = -1;
}
;
_.hasNext_0 = function hasNext_1(){
  return this.i < this.this$01_0.size_1();
}
;
_.next_1 = function next_4(){
  checkElement(this.hasNext_0());
  return this.this$01_0.get_0(this.last = this.i++);
}
;
_.remove_4 = function remove_14(){
  checkState(this.last != -1);
  this.this$01_0.remove_7(this.last);
  this.i = this.last;
  this.last = -1;
}
;
_.i = 0;
_.last = 0;
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/IteratorImpl', 60, Ljava_lang_Object_2_classLit);
function $clinit_ListIterator(){
  $clinit_ListIterator = emptyMethod;
}

var Ljava_util_ListIterator_2_classLit = createForInterface('java.util', 'ListIterator');
function $clinit_AbstractList$ListIteratorImpl(){
  $clinit_AbstractList$ListIteratorImpl = emptyMethod;
  $clinit_AbstractList$IteratorImpl();
  $clinit_Iterator();
}

function AbstractList$ListIteratorImpl(this$0, start_0){
  $clinit_AbstractList$ListIteratorImpl();
  this.this$01 = this$0;
  AbstractList$IteratorImpl.call(this, this$0);
  this.$init_241();
  checkPositionIndex(start_0, this$0.size_1());
  this.i = start_0;
}

defineClass(170, 60, {1:1}, AbstractList$ListIteratorImpl);
_.$init_241 = function $init_241(){
}
;
_.hasNext_0 = function hasNext_2(){
  return getClassPrototype(60).hasNext_0.call(this);
}
;
_.next_1 = function next_5(){
  return getClassPrototype(60).next_1.call(this);
}
;
_.remove_4 = function remove_15(){
  getClassPrototype(60).remove_4.call(this);
}
;
_.hasPrevious = function hasPrevious(){
  return this.i > 0;
}
;
_.previous = function previous_0(){
  checkElement(this.hasPrevious());
  return this.this$01.get_0(this.last = --this.i);
}
;
var Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/ListIteratorImpl', 170, Ljava_util_AbstractList$IteratorImpl_2_classLit);
function $clinit_AbstractList$SubList(){
  $clinit_AbstractList$SubList = emptyMethod;
}

defineClass(373, 75, {1:1, 21:1});
var Ljava_util_AbstractList$SubList_2_classLit = createForClass('java.util', 'AbstractList/SubList', 373, Ljava_util_AbstractList_2_classLit);
function $clinit_AbstractMap$1(){
  $clinit_AbstractMap$1 = emptyMethod;
  $clinit_AbstractSet();
}

function AbstractMap$1(this$0){
  $clinit_AbstractMap$1();
  this.this$01 = this$0;
  AbstractSet.call(this);
  this.$init_242();
}

defineClass(191, 76, {1:1, 30:1}, AbstractMap$1);
_.$init_242 = function $init_242(){
}
;
_.clear_0 = function clear_9(){
  this.this$01.clear_0();
}
;
_.contains_0 = function contains_3(key){
  return this.this$01.containsKey(key);
}
;
_.iterator = function iterator_4(){
  var outerIter;
  outerIter = this.this$01.entrySet().iterator();
  return new AbstractMap$1$1(this, outerIter);
}
;
_.remove_5 = function remove_16(key){
  if (this.this$01.containsKey(key)) {
    this.this$01.remove_6(key);
    return true;
  }
  return false;
}
;
_.size_1 = function size_6(){
  return this.this$01.size_1();
}
;
var Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util', 'AbstractMap/1', 191, Ljava_util_AbstractSet_2_classLit);
function $clinit_AbstractMap$1$1(){
  $clinit_AbstractMap$1$1 = emptyMethod;
  $clinit_Object();
  $clinit_Iterator();
}

function AbstractMap$1$1(this$1, val$outerIter){
  $clinit_AbstractMap$1$1();
  this.this$11 = this$1;
  this.val$outerIter2 = val$outerIter;
  Object_0.call(this);
  this.$init_243();
}

defineClass(192, 1, {1:1}, AbstractMap$1$1);
_.$init_243 = function $init_243(){
}
;
_.hasNext_0 = function hasNext_3(){
  return this.val$outerIter2.hasNext_0();
}
;
_.next_1 = function next_6(){
  var entry;
  entry = castTo(this.val$outerIter2.next_1(), 20);
  return entry.getKey();
}
;
_.remove_4 = function remove_17(){
  this.val$outerIter2.remove_4();
}
;
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util', 'AbstractMap/1/1', 192, Ljava_lang_Object_2_classLit);
function $clinit_AbstractMap$2(){
  $clinit_AbstractMap$2 = emptyMethod;
}

defineClass(378, 18, {1:1});
var Ljava_util_AbstractMap$2_2_classLit = createForClass('java.util', 'AbstractMap/2', 378, Ljava_util_AbstractCollection_2_classLit);
function $clinit_AbstractMap$2$1(){
  $clinit_AbstractMap$2$1 = emptyMethod;
}

defineClass(379, 1, {1:1});
var Ljava_util_AbstractMap$2$1_2_classLit = createForClass('java.util', 'AbstractMap/2/1', 379, Ljava_lang_Object_2_classLit);
function $clinit_Map$Entry(){
  $clinit_Map$Entry = emptyMethod;
}

var Ljava_util_Map$Entry_2_classLit = createForInterface('java.util', 'Map/Entry');
function $clinit_AbstractMap$AbstractEntry(){
  $clinit_AbstractMap$AbstractEntry = emptyMethod;
  $clinit_Object();
}

function AbstractMap$AbstractEntry(key, value_0){
  $clinit_AbstractMap$AbstractEntry();
  Object_0.call(this);
  this.$init_244();
  this.key = key;
  this.value_0 = value_0;
}

defineClass(190, 1, {1:1, 20:1});
_.$init_244 = function $init_244(){
}
;
_.equals = function equals_16(other){
  var entry;
  if (!instanceOf(other, 20)) {
    return false;
  }
  entry = castTo(other, 20);
  return equals_20(this.key, entry.getKey()) && equals_20(this.value_0, entry.getValue());
}
;
_.getKey = function getKey(){
  return this.key;
}
;
_.getValue = function getValue(){
  return this.value_0;
}
;
_.hashCode = function hashCode_25(){
  return hashCode_31(this.key) ^ hashCode_31(this.value_0);
}
;
_.setValue = function setValue(value_0){
  var oldValue;
  oldValue = this.value_0;
  this.value_0 = value_0;
  return oldValue;
}
;
_.toString_0 = function toString_34(){
  return this.key + '=' + this.value_0;
}
;
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass('java.util', 'AbstractMap/AbstractEntry', 190, Ljava_lang_Object_2_classLit);
function $clinit_AbstractMap$SimpleEntry(){
  $clinit_AbstractMap$SimpleEntry = emptyMethod;
  $clinit_AbstractMap$AbstractEntry();
}

function AbstractMap$SimpleEntry(key, value_0){
  $clinit_AbstractMap$SimpleEntry();
  AbstractMap$AbstractEntry.call(this, key, value_0);
  this.$init_245();
}

defineClass(115, 190, {1:1, 20:1}, AbstractMap$SimpleEntry);
_.$init_245 = function $init_245(){
}
;
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleEntry', 115, Ljava_util_AbstractMap$AbstractEntry_2_classLit);
function $clinit_AbstractMap$SimpleImmutableEntry(){
  $clinit_AbstractMap$SimpleImmutableEntry = emptyMethod;
}

defineClass(377, 190, {1:1, 20:1});
var Ljava_util_AbstractMap$SimpleImmutableEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleImmutableEntry', 377, Ljava_util_AbstractMap$AbstractEntry_2_classLit);
function $clinit_AbstractMapEntry(){
  $clinit_AbstractMapEntry = emptyMethod;
  $clinit_Object();
}

function AbstractMapEntry(){
  $clinit_AbstractMapEntry();
  Object_0.call(this);
  this.$init_246();
}

defineClass(200, 1, {1:1, 20:1});
_.$init_246 = function $init_246(){
}
;
_.equals = function equals_17(other){
  var entry;
  if (!instanceOf(other, 20)) {
    return false;
  }
  entry = castTo(other, 20);
  return equals_20(this.getKey(), entry.getKey()) && equals_20(this.getValue(), entry.getValue());
}
;
_.hashCode = function hashCode_26(){
  return hashCode_31(this.getKey()) ^ hashCode_31(this.getValue());
}
;
_.toString_0 = function toString_35(){
  return this.getKey() + '=' + this.getValue();
}
;
var Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util', 'AbstractMapEntry', 200, Ljava_lang_Object_2_classLit);
function $clinit_Queue(){
  $clinit_Queue = emptyMethod;
}

var Ljava_util_Queue_2_classLit = createForInterface('java.util', 'Queue');
function $clinit_AbstractQueue(){
  $clinit_AbstractQueue = emptyMethod;
}

defineClass(382, 18, {1:1});
var Ljava_util_AbstractQueue_2_classLit = createForClass('java.util', 'AbstractQueue', 382, Ljava_util_AbstractCollection_2_classLit);
function $clinit_RandomAccess(){
  $clinit_RandomAccess = emptyMethod;
}

var Ljava_util_RandomAccess_2_classLit = createForInterface('java.util', 'RandomAccess');
function $clinit_ArrayList(){
  $clinit_ArrayList = emptyMethod;
  $clinit_AbstractList();
  $clinit_Iterable();
  $clinit_Collection();
  $clinit_List();
}

function ArrayList(){
  $clinit_ArrayList();
  AbstractList.call(this);
  this.$init_247();
}

function ArrayList_0(c){
  $clinit_ArrayList();
  AbstractList.call(this);
  this.$init_247();
  insertTo_0(this.array, 0, c.toArray());
}

defineClass(61, 75, {3:1, 1:1, 21:1}, ArrayList, ArrayList_0);
_.$init_247 = function $init_247(){
  this.array = castToArray(initUnidimensionalArray(Ljava_lang_Object_2_classLit, {3:1, 1:1, 7:1}, 1, 0, 5, 1));
}
;
_.add_4 = function add_13(index_0, o){
  checkPositionIndex(index_0, this.array.length);
  insertTo(this.array, index_0, o);
}
;
_.add_3 = function add_14(o){
  setCheck(this.array, this.array.length, o);
  return true;
}
;
_.addAll = function addAll_2(c){
  var cArray, len;
  cArray = c.toArray();
  len = cArray.length;
  if (len == 0) {
    return false;
  }
  insertTo_0(this.array, this.array.length, cArray);
  return true;
}
;
_.clear_0 = function clear_10(){
  this.array = castToArray(initUnidimensionalArray(Ljava_lang_Object_2_classLit, {3:1, 1:1, 7:1}, 1, 0, 5, 1));
}
;
_.contains_0 = function contains_4(o){
  return this.indexOf_3(o) != -1;
}
;
_.get_0 = function get_11(index_0){
  checkElementIndex(index_0, this.array.length);
  return this.array[index_0];
}
;
_.indexOf_3 = function indexOf_3(o){
  return this.indexOf_4(o, 0);
}
;
_.indexOf_4 = function indexOf_4(o, index_0){
  for (; index_0 < this.array.length; ++index_0) {
    if (equals_20(o, this.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}
;
_.isEmpty_0 = function isEmpty_4(){
  return this.array.length == 0;
}
;
_.iterator = function iterator_5(){
  return new ArrayList$1(this);
}
;
_.remove_7 = function remove_18(index_0){
  var previous;
  previous = this.get_0(index_0);
  removeFrom(this.array, index_0, 1);
  return previous;
}
;
_.remove_5 = function remove_19(o){
  var i_0;
  i_0 = this.indexOf_3(o);
  if (i_0 == -1) {
    return false;
  }
  this.remove_7(i_0);
  return true;
}
;
_.removeRange = function removeRange_0(fromIndex, endIndex){
  var count;
  checkPositionIndexes(fromIndex, endIndex, this.array.length);
  count = endIndex - fromIndex;
  removeFrom(this.array, fromIndex, count);
}
;
_.size_1 = function size_7(){
  return this.array.length;
}
;
_.toArray = function toArray_5(){
  return clone(this.array, 0, this.array.length);
}
;
_.toArray_0 = function toArray_6(out){
  var i_0, size_0;
  size_0 = this.array.length;
  if (out.length < size_0) {
    out = createFrom(out, size_0);
  }
  for (i_0 = 0; i_0 < size_0; ++i_0) {
    setCheck(out, i_0, this.array[i_0]);
  }
  if (out.length > size_0) {
    setCheck(out, size_0, null);
  }
  return out;
}
;
var Ljava_util_ArrayList_2_classLit = createForClass('java.util', 'ArrayList', 61, Ljava_util_AbstractList_2_classLit);
function $clinit_ArrayList$1(){
  $clinit_ArrayList$1 = emptyMethod;
  $clinit_Object();
  $clinit_Iterator();
}

function ArrayList$1(this$0){
  $clinit_ArrayList$1();
  this.this$01 = this$0;
  Object_0.call(this);
  this.$init_248();
}

defineClass(175, 1, {1:1}, ArrayList$1);
_.$init_248 = function $init_248(){
  this.i = 0;
  this.last = -1;
}
;
_.hasNext_0 = function hasNext_4(){
  return this.i < this.this$01.array.length;
}
;
_.next_1 = function next_7(){
  checkElement(this.hasNext_0());
  this.last = this.i++;
  return this.this$01.array[this.last];
}
;
_.remove_4 = function remove_20(){
  checkState(this.last != -1);
  this.this$01.remove_7(this.i = this.last);
  this.last = -1;
}
;
_.i = 0;
_.last = 0;
var Ljava_util_ArrayList$1_2_classLit = createForClass('java.util', 'ArrayList/1', 175, Ljava_lang_Object_2_classLit);
function $clinit_Arrays(){
  $clinit_Arrays = emptyMethod;
  $clinit_Object();
}

function asList(array){
  $clinit_Arrays();
  return new Arrays$ArrayList(array);
}

function hashCode_27(a){
  $clinit_Arrays();
  var e, e$array, e$index, e$max, hashCode;
  if (jsEquals(a, null)) {
    return 0;
  }
  hashCode = 1;
  for (e$array = a , e$index = 0 , e$max = e$array.length; e$index < e$max; ++e$index) {
    e = e$array[e$index];
    hashCode = 31 * hashCode + hashCode_31(e);
    hashCode = ensureInt(hashCode);
  }
  return hashCode;
}

defineClass(372, 1, {1:1});
var Ljava_util_Arrays_2_classLit = createForClass('java.util', 'Arrays', 372, Ljava_lang_Object_2_classLit);
function $clinit_Arrays$ArrayList(){
  $clinit_Arrays$ArrayList = emptyMethod;
  $clinit_AbstractList();
}

function Arrays$ArrayList(array){
  $clinit_Arrays$ArrayList();
  AbstractList.call(this);
  this.$init_249();
  this.array = array;
}

defineClass(169, 75, {3:1, 1:1, 21:1}, Arrays$ArrayList);
_.$init_249 = function $init_249(){
}
;
_.contains_0 = function contains_5(o){
  return this.indexOf_3(o) != -1;
}
;
_.get_0 = function get_12(index_0){
  checkElementIndex(index_0, this.size_1());
  return this.array[index_0];
}
;
_.size_1 = function size_8(){
  return this.array.length;
}
;
_.toArray = function toArray_7(){
  return this.toArray_0(initUnidimensionalArray(Ljava_lang_Object_2_classLit, {3:1, 1:1, 7:1}, 1, this.array.length, 5, 1));
}
;
_.toArray_0 = function toArray_8(out){
  var i_0, size_0;
  size_0 = this.size_1();
  if (out.length < size_0) {
    out = createFrom(out, size_0);
  }
  for (i_0 = 0; i_0 < size_0; ++i_0) {
    setCheck(out, i_0, this.array[i_0]);
  }
  if (out.length > size_0) {
    setCheck(out, size_0, null);
  }
  return out;
}
;
var Ljava_util_Arrays$ArrayList_2_classLit = createForClass('java.util', 'Arrays/ArrayList', 169, Ljava_util_AbstractList_2_classLit);
function $clinit_Collections(){
  $clinit_Collections = emptyMethod;
  $clinit_Object();
  EMPTY_LIST = new Collections$EmptyList;
  EMPTY_MAP = new Collections$EmptyMap;
  EMPTY_SET = new Collections$EmptySet;
}

function emptyIterator(){
  $clinit_Collections();
  return castTo(($clinit_Collections$EmptyListIterator() , INSTANCE_0), 652);
}

function emptyList(){
  $clinit_Collections();
  return castTo(EMPTY_LIST, 21);
}

function emptyListIterator(){
  $clinit_Collections();
  return castTo(($clinit_Collections$EmptyListIterator() , INSTANCE_0), 653);
}

function hashCode_28(collection){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    hashCode = hashCode + hashCode_31(e);
    hashCode = ensureInt(hashCode);
  }
  return hashCode;
}

function hashCode_29(list){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    hashCode = 31 * hashCode + hashCode_31(e);
    hashCode = ensureInt(hashCode);
  }
  return hashCode;
}

defineClass(381, 1, {1:1});
var EMPTY_LIST, EMPTY_MAP, EMPTY_SET;
var Ljava_util_Collections_2_classLit = createForClass('java.util', 'Collections', 381, Ljava_lang_Object_2_classLit);
function $clinit_Enumeration(){
  $clinit_Enumeration = emptyMethod;
}

var Ljava_util_Enumeration_2_classLit = createForInterface('java.util', 'Enumeration');
function $clinit_Collections$1(){
  $clinit_Collections$1 = emptyMethod;
}

defineClass(400, 1, {1:1});
var Ljava_util_Collections$1_2_classLit = createForClass('java.util', 'Collections/1', 400, Ljava_lang_Object_2_classLit);
function $clinit_Collections$2(){
  $clinit_Collections$2 = emptyMethod;
}

defineClass(401, 1, {1:1});
var Ljava_util_Collections$2_2_classLit = createForClass('java.util', 'Collections/2', 401, Ljava_lang_Object_2_classLit);
function $clinit_Collections$EmptyList(){
  $clinit_Collections$EmptyList = emptyMethod;
  $clinit_AbstractList();
}

function Collections$EmptyList(){
  $clinit_Collections$EmptyList();
  AbstractList.call(this);
  this.$init_250();
}

defineClass(194, 75, {3:1, 1:1, 21:1}, Collections$EmptyList);
_.$init_250 = function $init_250(){
}
;
_.contains_0 = function contains_6(object){
  return false;
}
;
_.get_0 = function get_13(location_0){
  checkElementIndex(location_0, 0);
  return null;
}
;
_.iterator = function iterator_6(){
  return emptyIterator();
}
;
_.listIterator = function listIterator_1(){
  return emptyListIterator();
}
;
_.size_1 = function size_9(){
  return 0;
}
;
var Ljava_util_Collections$EmptyList_2_classLit = createForClass('java.util', 'Collections/EmptyList', 194, Ljava_util_AbstractList_2_classLit);
function $clinit_Collections$EmptyListIterator(){
  $clinit_Collections$EmptyListIterator = emptyMethod;
  $clinit_Object();
  $clinit_Iterator();
  INSTANCE_0 = new Collections$EmptyListIterator;
}

function Collections$EmptyListIterator(){
  Object_0.call(this);
  this.$init_251();
}

defineClass(195, 1, {1:1, 652:1, 653:1}, Collections$EmptyListIterator);
_.$init_251 = function $init_251(){
}
;
_.hasNext_0 = function hasNext_5(){
  return false;
}
;
_.hasPrevious = function hasPrevious_0(){
  return false;
}
;
_.next_1 = function next_8(){
  throw toJs(new NoSuchElementException);
}
;
_.previous = function previous_1(){
  throw toJs(new NoSuchElementException);
}
;
_.remove_4 = function remove_21(){
  throw toJs(new IllegalStateException);
}
;
var INSTANCE_0;
var Ljava_util_Collections$EmptyListIterator_2_classLit = createForClass('java.util', 'Collections/EmptyListIterator', 195, Ljava_lang_Object_2_classLit);
function $clinit_Collections$EmptyMap(){
  $clinit_Collections$EmptyMap = emptyMethod;
  $clinit_AbstractMap();
}

function Collections$EmptyMap(){
  $clinit_Collections$EmptyMap();
  AbstractMap.call(this);
  this.$init_252();
}

defineClass(197, 114, {3:1, 1:1, 33:1}, Collections$EmptyMap);
_.$init_252 = function $init_252(){
}
;
_.containsKey = function containsKey_1(key){
  return false;
}
;
_.entrySet = function entrySet_0(){
  return $clinit_Collections() , EMPTY_SET;
}
;
_.get_2 = function get_14(key){
  return null;
}
;
_.keySet = function keySet_0(){
  return $clinit_Collections() , EMPTY_SET;
}
;
_.size_1 = function size_10(){
  return 0;
}
;
var Ljava_util_Collections$EmptyMap_2_classLit = createForClass('java.util', 'Collections/EmptyMap', 197, Ljava_util_AbstractMap_2_classLit);
function $clinit_Collections$EmptySet(){
  $clinit_Collections$EmptySet = emptyMethod;
  $clinit_AbstractSet();
}

function Collections$EmptySet(){
  $clinit_Collections$EmptySet();
  AbstractSet.call(this);
  this.$init_253();
}

defineClass(196, 76, {3:1, 1:1, 30:1}, Collections$EmptySet);
_.$init_253 = function $init_253(){
}
;
_.contains_0 = function contains_7(object){
  return false;
}
;
_.iterator = function iterator_7(){
  return emptyIterator();
}
;
_.size_1 = function size_11(){
  return 0;
}
;
var Ljava_util_Collections$EmptySet_2_classLit = createForClass('java.util', 'Collections/EmptySet', 196, Ljava_util_AbstractSet_2_classLit);
function $clinit_Collections$LifoQueue(){
  $clinit_Collections$LifoQueue = emptyMethod;
}

defineClass(383, 382, {3:1, 1:1});
var Ljava_util_Collections$LifoQueue_2_classLit = createForClass('java.util', 'Collections/LifoQueue', 383, Ljava_util_AbstractQueue_2_classLit);
function $clinit_Collections$RandomHolder(){
  $clinit_Collections$RandomHolder = emptyMethod;
}

defineClass(398, 1, {1:1});
var Ljava_util_Collections$RandomHolder_2_classLit = createForClass('java.util', 'Collections/RandomHolder', 398, Ljava_lang_Object_2_classLit);
function $clinit_Collections$ReverseComparator(){
  $clinit_Collections$ReverseComparator = emptyMethod;
}

defineClass(384, 1, {1:1});
var Ljava_util_Collections$ReverseComparator_2_classLit = createForClass('java.util', 'Collections/ReverseComparator', 384, Ljava_lang_Object_2_classLit);
function $clinit_Collections$SetFromMap(){
  $clinit_Collections$SetFromMap = emptyMethod;
}

defineClass(385, 76, {3:1, 1:1, 30:1});
var Ljava_util_Collections$SetFromMap_2_classLit = createForClass('java.util', 'Collections/SetFromMap', 385, Ljava_util_AbstractSet_2_classLit);
function $clinit_Collections$SingletonList(){
  $clinit_Collections$SingletonList = emptyMethod;
}

defineClass(386, 75, {3:1, 1:1, 21:1});
var Ljava_util_Collections$SingletonList_2_classLit = createForClass('java.util', 'Collections/SingletonList', 386, Ljava_util_AbstractList_2_classLit);
function $clinit_Collections$UnmodifiableCollection(){
  $clinit_Collections$UnmodifiableCollection = emptyMethod;
}

defineClass(387, 1, {1:1});
var Ljava_util_Collections$UnmodifiableCollection_2_classLit = createForClass('java.util', 'Collections/UnmodifiableCollection', 387, Ljava_lang_Object_2_classLit);
function $clinit_Collections$UnmodifiableCollectionIterator(){
  $clinit_Collections$UnmodifiableCollectionIterator = emptyMethod;
}

defineClass(396, 1, {1:1});
var Ljava_util_Collections$UnmodifiableCollectionIterator_2_classLit = createForClass('java.util', 'Collections/UnmodifiableCollectionIterator', 396, Ljava_lang_Object_2_classLit);
function $clinit_Collections$UnmodifiableList(){
  $clinit_Collections$UnmodifiableList = emptyMethod;
}

defineClass(388, 387, {1:1, 21:1});
var Ljava_util_Collections$UnmodifiableList_2_classLit = createForClass('java.util', 'Collections/UnmodifiableList', 388, Ljava_util_Collections$UnmodifiableCollection_2_classLit);
function $clinit_Collections$UnmodifiableListIterator(){
  $clinit_Collections$UnmodifiableListIterator = emptyMethod;
}

defineClass(397, 396, {1:1});
var Ljava_util_Collections$UnmodifiableListIterator_2_classLit = createForClass('java.util', 'Collections/UnmodifiableListIterator', 397, Ljava_util_Collections$UnmodifiableCollectionIterator_2_classLit);
function $clinit_Collections$UnmodifiableMap(){
  $clinit_Collections$UnmodifiableMap = emptyMethod;
}

defineClass(389, 1, {1:1, 33:1});
var Ljava_util_Collections$UnmodifiableMap_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap', 389, Ljava_lang_Object_2_classLit);
function $clinit_Collections$UnmodifiableSet(){
  $clinit_Collections$UnmodifiableSet = emptyMethod;
}

defineClass(390, 387, {1:1, 30:1});
var Ljava_util_Collections$UnmodifiableSet_2_classLit = createForClass('java.util', 'Collections/UnmodifiableSet', 390, Ljava_util_Collections$UnmodifiableCollection_2_classLit);
function $clinit_Collections$UnmodifiableMap$UnmodifiableEntrySet(){
  $clinit_Collections$UnmodifiableMap$UnmodifiableEntrySet = emptyMethod;
}

defineClass(391, 390, {1:1, 30:1});
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet', 391, Ljava_util_Collections$UnmodifiableSet_2_classLit);
function $clinit_Collections$UnmodifiableMap$UnmodifiableEntrySet$1(){
  $clinit_Collections$UnmodifiableMap$UnmodifiableEntrySet$1 = emptyMethod;
}

defineClass(399, 1, {1:1});
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$1_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet/1', 399, Ljava_lang_Object_2_classLit);
function $clinit_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(){
  $clinit_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry = emptyMethod;
}

defineClass(392, 1, {1:1, 20:1});
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet/UnmodifiableEntry', 392, Ljava_lang_Object_2_classLit);
function $clinit_Collections$UnmodifiableRandomAccessList(){
  $clinit_Collections$UnmodifiableRandomAccessList = emptyMethod;
}

defineClass(393, 388, {1:1, 21:1});
var Ljava_util_Collections$UnmodifiableRandomAccessList_2_classLit = createForClass('java.util', 'Collections/UnmodifiableRandomAccessList', 393, Ljava_util_Collections$UnmodifiableList_2_classLit);
function $clinit_SortedMap(){
  $clinit_SortedMap = emptyMethod;
}

var Ljava_util_SortedMap_2_classLit = createForInterface('java.util', 'SortedMap');
function $clinit_Collections$UnmodifiableSortedMap(){
  $clinit_Collections$UnmodifiableSortedMap = emptyMethod;
}

defineClass(394, 389, {1:1, 33:1});
var Ljava_util_Collections$UnmodifiableSortedMap_2_classLit = createForClass('java.util', 'Collections/UnmodifiableSortedMap', 394, Ljava_util_Collections$UnmodifiableMap_2_classLit);
function $clinit_SortedSet(){
  $clinit_SortedSet = emptyMethod;
}

var Ljava_util_SortedSet_2_classLit = createForInterface('java.util', 'SortedSet');
function $clinit_Collections$UnmodifiableSortedSet(){
  $clinit_Collections$UnmodifiableSortedSet = emptyMethod;
}

defineClass(395, 390, {1:1, 30:1});
var Ljava_util_Collections$UnmodifiableSortedSet_2_classLit = createForClass('java.util', 'Collections/UnmodifiableSortedSet', 395, Ljava_util_Collections$UnmodifiableSet_2_classLit);
function $clinit_Comparator$lambda$0$Type(){
  $clinit_Comparator$lambda$0$Type = emptyMethod;
}

defineClass(351, 1, {1:1});
var Ljava_util_Comparator$lambda$0$Type_2_classLit = createForClass('java.util', 'Comparator/lambda$0$Type', 351, Ljava_lang_Object_2_classLit);
function $clinit_Comparator$lambda$1$Type(){
  $clinit_Comparator$lambda$1$Type = emptyMethod;
}

defineClass(352, 1, {3:1, 1:1});
var Ljava_util_Comparator$lambda$1$Type_2_classLit = createForClass('java.util', 'Comparator/lambda$1$Type', 352, Ljava_lang_Object_2_classLit);
function $clinit_Comparator$lambda$2$Type(){
  $clinit_Comparator$lambda$2$Type = emptyMethod;
}

defineClass(353, 1, {3:1, 1:1});
var Ljava_util_Comparator$lambda$2$Type_2_classLit = createForClass('java.util', 'Comparator/lambda$2$Type', 353, Ljava_lang_Object_2_classLit);
function $clinit_Comparator$lambda$3$Type(){
  $clinit_Comparator$lambda$3$Type = emptyMethod;
}

defineClass(354, 1, {3:1, 1:1});
var Ljava_util_Comparator$lambda$3$Type_2_classLit = createForClass('java.util', 'Comparator/lambda$3$Type', 354, Ljava_lang_Object_2_classLit);
function $clinit_Comparator$lambda$4$Type(){
  $clinit_Comparator$lambda$4$Type = emptyMethod;
}

defineClass(355, 1, {3:1, 1:1});
var Ljava_util_Comparator$lambda$4$Type_2_classLit = createForClass('java.util', 'Comparator/lambda$4$Type', 355, Ljava_lang_Object_2_classLit);
function $clinit_Comparator$lambda$5$Type(){
  $clinit_Comparator$lambda$5$Type = emptyMethod;
}

defineClass(356, 1, {3:1, 1:1});
var Ljava_util_Comparator$lambda$5$Type_2_classLit = createForClass('java.util', 'Comparator/lambda$5$Type', 356, Ljava_lang_Object_2_classLit);
function $clinit_ConcurrentModificationDetector(){
  $clinit_ConcurrentModificationDetector = emptyMethod;
  $clinit_Object();
  API_CHECK = equals_Ljava_lang_Object__Z__devirtual$_2('ENABLED', 'ENABLED');
}

function checkStructuralChange(host, iterator){
  $clinit_ConcurrentModificationDetector();
  if (!API_CHECK) {
    return;
  }
  if (getIntProperty(iterator, '_gwt_modCount') != getIntProperty(host, '_gwt_modCount')) {
    throw toJs(new ConcurrentModificationException);
  }
}

function recordLastKnownStructure(host, iterator){
  $clinit_ConcurrentModificationDetector();
  var modCount;
  if (!API_CHECK) {
    return;
  }
  modCount = getIntProperty(host, '_gwt_modCount');
  setIntProperty(iterator, '_gwt_modCount', modCount);
}

function structureChanged(map_0){
  $clinit_ConcurrentModificationDetector();
  var modCount;
  if (!API_CHECK) {
    return;
  }
  modCount = getIntProperty(map_0, '_gwt_modCount') | 0;
  setIntProperty(map_0, '_gwt_modCount', modCount + 1);
}

defineClass(440, 1, {1:1});
var API_CHECK = false, MOD_COUNT_PROPERTY = '_gwt_modCount';
var Ljava_util_ConcurrentModificationDetector_2_classLit = createForClass('java.util', 'ConcurrentModificationDetector', 440, Ljava_lang_Object_2_classLit);
function $clinit_ConcurrentModificationException(){
  $clinit_ConcurrentModificationException = emptyMethod;
  $clinit_RuntimeException();
}

function ConcurrentModificationException(){
  $clinit_ConcurrentModificationException();
  RuntimeException.call(this);
  this.$init_254();
}

defineClass(233, 9, {3:1, 10:1, 1:1, 9:1, 8:1}, ConcurrentModificationException);
_.$init_254 = function $init_254(){
}
;
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass('java.util', 'ConcurrentModificationException', 233, Ljava_lang_RuntimeException_2_classLit);
function $clinit_Date(){
  $clinit_Date = emptyMethod;
  $clinit_Object();
  ONE_HOUR_IN_MILLISECONDS = fromInt_0(60 * 60 * 1000);
}

function Date_0(date){
  $clinit_Date();
  Object_0.call(this);
  this.$init_255();
  this.jsdate = new $wnd.Date(toDouble_0(date));
}

function padTwo(number){
  if (number < 10) {
    return '0' + number;
  }
   else {
    return valueOf_15(number);
  }
}

defineClass(78, 1, {3:1, 4:1, 1:1, 78:1}, Date_0);
_.$init_255 = function $init_255(){
}
;
_.equals = function equals_18(obj){
  return instanceOf(obj, 78) && eq(this.getTime_0(), castTo(obj, 78).getTime_0());
}
;
_.getDate_0 = function getDate(){
  return this.jsdate.getDate();
}
;
_.getDay_0 = function getDay(){
  return this.jsdate.getDay();
}
;
_.getHours_0 = function getHours(){
  return this.jsdate.getHours();
}
;
_.getMinutes_0 = function getMinutes(){
  return this.jsdate.getMinutes();
}
;
_.getMonth_0 = function getMonth(){
  return this.jsdate.getMonth();
}
;
_.getSeconds_0 = function getSeconds(){
  return this.jsdate.getSeconds();
}
;
_.getTime_0 = function getTime(){
  return fromDouble_0(this.jsdate.getTime());
}
;
_.getTimezoneOffset_0 = function getTimezoneOffset(){
  return this.jsdate.getTimezoneOffset();
}
;
_.hashCode = function hashCode_30(){
  var time;
  time = this.getTime_0();
  return toInt_0(xor_0(time, shru_0(time, 32)));
}
;
_.toString_0 = function toString_36(){
  var hourOffset, minuteOffset, offset;
  offset = -this.jsdate.getTimezoneOffset();
  hourOffset = (offset >= 0?'+':'') + narrow_int(offset / 60);
  minuteOffset = padTwo(abs_0(offset) % 60);
  return ($clinit_Date$StringData() , DAYS)[this.jsdate.getDay()] + ' ' + ($clinit_Date$StringData() , MONTHS)[this.jsdate.getMonth()] + ' ' + padTwo(this.jsdate.getDate()) + ' ' + padTwo(this.jsdate.getHours()) + ':' + padTwo(this.jsdate.getMinutes()) + ':' + padTwo(this.jsdate.getSeconds()) + ' GMT' + hourOffset + minuteOffset + ' ' + this.jsdate.getFullYear();
}
;
var ONE_HOUR_IN_MILLISECONDS = 0;
var Ljava_util_Date_2_classLit = createForClass('java.util', 'Date', 78, Ljava_lang_Object_2_classLit);
function $clinit_Date$NativeDate(){
  $clinit_Date$NativeDate = emptyMethod;
  $clinit_Object();
}

function $clinit_Date$StringData(){
  $clinit_Date$StringData = emptyMethod;
  $clinit_Object();
  DAYS = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {3:1, 1:1, 7:1}, 2, 6, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
  MONTHS = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {3:1, 1:1, 7:1}, 2, 6, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
}

defineClass(454, 1, {1:1});
var DAYS, MONTHS;
var Ljava_util_Date$StringData_2_classLit = createForClass('java.util', 'Date/StringData', 454, Ljava_lang_Object_2_classLit);
function $clinit_HashMap(){
  $clinit_HashMap = emptyMethod;
  $clinit_AbstractHashMap();
}

function HashMap(){
  $clinit_HashMap();
  AbstractHashMap.call(this);
  this.$init_256();
}

defineClass(28, 187, {3:1, 1:1, 33:1}, HashMap);
_.$init_256 = function $init_256(){
}
;
_.equals_0 = function equals_19(value1, value2){
  return equals_20(value1, value2);
}
;
_.getHashCode = function getHashCode(key){
  var hashCode;
  hashCode = hashCode__I__devirtual$(key);
  return ensureInt(hashCode);
}
;
var Ljava_util_HashMap_2_classLit = createForClass('java.util', 'HashMap', 28, Ljava_util_AbstractHashMap_2_classLit);
function $clinit_HashSet(){
  $clinit_HashSet = emptyMethod;
  $clinit_AbstractSet();
  $clinit_Iterable();
  $clinit_Collection();
  $clinit_Set();
}

function HashSet(){
  $clinit_HashSet();
  AbstractSet.call(this);
  this.$init_257();
  this.map_0 = new HashMap;
}

defineClass(77, 76, {3:1, 1:1, 30:1}, HashSet);
_.$init_257 = function $init_257(){
}
;
_.add_3 = function add_15(o){
  var old;
  old = this.map_0.put(o, this);
  return jsEquals(old, null);
}
;
_.clear_0 = function clear_11(){
  this.map_0.clear_0();
}
;
_.contains_0 = function contains_8(o){
  return this.map_0.containsKey(o);
}
;
_.isEmpty_0 = function isEmpty_5(){
  return this.map_0.isEmpty_0();
}
;
_.iterator = function iterator_8(){
  return this.map_0.keySet().iterator();
}
;
_.remove_5 = function remove_22(o){
  return jsNotEquals(this.map_0.remove_6(o), null);
}
;
_.size_1 = function size_12(){
  return this.map_0.size_1();
}
;
_.toString_0 = function toString_37(){
  return toString__Ljava_lang_String___devirtual$(this.map_0.keySet());
}
;
var Ljava_util_HashSet_2_classLit = createForClass('java.util', 'HashSet', 77, Ljava_util_AbstractSet_2_classLit);
function $clinit_InternalHashCodeMap(){
  $clinit_InternalHashCodeMap = emptyMethod;
  $clinit_Object();
  $clinit_Iterable();
}

function InternalHashCodeMap(host){
  $clinit_InternalHashCodeMap();
  Object_0.call(this);
  this.$init_258();
  this.host = host;
}

defineClass(206, 1, {1:1}, InternalHashCodeMap);
_.$init_258 = function $init_258(){
  this.backingMap = newJsMap();
}
;
_.findEntryInChain = function findEntryInChain(key, chain){
  var entry, entry$array, entry$index, entry$max;
  for (entry$array = chain , entry$index = 0 , entry$max = entry$array.length; entry$index < entry$max; ++entry$index) {
    entry = entry$array[entry$index];
    if (this.host.equals_0(key, entry.getKey())) {
      return entry;
    }
  }
  return null;
}
;
_.getChainOrEmpty = function getChainOrEmpty(hashCode){
  var chain;
  chain = this.unsafeCastToArray(this.backingMap.get(hashCode));
  return jsEquals(chain, null)?this.newEntryChain():chain;
}
;
_.getEntry = function getEntry(key){
  return this.findEntryInChain(key, this.getChainOrEmpty(this.hash(key)));
}
;
_.hash = function hash(key){
  return jsEquals(key, null)?0:this.host.getHashCode(key);
}
;
_.iterator = function iterator_9(){
  return new InternalHashCodeMap$1(this);
}
;
_.newEntryChain = function newEntryChain(){
  $clinit_InternalHashCodeMap();
  return [];
}
;
_.put = function put_1(key, value_0){
  var chain, entry, hashCode;
  hashCode = this.hash(key);
  chain = this.getChainOrEmpty(hashCode);
  if (chain.length == 0) {
    this.backingMap.set(hashCode, chain);
  }
   else {
    entry = this.findEntryInChain(key, chain);
    if (isNotNull(entry)) {
      return entry.setValue(value_0);
    }
  }
  setCheck(chain, chain.length, new AbstractMap$SimpleEntry(key, value_0));
  this.size_0++;
  structureChanged(this.host);
  return null;
}
;
_.remove_6 = function remove_23(key){
  var chain, entry, hashCode, i_0;
  hashCode = this.hash(key);
  chain = this.getChainOrEmpty(hashCode);
  for (i_0 = 0; i_0 < chain.length; i_0++) {
    entry = chain[i_0];
    if (this.host.equals_0(key, entry.getKey())) {
      if (chain.length == 1) {
        setLength_0(chain, 0);
        $delete(this.backingMap, hashCode);
      }
       else {
        removeFrom(chain, i_0, 1);
      }
      this.size_0--;
      structureChanged(this.host);
      return entry.getValue();
    }
  }
  return null;
}
;
_.size_1 = function size_13(){
  return this.size_0;
}
;
_.unsafeCastToArray = function unsafeCastToArray(arr){
  $clinit_InternalHashCodeMap();
  return arr;
}
;
_.size_0 = 0;
var Ljava_util_InternalHashCodeMap_2_classLit = createForClass('java.util', 'InternalHashCodeMap', 206, Ljava_lang_Object_2_classLit);
function $clinit_InternalHashCodeMap$1(){
  $clinit_InternalHashCodeMap$1 = emptyMethod;
  $clinit_Object();
  $clinit_Iterator();
}

function InternalHashCodeMap$1(this$0){
  $clinit_InternalHashCodeMap$1();
  this.this$01 = this$0;
  Object_0.call(this);
  this.$init_259();
}

defineClass(207, 1, {1:1}, InternalHashCodeMap$1);
_.$init_259 = function $init_259(){
  this.chains = this.this$01.backingMap.entries();
  this.itemIndex = 0;
  this.chain = this.this$01.newEntryChain();
  this.lastEntry = null;
}
;
_.next_1 = function next_9(){
  return this.next_2();
}
;
_.hasNext_0 = function hasNext_6(){
  var current;
  if (this.itemIndex < this.chain.length) {
    return true;
  }
  current = this.chains.next();
  if (!current.done) {
    this.chain = this.this$01.unsafeCastToArray($getValue(current));
    this.itemIndex = 0;
    return true;
  }
  return false;
}
;
_.next_2 = function next_10(){
  this.lastEntry = this.chain[this.itemIndex++];
  return this.lastEntry;
}
;
_.remove_4 = function remove_24(){
  this.this$01.remove_6(this.lastEntry.getKey());
  if (this.itemIndex != 0) {
    this.itemIndex--;
  }
}
;
_.itemIndex = 0;
var Ljava_util_InternalHashCodeMap$1_2_classLit = createForClass('java.util', 'InternalHashCodeMap/1', 207, Ljava_lang_Object_2_classLit);
function $clinit_InternalJsMap(){
  $clinit_InternalJsMap = emptyMethod;
  $clinit_Object();
}

function $delete(this$static, key){
  $clinit_InternalJsMap();
  delete_0(this$static, key);
}

function $delete_0(this$static, key){
  $clinit_InternalJsMap();
  delete_1(this$static, key);
}

function $clinit_InternalJsMap$Iterator(){
  $clinit_InternalJsMap$Iterator = emptyMethod;
  $clinit_Object();
}

function $clinit_InternalJsMap$IteratorEntry(){
  $clinit_InternalJsMap$IteratorEntry = emptyMethod;
  $clinit_Object();
}

function $getKey(this$static){
  $clinit_InternalJsMap$IteratorEntry();
  return unsafeCastToString(this$static.value[0]);
}

function $getValue(this$static){
  $clinit_InternalJsMap$IteratorEntry();
  return this$static.value[1];
}

function $clinit_InternalJsMap$JsHelper(){
  $clinit_InternalJsMap$JsHelper = emptyMethod;
  $clinit_Object();
}

function delete_0(obj, key){
  $clinit_InternalJsMap$JsHelper();
  obj['delete'](key);
}

function delete_1(obj, key){
  $clinit_InternalJsMap$JsHelper();
  obj['delete'](key);
}

defineClass(439, 1, {1:1});
var Ljava_util_InternalJsMap$JsHelper_2_classLit = createForClass('java.util', 'InternalJsMap/JsHelper', 439, Ljava_lang_Object_2_classLit);
function $clinit_InternalJsMapFactory(){
  $clinit_InternalJsMapFactory = emptyMethod;
  $clinit_Object();
  jsMapCtor = getJsMapConstructor();
}

function canHandleObjectCreateAndProto(){
  if (!Object.create || !Object.getOwnPropertyNames) {
    return false;
  }
  var protoField = '__proto__';
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  if (Object.getOwnPropertyNames(map_0).length == 0) {
    return false;
  }
  return true;
}

function getJsMapConstructor(){
  function isCorrectIterationProtocol(){
    try {
      return (new Map).entries().next().done;
    }
     catch (e) {
      return false;
    }
  }

  if (typeof Map === 'function' && (Map.prototype.entries && isCorrectIterationProtocol())) {
    return Map;
  }
   else {
    return getJsMapPolyFill();
  }
}

function getJsMapPolyFill(){
  function Stringmap(){
    this.obj = this.createObject();
  }

  ;
  Stringmap.prototype.createObject = function(key){
    return Object.create(null);
  }
  ;
  Stringmap.prototype.get = function(key){
    return this.obj[key];
  }
  ;
  Stringmap.prototype.set = function(key, value_0){
    this.obj[key] = value_0;
  }
  ;
  Stringmap.prototype['delete'] = function(key){
    delete this.obj[key];
  }
  ;
  Stringmap.prototype.keys = function(){
    return Object.getOwnPropertyNames(this.obj);
  }
  ;
  Stringmap.prototype.entries = function(){
    var keys_0 = this.keys();
    var map_0 = this;
    var nextIndex = 0;
    return {next:function(){
      if (nextIndex >= keys_0.length)
        return {done:true};
      var key = keys_0[nextIndex++];
      return {value:[key, map_0.get(key)], done:false};
    }
    };
  }
  ;
  if (!canHandleObjectCreateAndProto()) {
    Stringmap.prototype.createObject = function(){
      return {};
    }
    ;
    Stringmap.prototype.get = function(key){
      return this.obj[':' + key];
    }
    ;
    Stringmap.prototype.set = function(key, value_0){
      this.obj[':' + key] = value_0;
    }
    ;
    Stringmap.prototype['delete'] = function(key){
      delete this.obj[':' + key];
    }
    ;
    Stringmap.prototype.keys = function(){
      var result = [];
      for (var key in this.obj) {
        if (key.charCodeAt(0) == 58) {
          result.push(key.substring(1));
        }
      }
      return result;
    }
    ;
  }
  return Stringmap;
}

function newJsMap(){
  $clinit_InternalJsMapFactory();
  return new jsMapCtor;
}

defineClass(450, 1, {1:1});
var jsMapCtor;
var Ljava_util_InternalJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory', 450, Ljava_lang_Object_2_classLit);
function $clinit_InternalStringMap(){
  $clinit_InternalStringMap = emptyMethod;
  $clinit_Object();
  $clinit_Iterable();
}

function InternalStringMap(host){
  $clinit_InternalStringMap();
  Object_0.call(this);
  this.$init_260();
  this.host = host;
}

function toNullIfUndefined(value_0){
  return isUndefined(value_0)?null:value_0;
}

defineClass(198, 1, {1:1}, InternalStringMap);
_.$init_260 = function $init_260(){
  this.backingMap = newJsMap();
}
;
_.contains_1 = function contains_9(key){
  return !isUndefined(this.backingMap.get(key));
}
;
_.get_3 = function get_15(key){
  return this.backingMap.get(key);
}
;
_.iterator = function iterator_10(){
  return new InternalStringMap$1(this);
}
;
_.newMapEntry = function newMapEntry(entry, lastValueMod){
  $clinit_InternalStringMap();
  return new InternalStringMap$2(this, entry, lastValueMod);
}
;
_.put_0 = function put_2(key, value_0){
  var oldValue;
  oldValue = this.backingMap.get(key);
  this.backingMap.set(key, toNullIfUndefined(value_0));
  if (isUndefined(oldValue)) {
    this.size_0++;
    structureChanged(this.host);
  }
   else {
    this.valueMod++;
  }
  return oldValue;
}
;
_.remove_8 = function remove_25(key){
  var value_0;
  value_0 = this.backingMap.get(key);
  if (!isUndefined(value_0)) {
    $delete_0(this.backingMap, key);
    this.size_0--;
    structureChanged(this.host);
  }
   else {
    this.valueMod++;
  }
  return value_0;
}
;
_.size_1 = function size_14(){
  return this.size_0;
}
;
_.size_0 = 0;
_.valueMod = 0;
var Ljava_util_InternalStringMap_2_classLit = createForClass('java.util', 'InternalStringMap', 198, Ljava_lang_Object_2_classLit);
function $clinit_InternalStringMap$1(){
  $clinit_InternalStringMap$1 = emptyMethod;
  $clinit_Object();
  $clinit_Iterator();
}

function InternalStringMap$1(this$0){
  $clinit_InternalStringMap$1();
  this.this$01 = this$0;
  Object_0.call(this);
  this.$init_261();
}

defineClass(199, 1, {1:1}, InternalStringMap$1);
_.$init_261 = function $init_261(){
  this.entries_0 = this.this$01.backingMap.entries();
  this.current = this.entries_0.next();
}
;
_.next_1 = function next_11(){
  return this.next_2();
}
;
_.hasNext_0 = function hasNext_7(){
  return !this.current.done;
}
;
_.next_2 = function next_12(){
  this.last = this.current;
  this.current = this.entries_0.next();
  return this.this$01.newMapEntry(this.last, this.this$01.valueMod);
}
;
_.remove_4 = function remove_26(){
  this.this$01.remove_8($getKey(this.last));
}
;
var Ljava_util_InternalStringMap$1_2_classLit = createForClass('java.util', 'InternalStringMap/1', 199, Ljava_lang_Object_2_classLit);
function $clinit_InternalStringMap$2(){
  $clinit_InternalStringMap$2 = emptyMethod;
  $clinit_AbstractMapEntry();
}

function InternalStringMap$2(this$0, val$entry, val$lastValueMod){
  $clinit_InternalStringMap$2();
  this.this$01 = this$0;
  this.val$entry2 = val$entry;
  this.val$lastValueMod3 = val$lastValueMod;
  AbstractMapEntry.call(this);
  this.$init_262();
}

defineClass(201, 200, {1:1, 20:1}, InternalStringMap$2);
_.$init_262 = function $init_262(){
}
;
_.getKey = function getKey_0(){
  return $getKey(this.val$entry2);
}
;
_.getValue = function getValue_0(){
  if (this.this$01.valueMod != this.val$lastValueMod3) {
    return this.this$01.get_3($getKey(this.val$entry2));
  }
  return $getValue(this.val$entry2);
}
;
_.setValue = function setValue_0(object){
  return this.this$01.put_0($getKey(this.val$entry2), object);
}
;
_.val$lastValueMod3 = 0;
var Ljava_util_InternalStringMap$2_2_classLit = createForClass('java.util', 'InternalStringMap/2', 201, Ljava_util_AbstractMapEntry_2_classLit);
function $clinit_Locale(){
  $clinit_Locale = emptyMethod;
  $clinit_Object();
  ROOT = new Locale$1;
  ENGLISH = new Locale$2;
  US = new Locale$3;
  defaultLocale = new Locale$4;
}

function Locale(){
  $clinit_Locale();
  Object_0.call(this);
  this.$init_263();
}

function getDefault(){
  $clinit_Locale();
  return defaultLocale;
}

defineClass(79, 1, {1:1});
_.$init_263 = function $init_263(){
}
;
var ENGLISH, ROOT, US, defaultLocale;
var Ljava_util_Locale_2_classLit = createForClass('java.util', 'Locale', 79, Ljava_lang_Object_2_classLit);
function $clinit_Locale$1(){
  $clinit_Locale$1 = emptyMethod;
  $clinit_Locale();
}

function Locale$1(){
  $clinit_Locale$1();
  Locale.call(this);
  this.$init_264();
}

defineClass(251, 79, {1:1}, Locale$1);
_.$init_264 = function $init_264(){
}
;
_.toString_0 = function toString_38(){
  return '';
}
;
var Ljava_util_Locale$1_2_classLit = createForClass('java.util', 'Locale/1', 251, Ljava_util_Locale_2_classLit);
function $clinit_Locale$2(){
  $clinit_Locale$2 = emptyMethod;
  $clinit_Locale();
}

function Locale$2(){
  $clinit_Locale$2();
  Locale.call(this);
  this.$init_265();
}

defineClass(252, 79, {1:1}, Locale$2);
_.$init_265 = function $init_265(){
}
;
_.toString_0 = function toString_39(){
  return 'en';
}
;
var Ljava_util_Locale$2_2_classLit = createForClass('java.util', 'Locale/2', 252, Ljava_util_Locale_2_classLit);
function $clinit_Locale$3(){
  $clinit_Locale$3 = emptyMethod;
  $clinit_Locale();
}

function Locale$3(){
  $clinit_Locale$3();
  Locale.call(this);
  this.$init_266();
}

defineClass(253, 79, {1:1}, Locale$3);
_.$init_266 = function $init_266(){
}
;
_.toString_0 = function toString_40(){
  return 'en_US';
}
;
var Ljava_util_Locale$3_2_classLit = createForClass('java.util', 'Locale/3', 253, Ljava_util_Locale_2_classLit);
function $clinit_Locale$4(){
  $clinit_Locale$4 = emptyMethod;
  $clinit_Locale();
}

function Locale$4(){
  $clinit_Locale$4();
  Locale.call(this);
  this.$init_267();
}

defineClass(254, 79, {1:1}, Locale$4);
_.$init_267 = function $init_267(){
}
;
_.toString_0 = function toString_41(){
  return 'unknown';
}
;
var Ljava_util_Locale$4_2_classLit = createForClass('java.util', 'Locale/4', 254, Ljava_util_Locale_2_classLit);
function $clinit_NoSuchElementException(){
  $clinit_NoSuchElementException = emptyMethod;
  $clinit_RuntimeException();
}

function NoSuchElementException(){
  $clinit_NoSuchElementException();
  RuntimeException.call(this);
  this.$init_268();
}

defineClass(63, 9, {3:1, 10:1, 1:1, 9:1, 8:1}, NoSuchElementException);
_.$init_268 = function $init_268(){
}
;
var Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util', 'NoSuchElementException', 63, Ljava_lang_RuntimeException_2_classLit);
function $clinit_Objects(){
  $clinit_Objects = emptyMethod;
  $clinit_Object();
}

function equals_20(a, b){
  $clinit_Objects();
  return maskUndefined(a) === maskUndefined(b) || jsNotEquals(a, null) && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function hash_0(values){
  $clinit_Objects();
  return hashCode_27(values);
}

function hashCode_31(o){
  $clinit_Objects();
  return jsNotEquals(o, null)?hashCode__I__devirtual$(o):0;
}

defineClass(380, 1, {1:1});
var Ljava_util_Objects_2_classLit = createForClass('java.util', 'Objects', 380, Ljava_lang_Object_2_classLit);
function $clinit_PrimitiveIterator(){
  $clinit_PrimitiveIterator = emptyMethod;
}

var Ljava_util_PrimitiveIterator_2_classLit = createForInterface('java.util', 'PrimitiveIterator');
function $clinit_PrimitiveIterator$OfDouble(){
  $clinit_PrimitiveIterator$OfDouble = emptyMethod;
}

var Ljava_util_PrimitiveIterator$OfDouble_2_classLit = createForInterface('java.util', 'PrimitiveIterator/OfDouble');
function $clinit_PrimitiveIterator$OfInt(){
  $clinit_PrimitiveIterator$OfInt = emptyMethod;
}

var Ljava_util_PrimitiveIterator$OfInt_2_classLit = createForInterface('java.util', 'PrimitiveIterator/OfInt');
function $clinit_PrimitiveIterator$OfLong(){
  $clinit_PrimitiveIterator$OfLong = emptyMethod;
}

var Ljava_util_PrimitiveIterator$OfLong_2_classLit = createForInterface('java.util', 'PrimitiveIterator/OfLong');
function $clinit_Spliterator(){
  $clinit_Spliterator = emptyMethod;
}

var Ljava_util_Spliterator_2_classLit = createForInterface('java.util', 'Spliterator');
function $clinit_Spliterators$IteratorSpliterator(){
  $clinit_Spliterators$IteratorSpliterator = emptyMethod;
}

defineClass(402, 1, {1:1});
var Ljava_util_Spliterators$IteratorSpliterator_2_classLit = createForClass('java.util', 'Spliterators/IteratorSpliterator', 402, Ljava_lang_Object_2_classLit);
function $clinit_SortedSet$1(){
  $clinit_SortedSet$1 = emptyMethod;
}

defineClass(403, 402, {1:1});
var Ljava_util_SortedSet$1_2_classLit = createForClass('java.util', 'SortedSet/1', 403, Ljava_util_Spliterators$IteratorSpliterator_2_classLit);
function $clinit_Spliterator$OfPrimitive(){
  $clinit_Spliterator$OfPrimitive = emptyMethod;
}

var Ljava_util_Spliterator$OfPrimitive_2_classLit = createForInterface('java.util', 'Spliterator/OfPrimitive');
function $clinit_Spliterator$OfDouble(){
  $clinit_Spliterator$OfDouble = emptyMethod;
}

var Ljava_util_Spliterator$OfDouble_2_classLit = createForInterface('java.util', 'Spliterator/OfDouble');
function $clinit_Spliterator$OfInt(){
  $clinit_Spliterator$OfInt = emptyMethod;
}

var Ljava_util_Spliterator$OfInt_2_classLit = createForInterface('java.util', 'Spliterator/OfInt');
function $clinit_Spliterator$OfLong(){
  $clinit_Spliterator$OfLong = emptyMethod;
}

var Ljava_util_Spliterator$OfLong_2_classLit = createForInterface('java.util', 'Spliterator/OfLong');
function $clinit_Spliterators(){
  $clinit_Spliterators = emptyMethod;
}

defineClass(404, 1, {1:1});
var Ljava_util_Spliterators_2_classLit = createForClass('java.util', 'Spliterators', 404, Ljava_lang_Object_2_classLit);
function $clinit_Spliterators$BaseSpliterator(){
  $clinit_Spliterators$BaseSpliterator = emptyMethod;
}

defineClass(405, 1, {1:1});
var Ljava_util_Spliterators$BaseSpliterator_2_classLit = createForClass('java.util', 'Spliterators/BaseSpliterator', 405, Ljava_lang_Object_2_classLit);
function $clinit_Spliterators$AbstractDoubleSpliterator(){
  $clinit_Spliterators$AbstractDoubleSpliterator = emptyMethod;
}

defineClass(407, 405, {1:1});
var Ljava_util_Spliterators$AbstractDoubleSpliterator_2_classLit = createForClass('java.util', 'Spliterators/AbstractDoubleSpliterator', 407, Ljava_util_Spliterators$BaseSpliterator_2_classLit);
function $clinit_Spliterators$AbstractIntSpliterator(){
  $clinit_Spliterators$AbstractIntSpliterator = emptyMethod;
}

defineClass(408, 405, {1:1});
var Ljava_util_Spliterators$AbstractIntSpliterator_2_classLit = createForClass('java.util', 'Spliterators/AbstractIntSpliterator', 408, Ljava_util_Spliterators$BaseSpliterator_2_classLit);
function $clinit_Spliterators$AbstractLongSpliterator(){
  $clinit_Spliterators$AbstractLongSpliterator = emptyMethod;
}

defineClass(409, 405, {1:1});
var Ljava_util_Spliterators$AbstractLongSpliterator_2_classLit = createForClass('java.util', 'Spliterators/AbstractLongSpliterator', 409, Ljava_util_Spliterators$BaseSpliterator_2_classLit);
function $clinit_Spliterators$AbstractSpliterator(){
  $clinit_Spliterators$AbstractSpliterator = emptyMethod;
}

defineClass(406, 405, {1:1});
var Ljava_util_Spliterators$AbstractSpliterator_2_classLit = createForClass('java.util', 'Spliterators/AbstractSpliterator', 406, Ljava_util_Spliterators$BaseSpliterator_2_classLit);
function $clinit_Spliterators$BaseArraySpliterator(){
  $clinit_Spliterators$BaseArraySpliterator = emptyMethod;
}

defineClass(422, 1, {1:1});
var Ljava_util_Spliterators$BaseArraySpliterator_2_classLit = createForClass('java.util', 'Spliterators/BaseArraySpliterator', 422, Ljava_lang_Object_2_classLit);
function $clinit_Spliterators$ArraySpliterator(){
  $clinit_Spliterators$ArraySpliterator = emptyMethod;
}

defineClass(423, 422, {1:1});
var Ljava_util_Spliterators$ArraySpliterator_2_classLit = createForClass('java.util', 'Spliterators/ArraySpliterator', 423, Ljava_util_Spliterators$BaseArraySpliterator_2_classLit);
function $clinit_Consumer(){
  $clinit_Consumer = emptyMethod;
}

var Ljava_util_function_Consumer_2_classLit = createForInterface('java.util.function', 'Consumer');
function $clinit_Spliterators$ConsumerIterator(){
  $clinit_Spliterators$ConsumerIterator = emptyMethod;
}

defineClass(415, 1, {1:1});
var Ljava_util_Spliterators$ConsumerIterator_2_classLit = createForClass('java.util', 'Spliterators/ConsumerIterator', 415, Ljava_lang_Object_2_classLit);
function $clinit_Spliterators$DoubleArraySpliterator(){
  $clinit_Spliterators$DoubleArraySpliterator = emptyMethod;
}

defineClass(424, 422, {1:1});
var Ljava_util_Spliterators$DoubleArraySpliterator_2_classLit = createForClass('java.util', 'Spliterators/DoubleArraySpliterator', 424, Ljava_util_Spliterators$BaseArraySpliterator_2_classLit);
function $clinit_DoubleConsumer(){
  $clinit_DoubleConsumer = emptyMethod;
}

var Ljava_util_function_DoubleConsumer_2_classLit = createForInterface('java.util.function', 'DoubleConsumer');
function $clinit_Spliterators$DoubleConsumerIterator(){
  $clinit_Spliterators$DoubleConsumerIterator = emptyMethod;
}

defineClass(416, 1, {1:1});
var Ljava_util_Spliterators$DoubleConsumerIterator_2_classLit = createForClass('java.util', 'Spliterators/DoubleConsumerIterator', 416, Ljava_lang_Object_2_classLit);
function $clinit_Spliterators$DoubleIteratorSpliterator(){
  $clinit_Spliterators$DoubleIteratorSpliterator = emptyMethod;
}

defineClass(419, 407, {1:1});
var Ljava_util_Spliterators$DoubleIteratorSpliterator_2_classLit = createForClass('java.util', 'Spliterators/DoubleIteratorSpliterator', 419, Ljava_util_Spliterators$AbstractDoubleSpliterator_2_classLit);
function $clinit_Spliterators$EmptySpliterator(){
  $clinit_Spliterators$EmptySpliterator = emptyMethod;
}

defineClass(410, 1, {1:1});
var Ljava_util_Spliterators$EmptySpliterator_2_classLit = createForClass('java.util', 'Spliterators/EmptySpliterator', 410, Ljava_lang_Object_2_classLit);
function $clinit_Spliterators$EmptySpliterator$OfDouble(){
  $clinit_Spliterators$EmptySpliterator$OfDouble = emptyMethod;
}

defineClass(412, 410, {1:1});
var Ljava_util_Spliterators$EmptySpliterator$OfDouble_2_classLit = createForClass('java.util', 'Spliterators/EmptySpliterator/OfDouble', 412, Ljava_util_Spliterators$EmptySpliterator_2_classLit);
function $clinit_Spliterators$EmptySpliterator$OfInt(){
  $clinit_Spliterators$EmptySpliterator$OfInt = emptyMethod;
}

defineClass(413, 410, {1:1});
var Ljava_util_Spliterators$EmptySpliterator$OfInt_2_classLit = createForClass('java.util', 'Spliterators/EmptySpliterator/OfInt', 413, Ljava_util_Spliterators$EmptySpliterator_2_classLit);
function $clinit_Spliterators$EmptySpliterator$OfLong(){
  $clinit_Spliterators$EmptySpliterator$OfLong = emptyMethod;
}

defineClass(414, 410, {1:1});
var Ljava_util_Spliterators$EmptySpliterator$OfLong_2_classLit = createForClass('java.util', 'Spliterators/EmptySpliterator/OfLong', 414, Ljava_util_Spliterators$EmptySpliterator_2_classLit);
function $clinit_Spliterators$EmptySpliterator$OfRef(){
  $clinit_Spliterators$EmptySpliterator$OfRef = emptyMethod;
}

defineClass(411, 410, {1:1});
var Ljava_util_Spliterators$EmptySpliterator$OfRef_2_classLit = createForClass('java.util', 'Spliterators/EmptySpliterator/OfRef', 411, Ljava_util_Spliterators$EmptySpliterator_2_classLit);
function $clinit_Spliterators$IntArraySpliterator(){
  $clinit_Spliterators$IntArraySpliterator = emptyMethod;
}

defineClass(425, 422, {1:1});
var Ljava_util_Spliterators$IntArraySpliterator_2_classLit = createForClass('java.util', 'Spliterators/IntArraySpliterator', 425, Ljava_util_Spliterators$BaseArraySpliterator_2_classLit);
function $clinit_IntConsumer(){
  $clinit_IntConsumer = emptyMethod;
}

var Ljava_util_function_IntConsumer_2_classLit = createForInterface('java.util.function', 'IntConsumer');
function $clinit_Spliterators$IntConsumerIterator(){
  $clinit_Spliterators$IntConsumerIterator = emptyMethod;
}

defineClass(417, 1, {1:1});
var Ljava_util_Spliterators$IntConsumerIterator_2_classLit = createForClass('java.util', 'Spliterators/IntConsumerIterator', 417, Ljava_lang_Object_2_classLit);
function $clinit_Spliterators$IntIteratorSpliterator(){
  $clinit_Spliterators$IntIteratorSpliterator = emptyMethod;
}

defineClass(420, 408, {1:1});
var Ljava_util_Spliterators$IntIteratorSpliterator_2_classLit = createForClass('java.util', 'Spliterators/IntIteratorSpliterator', 420, Ljava_util_Spliterators$AbstractIntSpliterator_2_classLit);
function $clinit_Spliterators$LongArraySpliterator(){
  $clinit_Spliterators$LongArraySpliterator = emptyMethod;
}

defineClass(426, 422, {1:1});
var Ljava_util_Spliterators$LongArraySpliterator_2_classLit = createForClass('java.util', 'Spliterators/LongArraySpliterator', 426, Ljava_util_Spliterators$BaseArraySpliterator_2_classLit);
function $clinit_LongConsumer(){
  $clinit_LongConsumer = emptyMethod;
}

var Ljava_util_function_LongConsumer_2_classLit = createForInterface('java.util.function', 'LongConsumer');
function $clinit_Spliterators$LongConsumerIterator(){
  $clinit_Spliterators$LongConsumerIterator = emptyMethod;
}

defineClass(418, 1, {1:1});
var Ljava_util_Spliterators$LongConsumerIterator_2_classLit = createForClass('java.util', 'Spliterators/LongConsumerIterator', 418, Ljava_lang_Object_2_classLit);
function $clinit_Spliterators$LongIteratorSpliterator(){
  $clinit_Spliterators$LongIteratorSpliterator = emptyMethod;
}

defineClass(421, 409, {1:1});
var Ljava_util_Spliterators$LongIteratorSpliterator_2_classLit = createForClass('java.util', 'Spliterators/LongIteratorSpliterator', 421, Ljava_util_Spliterators$AbstractLongSpliterator_2_classLit);
function $clinit_StringJoiner(){
  $clinit_StringJoiner = emptyMethod;
  $clinit_Object();
}

function StringJoiner(delimiter, prefix, suffix){
  $clinit_StringJoiner();
  Object_0.call(this);
  this.$init_269();
  checkNotNull_1(delimiter, 'delimiter');
  checkNotNull_1(prefix, 'prefix');
  checkNotNull_1(suffix, 'suffix');
  this.delimiter = toString__Ljava_lang_String___devirtual$_2(delimiter);
  this.prefix = toString__Ljava_lang_String___devirtual$_2(prefix);
  this.suffix = toString__Ljava_lang_String___devirtual$_2(suffix);
  this.emptyValue = this.prefix + ('' + this.suffix);
}

defineClass(116, 1, {1:1}, StringJoiner);
_.$init_269 = function $init_269(){
}
;
_.add_5 = function add_16(newElement){
  this.initBuilderOrAddDelimiter();
  this.builder.append_0(newElement);
  return this;
}
;
_.initBuilderOrAddDelimiter = function initBuilderOrAddDelimiter(){
  if (isNull(this.builder)) {
    this.builder = new StringBuilder_1(this.prefix);
  }
   else {
    this.builder.append_2(this.delimiter);
  }
}
;
_.length_0 = function length_3(){
  if (isNull(this.builder)) {
    return length__I__devirtual$_0(this.emptyValue);
  }
  return this.builder.length_0() + length__I__devirtual$_0(this.suffix);
}
;
_.toString_0 = function toString_42(){
  if (isNull(this.builder)) {
    return this.emptyValue;
  }
   else if (isEmpty__Z__devirtual$(this.suffix)) {
    return this.builder.toString_0();
  }
   else {
    return this.builder.toString_0() + ('' + this.suffix);
  }
}
;
var Ljava_util_StringJoiner_2_classLit = createForClass('java.util', 'StringJoiner', 116, Ljava_lang_Object_2_classLit);
function $clinit_Consumer$lambda$0$Type(){
  $clinit_Consumer$lambda$0$Type = emptyMethod;
}

defineClass(430, 1, {1:1});
var Ljava_util_function_Consumer$lambda$0$Type_2_classLit = createForClass('java.util.function', 'Consumer/lambda$0$Type', 430, Ljava_lang_Object_2_classLit);
function $clinit_DoubleConsumer$lambda$0$Type(){
  $clinit_DoubleConsumer$lambda$0$Type = emptyMethod;
}

defineClass(431, 1, {1:1});
var Ljava_util_function_DoubleConsumer$lambda$0$Type_2_classLit = createForClass('java.util.function', 'DoubleConsumer/lambda$0$Type', 431, Ljava_lang_Object_2_classLit);
function $clinit_IntConsumer$lambda$0$Type(){
  $clinit_IntConsumer$lambda$0$Type = emptyMethod;
}

defineClass(432, 1, {1:1});
var Ljava_util_function_IntConsumer$lambda$0$Type_2_classLit = createForClass('java.util.function', 'IntConsumer/lambda$0$Type', 432, Ljava_lang_Object_2_classLit);
function $clinit_LongConsumer$lambda$0$Type(){
  $clinit_LongConsumer$lambda$0$Type = emptyMethod;
}

defineClass(433, 1, {1:1});
var Ljava_util_function_LongConsumer$lambda$0$Type_2_classLit = createForClass('java.util.function', 'LongConsumer/lambda$0$Type', 433, Ljava_lang_Object_2_classLit);
function $clinit_java_util_PrimitiveIterator$$__$$java_util_function_DoubleConsumer$$__$$instance$$java_util_function_Consumer$$accept__Ljava_lang_Object_2V$Type(){
  $clinit_java_util_PrimitiveIterator$$__$$java_util_function_DoubleConsumer$$__$$instance$$java_util_function_Consumer$$accept__Ljava_lang_Object_2V$Type = emptyMethod;
}

defineClass(434, 1, {1:1});
var Ljava_util_java_1util_1PrimitiveIterator$$_1_1$$java_1util_1function_1DoubleConsumer$$_1_1$$instance$$java_1util_1function_1Consumer$$accept_1_1Ljava_1lang_1Object_12V$Type_2_classLit = createForClass('java.util', 'Consumer/_PrimitiveIterator$$__$$java_util_function_DoubleConsumer$$__$$instance$$java_util_function_Consumer$$accept__Ljava_lang_Object_2V$Type', 434, Ljava_lang_Object_2_classLit);
function $clinit_java_util_PrimitiveIterator$$__$$java_util_function_IntConsumer$$__$$instance$$java_util_function_Consumer$$accept__Ljava_lang_Object_2V$Type(){
  $clinit_java_util_PrimitiveIterator$$__$$java_util_function_IntConsumer$$__$$instance$$java_util_function_Consumer$$accept__Ljava_lang_Object_2V$Type = emptyMethod;
}

defineClass(435, 1, {1:1});
var Ljava_util_java_1util_1PrimitiveIterator$$_1_1$$java_1util_1function_1IntConsumer$$_1_1$$instance$$java_1util_1function_1Consumer$$accept_1_1Ljava_1lang_1Object_12V$Type_2_classLit = createForClass('java.util', 'Consumer/_PrimitiveIterator$$__$$java_util_function_IntConsumer$$__$$instance$$java_util_function_Consumer$$accept__Ljava_lang_Object_2V$Type', 435, Ljava_lang_Object_2_classLit);
function $clinit_java_util_PrimitiveIterator$$__$$java_util_function_LongConsumer$$__$$instance$$java_util_function_Consumer$$accept__Ljava_lang_Object_2V$Type(){
  $clinit_java_util_PrimitiveIterator$$__$$java_util_function_LongConsumer$$__$$instance$$java_util_function_Consumer$$accept__Ljava_lang_Object_2V$Type = emptyMethod;
}

defineClass(436, 1, {1:1});
var Ljava_util_java_1util_1PrimitiveIterator$$_1_1$$java_1util_1function_1LongConsumer$$_1_1$$instance$$java_1util_1function_1Consumer$$accept_1_1Ljava_1lang_1Object_12V$Type_2_classLit = createForClass('java.util', 'Consumer/_PrimitiveIterator$$__$$java_util_function_LongConsumer$$__$$instance$$java_util_function_Consumer$$accept__Ljava_lang_Object_2V$Type', 436, Ljava_lang_Object_2_classLit);
function $clinit_java_util_Spliterator$$__$$java_util_function_DoubleConsumer$$__$$instance$$java_util_function_Consumer$$accept__Ljava_lang_Object_2V$Type(){
  $clinit_java_util_Spliterator$$__$$java_util_function_DoubleConsumer$$__$$instance$$java_util_function_Consumer$$accept__Ljava_lang_Object_2V$Type = emptyMethod;
}

defineClass(427, 1, {1:1});
var Ljava_util_java_1util_1Spliterator$$_1_1$$java_1util_1function_1DoubleConsumer$$_1_1$$instance$$java_1util_1function_1Consumer$$accept_1_1Ljava_1lang_1Object_12V$Type_2_classLit = createForClass('java.util', 'Consumer/_Spliterator$$__$$java_util_function_DoubleConsumer$$__$$instance$$java_util_function_Consumer$$accept__Ljava_lang_Object_2V$Type', 427, Ljava_lang_Object_2_classLit);
function $clinit_java_util_Spliterator$$__$$java_util_function_IntConsumer$$__$$instance$$java_util_function_Consumer$$accept__Ljava_lang_Object_2V$Type(){
  $clinit_java_util_Spliterator$$__$$java_util_function_IntConsumer$$__$$instance$$java_util_function_Consumer$$accept__Ljava_lang_Object_2V$Type = emptyMethod;
}

defineClass(428, 1, {1:1});
var Ljava_util_java_1util_1Spliterator$$_1_1$$java_1util_1function_1IntConsumer$$_1_1$$instance$$java_1util_1function_1Consumer$$accept_1_1Ljava_1lang_1Object_12V$Type_2_classLit = createForClass('java.util', 'Consumer/_Spliterator$$__$$java_util_function_IntConsumer$$__$$instance$$java_util_function_Consumer$$accept__Ljava_lang_Object_2V$Type', 428, Ljava_lang_Object_2_classLit);
function $clinit_java_util_Spliterator$$__$$java_util_function_LongConsumer$$__$$instance$$java_util_function_Consumer$$accept__Ljava_lang_Object_2V$Type(){
  $clinit_java_util_Spliterator$$__$$java_util_function_LongConsumer$$__$$instance$$java_util_function_Consumer$$accept__Ljava_lang_Object_2V$Type = emptyMethod;
}

defineClass(429, 1, {1:1});
var Ljava_util_java_1util_1Spliterator$$_1_1$$java_1util_1function_1LongConsumer$$_1_1$$instance$$java_1util_1function_1Consumer$$accept_1_1Ljava_1lang_1Object_12V$Type_2_classLit = createForClass('java.util', 'Consumer/_Spliterator$$__$$java_util_function_LongConsumer$$__$$instance$$java_util_function_Consumer$$accept__Ljava_lang_Object_2V$Type', 429, Ljava_lang_Object_2_classLit);
function $clinit_Level(){
  $clinit_Level = emptyMethod;
  $clinit_Object();
  ALL = new Level$LevelAll;
  CONFIG = new Level$LevelConfig;
  FINE = new Level$LevelFine;
  FINER = new Level$LevelFiner;
  FINEST = new Level$LevelFinest;
  INFO_0 = new Level$LevelInfo;
  OFF = new Level$LevelOff;
  SEVERE = new Level$LevelSevere;
  WARNING = new Level$LevelWarning;
}

function Level(){
  $clinit_Level();
  Object_0.call(this);
  this.$init_270();
}

defineClass(27, 1, {3:1, 1:1});
_.$init_270 = function $init_270(){
}
;
_.getName = function getName_8(){
  return 'DUMMY';
}
;
_.intValue = function intValue_4(){
  return -1;
}
;
_.toString_0 = function toString_43(){
  return this.getName();
}
;
var ALL, CONFIG, FINE, FINER, FINEST, INFO_0, OFF, SEVERE, WARNING;
var Ljava_util_logging_Level_2_classLit = createForClass('java.util.logging', 'Level', 27, Ljava_lang_Object_2_classLit);
function $clinit_Level$LevelAll(){
  $clinit_Level$LevelAll = emptyMethod;
  $clinit_Level();
}

function Level$LevelAll(){
  $clinit_Level$LevelAll();
  Level.call(this);
  this.$init_271();
}

defineClass(176, 27, {3:1, 1:1}, Level$LevelAll);
_.$init_271 = function $init_271(){
}
;
_.getName = function getName_9(){
  return 'ALL';
}
;
_.intValue = function intValue_5(){
  return -2147483648;
}
;
var Ljava_util_logging_Level$LevelAll_2_classLit = createForClass('java.util.logging', 'Level/LevelAll', 176, Ljava_util_logging_Level_2_classLit);
function $clinit_Level$LevelConfig(){
  $clinit_Level$LevelConfig = emptyMethod;
  $clinit_Level();
}

function Level$LevelConfig(){
  $clinit_Level$LevelConfig();
  Level.call(this);
  this.$init_272();
}

defineClass(177, 27, {3:1, 1:1}, Level$LevelConfig);
_.$init_272 = function $init_272(){
}
;
_.getName = function getName_10(){
  return 'CONFIG';
}
;
_.intValue = function intValue_6(){
  return 700;
}
;
var Ljava_util_logging_Level$LevelConfig_2_classLit = createForClass('java.util.logging', 'Level/LevelConfig', 177, Ljava_util_logging_Level_2_classLit);
function $clinit_Level$LevelFine(){
  $clinit_Level$LevelFine = emptyMethod;
  $clinit_Level();
}

function Level$LevelFine(){
  $clinit_Level$LevelFine();
  Level.call(this);
  this.$init_273();
}

defineClass(178, 27, {3:1, 1:1}, Level$LevelFine);
_.$init_273 = function $init_273(){
}
;
_.getName = function getName_11(){
  return 'FINE';
}
;
_.intValue = function intValue_7(){
  return 500;
}
;
var Ljava_util_logging_Level$LevelFine_2_classLit = createForClass('java.util.logging', 'Level/LevelFine', 178, Ljava_util_logging_Level_2_classLit);
function $clinit_Level$LevelFiner(){
  $clinit_Level$LevelFiner = emptyMethod;
  $clinit_Level();
}

function Level$LevelFiner(){
  $clinit_Level$LevelFiner();
  Level.call(this);
  this.$init_274();
}

defineClass(179, 27, {3:1, 1:1}, Level$LevelFiner);
_.$init_274 = function $init_274(){
}
;
_.getName = function getName_12(){
  return 'FINER';
}
;
_.intValue = function intValue_8(){
  return 400;
}
;
var Ljava_util_logging_Level$LevelFiner_2_classLit = createForClass('java.util.logging', 'Level/LevelFiner', 179, Ljava_util_logging_Level_2_classLit);
function $clinit_Level$LevelFinest(){
  $clinit_Level$LevelFinest = emptyMethod;
  $clinit_Level();
}

function Level$LevelFinest(){
  $clinit_Level$LevelFinest();
  Level.call(this);
  this.$init_275();
}

defineClass(180, 27, {3:1, 1:1}, Level$LevelFinest);
_.$init_275 = function $init_275(){
}
;
_.getName = function getName_13(){
  return 'FINEST';
}
;
_.intValue = function intValue_9(){
  return 300;
}
;
var Ljava_util_logging_Level$LevelFinest_2_classLit = createForClass('java.util.logging', 'Level/LevelFinest', 180, Ljava_util_logging_Level_2_classLit);
function $clinit_Level$LevelInfo(){
  $clinit_Level$LevelInfo = emptyMethod;
  $clinit_Level();
}

function Level$LevelInfo(){
  $clinit_Level$LevelInfo();
  Level.call(this);
  this.$init_276();
}

defineClass(181, 27, {3:1, 1:1}, Level$LevelInfo);
_.$init_276 = function $init_276(){
}
;
_.getName = function getName_14(){
  return 'INFO';
}
;
_.intValue = function intValue_10(){
  return 800;
}
;
var Ljava_util_logging_Level$LevelInfo_2_classLit = createForClass('java.util.logging', 'Level/LevelInfo', 181, Ljava_util_logging_Level_2_classLit);
function $clinit_Level$LevelOff(){
  $clinit_Level$LevelOff = emptyMethod;
  $clinit_Level();
}

function Level$LevelOff(){
  $clinit_Level$LevelOff();
  Level.call(this);
  this.$init_277();
}

defineClass(182, 27, {3:1, 1:1}, Level$LevelOff);
_.$init_277 = function $init_277(){
}
;
_.getName = function getName_15(){
  return 'OFF';
}
;
_.intValue = function intValue_11(){
  return 2147483647;
}
;
var Ljava_util_logging_Level$LevelOff_2_classLit = createForClass('java.util.logging', 'Level/LevelOff', 182, Ljava_util_logging_Level_2_classLit);
function $clinit_Level$LevelSevere(){
  $clinit_Level$LevelSevere = emptyMethod;
  $clinit_Level();
}

function Level$LevelSevere(){
  $clinit_Level$LevelSevere();
  Level.call(this);
  this.$init_278();
}

defineClass(183, 27, {3:1, 1:1}, Level$LevelSevere);
_.$init_278 = function $init_278(){
}
;
_.getName = function getName_16(){
  return 'SEVERE';
}
;
_.intValue = function intValue_12(){
  return 1000;
}
;
var Ljava_util_logging_Level$LevelSevere_2_classLit = createForClass('java.util.logging', 'Level/LevelSevere', 183, Ljava_util_logging_Level_2_classLit);
function $clinit_Level$LevelWarning(){
  $clinit_Level$LevelWarning = emptyMethod;
  $clinit_Level();
}

function Level$LevelWarning(){
  $clinit_Level$LevelWarning();
  Level.call(this);
  this.$init_279();
}

defineClass(184, 27, {3:1, 1:1}, Level$LevelWarning);
_.$init_279 = function $init_279(){
}
;
_.getName = function getName_17(){
  return 'WARNING';
}
;
_.intValue = function intValue_13(){
  return 900;
}
;
var Ljava_util_logging_Level$LevelWarning_2_classLit = createForClass('java.util.logging', 'Level/LevelWarning', 184, Ljava_util_logging_Level_2_classLit);
function $clinit_LogManager(){
  $clinit_LogManager = emptyMethod;
  $clinit_Object();
}

function LogManager(){
  Object_0.call(this);
  this.$init_280();
}

function getLogManager(){
  $clinit_LogManager();
  var rootLogger;
  if (isNull(singleton_0)) {
    singleton_0 = new LogManager;
    rootLogger = new Logger('', null);
    rootLogger.setLevel(($clinit_Level() , INFO_0));
    singleton_0.addLoggerImpl(rootLogger);
  }
  return singleton_0;
}

defineClass(164, 1, {1:1}, LogManager);
_.$init_280 = function $init_280(){
  this.loggerMap = new HashMap;
}
;
_.addLoggerAndEnsureParents = function addLoggerAndEnsureParents(logger){
  var name_0, parentName;
  name_0 = logger.getName();
  parentName = substring_II_Ljava_lang_String___devirtual$(name_0, 0, max_0(0, lastIndexOf_I_I__devirtual$(name_0, 46)));
  logger.setParent_0(this.ensureLogger(parentName));
  this.addLoggerImpl(logger);
}
;
_.addLoggerImpl = function addLoggerImpl(logger){
  if (equals_Ljava_lang_Object__Z__devirtual$_2('DISABLED', 'ENABLED')) {
    if (isEmpty__Z__devirtual$(logger.getName())) {
      logger.addHandler_4(new SimpleConsoleLogHandler);
    }
  }
  this.loggerMap.put(logger.getName(), logger);
}
;
_.ensureLogger = function ensureLogger(name_0){
  var logger, newLogger;
  logger = this.getLogger(name_0);
  if (isNull(logger)) {
    newLogger = new Logger(name_0, null);
    this.addLoggerAndEnsureParents(newLogger);
    return newLogger;
  }
  return logger;
}
;
_.getLogger = function getLogger(name_0){
  return castTo(this.loggerMap.get_2(name_0), 59);
}
;
var singleton_0;
var Ljava_util_logging_LogManager_2_classLit = createForClass('java.util.logging', 'LogManager', 164, Ljava_lang_Object_2_classLit);
function $clinit_LogRecord(){
  $clinit_LogRecord = emptyMethod;
  $clinit_Object();
}

function LogRecord(level, msg){
  $clinit_LogRecord();
  Object_0.call(this);
  this.$init_281();
  this.level_0 = level;
  this.msg = msg;
  this.millis_0 = currentTimeMillis_0();
}

defineClass(205, 1, {3:1, 1:1}, LogRecord);
_.$init_281 = function $init_281(){
  this.loggerName = '';
  this.thrown = null;
}
;
_.getLevel = function getLevel_0(){
  return this.level_0;
}
;
_.getMessage = function getMessage_3(){
  return this.msg;
}
;
_.getThrown_0 = function getThrown_0(){
  return this.thrown;
}
;
_.setLevel = function setLevel_0(newLevel){
  this.level_0 = newLevel;
}
;
_.setLoggerName = function setLoggerName(newName){
  this.loggerName = newName;
}
;
_.setThrown = function setThrown(newThrown){
  this.thrown = newThrown;
}
;
_.millis_0 = 0;
var Ljava_util_logging_LogRecord_2_classLit = createForClass('java.util.logging', 'LogRecord', 205, Ljava_lang_Object_2_classLit);
function $clinit_Logger(){
  $clinit_Logger = emptyMethod;
  $clinit_Object();
  LOGGING_WARNING = equals_Ljava_lang_Object__Z__devirtual$_2(LOGGING_ENABLED, 'WARNING');
  LOGGING_SEVERE = equals_Ljava_lang_Object__Z__devirtual$_2(LOGGING_ENABLED, 'SEVERE');
  LOGGING_FALSE = equals_Ljava_lang_Object__Z__devirtual$_2(LOGGING_ENABLED, 'FALSE');
  {
    assertLoggingValues();
  }
}

function Logger(name_0, resourceName){
  $clinit_Logger();
  Object_0.call(this);
  this.$init_282();
  if (LOGGING_FALSE) {
    return;
  }
  this.name_0 = name_0;
  this.useParentHandlers = true;
  this.handlers = new ArrayList;
}

function assertLoggingValues(){
  if (equals_Ljava_lang_Object__Z__devirtual$_2(LOGGING_ENABLED, 'FALSE') || equals_Ljava_lang_Object__Z__devirtual$_2(LOGGING_ENABLED, 'TRUE') || equals_Ljava_lang_Object__Z__devirtual$_2(LOGGING_ENABLED, 'SEVERE') || equals_Ljava_lang_Object__Z__devirtual$_2(LOGGING_ENABLED, 'WARNING')) {
    return;
  }
  throw toJs(new RuntimeException_1("Undefined value for gwt.logging.enabled: '" + LOGGING_ENABLED + "'. Allowed values are TRUE, FALSE, SEVERE, WARNING"));
}

function getLogger_0(name_0){
  $clinit_Logger();
  if (LOGGING_FALSE) {
    return new Logger(name_0, null);
  }
  return getLogManager().ensureLogger(name_0);
}

defineClass(59, 1, {1:1, 59:1}, Logger);
_.$init_282 = function $init_282(){
  this.level_0 = null;
}
;
_.actuallyLog = function actuallyLog(level, msg, thrown){
  var record;
  if (this.isLoggable_0(level)) {
    record = new LogRecord(level, msg);
    record.setThrown(thrown);
    record.setLoggerName(this.getName());
    this.actuallyLog_0(record);
  }
}
;
_.actuallyLog_0 = function actuallyLog_0(record){
  var handler, handler$array, handler$array0, handler$index, handler$index0, handler$max, handler$max0, logger;
  if (this.isLoggable_0(record.getLevel())) {
    for (handler$array0 = this.getHandlers() , handler$index0 = 0 , handler$max0 = handler$array0.length; handler$index0 < handler$max0; ++handler$index0) {
      handler = handler$array0[handler$index0];
      handler.publish(record);
    }
    logger = this.getUseParentHandlers()?this.getParent_0():null;
    while (isNotNull(logger)) {
      for (handler$array = logger.getHandlers() , handler$index = 0 , handler$max = handler$array.length; handler$index < handler$max; ++handler$index) {
        handler = handler$array[handler$index];
        handler.publish(record);
      }
      logger = logger.getUseParentHandlers()?logger.getParent_0():null;
    }
  }
}
;
_.addHandler_4 = function addHandler_5(handler){
  if (LOGGING_FALSE) {
    return;
  }
  this.handlers.add_3(handler);
}
;
_.getEffectiveLevel = function getEffectiveLevel(){
  var effectiveLevel, logger;
  if (isNotNull(this.level_0)) {
    return this.level_0;
  }
  logger = this.getParent_0();
  while (isNotNull(logger)) {
    effectiveLevel = logger.getLevel();
    if (isNotNull(effectiveLevel)) {
      return effectiveLevel;
    }
    logger = logger.getParent_0();
  }
  return $clinit_Level() , INFO_0;
}
;
_.getHandlers = function getHandlers_0(){
  if (LOGGING_FALSE) {
    return initUnidimensionalArray(Ljava_util_logging_Handler_2_classLit, {3:1, 1:1, 7:1, 304:1}, 23, 0, 0, 1);
  }
  return castTo(this.handlers.toArray_0(initUnidimensionalArray(Ljava_util_logging_Handler_2_classLit, {3:1, 1:1, 7:1, 304:1}, 23, this.handlers.size_1(), 0, 1)), 304);
}
;
_.getLevel = function getLevel_1(){
  return LOGGING_FALSE?null:this.level_0;
}
;
_.getName = function getName_18(){
  return LOGGING_FALSE?null:this.name_0;
}
;
_.getParent_0 = function getParent_1(){
  return LOGGING_FALSE?null:this.parent_0;
}
;
_.getUseParentHandlers = function getUseParentHandlers(){
  return LOGGING_FALSE?false:this.useParentHandlers;
}
;
_.info = function info_1(msg){
  if (LOGGING_FALSE || LOGGING_SEVERE || LOGGING_WARNING) {
    return;
  }
  this.log_2(($clinit_Level() , INFO_0), msg);
}
;
_.isLoggable_0 = function isLoggable_0(messageLevel){
  return LOGGING_FALSE?false:this.getEffectiveLevel().intValue() <= messageLevel.intValue();
}
;
_.log_2 = function log_14(level, msg){
  this.log_3(level, msg, null);
}
;
_.log_3 = function log_15(level, msg, thrown){
  if (LOGGING_FALSE) {
    return;
  }
  if (LOGGING_SEVERE) {
    if (level.intValue() >= 1000) {
      this.actuallyLog(level, msg, thrown);
    }
  }
   else if (LOGGING_WARNING) {
    if (level.intValue() >= ($clinit_Level() , WARNING).intValue()) {
      this.actuallyLog(level, msg, thrown);
    }
  }
   else {
    this.actuallyLog(level, msg, thrown);
  }
}
;
_.setLevel = function setLevel_1(newLevel){
  if (LOGGING_FALSE) {
    return;
  }
  this.level_0 = newLevel;
}
;
_.setParent_0 = function setParent_0(newParent){
  if (LOGGING_FALSE) {
    return;
  }
  if (isNotNull(newParent)) {
    this.parent_0 = newParent;
  }
}
;
_.useParentHandlers = false;
var GLOBAL_LOGGER_NAME = 'global', LOGGING_ENABLED = 'FALSE', LOGGING_FALSE = false, LOGGING_SEVERE = false, LOGGING_WARNING = false;
var Ljava_util_logging_Logger_2_classLit = createForClass('java.util.logging', 'Logger', 59, Ljava_lang_Object_2_classLit);
function $clinit_SimpleConsoleLogHandler(){
  $clinit_SimpleConsoleLogHandler = emptyMethod;
  $clinit_Handler();
}

function SimpleConsoleLogHandler(){
  $clinit_SimpleConsoleLogHandler();
  Handler.call(this);
  this.$init_283();
}

defineClass(186, 23, {1:1, 23:1}, SimpleConsoleLogHandler);
_.$init_283 = function $init_283(){
}
;
_.close_0 = function close_3(){
}
;
_.flush = function flush_3(){
}
;
_.publish = function publish_0(record){
  var console_0, level;
  console_0 = createIfSupported();
  if (isNull(console_0)) {
    return;
  }
  if (!this.isLoggable(record)) {
    return;
  }
  level = this.toConsoleLogLevel(record.getLevel());
  console_0.log_4(level, record.getMessage());
  if (isNotNull(record.getThrown_0())) {
    console_0.log_0(level, record.getThrown_0());
  }
}
;
_.toConsoleLogLevel = function toConsoleLogLevel(level){
  var val;
  val = level.intValue();
  if (val >= ($clinit_Level() , SEVERE).intValue()) {
    return 'error';
  }
   else if (val >= ($clinit_Level() , WARNING).intValue()) {
    return 'warn';
  }
   else if (val >= ($clinit_Level() , INFO_0).intValue()) {
    return 'info';
  }
   else {
    return 'log';
  }
}
;
var Ljava_util_logging_SimpleConsoleLogHandler_2_classLit = createForClass('java.util.logging', 'SimpleConsoleLogHandler', 186, Ljava_util_logging_Handler_2_classLit);
function $clinit_ArrayHelper(){
  $clinit_ArrayHelper = emptyMethod;
  $clinit_Object();
}

function applySplice(array, index_0, deleteCount, arrayToAdd){
  Array.prototype.splice.apply(array, [index_0, deleteCount].concat(arrayToAdd));
}

function clone(array, fromIndex, toIndex){
  $clinit_ArrayHelper();
  var result;
  result = unsafeClone(array, fromIndex, toIndex);
  return stampJavaTypeInfo_1(result, array);
}

function copy_0(src_0, srcOfs, dest, destOfs, len, overwrite){
  var batchEnd, batchStart, end;
  if (maskUndefined(src_0) === maskUndefined(dest)) {
    src_0 = unsafeClone(src_0, srcOfs, srcOfs + len);
    srcOfs = 0;
  }
  for (batchStart = srcOfs , end = srcOfs + len; batchStart < end;) {
    batchEnd = min_0(batchStart + 10000, end);
    len = batchEnd - batchStart;
    applySplice(dest, destOfs, overwrite?len:0, unsafeClone(src_0, batchStart, batchEnd));
    batchStart = batchEnd;
    destOfs += len;
  }
}

function createFrom(array, length_0){
  $clinit_ArrayHelper();
  var result;
  result = createNativeArray(length_0);
  return stampJavaTypeInfo_1(result, array);
}

function createNativeArray(length_0){
  return new Array(length_0);
}

function insertTo(array, index_0, value_0){
  $clinit_ArrayHelper();
  array.splice(index_0, 0, value_0);
}

function insertTo_0(array, index_0, values){
  $clinit_ArrayHelper();
  copy_0(values, 0, array, index_0, values.length, false);
}

function removeFrom(array, index_0, deleteCount){
  $clinit_ArrayHelper();
  array.splice(index_0, deleteCount);
}

function setLength_0(array, length_0){
  $clinit_ArrayHelper();
  array.length = length_0;
}

function unsafeClone(array, fromIndex, toIndex){
  $clinit_ArrayHelper();
  return array.slice(fromIndex, toIndex);
}

defineClass(443, 1, {1:1});
var ARRAY_PROCESS_BATCH_SIZE = 10000;
var Ljavaemul_internal_ArrayHelper_2_classLit = createForClass('javaemul.internal', 'ArrayHelper', 443, Ljava_lang_Object_2_classLit);
function $clinit_ArrayStamper(){
  $clinit_ArrayStamper = emptyMethod;
  $clinit_Object();
}

function stampJavaTypeInfo_1(array, referenceType){
  $clinit_ArrayStamper();
  return stampJavaTypeInfo_0(array, referenceType);
}

defineClass(451, 1, {1:1});
var Ljavaemul_internal_ArrayStamper_2_classLit = createForClass('javaemul.internal', 'ArrayStamper', 451, Ljava_lang_Object_2_classLit);
function $clinit_Coercions(){
  $clinit_Coercions = emptyMethod;
  $clinit_Object();
}

function ensureInt(value_0){
  $clinit_Coercions();
  return value_0 | 0;
}

defineClass(374, 1, {1:1});
var Ljavaemul_internal_Coercions_2_classLit = createForClass('javaemul.internal', 'Coercions', 374, Ljava_lang_Object_2_classLit);
function $clinit_ConsoleLogger(){
  $clinit_ConsoleLogger = emptyMethod;
  $clinit_Object();
}

function ConsoleLogger(){
  Object_0.call(this);
  this.$init_284();
}

function createIfSupported(){
  $clinit_ConsoleLogger();
  return isSupported()?new ConsoleLogger:null;
}

function isSupported(){
  return !!window.console;
}

defineClass(213, 1, {1:1}, ConsoleLogger);
_.$init_284 = function $init_284(){
}
;
_.getBackingError = function getBackingError(t){
  function stringify(fnStack){
    if (!fnStack || fnStack.length == 0) {
      return '';
    }
    return '\t' + fnStack.join('\n\t');
  }

  var backingError = t.backingJsObject;
  return backingError && (backingError.stack || stringify(t['fnStack']));
}
;
_.groupEnd_0 = function groupEnd_0(){
  var groupEnd = console.groupEnd || function(){
  }
  ;
  groupEnd.call(console);
}
;
_.groupStart = function groupStart_0(msg, expanded){
  var groupStart = !expanded && console.groupCollapsed || (console.group || console.log);
  groupStart.call(console, msg);
}
;
_.log_4 = function log_16(level, message){
  console[level](message);
}
;
_.log_0 = function log_17(level, t){
  this.log_5(level, t, 'Exception: ', true);
}
;
_.log_5 = function log_18(level, t, label_0, expanded){
  var cause, suppressed, suppressed$array, suppressed$index, suppressed$max;
  this.groupStart(label_0 + ('' + t.toString_0()), expanded);
  this.log_4(level, this.getBackingError(t));
  cause = t.getCause();
  if (isNotNull(cause)) {
    this.log_5(level, cause, 'Caused by: ', false);
  }
  for (suppressed$array = t.getSuppressed() , suppressed$index = 0 , suppressed$max = suppressed$array.length; suppressed$index < suppressed$max; ++suppressed$index) {
    suppressed = suppressed$array[suppressed$index];
    this.log_5(level, suppressed, 'Suppressed: ', false);
  }
  this.groupEnd_0();
}
;
var Ljavaemul_internal_ConsoleLogger_2_classLit = createForClass('javaemul.internal', 'ConsoleLogger', 213, Ljava_lang_Object_2_classLit);
function $clinit_DateUtil(){
  $clinit_DateUtil = emptyMethod;
  $clinit_Object();
}

function now_2(){
  $clinit_DateUtil();
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

defineClass(444, 1, {1:1});
var Ljavaemul_internal_DateUtil_2_classLit = createForClass('javaemul.internal', 'DateUtil', 444, Ljava_lang_Object_2_classLit);
function $clinit_HashCodes(){
  $clinit_HashCodes = emptyMethod;
  $clinit_Object();
}

function getNextHashId(){
  return ++sNextHashId;
}

function getObjectIdentityHashCode(o){
  $clinit_HashCodes();
  return o.$H || (o.$H = getNextHashId());
}

function hashCodeForString(s){
  $clinit_HashCodes();
  return getHashCode_0(s);
}

defineClass(359, 1, {1:1});
var HASH_CODE_PROPERTY = '$H', sNextHashId = 0;
var Ljavaemul_internal_HashCodes_2_classLit = createForClass('javaemul.internal', 'HashCodes', 359, Ljava_lang_Object_2_classLit);
function $clinit_InternalPreconditions(){
  $clinit_InternalPreconditions = emptyMethod;
  $clinit_Object();
  CHECKED_MODE = equals_Ljava_lang_Object__Z__devirtual$_2('DISABLED', 'ENABLED');
  TYPE_CHECK = equals_Ljava_lang_Object__Z__devirtual$_2('ENABLED', 'ENABLED');
  API_CHECK_0 = equals_Ljava_lang_Object__Z__devirtual$_2('ENABLED', 'ENABLED');
  BOUND_CHECK = equals_Ljava_lang_Object__Z__devirtual$_2('ENABLED', 'ENABLED');
}

function checkArrayType(expression){
  $clinit_InternalPreconditions();
  var e;
  if (TYPE_CHECK) {
    checkCriticalArrayType(expression);
  }
   else if (CHECKED_MODE) {
    try {
      checkCriticalArrayType(expression);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 10)) {
        e = $e0;
        throw toJs(new AssertionError_5(e));
      }
       else 
        throw toJs($e0);
    }
  }
}

function checkCriticalArgument(expression, errorMessage){
  $clinit_InternalPreconditions();
  if (!expression) {
    throw toJs(new IllegalArgumentException(valueOf_17(errorMessage)));
  }
}

function checkCriticalArgument_0(expression, errorMessageTemplate, errorMessageArgs){
  $clinit_InternalPreconditions();
  if (!expression) {
    throw toJs(new IllegalArgumentException(format(errorMessageTemplate, errorMessageArgs)));
  }
}

function checkCriticalArrayType(expression){
  if (!expression) {
    throw toJs(new ArrayStoreException);
  }
}

function checkCriticalElement(expression){
  if (!expression) {
    throw toJs(new NoSuchElementException);
  }
}

function checkCriticalElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalNotNull(reference){
  if (jsEquals(reference, null)) {
    throw toJs(new NullPointerException);
  }
  return reference;
}

function checkCriticalNotNull_0(reference, errorMessage){
  if (jsEquals(reference, null)) {
    throw toJs(new NullPointerException_0(valueOf_17(errorMessage)));
  }
}

function checkCriticalPositionIndex(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw toJs(new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalPositionIndexes(start_0, end, size_0){
  if (start_0 < 0) {
    throw toJs(new IndexOutOfBoundsException_0('fromIndex: ' + start_0 + ' < 0'));
  }
  if (end > size_0) {
    throw toJs(new IndexOutOfBoundsException_0('toIndex: ' + end + ' > size ' + size_0));
  }
  if (start_0 > end) {
    throw toJs(new IllegalArgumentException('fromIndex: ' + start_0 + ' > toIndex: ' + end));
  }
}

function checkCriticalState(expression){
  if (!expression) {
    throw toJs(new IllegalStateException);
  }
}

function checkCriticalType(expression){
  if (!expression) {
    throw toJs(new ClassCastException);
  }
}

function checkElement(expression){
  $clinit_InternalPreconditions();
  var e;
  if (API_CHECK_0) {
    checkCriticalElement(expression);
  }
   else if (CHECKED_MODE) {
    try {
      checkCriticalElement(expression);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 10)) {
        e = $e0;
        throw toJs(new AssertionError_5(e));
      }
       else 
        throw toJs($e0);
    }
  }
}

function checkElementIndex(index_0, size_0){
  $clinit_InternalPreconditions();
  var e;
  if (BOUND_CHECK) {
    checkCriticalElementIndex(index_0, size_0);
  }
   else if (CHECKED_MODE) {
    try {
      checkCriticalElementIndex(index_0, size_0);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 10)) {
        e = $e0;
        throw toJs(new AssertionError_5(e));
      }
       else 
        throw toJs($e0);
    }
  }
}

function checkNotNull_0(reference){
  $clinit_InternalPreconditions();
  var e;
  if (API_CHECK_0) {
    checkCriticalNotNull(reference);
  }
   else if (CHECKED_MODE) {
    try {
      checkCriticalNotNull(reference);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 10)) {
        e = $e0;
        throw toJs(new AssertionError_5(e));
      }
       else 
        throw toJs($e0);
    }
  }
  return reference;
}

function checkNotNull_1(reference, errorMessage){
  $clinit_InternalPreconditions();
  var e;
  if (API_CHECK_0) {
    checkCriticalNotNull_0(reference, errorMessage);
  }
   else if (CHECKED_MODE) {
    try {
      checkCriticalNotNull_0(reference, errorMessage);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 10)) {
        e = $e0;
        throw toJs(new AssertionError_5(e));
      }
       else 
        throw toJs($e0);
    }
  }
}

function checkPositionIndex(index_0, size_0){
  $clinit_InternalPreconditions();
  var e;
  if (BOUND_CHECK) {
    checkCriticalPositionIndex(index_0, size_0);
  }
   else if (CHECKED_MODE) {
    try {
      checkCriticalPositionIndex(index_0, size_0);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 10)) {
        e = $e0;
        throw toJs(new AssertionError_5(e));
      }
       else 
        throw toJs($e0);
    }
  }
}

function checkPositionIndexes(start_0, end, size_0){
  $clinit_InternalPreconditions();
  var e;
  if (BOUND_CHECK) {
    checkCriticalPositionIndexes(start_0, end, size_0);
  }
   else if (CHECKED_MODE) {
    try {
      checkCriticalPositionIndexes(start_0, end, size_0);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 10)) {
        e = $e0;
        throw toJs(new AssertionError_5(e));
      }
       else 
        throw toJs($e0);
    }
  }
}

function checkState(expression){
  $clinit_InternalPreconditions();
  var e;
  if (API_CHECK_0) {
    checkCriticalState(expression);
  }
   else if (CHECKED_MODE) {
    try {
      checkCriticalState(expression);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 10)) {
        e = $e0;
        throw toJs(new AssertionError_5(e));
      }
       else 
        throw toJs($e0);
    }
  }
}

function checkStringBounds(start_0, end, size_0){
  $clinit_InternalPreconditions();
  if (start_0 < 0) {
    throw toJs(new StringIndexOutOfBoundsException('fromIndex: ' + start_0 + ' < 0'));
  }
  if (end > size_0) {
    throw toJs(new StringIndexOutOfBoundsException('toIndex: ' + end + ' > size ' + size_0));
  }
  if (end < start_0) {
    throw toJs(new StringIndexOutOfBoundsException('fromIndex: ' + start_0 + ' > toIndex: ' + end));
  }
}

function checkType(expression){
  $clinit_InternalPreconditions();
  var e;
  if (TYPE_CHECK) {
    checkCriticalType(expression);
  }
   else if (CHECKED_MODE) {
    try {
      checkCriticalType(expression);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 10)) {
        e = $e0;
        throw toJs(new AssertionError_5(e));
      }
       else 
        throw toJs($e0);
    }
  }
}

function format(template, args){
  var builder, i_0, placeholderStart, templateStart;
  template = valueOf_17(template);
  builder = new StringBuilder_0(length__I__devirtual$_0(template) + 16 * args.length);
  templateStart = 0;
  i_0 = 0;
  while (i_0 < args.length) {
    placeholderStart = indexOf_Ljava_lang_String_I_I__devirtual$(template, '%s', templateStart);
    if (placeholderStart == -1) {
      break;
    }
    builder.append_2(substring_II_Ljava_lang_String___devirtual$(template, templateStart, placeholderStart));
    builder.append_1(args[i_0++]);
    templateStart = placeholderStart + 2;
  }
  builder.append_2(substring_I_Ljava_lang_String___devirtual$(template, templateStart));
  if (i_0 < args.length) {
    builder.append_2(' [');
    builder.append_1(args[i_0++]);
    while (i_0 < args.length) {
      builder.append_2(', ');
      builder.append_1(args[i_0++]);
    }
    builder.append(93);
  }
  return builder.toString_0();
}

defineClass(358, 1, {1:1});
var API_CHECK_0 = false, BOUND_CHECK = false, CHECKED_MODE = false, TYPE_CHECK = false;
var Ljavaemul_internal_InternalPreconditions_2_classLit = createForClass('javaemul.internal', 'InternalPreconditions', 358, Ljava_lang_Object_2_classLit);
function $clinit_JsUtils(){
  $clinit_JsUtils = emptyMethod;
  $clinit_Object();
}

function getIntProperty(map_0, key){
  $clinit_JsUtils();
  return map_0[key];
}

function isNaN_1(d){
  $clinit_JsUtils();
  return isNaN(d);
}

function isUndefined(value_0){
  $clinit_JsUtils();
  return value_0 === undefined;
}

function setIntProperty(map_0, key, value_0){
  $clinit_JsUtils();
  map_0[key] = value_0;
}

function setPropertySafe(map_0, key, value_0){
  $clinit_JsUtils();
  try {
    map_0[key] = value_0;
  }
   catch (ignored) {
  }
}

function unsafeCastToString(string){
  $clinit_JsUtils();
  return string;
}

defineClass(368, 1, {1:1});
var Ljavaemul_internal_JsUtils_2_classLit = createForClass('javaemul.internal', 'JsUtils', 368, Ljava_lang_Object_2_classLit);
function $clinit_NativeRegExp(){
  $clinit_NativeRegExp = emptyMethod;
  $clinit_Object();
}

function $clinit_StringHashCache(){
  $clinit_StringHashCache = emptyMethod;
  $clinit_Object();
  back_0 = createNativeObject();
  front = createNativeObject();
}

function compute(str){
  var hashCode, i_0, n, nBatch;
  hashCode = 0;
  n = length__I__devirtual$_0(str);
  nBatch = n - 4;
  i_0 = 0;
  while (i_0 < nBatch) {
    hashCode = charAt_I_C__devirtual$_0(str, i_0 + 3) + 31 * (charAt_I_C__devirtual$_0(str, i_0 + 2) + 31 * (charAt_I_C__devirtual$_0(str, i_0 + 1) + 31 * (charAt_I_C__devirtual$_0(str, i_0) + 31 * hashCode)));
    hashCode = ensureInt(hashCode);
    i_0 += 4;
  }
  while (i_0 < n) {
    hashCode = hashCode * 31 + charAt_I_C__devirtual$_0(str, i_0++);
  }
  hashCode = ensureInt(hashCode);
  return hashCode;
}

function createNativeObject(){
  return {};
}

function getHashCode_0(str){
  $clinit_StringHashCache();
  var hashCode, key, result;
  key = ':' + str;
  result = getProperty(front, key);
  if (!isUndefined(result)) {
    return unsafeCastToInt(result);
  }
  result = getProperty(back_0, key);
  hashCode = isUndefined(result)?compute(str):unsafeCastToInt(result);
  increment();
  setIntProperty(front, key, hashCode);
  return hashCode;
}

function getProperty(map_0, key){
  return map_0[key];
}

function increment(){
  if (count_0 == 256) {
    back_0 = front;
    front = createNativeObject();
    count_0 = 0;
  }
  ++count_0;
}

function unsafeCastToInt(o){
  return o;
}

defineClass(367, 1, {1:1});
var MAX_CACHE = 256, back_0, count_0 = 0, front;
var Ljavaemul_internal_StringHashCache_2_classLit = createForClass('javaemul.internal', 'StringHashCache', 367, Ljava_lang_Object_2_classLit);
var Z_classLit = createForPrimitive('boolean', 'Z');
var B_classLit = createForPrimitive('byte', 'B');
var C_classLit = createForPrimitive('char', 'C');
var D_classLit = createForPrimitive('double', 'D');
var F_classLit = createForPrimitive('float', 'F');
var I_classLit = createForPrimitive('int', 'I');
var J_classLit = createForPrimitive('long', 'J');
var S_classLit = createForPrimitive('short', 'S');
var V_classLit = createForPrimitive('void', 'V');
var $entry = registerEntry_0();
var gwtOnLoad = gwtOnLoad = gwtOnLoad_0;
addInitFunctions(init_0);
setGwtProperty('permProps', [[['locale', 'default'], ['user.agent', 'safari']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=worklistproto-0.js

