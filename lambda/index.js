/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');

const DOCUMENT_ID_PRESENTACION = "presentacionapl";
const DOCUMENT_ID_DESCRIPCION = "descripcionapl";
const DOCUMENT_ID_LUGARES = "lugaresapl";
const DOCUMENT_ID_COMIDA = "comidaapl";
const DOCUMENT_ID_TRAJE = "trajeapl";
const DOCUMENT_ID_PERSONAJE = "personajesapl";
const DOCUMENT_ID_MUSICA = "musicaapl";
const DOCUMENT_ID_ADIOS = "adioapl";
const DOCUMENT_ID_AYUDA = "ayudaapl";
const DOCUMENT_ID_ERROR = "errorapl";

const datasourcepresentacion = {
    "headlineTemplateData": {
        "type": "object",
        "objectId": "headlineSample",
        "properties": {
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://www.hola.com/imagenes/viajes/2017021391601/48-horas-barcelona/0-423-81/Mirador-de-Colon-Barcelona-a.jpg",
                        "size": "large"
                    }
                ]
            },
            "textContent": {
                "primaryText": {
                    "type": "PlainText",
                    "text": "Bienvenido a Barcelona la ciudad de las mil maravillas"
                }
            },
            "logoUrl": "",
            "hintText": "Alumno: Abelardo Hernandez Hernandez"
        }
    }
};

const datasourcedescripcion = {
    "videoPlayerTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://www.theconica.com/assets/cache/uploads/entorno/570x373/park-guell-barcelona.jpg",
            "displayFullscreen": false,
            "headerTitle": "ciudad Barcelona",
            "headerSubtitle": "",
            "logoUrl": "",
            "videoControlType": "skip",
            "videoSources": [
                "https://www.dropbox.com/scl/fi/yep2ukv5nsejfkvrsw9g3/video3.mp4?rlkey=sq650kkh8jzmh0prhzsd4kylv&st=l7ga43yy&dl=1",
                "https://www.dropbox.com/scl/fi/yep2ukv5nsejfkvrsw9g3/video3.mp4?rlkey=sq650kkh8jzmh0prhzsd4kylv&st=l7ga43yy&dl=1"
            ],
            "sliderType": "determinate"
        }
    }
};

const datasourcelugares = {
    "gridListData": {
        "type": "object",
        "objectId": "gridListSample",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://res.cloudinary.com/hello-tickets/image/upload/c_limit,f_auto,q_auto,w_1300/v1658298619/eccyuhvof8uukkckimdn.jpg",
                    "size": "small",
                    "widthPixels": 0,
                    "heightPixels": 0
                },
                {
                    "url": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/gridlist/GridListBackground_Dark.png",
                    "size": "large",
                    "widthPixels": 0,
                    "heightPixels": 0
                }
            ]
        },
        "title": "Los 6 mejores lugares turisticos de Barcelona",
        "listItems": [
            {
                "primaryText": "Parque de Gaudí con mosaicos coloridos",
                "imageSource": "https://www.barcellona.shop/images/continents/spain/barcelona/park-guell/park-guell-view.jpg"
            },
            {
                "primaryText": "Sagrada Familia Basílica monumental de Gaudí",
                "imageSource": "https://d2i7eq829tbbje.cloudfront.net/webp/medium/sagrada1_P_3824_d517b3a6-cce0-4f40-a798-c3d27ec24679"
            },
            {
                "primaryText": "Casa Batlló Obra emblemática de Gaudí",
                "imageSource": "https://www.expocihachub.com/img/blog/casa-batllo---arquitectura-que-inspira-casa-batllo.jpg"
            },
            {
                "primaryText": "La Rambla Paseo peatonal con tiendas",
                "imageSource": "https://www.laramblabarcelona.com/wp-content/uploads/2017/11/la-rambla-datos.jpg"
            },
            {
                "primaryText": "Barrio Gótico Antiguo Catedral de Barcelona",
                "imageSource": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/8c/37/29/photo1jpg.jpg?w=1200&h=-1&s=1"
            },
            {
                "primaryText": "Colina con el Castillo de Montjuïc",
                "imageSource": "https://www.barcelonaglobal.org/blog/wp-content/uploads/2042/11/Projecte-nou-47.png"
            }
        ],
        "logoUrl": ""
    }
};

