function validation() {
    $.fn.form.settings.rules.exposureSpot = function() {
        var layoutDataSizeX = parseFloat($('#layoutDataSizeX').val());
        var layoutDataSizeY = parseFloat($('#layoutDataSizeY').val());
        var scribeLineWidthX = parseFloat($('#scribeLineWidthX').val());
        var scribeLineWidthY = parseFloat($('#scribeLineWidthY').val());
        var diameter = Math.sqrt(Math.pow(layoutDataSizeX + scribeLineWidthX,2) + Math.pow(layoutDataSizeY + scribeLineWidthY,2));
        var maxDiameter = parseFloat($('#maxExposureDiameter').val());
        return diameter <= maxDiameter;
    };
    $('.ui.form')
        .form({
            layoutDataSizeX: {
                identifier  : 'layoutDataSizeX',
                rules: [
                    {
                        type   : 'float[100.0;;22000.0]',
                        prompt : 'The value must be between 100 and 22000'
                    },
                    {
                        type   : 'exposureSpot',
                        prompt : 'Reticle field diameter too large'
                    }
                ]
            },
            layoutDataSizeY: {
                identifier  : 'layoutDataSizeY',
                rules: [
                    {
                        type   : 'float[100;;26000.0]',
                        prompt : 'The value must be between 100 and 26000'
                    },
                    {
                        type   : 'exposureSpot',
                        prompt : 'Reticle field diameter too large'
                    }
                ]
            },
            scribeLineWidthX: {
                identifier  : 'scribeLineWidthX',
                rules: [
                    {
                        type   : 'integer[0..1000]',
                        prompt : 'The value must be between 0 and 1000'
                    }
                ]
            },
            scribeLineWidthY: {
                identifier  : 'scribeLineWidthY',
                rules: [
                    {
                        type   : 'integer[0..1000]',
                        prompt : 'The value must be between 0 and 1000'
                    }
                ]
            },
            maximumRetSizeX: {
                identifier  : 'maximumRetSizeX',
                rules: [
                    {
                        type   : 'integer[10000..50000]',
                        prompt : 'The value must be between 10000 and 50000'
                    }
                ]
            },
            maximumRetSizeY: {
                identifier  : 'maximumRetSizeY',
                rules: [
                    {
                        type   : 'integer[10000..50000]',
                        prompt : 'The value must be between 10000 and 50000'
                    }
                ]
            },
            maxExposureDiameter: {
                identifier  : 'maxExposureDiameter',
                rules: [
                    {
                        type   : 'integer[10000..50000]',
                        prompt : 'The value must be between 10000 and 50000'
                    }
                ]
            },
            waferSize: {
                identifier  : 'waferSize',
                rules: [
                    {
                        type   : 'regExp[/^(100|200|300)$/]',
                        prompt : 'The value must be 100, 200 or 300'
                    }
                ]
            },
            offZone: {
                identifier  : 'offZone',
                rules: [
                    {
                        type   : 'integer[0..10]',
                        prompt : 'The value must be between 0 and 10'
                    }
                ]
            },
            laserMarkExclusionHeight: {
                identifier  : 'laserMarkExclusionHeight',
                rules: [
                    {
                        type   : 'integer[0..10]',
                        prompt : 'The value must be between 0 and 10'
                    }
                ]
            },

            defectDensity: {
                identifier  : 'defectDensity',
                rules: [
                    {
                        type   : 'float[0.0;;10.0]',
                        prompt : 'The value must be between 0 and 10'
                    }
                ]
            },

            optIncWidth: {
                identifier  : 'optIncWidth',
                rules: [
                    {
                        type   : 'integer[1..100]',
                        prompt : 'The value must be between 1 and 100'
                    }
                ]
            },

        },{ inline : true,on: 'blur',onSuccess: function() {
            startProcessing()
            return false;
        }
       })


    ;
}
