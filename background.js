var clintisms = {
  "Emotes": {
    "greenHeart": {
      "title": "Green Heart",
      "string": "💚",
      "enabled": true
    },
    "blueHear": {
      "title": "Blue Heart",
      "string": "💙",
      "enabled": true
    },
    "redHeart": {
      "title": "Red Heart",
      "string": "❤️",
      "enabled": false
    },
    "notSideEye": {
      "title": "Clint, This Isn't Side-eye",
      "string": "👀",
      "enabled": true
    },
    "sideEye": {
      "title": "Actual Side Eye",
      "string": "😒",
      "enabled": true
    },
    "trash": {
      "title": "Trash",
      "string": "🗑",
      "enabled": true
    },
    "noseEye": {
      "title": ":^)",
      "string": ":^)",
      "enabled": true
    }
  },

  "OMFG": {
    "omfg1": {
      "title": "OMFG",
      "string": "OMFG",
      "enabled": true
    },
    "omfg2": {
      "title": "OMFGGGGG",
      "string": "OMFGGGGG",
      "enabled": true
    },
    "omfg3": {
      "title": "OMFGGGGGGGGG",
      "string": "OMFGGGGGGGG",
      "enabled": true
    }
  },

  "BYE": {
    "bye1": {
      "title": "BYE",
      "string": "BYE",
      "enabled": true
    },
    "bye2": {
      "title": "b y e",
      "string": "b y e",
      "enabled": true
    },
    "bye3": {
      "title": "B Y E",
      "string": "B Y E",
      "enabled": true
    },
    "bye4": {
      "title": "BYEEEEEEEEEEEEE",
      "string": "BYEEEEEEEEEEEEE",
      "enabled": true
    },
    "bye5": {
      "title": "FUCKING BYE",
      "string": "FUCKING BYE",
      "enabled": true
    }
  },

  "Hmm": {
    "hm1": {
      "title": "Hmmmmmm",
      "string": "Hmmmmmm",
      "enabled": true
    },
    "hm2": {
      "title": "HMMMMMMMMMMMMM",
      "string": "HMMMMMMMMMMMMM",
      "enabled": true
    },
    "hm3": {
      "title": "HmmmMMMMMmMMmmMMmmmMMmM",
      "string": "HmmmMMMMMmMMmmMMmmmMMmM",
      "enabled": true
    }
  },

  "SMH": {
    "smh": {
      "title": "SMH",
      "string": "SMH",
      "enabled": true
    },
    "smh2": {
      "title": "Smh",
      "string": "Smh",
      "enabled": true
    },
    "smfh": {
      "title": "SMFH",
      "string": "SMFH",
      "enabled": true
    },
    "smhhh": {
      "title": "SMHHHHHHHHHHHH",
      "string": "SMHHHHHHHHHHHH",
      "enabled": true
    }
  },

  "Misc.": {
    "shrug": {
      "title": "¯\\_(ツ)_/¯",
      "string": "¯\\_(ツ)_/¯",
      "enabled": true
    },
    "v": {
      "title": "v",
      "string": "v",
      "enabled": true
    },
    "vvvvvv": {
      "title": "vvvvvv",
      "string": "vvvvvv",
      "enabled": true
    },
    "gdi": {
      "title": "gdi",
      "string": "gdi",
      "enabled": true
    },
    "block": {
      "title": "I WILL BLOCK U",
      "string": "I WILL BLOCK U",
      "enabled": true
    },
    "blocked": {
      "title": "FUCKING BLOCKED",
      "string": "FUCKING BLOCKED",
      "enabled": true
    },
    "h8": {
      "title": "i h8 u",
      "string": "i h8 u",
      "enabled": true
    },
    "theme": {
      "title": "[theme music]",
      "string": "https://www.youtube.com/watch?v=cU8HrO7XuiE",
      "enabled": true
    }
  }
};

// build dynamic menu
chrome.runtime.onInstalled.addListener(function() {
  var context = "editable";

  // create parent menu item
  var parentMenu = chrome.contextMenus.create({
    'title': 'ClintBot',
    'contexts': [context],
    'id': 'clintParent'
  });

  for (var menuEntry in clintisms) {
    var menu = chrome.contextMenus.create({
      'title': menuEntry,
      'contexts': [context],
      'id': menuEntry,
      'parentId': parentMenu
    });

    for (var clintismEntry in clintisms[menuEntry]) {
      var entry = chrome.contextMenus.create({
        'title': clintisms[menuEntry][clintismEntry].title,
        'contexts': [context],
        'id': clintismEntry,
        'enabled': clintisms[menuEntry][clintismEntry].enabled,
        'parentId': menu
      });
    }
  }
});

// add click event
chrome.contextMenus.onClicked.addListener(function(info, tab) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {string: clintisms[info.parentMenuItemId][info.menuItemId].string});
  });
});
