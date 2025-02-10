if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('sw.js')
      .then(function(registration) {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(function(error) {
        console.log('Service Worker registration failed:', error);
      });
  });
}

function getInsult() {
  const insults = [
    "Dude you're so ugly!",
    "You're so stupid",
    "Get a life",
    "You're doing so bad!",
    "Don't believe in yourself!",
    "You're a non-sigma",
    "You don't have rizz",
    "You're really really ugly",
    "Dude, you're so ugly even your reflection gives up.",
    "You're as sharp as a marble.",
    "You're proof that even evolution has off days.",
    "You bring everyone so much joy… when you leave the room.",
    "Your secrets are safe with me. I never even listen when you tell me them.",
    "You're like a cloud. When you disappear, it’s a beautiful day.",
    "I'd agree with you, but then we’d both be wrong.",
    "You're like a software update: no one wants you, but we all get stuck with you anyway.",
    "You're as bright as a black hole, and twice as dense.",
    "You're so bad at this, it’s almost inspiring.",
    "You have something on your chin… no, the third one down.",
    "You're like a Wi-Fi signal—weak and disconnected.",
    "You couldn’t pour water out of a boot if the instructions were on the heel.",
    "You're so slow, snails use you as a benchmark for procrastination.",
    "You're living proof that even mistakes can be persistent.",
    "You're like a cloud storage service—full of useless stuff nobody asked for.",
    "You're the reason why instructions include 'Do not eat' on silica gel.",
    "You're like a broken pencil—completely pointless.",
    "You must be a magician; you make talent disappear.",
    "You're so fake, Barbie feels jealous.",
    "You're not stupid; you just have bad luck thinking.",
    "You're the type of person who claps when the plane lands.",
    "You're as useful as a screen door on a submarine.",
    "You're a non-sigma, and it shows.",
    "You don't have rizz, and it’s painfully obvious.",
    "You're the human equivalent of a typo.",
    "You’re the kind of person who texts ‘LOL’ in real life.",
    "You must be a parking ticket because you’ve got 'fine' written all over you… said no one ever.",
    "You're like a pizza cutter—sharp, but you lack depth.",
    "You remind me of a cloud—no substance, just floating around aimlessly.",
    "You're so awkward, even your shadow avoids you.",
    "You’re the reason the gene pool needs a lifeguard.",
    "You're a failed loading screen of life.",
    "You're the Wi-Fi password everyone hates typing in.",
    "You're a walking 'Insert Coin to Continue' screen.",
    "You're like an expired coupon: no value, no use.",
    "You're so uncoordinated, you trip over wireless connections.",
    "You’re as stable as Internet Explorer on launch day.",
    "You're the human equivalent of a 404 error.",
    "You're the kind of person who brings a fork to a soup party.",
    "You're about as useful as a chocolate teapot.",
    "You're so slow, even sloths are yelling 'Hurry up!'",
    "You're proof that the universe sometimes takes a coffee break.",
    "You're like a joke without a punchline—just sad.",
    "You're like a Windows 95 startup—slow, outdated, and full of problems.",
    "Your brain’s so empty, even vacuum cleaners feel jealous.",
    "You're like a broken GPS—no direction in life.",
    "You're like a phone without Wi-Fi—totally useless.",
    "You’re like a screen full of pop-ups, nobody asked for you.",
    "You're as necessary as a waterproof tea bag.",
    "You're as graceful as a bulldozer in a ballet class.",
    "You're a text message autocorrect's worst nightmare.",
    "You make dial-up internet look fast.",
    "You're like a spam email—everyone ignores you.",
    "You're so confused, even Google couldn't help you.",
    "You have the charm of a wet sock.",
    "You’ve got the personality of a dial tone.",
    "You’re the human version of a missed call.",
    "You're like a Bluetooth speaker—no one wants to connect to you."
  ];
  const randomInsult = insults[Math.floor(Math.random() * insults.length)];
  document.getElementById("insultDisplay").innerText = randomInsult;
}
