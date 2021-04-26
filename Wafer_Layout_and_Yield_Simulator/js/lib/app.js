var configInput,configOutput,configTechnology;
var firstStart = true;

function removeLabelForIE9(orCondition) {
    // ie < 10 doesn't support flex model of semantic ui

    if ((bowser.msie && bowser.version <= 9) || orCondition) {

        $('.ui.label').ensure().each(function(index) {
            var inputMainLabel = $(this).parent().parent().children().first();
            inputMainLabel.append(" (" + $(this).html() + ")");
            $(this).detach();
        });

    }
}

function makeInputsReadonly() {
    $("div[data-tab='input'] input").each(function(index,value) {
        $(this).attr("readonly",true)
    });
}

$.fn.ensure = function() {
    if (this.length === 0) throw "Empty jQuery result for" + this.selector;
    return this;
}

function getProcessingInstance() {
    return Processing.getInstanceById('canvas');
}


$('body').keydown(function() {
    if($('input:focus').length == 0)
        $('#canvas').focus();
});

$('#zoomIn').ensure().click(function() {
    processingInstance = getProcessingInstance();
    processingInstance.zoomIn();
});

$('#zoomOut').ensure().click(function() {
    processingInstance = getProcessingInstance();
    processingInstance.zoomOut();
});

$('#resetTransformation').ensure().click(function() {
    processingInstance = getProcessingInstance();
    processingInstance.resetZoom();
});


$.fn.form.settings.rules.float = function(value, range) {
    var
        intRegExp = /^(\-?\d+\.\d+)|\-?\d+$/,
        _min,
        _max
        ;
    var _min, _max;
    if (range === undefined || range == '' || range == ';;') {
    } else if (range.indexOf(';;') == -1) {
        if (intRegExp.test(range)) {
            _min = _max = range - 0;
        }
    } else {
        var r = range.split(';;', 2);

        if (intRegExp.test(r[0])) {
            _min = parseFloat(r[0]);
        }
        if (intRegExp.test(r[1])) {
            _max = parseFloat(r[1]);
        }
    }
    return (
        intRegExp.test(value) &&
        (_min === undefined || value >= _min) &&
        (_max === undefined || value <= _max)
    );
};

function init() {

    initFormFields("optimizationWarning",configInput,true);
    initFormFields("csvDownload",configOutput,false);

    $('.ui.radio.checkbox').ensure().checkbox();
    $('.menu .item').ensure().tab();

    removeLabelForIE9(false);

    $('#optIncWidth').ensure().keydown(function() {
        if(!$('#optimizationWarning').is(":visible"))
            $('#optimizationWarning').transition({"animation":"fade in",duration   : '2s'});
    });

    $('.dropdown').ensure()
        .dropdown({
            action: 'activate',
            onChange: function(value, theText, $selectedItem) {
             initTechnology(theText);
            }
        })

    validation();
    initTechnology(Object.keys(configTechnology)[0]);
}


$( document ).ready(function() {
    $.when($.getJSON( "js/input-config.json"),$.getJSON( "js/output-config.json")).then(function(inputJson,outputJson) {
        configInput = inputJson[0];
        configOutput = outputJson[0];
        init();
		document.getElementById("submit").click();
    });
});

