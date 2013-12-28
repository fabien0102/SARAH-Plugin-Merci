exports.action = function ( data, callback, config, SARAH ) {

  config = config.modules.merci;

  if ( !config.name ) {
    console.log( "merci config missing" );

    callback( {
      tts: "J'ai besoin de ton nom pour répondre"
    } );

    return;
  }

  var name = config.name;

  var answers = [
    "Mais de rien" + name,
    "Maké ça me fait plaisir",
    "Hé ouais, je gère!",
    "Tu sais " + name + ", je suis ton plus fidèle serviteur",
    "Ouais ouais " + name + " mais t'habitue pas trop",
    "Ah! Enfin. J'ai failli attendre",
    "J'ai pas trop le choix",
    "Ça me fait très plaisir " + name,
    "Sans moi " + name + " tu serais perdu",
    "Dé nada, maintenant je prend une pause cigarette",
    "Dé nada, maintenant je prend une pause bibine"
  ];

  callback( {
    tts: answers[ Math.floor( Math.random() * answers.length ) ]
  } );

};
