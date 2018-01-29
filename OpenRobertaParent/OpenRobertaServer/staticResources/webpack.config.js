const path = require('path'),
    webpack = require('webpack'),
    basePath = path.resolve(__dirname, 'js') + '/';

module.exports = function(env) {
    return {
        target: 'web',
        plugins: [],
        entry: basePath + 'main.js',
        output: {
            filename: 'roberta.min.js',
            path: basePath,
            publicPath: '/js/'
        },
        module: {
            rules:[
                {
                    test: require.resolve('volume-meter'),
                    use: [
                        {
                            loader: 'exports-loader',
                            options: 'Volume'
                        }
                    ]
                },
                {
                    test: /^(?:jquery.+|bootstrap)/,
                    use: [
                        {
                            loader: 'imports-loader',
                            options: 'jQuery=jquery'
                        }
                    ]
                },
                {
                    test: /^block(s(?:-msg)?|ly)/,
                    use: [
                        {
                            loader: 'imports-loader',
                            options: 'Blockly=blockly&goog=blockly'
                        }
                    ]
                },
                {
                    test: /^block.+$/,
                    use: [
                        {
                            loader: 'expose-loader',
                            options: 'Blockly'
                        },
                        {
                            loader: 'expose-loader',
                            options: 'goog'
                        }
                    ]
                }
            ]
        },
        resolve: {
            modules: [basePath],
            alias: {
                'blockly' : (basePath + '../blockly/blockly_compressed'),
                'blocks' : (basePath + '../blockly/blocks_compressed'),
                'blocks-msg' : (basePath + '../blockly/msg/js/en'),
                'bootstrap' : (basePath + 'libs/bootstrap/bootstrap-3.3.1-dist/dist/js/bootstrap.min'),
                'bootstrap-table' : (basePath + 'libs/bootstrap/bootstrap-3.3.1-dist/dist/js/bootstrap-table.min'),
                'bootstrap-tagsinput' : (basePath + 'libs/bootstrap/bootstrap-3.3.1-dist/dist/js/bootstrap-tagsinput.min'),
                'bootstrap.wysiwyg' : (basePath + 'libs/bootstrap/bootstrap-3.3.1-dist/dist/js/bootstrap-wysiwyg.min'),
                'datatables' : (basePath + 'libs/jquery/jquery.dataTables.min'),
                'enjoyHint' : (basePath + 'libs/enjoyHint/enjoyhint'),
                'jquery' : (basePath + 'libs/jquery/jquery-2.1.4.min'),
                'jquery-cookie' : (basePath + 'libs/jquery/jquery.cookie'),
                'jquery-scrollto' : (basePath + 'libs/jquery/jquery.scrollTo.min'),
                'jquery-validate' : (basePath + 'libs/jquery/jquery.validate.min'),
                'jquery-hotkeys' : (basePath + 'libs/jquery/jquery.hotkeys'),
                'slick' : (basePath + 'libs/slick-1.7.1/slick.min'),
                'prettify' : (basePath + 'libs/code-prettify/prettify'),
                'socket.io' : (basePath + 'libs/socket.io/socket.io'),
                'volume-meter' : (basePath + 'libs/sound/volume-meter'),

                'confDelete.controller' : (basePath + 'app/roberta/controller/confDelete.controller'),
                'configuration.controller' : (basePath + 'app/roberta/controller/configuration.controller'),
                'configuration.model' : (basePath + 'app/roberta/models/configuration.model'),
                'confList.controller' : (basePath + 'app/roberta/controller/confList.controller'),
                'confList.model' : (basePath + 'app/roberta/models/confList.model'),
                'cookieDisclaimer.controller' : (basePath + 'app/roberta/controller/cookieDisclaimer.controller'),
                'galleryList.controller' : (basePath + 'app/roberta/controller/galleryList.controller'),
                'guiState.controller' : (basePath + 'app/roberta/controller/guiState.controller'),
                'guiState.model' : (basePath + 'app/roberta/models/guiState.model'),
                'language.controller' : (basePath + 'app/roberta/controller/language.controller'),
                'logList.controller' : (basePath + 'app/roberta/controller/logList.controller'),
                'logList.model' : (basePath + 'app/roberta/models/logList.model'),
                'menu.controller' : (basePath + 'app/roberta/controller/menu.controller'),
                'progCode.controller' : (basePath + 'app/roberta/controller/progCode.controller'),
                'progDelete.controller' : (basePath + 'app/roberta/controller/progDelete.controller'),
                'progHelp.controller' : (basePath + 'app/roberta/controller/progHelp.controller'),
                'progInfo.controller' : (basePath + 'app/roberta/controller/progInfo.controller'),
                'progRun.controller' : (basePath + 'app/roberta/controller/progRun.controller'),
                'progList.controller' : (basePath + 'app/roberta/controller/progList.controller'),
                'progList.model' : (basePath + 'app/roberta/models/progList.model'),
                'program.controller' : (basePath + 'app/roberta/controller/program.controller'),
                'program.model' : (basePath + 'app/roberta/models/program.model'),
                'progShare.controller' : (basePath + 'app/roberta/controller/progShare.controller'),
                'progSim.controller' : (basePath + 'app/roberta/controller/progSim.controller'),
                'robot.controller' : (basePath + 'app/roberta/controller/robot.controller'),
                'robot.model' : (basePath + 'app/roberta/models/robot.model'),
                'tour.controller' : (basePath + 'app/roberta/controller/tour.controller'),
                'user.controller' : (basePath + 'app/roberta/controller/user.controller'),
                'user.model' : (basePath + 'app/roberta/models/user.model'),
                'rest.robot' : (basePath + 'app/roberta/rest/robot'),
                'socket.controller' : (basePath + 'app/roberta/controller/socket.controller'),

                'simulation.constants' : (basePath + 'app/simulation/simulationLogic/constants'),
                'simulation.math' : (basePath + 'app/simulation/simulationLogic/math'),
                'simulation.program.builder' : (basePath + 'app/simulation/robertaLogic/program.builder'),
                'simulation.program.eval' : (basePath + 'app/simulation/robertaLogic/program.eval'),
                'simulation.robot' : (basePath + 'app/simulation/simulationLogic/robot'),
                'simulation.robot.draw' : (basePath + 'app/simulation/simulationLogic/robot.draw'),
                'simulation.robot.mbed' : (basePath + 'app/simulation/simulationLogic/robot.mbed'),
                'simulation.robot.calliope' : (basePath + 'app/simulation/simulationLogic/robot.calliope'),
                'simulation.robot.calliope2016' : (basePath + 'app/simulation/simulationLogic/robot.calliope2016'),
                'simulation.robot.calliope2017' : (basePath + 'app/simulation/simulationLogic/robot.calliope2017'),
                'simulation.robot.microbit' : (basePath + 'app/simulation/simulationLogic/robot.microbit'),
                'simulation.robot.math' : (basePath + 'app/simulation/simulationLogic/robot.math'),
                'simulation.robot.rescue' : (basePath + 'app/simulation/simulationLogic/robot.rescue'),
                'simulation.robot.roberta' : (basePath + 'app/simulation/simulationLogic/robot.roberta'),
                'simulation.robot.simple' : (basePath + 'app/simulation/simulationLogic/robot.simple'),
                'simulation.robot.ev3' : (basePath + 'app/simulation/simulationLogic/robot.ev3'),
                'simulation.robot.nxt' : (basePath + 'app/simulation/simulationLogic/robot.nxt'),
                'simulation.scene' : (basePath + 'app/simulation/simulationLogic/scene'),
                'simulation.simulation' : (basePath + 'app/simulation/simulationLogic/simulation'),

                'comm' : (basePath + 'helper/comm'),
                'log' : (basePath + 'helper/log'),
                'message' : (basePath + 'helper/msg'),
                'util' : (basePath + 'helper/util'),
                'wrap' : (basePath + 'helper/wrap'),

                'robertaLogic.actors' : (basePath + 'app/simulation/robertaLogic/actors'),
                'robertaLogic.constants' : (basePath + 'app/simulation/robertaLogic/constants'),
                'robertaLogic.memory' : (basePath + 'app/simulation/robertaLogic/memory'),
                'robertaLogic.motor' : (basePath + 'app/simulation/robertaLogic/motor'),
                'robertaLogic.program' : (basePath + 'app/simulation/robertaLogic/program'),
                'robertaLogic.timer' : (basePath + 'app/simulation/robertaLogic/timer'),
                'robertaLogic.gyro' : (basePath + 'app/simulation/robertaLogic/gyro')
            }
        }
    };
};