function initTechnology(theText) {
var index = 0;
                for(var theKey in configTechnology) {
                    fields = configTechnology[theKey];
                    if(theText.indexOf(theKey)!= -1) {
                        for(var fieldKey in fields) {
                            $('#'+fieldKey).val(fields[fieldKey]);
                        }
                    }

                }


}
function createElement(configElement, id, isInput) {
    var classes = "";
    var extra = "disabled";
    if(!isInput)
        extra = "readonly";
    if(window.location.hash == '#e' && isInput)
        extra = "";     

    var newEl;
    if(configElement.required == "true" && isInput) {
        classes = "required";
       extra = '';
 }

    if(configElement.type == "integer" && isInput)
        extra += ' onkeypress="return isNumberKey(event)"';

    if(configElement.type == "integer" || configElement.type == "float") {

        newEl = $('<div class="field"> \
                    <label class="' + classes + '">' + configElement.text + '</label> \
                    <div class="ui right labeled input"> \
                        <input id="' + id + '" name="' + id + '" type="number" ' +
                        'value = "'+ configElement.value + '" step = "'+ configElement.step + '" ' + extra + '> \
                        <div class="ui label">' + configElement.unit + '</div> \
                    </div> \
                    </div>');
        if(isInput) {
            $('#' + id).attr("value", configElement.value).attr("step", configElement.step);
        }


    } else if(configElement.type == "string") {
        extra += ' placeholder = "' + configElement.placeholder + '"'
        newEl = $('<div class="field"> \
                    <label class="' + classes + '">' + configElement.text + '</label> \
                    <div class="ui input"> \
                        <input id="' + id + '" name="' + id + '" type="text" ' + extra + '> \
                    </div> \
                    </div>');
    } else if(configElement.type == "radio") {
        newEl = $('<div class="grouped inline fields" id="' + id + '"> \
                        <label>Yield model</label> \
                    </div>');
        var index = 0;
        for(var radioKey in configElement.values) {
            extraRadio = "";
            if(index == configElement.defaultIndex)
                extraRadio = 'checked="checked"';

            var newElChild = $('<div class="field"> \
                                    <div class="ui radio checkbox"> \
                                        <input type="radio" name="yieldModel" value="'+ index +'" '+ extraRadio +'> \
                                        <label>' + configElement.values[radioKey] +'</label> \
                                    </div> \
                                </div>');

            newEl.append(newElChild);
            index++;
        }
    } else if(configElement.type == "checkbox") {

        $.ajaxSetup({async: false});
        $.when($.getJSON( "js/" + configElement.config)).then(function(json) {
            configTechnology = json;
            dropdownID = id + 'Values';
            newEl = $('<div class="field">\
                            <label class="required">' + configElement.text + '</label>\
                            <div class="ui selection dropdown">\
                                <div class="default text">' + configElement.default + ' ' + configElement.unit + '</div> \
                                <i class="dropdown icon"></i> \
                                <div class="menu" id="' + dropdownID +'"></div> \
                            </div>  \
                       </div>');

            for(key in json) {
                var item = $('<div class="item" data-value="' +key +'">' + key + ' ' + configElement.unit + '</div>');
                newEl.find('#'+dropdownID).append(item);
            }

        });
        $.ajaxSetup({async: true});

    } else if(configElement.type == "hidden") {
        newEl = $('<input type="hidden" id="'+ id +'" value="' + configElement.value + '" />')

    } else {
        console.log("unknown type:" + configElement.type);
    }
    return newEl;
}

function initFormFields(insertBeforeID,configVar,isInput) {
    for(var key in configVar) {
        e = configVar[key]
        if(e.elements) {
            twoFields = $('<div class="two fields" id="' + key +'"></div>')
            for(var elementKey in e.elements) {
                twoFields.append(createElement(e.elements[elementKey],elementKey,isInput));
            }
            twoFields.insertBefore("#" + insertBeforeID);
        } else {
            var el = createElement(e,key,isInput);
            el.insertBefore("#" + insertBeforeID);
        }
    }
}


function initTechnologyDropdown() {
    index = 0
    $.each(configInput.technologyToScribeLine, function (i, val) {
        $('#technologyValues').ensure().append('<div class="item" data-value="' + i +'">' + i +' µm</div>')
        index++;
    });
}

function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}


function startProcessing() {
    $('#outputTab').ensure().addClass("active");
    $('#inputTab').ensure().removeClass("active");
    $('#loadingDimmer').removeClass("notvisible");
    $.tab('change tab', 'output');
    showLoading();
    setTimeout(drawResult,1000);
}

function drawResult() {
    //makeInputsReadonly();
    if(firstStart) {
        initSketch();
        firstStart = false;
    } else {
        processingInstance = getProcessingInstance();
        processingInstance.setup();
    }
}

function showLoading() {
    $('#loadingSegment').ensure().show();
    $('#canvas').hide();
}

function hideLoading() {
    $('#canvas').show();
    $('#loadingSegment').ensure().hide();
}

function initSketch() {
    var canvasRef = document.createElement('canvas');
    canvasRef.setAttribute("id","canvas")
    var p = Processing.loadSketchFromSources(canvasRef, ['wafer.txt']);
    $('#canvas_part ').ensure().append(canvasRef);
    $('#canvas').ensure().focus();

}
