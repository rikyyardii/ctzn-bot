(function (_0x16f124, _0x2f5cdd) {
  const _0x473645 = a24_0x4b3d,
    _0x32a29d = _0x16f124();
  while (!![]) {
    try {
      const _0x442b86 =
        (parseInt(_0x473645(0x1ef)) / 0x1) * (-parseInt(_0x473645(0x1fc)) / 0x2) +
        -parseInt(_0x473645(0x1eb)) / 0x3 +
        (-parseInt(_0x473645(0x1de)) / 0x4) * (-parseInt(_0x473645(0x1d8)) / 0x5) +
        (-parseInt(_0x473645(0x1f5)) / 0x6) * (-parseInt(_0x473645(0x1dd)) / 0x7) +
        (parseInt(_0x473645(0x1d7)) / 0x8) * (parseInt(_0x473645(0x1e2)) / 0x9) +
        (parseInt(_0x473645(0x1f7)) / 0xa) * (parseInt(_0x473645(0x1f4)) / 0xb) +
        (-parseInt(_0x473645(0x1fd)) / 0xc) * (parseInt(_0x473645(0x1e7)) / 0xd);
      if (_0x442b86 === _0x2f5cdd) break;
      else _0x32a29d["push"](_0x32a29d["shift"]());
    } catch (_0x366f52) {
      _0x32a29d["push"](_0x32a29d["shift"]());
    }
  }
})(a24_0x13db, 0x44517);
function a24_0x13db() {
  const _0x211fed = [
    "username",
    "repeat",
    "write",
    "8utNjay",
    "36SWBGfs",
    "Free\x20tier\x20only\x20support\x201\x20account",
    "Enter\x20your\x20init_data",
    "3099464TrEhqU",
    "465DZQFMA",
    "whiteBright",
    "greenBright",
    "socks5",
    "push",
    "245FyVLGz",
    "22084eeLqnc",
    "code",
    "stdout",
    "Success\x20To\x20Add\x20Login",
    "9OnWLmY",
    "exit",
    ".json",
    "length",
    "Press\x20Enter\x20To\x20Back",
    "2583022PTkTCT",
    "baner",
    "reconnecting",
    "blackBright",
    "847860EtkIQk",
    "yellowBright",
    "Invalid\x20Credentials,\x20Please\x20Recapture\x20Credentials",
    "Account\x20is\x20empty,\x20please\x20add\x20account\x20before\x20start\x20bot",
    "74731WajKsj",
    "WTF\x20with\x20your\x20input,\x20Check\x20your\x20input\x20moron!",
    "Reconnecting\x20",
    "Catizen\x20on\x20Maintenance",
    "redBright",
    "11OseSJD",
    "27498KXtNaC",
    "login",
    "3961660ZOgCSt",
    "Something\x20went\x20wrong",
  ];
  a24_0x13db = function () {
    return _0x211fed;
  };
  return a24_0x13db();
}
import a24_0x3c8c07 from "chalk";
import { createSessionDirectory, getAllFilesFromFolder, getSessionDirectory, getUserFromUrl, readJsonFile, runtimeServer, updateBanner, writeToFile } from "./app/utils/helper.js";
import { DIR_PATH_SESSION } from "./app/utils/konst.js";
import a24_0x176c03 from "./app/form.js";
function a24_0x4b3d(_0x31ea95, _0x2608ae) {
  const _0x13db77 = a24_0x13db();
  return (
    (a24_0x4b3d = function (_0x4b3da9, _0x2d2096) {
      _0x4b3da9 = _0x4b3da9 - 0x1d6;
      let _0x3172e4 = _0x13db77[_0x4b3da9];
      return _0x3172e4;
    }),
    a24_0x4b3d(_0x31ea95, _0x2608ae)
  );
}
import a24_0x1a0028 from "./app/deleteAccount.js";
import a24_0x17043e from "./app/mainMenu.js";
import a24_0x57e466 from "./app/startBot.js";
import a24_0x41e8b4 from "./app/libs/catizen.js";
createSessionDirectory(DIR_PATH_SESSION),
  (async () => {
    const _0x2cb4ec = a24_0x4b3d;
    let _0x135a62 = await runtimeServer();
    _0x135a62["status"] === "exit" && (process[_0x2cb4ec(0x1e0)][_0x2cb4ec(0x1fb)](updateBanner(_0x135a62[_0x2cb4ec(0x1e8)])), process[_0x2cb4ec(0x1e3)]());
    let _0x4d5f1a = 0x0;
    while (_0x135a62["status"] === _0x2cb4ec(0x1e9)) {
      _0x4d5f1a++,
        process["stdout"][_0x2cb4ec(0x1fb)]("\x1bc"),
        process[_0x2cb4ec(0x1e0)]["write"](updateBanner(_0x135a62[_0x2cb4ec(0x1e8)])),
        console["log"](a24_0x3c8c07[_0x2cb4ec(0x1ec)](_0x2cb4ec(0x1f1)) + a24_0x3c8c07[_0x2cb4ec(0x1d9)]("•"[_0x2cb4ec(0x1fa)](_0x4d5f1a))),
        _0x4d5f1a > 0x4 && (_0x4d5f1a = 0x0),
        (_0x135a62 = await runtimeServer()),
        await new Promise((_0x125fcb) => setTimeout(_0x125fcb, 0x1388));
    }
    process["stdout"][_0x2cb4ec(0x1fb)]("\x1bc"), process[_0x2cb4ec(0x1e0)][_0x2cb4ec(0x1fb)](updateBanner(_0x135a62[_0x2cb4ec(0x1e8)])), process["stdout"][_0x2cb4ec(0x1fb)]("\x1bc");
    while (!![]) {
      const _0x3d4386 = await a24_0x17043e(_0x135a62[_0x2cb4ec(0x1e8)]);
      _0x3d4386 === _0x2cb4ec(0x1e3) && process[_0x2cb4ec(0x1e3)]();
      if (_0x3d4386 === "1") {
        var _0x3ec0d6 = getAllFilesFromFolder(DIR_PATH_SESSION);
        let _0x1a4027 = [];
        for (let _0x6256bd = 0x0; _0x6256bd < _0x3ec0d6[_0x2cb4ec(0x1e5)]; _0x6256bd++) {
          let _0x1785f1 = _0x3ec0d6[_0x6256bd];
          if (_0x1785f1) {
            var _0x236f34 = readJsonFile(_0x1785f1);
            _0x1a4027[_0x2cb4ec(0x1dc)](_0x236f34);
          }
        }
        if (_0x3ec0d6[_0x2cb4ec(0x1e5)] > 0x1) await a24_0x176c03(a24_0x3c8c07["yellowBright"](_0x2cb4ec(0x1fe)) + "\x0a" + a24_0x3c8c07[_0x2cb4ec(0x1ea)](_0x2cb4ec(0x1e6)), _0x135a62[_0x2cb4ec(0x1e8)]);
        else {
          if (_0x3ec0d6[_0x2cb4ec(0x1e5)] < 0x1) await a24_0x176c03(a24_0x3c8c07[_0x2cb4ec(0x1ec)](_0x2cb4ec(0x1ee)) + "\x0a" + a24_0x3c8c07[_0x2cb4ec(0x1ea)](_0x2cb4ec(0x1e6)), _0x135a62[_0x2cb4ec(0x1e8)]);
          else {
            const _0x557e55 = await a24_0x57e466(_0x1a4027, _0x135a62["baner"]);
            _0x557e55 === _0x2cb4ec(0x1e3) && process[_0x2cb4ec(0x1e3)]();
          }
        }
      }
      if (_0x3d4386 === "2") {
        const _0x261223 = await a24_0x176c03(_0x2cb4ec(0x1d6), _0x135a62[_0x2cb4ec(0x1e8)]);
        let _0x3a2ed5;
        try {
          _0x3a2ed5 = getUserFromUrl(_0x261223);
        } catch (_0x1eae22) {
          await a24_0x176c03(a24_0x3c8c07[_0x2cb4ec(0x1ec)](_0x2cb4ec(0x1f0)) + "\x0a" + a24_0x3c8c07[_0x2cb4ec(0x1ea)](_0x2cb4ec(0x1e6)), _0x135a62[_0x2cb4ec(0x1e8)]);
          continue;
        }
        let _0x1df49a = { use_proxy: ![], proxy_hostname: "", proxy_protocol: _0x2cb4ec(0x1db), proxy_port: 0x0, proxy_username: "", proxy_password: "" };
        const _0x20b40d = new a24_0x41e8b4({ token: "", initData: _0x261223 }),
          _0xcfc2e8 = await _0x20b40d[_0x2cb4ec(0x1f6)]();
        if (_0x2cb4ec(0x1df) in _0xcfc2e8)
          _0xcfc2e8[_0x2cb4ec(0x1df)] === 0x6a && (await a24_0x176c03(a24_0x3c8c07[_0x2cb4ec(0x1f3)](_0x2cb4ec(0x1f2)) + "\x0a" + a24_0x3c8c07[_0x2cb4ec(0x1ea)](_0x2cb4ec(0x1e6)), _0x135a62[_0x2cb4ec(0x1e8)])),
            _0xcfc2e8[_0x2cb4ec(0x1df)] === 0x2 && (await a24_0x176c03(a24_0x3c8c07[_0x2cb4ec(0x1f3)](_0x2cb4ec(0x1ed)) + "\x0a" + a24_0x3c8c07[_0x2cb4ec(0x1ea)](_0x2cb4ec(0x1e6)), _0x135a62[_0x2cb4ec(0x1e8)]));
        else
          try {
            writeToFile(getSessionDirectory(DIR_PATH_SESSION) + "/" + _0x3a2ed5[_0x2cb4ec(0x1f9)] + _0x2cb4ec(0x1e4), JSON["stringify"]({ username: _0x3a2ed5[_0x2cb4ec(0x1f9)], access_token: "", init_data: _0x261223, ..._0x1df49a })),
              await a24_0x176c03(a24_0x3c8c07[_0x2cb4ec(0x1da)](_0x2cb4ec(0x1e1)) + "\x0a" + a24_0x3c8c07["blackBright"](_0x2cb4ec(0x1e6)), _0x135a62["baner"]);
          } catch (_0x2896b6) {
            await a24_0x176c03(a24_0x3c8c07[_0x2cb4ec(0x1f3)](_0x2cb4ec(0x1f8)) + "\x0a" + a24_0x3c8c07[_0x2cb4ec(0x1ea)]("Press\x20Enter\x20To\x20Back"), _0x135a62[_0x2cb4ec(0x1e8)]);
            continue;
          }
      }
      if (_0x3d4386 === "3")
        try {
          var _0x3ec0d6 = getAllFilesFromFolder(DIR_PATH_SESSION);
          let _0x543d81 = [];
          for (let _0x253bd6 = 0x0; _0x253bd6 < _0x3ec0d6[_0x2cb4ec(0x1e5)]; _0x253bd6++) {
            let _0x5c2b08 = _0x3ec0d6[_0x253bd6];
            if (_0x5c2b08) {
              var _0x236f34 = readJsonFile(_0x5c2b08);
              _0x543d81[_0x2cb4ec(0x1dc)]({ name: _0x236f34["username"], location: _0x5c2b08 });
            }
          }
          if (_0x543d81[_0x2cb4ec(0x1e5)] > 0x0) {
            const _0x2f3a89 = await a24_0x1a0028(_0x543d81, _0x135a62[_0x2cb4ec(0x1e8)]);
            _0x2f3a89 === _0x2cb4ec(0x1e3) && process["exit"]();
          } else {
            await a24_0x176c03(a24_0x3c8c07["redBright"]("Account\x20is\x20empty") + "\x0a" + a24_0x3c8c07[_0x2cb4ec(0x1ea)]("Press\x20Enter\x20To\x20Back"), _0x135a62[_0x2cb4ec(0x1e8)]);
            continue;
          }
        } catch (_0x578834) {
          await a24_0x176c03(a24_0x3c8c07[_0x2cb4ec(0x1f3)]("Something\x20went\x20wrong") + "\x0a" + a24_0x3c8c07[_0x2cb4ec(0x1ea)](_0x2cb4ec(0x1e6)), _0x135a62[_0x2cb4ec(0x1e8)]);
          continue;
        }
    }
  })();