const datasourcecomida = {
    "imageListData": {
        "type": "object",
        "objectId": "imageListSample",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://images.ecestaticos.com/8lm_wxY-mhq6emaCGTtpDEK6HUI=/93x0:3443x2357/992x700/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F122%2F818%2Fd64%2F122818d64eeee4a9d11a3b5df70bda14.jpg",
                    "size": "large"
                }
            ]
        },
        "title": "Comida tipica de Barcelona",
        "listItems": [
            {
                "primaryText": "Pa amb tomàquet",
                "imageSource": "https://i.pinimg.com/736x/a9/6b/9c/a96b9c7d89a7ef3b8946ad66313f1211.jpg"
            },
            {
                "primaryText": "Escalivada",
                "imageSource": "https://cocina-casera.com/wp-content/uploads/2018/09/escalivada_opt-770x485.jpg"
            },
            {
                "primaryText": "Esqueixada de bacallà",
                "imageSource": "https://www.topgastronomico.es/wp-content/uploads/2022/07/AdobeStock_114990289-scaled.jpeg"
            },
            {
                "primaryText": "Fideuà",
                "imageSource": "https://i.blogs.es/e14b9d/fideua-tradicional/1366_2000.jpg"
            },
            {
                "primaryText": "Calçots",
                "imageSource": "https://aerobusbarcelona.es/wp-content/uploads/2023/02/que_son_los_calcots_y_como_se_comen_53043_orig.jpg"
            },
            {
                "primaryText": "Canelons",
                "imageSource": "https://www.potrodenavarra.es/wp-content/uploads/2022/06/canelons.jpg"
            }
        ],
        "logoUrl": "",
        "hintText": ""
    }
};

const datasourcetraje = {
    "detailImageRightData": {
        "type": "object",
        "objectId": "detailImageRightSample",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://miniatures-bima.dtibcn.cat/1024x0/filters:format(jpeg)/bima/photos/ea/63/18/33/fb67b2201f58e8446412344f7e35065aea7e1dce5bcce6ddc61eadc2.tiff?signature=3baeb14750ef6bb5519dcdf7a62e49f30fed59c7deeda9b421622c3b864d577f",
                    "size": "large"
                }
            ]
        },
        "title": "Vestimenta tipica de Barcelona",
        "subtitle": "Hombres y mujeres",
        "image": {
            "contentDescription": "",
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://t2.uc.ltmcdn.com/es/posts/3/8/4/traje_femenino_6483_1_600.jpg",
                    "size": "large"
                }
            ]
        },
        "textContent": {
            "primaryText": {
                "type": "PlainText",
                "text": "Vestimenta Tipica Barcelona"
            },
            "rating": {
                "text": ""
            },
            "locationText": {
                "type": "PlainText",
                "text": ""
            },
            "secondaryText": {
                "type": "PlainText",
                "text": "El traje masculino incluye barretina, camisa blanca, faja, pantalones oscuros y espardenyes.El traje femenino lleva peinador, blusa blanca, falda larga con delantal, mantilla en ocasiones especiales y espardenyes."
            }
        },
        "buttons": [
            {
                "text": ""
            },
            {
                "text": ""
            }
        ],
        "logoUrl": ""
    }
};

const datasourcepersonaje = {
    "imageListData": {
        "type": "object",
        "objectId": "imageListSample",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://c4.wallpaperflare.com/wallpaper/31/6/472/night-lights-backlight-spain-wallpaper-preview.jpg",
                    "size": "large"
                }
            ]
        },
        "title": "Personajes sobresalientes de Barcelona",
        "listItems": [
            {
                "primaryText": "Mercè Rodoreda (1908-1983)",
                "imageSource": "https://docs.llull.cat/IMAGES_2/rodoreda22.jpg"
            },
            {
                "primaryText": "Antoni Gaudí (1852-1926)",
                "imageSource": "https://uploads6.wikiart.org/00337/images//441px-antoni-gaudi-1878.jpg!Portrait.jpg"
            },
            {
                "primaryText": "Pablo Picasso (1881-1973)",
                "imageSource": "https://www.aarp.org/content/dam/aarp/entertainment/art_music/2019/01/1140-1-pablo-picasso-esp.jpg"
            },
            {
                "primaryText": "Carlos Ruiz Zafón (1964-2020)",
                "imageSource": "https://wmagazin.com/wp-content/uploads/2020/06/NO-ppal-Carlos-Ruiz-Zafon-muere1jpg.jpg"
            },
            {
                "primaryText": "Lluís Companys (1882-1940)",
                "imageSource": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8JUrnb5gcj0crJ-GVUK2I7TafgebLxNPibQ&s"
            },
            {
                "primaryText": "Joan Oró (1923-2004)",
                "imageSource": "https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2023/01/28/63d56e656cadc.jpeg"
            }
        ],
        "logoUrl": "",
        "hintText": ""
    }
};

