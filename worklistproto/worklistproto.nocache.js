function worklistproto(){
  var $wnd_0 = window;
  var $doc_0 = document;
  sendStats('bootstrap', 'begin');
  function isHostedMode(){
    var query = $wnd_0.location.search;
    return query.indexOf('gwt.codesvr.worklistproto=') != -1 || query.indexOf('gwt.codesvr=') != -1;
  }

  function sendStats(evtGroupString, typeString){
    if ($wnd_0.__gwtStatsEvent) {
      $wnd_0.__gwtStatsEvent({moduleName:'worklistproto', sessionId:$wnd_0.__gwtStatsSessionId, subSystem:'startup', evtGroup:evtGroupString, millis:(new Date).getTime(), type:typeString});
    }
  }

  worklistproto.__sendStats = sendStats;
  worklistproto.__moduleName = 'worklistproto';
  worklistproto.__errFn = null;
  worklistproto.__moduleBase = 'DUMMY';
  worklistproto.__softPermutationId = 0;
  worklistproto.__computePropValue = null;
  worklistproto.__getPropMap = null;
  worklistproto.__installRunAsyncCode = function(){
  }
  ;
  worklistproto.__gwtStartLoadingFragment = function(){
    return null;
  }
  ;
  worklistproto.__gwt_isKnownPropertyValue = function(){
    return false;
  }
  ;
  worklistproto.__gwt_getMetaProperty = function(){
    return null;
  }
  ;
  var __propertyErrorFunction = null;
  var activeModules = $wnd_0.__gwt_activeModules = $wnd_0.__gwt_activeModules || {};
  activeModules['worklistproto'] = {moduleName:'worklistproto'};
  worklistproto.__moduleStartupDone = function(permProps){
    var oldBindings = activeModules['worklistproto'].bindings;
    activeModules['worklistproto'].bindings = function(){
      var props = oldBindings?oldBindings():{};
      var embeddedProps = permProps[worklistproto.__softPermutationId];
      for (var i = 0; i < embeddedProps.length; i++) {
        var pair = embeddedProps[i];
        props[pair[0]] = pair[1];
      }
      return props;
    }
    ;
  }
  ;
  var frameDoc;
  function getInstallLocationDoc(){
    setupInstallLocation();
    return frameDoc;
  }

  function setupInstallLocation(){
    if (frameDoc) {
      return;
    }
    var scriptFrame = $doc_0.createElement('iframe');
    scriptFrame.src = 'javascript:""';
    scriptFrame.id = 'worklistproto';
    scriptFrame.style.cssText = 'position:absolute; width:0; height:0; border:none; left: -1000px;' + ' top: -1000px;';
    scriptFrame.tabIndex = -1;
    $doc_0.body.appendChild(scriptFrame);
    frameDoc = scriptFrame.contentDocument;
    if (!frameDoc) {
      frameDoc = scriptFrame.contentWindow.document;
    }
    frameDoc.open();
    var doctype = document.compatMode == 'CSS1Compat'?'<!doctype html>':'';
    frameDoc.write(doctype + '<html><head><\/head><body><\/body><\/html>');
    frameDoc.close();
  }

  function installScript(filename){
    function setupWaitForBodyLoad(callback){
      function isBodyLoaded(){
        if (typeof $doc_0.readyState == 'undefined') {
          return typeof $doc_0.body != 'undefined' && $doc_0.body != null;
        }
        return /loaded|complete/.test($doc_0.readyState);
      }

      var bodyDone = isBodyLoaded();
      if (bodyDone) {
        callback();
        return;
      }
      function onBodyDone(){
        if (!bodyDone) {
          bodyDone = true;
          callback();
          if ($doc_0.removeEventListener) {
            $doc_0.removeEventListener('DOMContentLoaded', onBodyDone, false);
          }
          if (onBodyDoneTimerId) {
            clearInterval(onBodyDoneTimerId);
          }
        }
      }

      if ($doc_0.addEventListener) {
        $doc_0.addEventListener('DOMContentLoaded', onBodyDone, false);
      }
      var onBodyDoneTimerId = setInterval(function(){
        if (isBodyLoaded()) {
          onBodyDone();
        }
      }
      , 50);
    }

    function installCode(code_0){
      var doc = getInstallLocationDoc();
      var docbody = doc.body;
      var script = doc.createElement('script');
      script.language = 'javascript';
      script.src = code_0;
      if (worklistproto.__errFn) {
        script.onerror = function(){
          worklistproto.__errFn('worklistproto', new Error('Failed to load ' + code_0));
        }
        ;
      }
      docbody.appendChild(script);
      sendStats('moduleStartup', 'scriptTagAdded');
    }

    sendStats('moduleStartup', 'moduleRequested');
    setupWaitForBodyLoad(function(){
      installCode(filename);
    }
    );
  }

  worklistproto.__startLoadingFragment = function(fragmentFile){
    return computeUrlForResource(fragmentFile);
  }
  ;
  worklistproto.__installRunAsyncCode = function(code_0){
    var doc = getInstallLocationDoc();
    var docbody = doc.body;
    var script = doc.createElement('script');
    script.language = 'javascript';
    script.text = code_0;
    docbody.appendChild(script);
  }
  ;
  function processMetas(){
    var metaProps = {};
    var propertyErrorFunc;
    var onLoadErrorFunc;
    var metas = $doc_0.getElementsByTagName('meta');
    for (var i = 0, n = metas.length; i < n; ++i) {
      var meta = metas[i], name_1 = meta.getAttribute('name'), content_0;
      if (name_1) {
        name_1 = name_1.replace('worklistproto::', '');
        if (name_1.indexOf('::') >= 0) {
          continue;
        }
        if (name_1 == 'gwt:property') {
          content_0 = meta.getAttribute('content');
          if (content_0) {
            var value_1, eq = content_0.indexOf('=');
            if (eq >= 0) {
              name_1 = content_0.substring(0, eq);
              value_1 = content_0.substring(eq + 1);
            }
             else {
              name_1 = content_0;
              value_1 = '';
            }
            metaProps[name_1] = value_1;
          }
        }
         else if (name_1 == 'gwt:onPropertyErrorFn') {
          content_0 = meta.getAttribute('content');
          if (content_0) {
            try {
              propertyErrorFunc = eval(content_0);
            }
             catch (e) {
              alert('Bad handler "' + content_0 + '" for "gwt:onPropertyErrorFn"');
            }
          }
        }
         else if (name_1 == 'gwt:onLoadErrorFn') {
          content_0 = meta.getAttribute('content');
          if (content_0) {
            try {
              onLoadErrorFunc = eval(content_0);
            }
             catch (e) {
              alert('Bad handler "' + content_0 + '" for "gwt:onLoadErrorFn"');
            }
          }
        }
      }
    }
    __gwt_getMetaProperty = function(name_0){
      var value_0 = metaProps[name_0];
      return value_0 == null?null:value_0;
    }
    ;
    __propertyErrorFunction = propertyErrorFunc;
    worklistproto.__errFn = onLoadErrorFunc;
  }

  function computeScriptBase(){
    function getDirectoryOfFile(path){
      var hashIndex = path.lastIndexOf('#');
      if (hashIndex == -1) {
        hashIndex = path.length;
      }
      var queryIndex = path.indexOf('?');
      if (queryIndex == -1) {
        queryIndex = path.length;
      }
      var slashIndex = path.lastIndexOf('/', Math.min(queryIndex, hashIndex));
      return slashIndex >= 0?path.substring(0, slashIndex + 1):'';
    }

    function ensureAbsoluteUrl(url_0){
      if (url_0.match(/^\w+:\/\//)) {
      }
       else {
        var img = $doc_0.createElement('img');
        img.src = url_0 + 'clear.cache.gif';
        url_0 = getDirectoryOfFile(img.src);
      }
      return url_0;
    }

    function tryMetaTag(){
      var metaVal = __gwt_getMetaProperty('baseUrl');
      if (metaVal != null) {
        return metaVal;
      }
      return '';
    }

    function tryNocacheJsTag(){
      var scriptTags = $doc_0.getElementsByTagName('script');
      for (var i = 0; i < scriptTags.length; ++i) {
        if (scriptTags[i].src.indexOf('worklistproto.nocache.js') != -1) {
          return getDirectoryOfFile(scriptTags[i].src);
        }
      }
      return '';
    }

    function tryBaseTag(){
      var baseElements = $doc_0.getElementsByTagName('base');
      if (baseElements.length > 0) {
        return baseElements[baseElements.length - 1].href;
      }
      return '';
    }

    function isLocationOk(){
      var loc = $doc_0.location;
      return loc.href == loc.protocol + '//' + loc.host + loc.pathname + loc.search + loc.hash;
    }

    var tempBase = tryMetaTag();
    if (tempBase == '') {
      tempBase = tryNocacheJsTag();
    }
    if (tempBase == '') {
      tempBase = tryBaseTag();
    }
    if (tempBase == '' && isLocationOk()) {
      tempBase = getDirectoryOfFile($doc_0.location.href);
    }
    tempBase = ensureAbsoluteUrl(tempBase);
    return tempBase;
  }

  function computeUrlForResource(resource){
    if (resource.match(/^\//)) {
      return resource;
    }
    if (resource.match(/^[a-zA-Z]+:\/\//)) {
      return resource;
    }
    return worklistproto.__moduleBase + resource;
  }

  function getCompiledCodeFilename(){
    var answers = [];
    var softPermutationId = 0;
    function unflattenKeylistIntoAnswers(propValArray, value_0){
      var answer = answers;
      for (var i = 0, n = propValArray.length - 1; i < n; ++i) {
        answer = answer[propValArray[i]] || (answer[propValArray[i]] = []);
      }
      answer[propValArray[n]] = value_0;
    }

    var values = [];
    var providers = [];
    function computePropValue(propName){
      var value_0 = providers[propName](), allowedValuesMap = values[propName];
      if (value_0 in allowedValuesMap) {
        return value_0;
      }
      var allowedValuesList = [];
      for (var k in allowedValuesMap) {
        allowedValuesList[allowedValuesMap[k]] = k;
      }
      if (__propertyErrorFunction) {
        __propertyErrorFunction(propName, allowedValuesList, value_0);
      }
      throw null;
    }

    providers['mgwt.density'] = function(){
      if (!window.devicePixelRatio) {
        return 'mid';
      }
      if (window.devicePixelRatio > 1.5) {
        return 'xhigh';
      }
       else if (window.devicePixelRatio > 1) {
        return 'high';
      }
      return 'mid';
    }
    ;
    values['mgwt.density'] = {'high':0, 'mid':1, 'xhigh':2};
    providers['mgwt.formfactor'] = function(){
      var args = location.search;
      var start_0 = args.indexOf('formfactor');
      if (start_0 >= 0) {
        var value_0 = args.substring(start_0);
        var begin = value_0.indexOf('=') + 1;
        var end = value_0.indexOf('&');
        if (end == -1) {
          end = value_0.length;
        }
        return value_0.substring(begin, end);
      }
      var ua = navigator.userAgent.toLowerCase();
      if (ua.indexOf('iphone') != -1 || ua.indexOf('ipod') != -1) {
        return 'phone';
      }
       else if (ua.indexOf('ipad') != -1) {
        return 'tablet';
      }
       else if (ua.indexOf('android') != -1) {
        if (ua.indexOf('mobile') != -1) {
          return 'phone';
        }
         else {
          return 'tablet';
        }
      }
      return 'desktop';
    }
    ;
    values['mgwt.formfactor'] = {'desktop':0, 'phone':1, 'tablet':2};
    providers['phonegap.env'] = function(){
      {
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.indexOf('android') != -1 || (ua.indexOf('ipad') != -1 || (ua.indexOf('ipod') != -1 || (ua.indexOf('iphone') != -1 || ua.indexOf('blackberry') != -1)))) {
          var url_0 = document.location.href;
          if (url_0.indexOf('file://') === 0 || url_0.indexOf('local://') === 0) {
            return 'yes';
          }
        }
        return 'no';
      }
    }
    ;
    values['phonegap.env'] = {'no':0, 'yes':1};
    __gwt_isKnownPropertyValue = function(propName, propValue){
      return propValue in values[propName];
    }
    ;
    worklistproto.__getPropMap = function(){
      var result = {};
      for (var key in values) {
        if (values.hasOwnProperty(key)) {
          result[key] = computePropValue(key);
        }
      }
      return result;
    }
    ;
    worklistproto.__computePropValue = computePropValue;
    $wnd_0.__gwt_activeModules['worklistproto'].bindings = worklistproto.__getPropMap;
    sendStats('bootstrap', 'selectingPermutation');
    if (isHostedMode()) {
      return computeUrlForResource('worklistproto.devmode.js');
    }
    var strongName;
    try {
      unflattenKeylistIntoAnswers(['high', 'desktop', 'yes'], '4C9DF2F2A3ED9B5314101BA11E085A0F');
      unflattenKeylistIntoAnswers(['mid', 'desktop', 'yes'], '4C9DF2F2A3ED9B5314101BA11E085A0F');
      unflattenKeylistIntoAnswers(['xhigh', 'desktop', 'yes'], '4C9DF2F2A3ED9B5314101BA11E085A0F');
      unflattenKeylistIntoAnswers(['high', 'desktop', 'yes'], '4C9DF2F2A3ED9B5314101BA11E085A0F' + ':1');
      unflattenKeylistIntoAnswers(['mid', 'desktop', 'yes'], '4C9DF2F2A3ED9B5314101BA11E085A0F' + ':1');
      unflattenKeylistIntoAnswers(['xhigh', 'desktop', 'yes'], '4C9DF2F2A3ED9B5314101BA11E085A0F' + ':1');
      unflattenKeylistIntoAnswers(['high', 'desktop', 'yes'], '4C9DF2F2A3ED9B5314101BA11E085A0F' + ':2');
      unflattenKeylistIntoAnswers(['mid', 'desktop', 'yes'], '4C9DF2F2A3ED9B5314101BA11E085A0F' + ':2');
      unflattenKeylistIntoAnswers(['xhigh', 'desktop', 'yes'], '4C9DF2F2A3ED9B5314101BA11E085A0F' + ':2');
      unflattenKeylistIntoAnswers(['high', 'phone', 'no'], '9B6D883FA20327B07E47A8A5C0822632');
      unflattenKeylistIntoAnswers(['high', 'tablet', 'no'], '9B6D883FA20327B07E47A8A5C0822632');
      unflattenKeylistIntoAnswers(['mid', 'phone', 'no'], '9B6D883FA20327B07E47A8A5C0822632');
      unflattenKeylistIntoAnswers(['mid', 'tablet', 'no'], '9B6D883FA20327B07E47A8A5C0822632');
      unflattenKeylistIntoAnswers(['xhigh', 'phone', 'no'], '9B6D883FA20327B07E47A8A5C0822632');
      unflattenKeylistIntoAnswers(['xhigh', 'tablet', 'no'], '9B6D883FA20327B07E47A8A5C0822632');
      unflattenKeylistIntoAnswers(['high', 'phone', 'no'], '9B6D883FA20327B07E47A8A5C0822632' + ':1');
      unflattenKeylistIntoAnswers(['high', 'tablet', 'no'], '9B6D883FA20327B07E47A8A5C0822632' + ':1');
      unflattenKeylistIntoAnswers(['mid', 'phone', 'no'], '9B6D883FA20327B07E47A8A5C0822632' + ':1');
      unflattenKeylistIntoAnswers(['mid', 'tablet', 'no'], '9B6D883FA20327B07E47A8A5C0822632' + ':1');
      unflattenKeylistIntoAnswers(['xhigh', 'phone', 'no'], '9B6D883FA20327B07E47A8A5C0822632' + ':1');
      unflattenKeylistIntoAnswers(['xhigh', 'tablet', 'no'], '9B6D883FA20327B07E47A8A5C0822632' + ':1');
      unflattenKeylistIntoAnswers(['high', 'phone', 'no'], '9B6D883FA20327B07E47A8A5C0822632' + ':2');
      unflattenKeylistIntoAnswers(['high', 'tablet', 'no'], '9B6D883FA20327B07E47A8A5C0822632' + ':2');
      unflattenKeylistIntoAnswers(['mid', 'phone', 'no'], '9B6D883FA20327B07E47A8A5C0822632' + ':2');
      unflattenKeylistIntoAnswers(['mid', 'tablet', 'no'], '9B6D883FA20327B07E47A8A5C0822632' + ':2');
      unflattenKeylistIntoAnswers(['xhigh', 'phone', 'no'], '9B6D883FA20327B07E47A8A5C0822632' + ':2');
      unflattenKeylistIntoAnswers(['xhigh', 'tablet', 'no'], '9B6D883FA20327B07E47A8A5C0822632' + ':2');
      unflattenKeylistIntoAnswers(['high', 'phone', 'no'], '9B6D883FA20327B07E47A8A5C0822632' + ':3');
      unflattenKeylistIntoAnswers(['high', 'tablet', 'no'], '9B6D883FA20327B07E47A8A5C0822632' + ':3');
      unflattenKeylistIntoAnswers(['mid', 'phone', 'no'], '9B6D883FA20327B07E47A8A5C0822632' + ':3');
      unflattenKeylistIntoAnswers(['mid', 'tablet', 'no'], '9B6D883FA20327B07E47A8A5C0822632' + ':3');
      unflattenKeylistIntoAnswers(['xhigh', 'phone', 'no'], '9B6D883FA20327B07E47A8A5C0822632' + ':3');
      unflattenKeylistIntoAnswers(['xhigh', 'tablet', 'no'], '9B6D883FA20327B07E47A8A5C0822632' + ':3');
      unflattenKeylistIntoAnswers(['high', 'phone', 'no'], '9B6D883FA20327B07E47A8A5C0822632' + ':4');
      unflattenKeylistIntoAnswers(['high', 'tablet', 'no'], '9B6D883FA20327B07E47A8A5C0822632' + ':4');
      unflattenKeylistIntoAnswers(['mid', 'phone', 'no'], '9B6D883FA20327B07E47A8A5C0822632' + ':4');
      unflattenKeylistIntoAnswers(['mid', 'tablet', 'no'], '9B6D883FA20327B07E47A8A5C0822632' + ':4');
      unflattenKeylistIntoAnswers(['xhigh', 'phone', 'no'], '9B6D883FA20327B07E47A8A5C0822632' + ':4');
      unflattenKeylistIntoAnswers(['xhigh', 'tablet', 'no'], '9B6D883FA20327B07E47A8A5C0822632' + ':4');
      unflattenKeylistIntoAnswers(['high', 'phone', 'no'], '9B6D883FA20327B07E47A8A5C0822632' + ':5');
      unflattenKeylistIntoAnswers(['high', 'tablet', 'no'], '9B6D883FA20327B07E47A8A5C0822632' + ':5');
      unflattenKeylistIntoAnswers(['mid', 'phone', 'no'], '9B6D883FA20327B07E47A8A5C0822632' + ':5');
      unflattenKeylistIntoAnswers(['mid', 'tablet', 'no'], '9B6D883FA20327B07E47A8A5C0822632' + ':5');
      unflattenKeylistIntoAnswers(['xhigh', 'phone', 'no'], '9B6D883FA20327B07E47A8A5C0822632' + ':5');
      unflattenKeylistIntoAnswers(['xhigh', 'tablet', 'no'], '9B6D883FA20327B07E47A8A5C0822632' + ':5');
      unflattenKeylistIntoAnswers(['high', 'phone', 'yes'], 'B5F0EC1DF09AB5EE2959E44247AB506F');
      unflattenKeylistIntoAnswers(['high', 'tablet', 'yes'], 'B5F0EC1DF09AB5EE2959E44247AB506F');
      unflattenKeylistIntoAnswers(['mid', 'phone', 'yes'], 'B5F0EC1DF09AB5EE2959E44247AB506F');
      unflattenKeylistIntoAnswers(['mid', 'tablet', 'yes'], 'B5F0EC1DF09AB5EE2959E44247AB506F');
      unflattenKeylistIntoAnswers(['xhigh', 'phone', 'yes'], 'B5F0EC1DF09AB5EE2959E44247AB506F');
      unflattenKeylistIntoAnswers(['xhigh', 'tablet', 'yes'], 'B5F0EC1DF09AB5EE2959E44247AB506F');
      unflattenKeylistIntoAnswers(['high', 'phone', 'yes'], 'B5F0EC1DF09AB5EE2959E44247AB506F' + ':1');
      unflattenKeylistIntoAnswers(['high', 'tablet', 'yes'], 'B5F0EC1DF09AB5EE2959E44247AB506F' + ':1');
      unflattenKeylistIntoAnswers(['mid', 'phone', 'yes'], 'B5F0EC1DF09AB5EE2959E44247AB506F' + ':1');
      unflattenKeylistIntoAnswers(['mid', 'tablet', 'yes'], 'B5F0EC1DF09AB5EE2959E44247AB506F' + ':1');
      unflattenKeylistIntoAnswers(['xhigh', 'phone', 'yes'], 'B5F0EC1DF09AB5EE2959E44247AB506F' + ':1');
      unflattenKeylistIntoAnswers(['xhigh', 'tablet', 'yes'], 'B5F0EC1DF09AB5EE2959E44247AB506F' + ':1');
      unflattenKeylistIntoAnswers(['high', 'phone', 'yes'], 'B5F0EC1DF09AB5EE2959E44247AB506F' + ':2');
      unflattenKeylistIntoAnswers(['high', 'tablet', 'yes'], 'B5F0EC1DF09AB5EE2959E44247AB506F' + ':2');
      unflattenKeylistIntoAnswers(['mid', 'phone', 'yes'], 'B5F0EC1DF09AB5EE2959E44247AB506F' + ':2');
      unflattenKeylistIntoAnswers(['mid', 'tablet', 'yes'], 'B5F0EC1DF09AB5EE2959E44247AB506F' + ':2');
      unflattenKeylistIntoAnswers(['xhigh', 'phone', 'yes'], 'B5F0EC1DF09AB5EE2959E44247AB506F' + ':2');
      unflattenKeylistIntoAnswers(['xhigh', 'tablet', 'yes'], 'B5F0EC1DF09AB5EE2959E44247AB506F' + ':2');
      unflattenKeylistIntoAnswers(['high', 'phone', 'yes'], 'B5F0EC1DF09AB5EE2959E44247AB506F' + ':3');
      unflattenKeylistIntoAnswers(['high', 'tablet', 'yes'], 'B5F0EC1DF09AB5EE2959E44247AB506F' + ':3');
      unflattenKeylistIntoAnswers(['mid', 'phone', 'yes'], 'B5F0EC1DF09AB5EE2959E44247AB506F' + ':3');
      unflattenKeylistIntoAnswers(['mid', 'tablet', 'yes'], 'B5F0EC1DF09AB5EE2959E44247AB506F' + ':3');
      unflattenKeylistIntoAnswers(['xhigh', 'phone', 'yes'], 'B5F0EC1DF09AB5EE2959E44247AB506F' + ':3');
      unflattenKeylistIntoAnswers(['xhigh', 'tablet', 'yes'], 'B5F0EC1DF09AB5EE2959E44247AB506F' + ':3');
      unflattenKeylistIntoAnswers(['high', 'phone', 'yes'], 'B5F0EC1DF09AB5EE2959E44247AB506F' + ':4');
      unflattenKeylistIntoAnswers(['high', 'tablet', 'yes'], 'B5F0EC1DF09AB5EE2959E44247AB506F' + ':4');
      unflattenKeylistIntoAnswers(['mid', 'phone', 'yes'], 'B5F0EC1DF09AB5EE2959E44247AB506F' + ':4');
      unflattenKeylistIntoAnswers(['mid', 'tablet', 'yes'], 'B5F0EC1DF09AB5EE2959E44247AB506F' + ':4');
      unflattenKeylistIntoAnswers(['xhigh', 'phone', 'yes'], 'B5F0EC1DF09AB5EE2959E44247AB506F' + ':4');
      unflattenKeylistIntoAnswers(['xhigh', 'tablet', 'yes'], 'B5F0EC1DF09AB5EE2959E44247AB506F' + ':4');
      unflattenKeylistIntoAnswers(['high', 'phone', 'yes'], 'B5F0EC1DF09AB5EE2959E44247AB506F' + ':5');
      unflattenKeylistIntoAnswers(['high', 'tablet', 'yes'], 'B5F0EC1DF09AB5EE2959E44247AB506F' + ':5');
      unflattenKeylistIntoAnswers(['mid', 'phone', 'yes'], 'B5F0EC1DF09AB5EE2959E44247AB506F' + ':5');
      unflattenKeylistIntoAnswers(['mid', 'tablet', 'yes'], 'B5F0EC1DF09AB5EE2959E44247AB506F' + ':5');
      unflattenKeylistIntoAnswers(['xhigh', 'phone', 'yes'], 'B5F0EC1DF09AB5EE2959E44247AB506F' + ':5');
      unflattenKeylistIntoAnswers(['xhigh', 'tablet', 'yes'], 'B5F0EC1DF09AB5EE2959E44247AB506F' + ':5');
      unflattenKeylistIntoAnswers(['high', 'desktop', 'no'], 'E4F1BC8E37269D8211D2C4A1E80BEF45');
      unflattenKeylistIntoAnswers(['mid', 'desktop', 'no'], 'E4F1BC8E37269D8211D2C4A1E80BEF45');
      unflattenKeylistIntoAnswers(['xhigh', 'desktop', 'no'], 'E4F1BC8E37269D8211D2C4A1E80BEF45');
      unflattenKeylistIntoAnswers(['high', 'desktop', 'no'], 'E4F1BC8E37269D8211D2C4A1E80BEF45' + ':1');
      unflattenKeylistIntoAnswers(['mid', 'desktop', 'no'], 'E4F1BC8E37269D8211D2C4A1E80BEF45' + ':1');
      unflattenKeylistIntoAnswers(['xhigh', 'desktop', 'no'], 'E4F1BC8E37269D8211D2C4A1E80BEF45' + ':1');
      unflattenKeylistIntoAnswers(['high', 'desktop', 'no'], 'E4F1BC8E37269D8211D2C4A1E80BEF45' + ':2');
      unflattenKeylistIntoAnswers(['mid', 'desktop', 'no'], 'E4F1BC8E37269D8211D2C4A1E80BEF45' + ':2');
      unflattenKeylistIntoAnswers(['xhigh', 'desktop', 'no'], 'E4F1BC8E37269D8211D2C4A1E80BEF45' + ':2');
      strongName = answers[computePropValue('mgwt.density')][computePropValue('mgwt.formfactor')][computePropValue('phonegap.env')];
      var idx = strongName.indexOf(':');
      if (idx != -1) {
        softPermutationId = parseInt(strongName.substring(idx + 1), 10);
        strongName = strongName.substring(0, idx);
      }
    }
     catch (e) {
    }
    worklistproto.__softPermutationId = softPermutationId;
    return computeUrlForResource(strongName + '.cache.js');
  }

  function loadExternalStylesheets(){
    if (!$wnd_0.__gwt_stylesLoaded) {
      $wnd_0.__gwt_stylesLoaded = {};
    }
    sendStats('loadExternalRefs', 'begin');
    sendStats('loadExternalRefs', 'end');
  }

  processMetas();
  worklistproto.__moduleBase = computeScriptBase();
  activeModules['worklistproto'].moduleBase = worklistproto.__moduleBase;
  var filename_0 = getCompiledCodeFilename();
  if ($wnd_0) {
    var devModePermitted = !!($wnd_0.location.protocol == 'http:' || $wnd_0.location.protocol == 'file:');
    $wnd_0.__gwt_activeModules['worklistproto'].canRedirect = devModePermitted;
    function supportsSessionStorage(){
      var key = '_gwt_dummy_';
      try {
        $wnd_0.sessionStorage.setItem(key, key);
        $wnd_0.sessionStorage.removeItem(key);
        return true;
      }
       catch (e) {
        return false;
      }
    }

    if (devModePermitted && supportsSessionStorage()) {
      var devModeKey = '__gwtDevModeHook:worklistproto';
      var devModeUrl = $wnd_0.sessionStorage[devModeKey];
      if (!/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/.*$/.test(devModeUrl)) {
        if (devModeUrl && (window.console && console.log)) {
          console.log('Ignoring non-whitelisted Dev Mode URL: ' + devModeUrl);
        }
        devModeUrl = '';
      }
      if (devModeUrl && !$wnd_0[devModeKey]) {
        $wnd_0[devModeKey] = true;
        $wnd_0[devModeKey + ':moduleBase'] = computeScriptBase();
        var devModeScript = $doc_0.createElement('script');
        devModeScript.src = devModeUrl;
        var head = $doc_0.getElementsByTagName('head')[0];
        head.insertBefore(devModeScript, head.firstElementChild || head.children[0]);
        return false;
      }
    }
  }
  loadExternalStylesheets();
  sendStats('bootstrap', 'end');
  installScript(filename_0);
  return true;
}

worklistproto.succeeded = worklistproto();