const datasourcemusica = {
    "audioPlayerTemplateData": {
        "type": "object",
        "properties": {
            "audioControlType": "jump30",
            "audioSources": [
                "https://www.dropbox.com/scl/fi/6qgp55uwrue1zr7h5sawu/cancion1.m4a?rlkey=432pq1s4bk2954q4oajh7a2ob&st=rb6f5enu&dl=1",
                "https://www.dropbox.com/scl/fi/6qgp55uwrue1zr7h5sawu/cancion1.m4a?rlkey=432pq1s4bk2954q4oajh7a2ob&st=rb6f5enu&dl=1"
            ],
            "backgroundImage": "https://p4.wallpaperbetter.com/wallpaper/710/283/597/sunrise-barcelona-wallpaper-preview.jpg",
            "coverImageSource": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh5Q80szzWCWtNTViS2Z0vlRV6DWonAQ17mKun-v8h3LI2lcAVCQo89kdlGaubDL3DyLniT5I0ZYdcLdFMeLrpeZzoPP_mPqt64ATWjtn4giAMems_AnS7cnr238FIPvOA4VBPoSilPZw/s1600/Baile+Flamenco.jpg",
            "headerTitle": "Musica tipica de Barcelona",
            "logoUrl": "",
            "primaryText": "Gritos de Guerra",
            "secondaryText": "Jose Rey",
            "sliderType": "determinate"
        }
    }
};

const datasourceadios = {
    "headlineTemplateData": {
        "type": "object",
        "objectId": "headlineSample",
        "properties": {
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://wallpapercave.com/wp/wp1825749.jpg",
                        "size": "large"
                    }
                ]
            },
            "textContent": {
                "primaryText": {
                    "type": "PlainText",
                    "text": "Adios, saliendo de la Skill"
                }
            },
            "logoUrl": "",
            "hintText": "Nombre: Abelardo Hernandez Hernandez"
        }
    }
};

const datasourceayuda = {
    "headlineTemplateData": {
        "type": "object",
        "objectId": "headlineSample",
        "properties": {
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://live.staticflickr.com/7377/9872124495_f50b357f8a_b.jpg",
                        "size": "large"
                    }
                ]
            },
            "textContent": {
                "primaryText": {
                    "type": "PlainText",
                    "text": "Hola, ¿En que puedo ayudarte?"
                }
            },
            "logoUrl": "",
            "hintText": "Nombre: Abelardo Hernandez Hernandez"
        }
    }
};

const datasourceerror = {
    "headlineTemplateData": {
        "type": "object",
        "objectId": "headlineSample",
        "properties": {
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://c4.wallpaperflare.com/wallpaper/462/491/812/barcelona-hd-widescreen-for-desktop-wallpaper-preview.jpg",
                        "size": "large"
                    }
                ]
            },
            "textContent": {
                "primaryText": {
                    "type": "PlainText",
                    "text": "Lo siento, no entendí ¿Puedes repetir lo que dijiste? "
                }
            },
            "logoUrl": "",
            "hintText": "Nombre: Abelardo Hernandez Hernandez"
        }
    }
};

const createDirectivePayload = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = '¡Hola! Bienvenido a la guía de Barcelona. Estoy aquí para ayudarte a descubrir lo mejor de esta hermosa ciudad. ¿Te gustaría saber más sobre los lugares turísticos, la comida típica, la música tradicional, o cualquier otra cosa sobre Barcelona? Puedes empezar diciendo: Describe la ciudad de Barcelona';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_PRESENTACION, datasourcepresentacion);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const DescripcionIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'descripcionIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Reproduciendo video sobre descripción de la Ciudad de Barcelona España';
        
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_DESCRIPCION, datasourcedescripcion);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt("¿Quieres conocer mas cosas?")
            .getResponse();
    }
};

const LuagaresIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'lugaresIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Mostrando imagenes de los lugares turisticos de Barcelona. La Sagrada Familia es una basílica monumental de Gaudí en construcción desde 1882 y muy visitada. El Parque Güell, también de Gaudí, destaca por sus mosaicos coloridos y formas orgánicas. La Casa Batlló, en el Paseo de Gracia, es una obra emblemática de Gaudí con una fachada ondulante. La Rambla es un famoso paseo peatonal con tiendas, restaurantes y el mercado de La Boquería. El Barrio Gótico, el casco antiguo, alberga la Catedral de Barcelona y edificios medievales. Montjuïc es una colina con el Castillo de Montjuïc, el Museo Nacional de Arte de Cataluña y el Anillo Olímpico.';
        
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_LUGARES, datasourcelugares);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt("¿Quieres conocer mas cosas?")
            .getResponse();
    }
};

const ComidaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'comidaIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Mostrando imagenes de seis comidas tipicas de Barcelona. Pa amb tomàquet es pan rústico con tomate, aceite de oliva, sal y ajo opcional, perfecto con embutidos o quesos. La escalivada son verduras asadas (berenjenas, pimientos, cebollas, tomates) peladas y aliñadas con aceite de oliva y sal. La esqueixada de bacallà es una ensalada fría de bacalao desalado, tomates, cebollas, pimientos y aceitunas, con aceite de oliva y vinagre. La fideuà es un plato de mariscos similar a la paella, hecho con fideos y servido con alioli. Los calçots son cebollas tiernas a la parrilla, servidas con salsa romesco. Los canelons son pasta rellena de carne asada, cubierta con bechamel y gratinada con queso. ';
        
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_COMIDA, datasourcecomida);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt("¿Quieres conocer mas cosas?")
            .getResponse();
    }
};

const TrajeIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'trajeIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Mostrando imagen de traje tipico de Barcelona: El traje típico masculino incluye la barretina, un gorro de lana rojo o morado; una camisa blanca; una faja roja o negra alrededor de la cintura; pantalones oscuros ceñidos; y espardenyes, que son alpargatas con cintas. El traje típico femenino consiste en un peinador, un pañuelo sobre los hombros; una blusa blanca bordada; una falda larga y amplia, a menudo con delantal; una mantilla en ocasiones especiales; y espardenyes. Estos trajes se usan en celebraciones como la Diada Nacional de Cataluña y la Fiesta de la Mercè, reflejando la identidad y tradiciones catalanas.';
        
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_TRAJE, datasourcetraje);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt("¿Quieres conocer mas cosas?")
            .getResponse();
    }
};

const PersonajesIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'personajesIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Mostrando imagenes de los personajes mas sobresalientes de Barcelona: Antoni Gaudí, arquitecto modernista, dejó una huella en Barcelona con obras como la Sagrada Familia. Pablo Picasso desarrolló su estilo en la ciudad, donde se encuentra el Museo Picasso. Mercè Rodoreda, escritora de "La plaza del Diamante", reflejó la vida catalana. Carlos Ruiz Zafón popularizó una imagen mágica de Barcelona con sus novelas. Joan Oró, bioquímico, investigó el origen de la vida. Lluís Companys, presidente de la Generalitat, defendió la autonomía catalana.';
        
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_PERSONAJE, datasourcepersonaje);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt("¿Quieres conocer mas cosas?")
            .getResponse();
    }
};

const MusicaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'musicaIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Reproduciendo musica tipica de la Ciudad de Barcelona España';
        
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_MUSICA, datasourcemusica);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt("¿Quieres conocer mas cosas?")
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = '¡Puedes saludarme! ¿Como puedo ayudar?';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_AYUDA, datasourceayuda);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Adios!!';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_ADIOS, datasourceadios);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet 
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Sorry, I don\'t know about that. Please try again.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open 
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not 
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs 
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};
/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents 
 * by defining them above, then also adding them to the request handler chain below 
 * */
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below 
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Sorry, I had trouble doing what you asked. Please try again.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_ERROR, datasourceerror);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        DescripcionIntentHandler,
        LuagaresIntentHandler,
        ComidaIntentHandler,
        TrajeIntentHandler,
        PersonajesIntentHandler,
        MusicaIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();