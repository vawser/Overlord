// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1040500100);
    InitializeCommonEvent(1, 9008000, 1040500101);
    InitializeCommonEvent(2, 9008000, 1040500102);
    InitializeCommonEvent(3, 9008000, 1040500103);
    InitializeCommonEvent(4, 9008000, 1040500104);
    InitializeCommonEvent(5, 9008000, 1040500105);
    InitializeCommonEvent(6, 9008000, 1040500106);
    InitializeCommonEvent(7, 9008000, 1040500107);
    InitializeCommonEvent(8, 9008000, 1040500108);
    InitializeCommonEvent(9, 9008000, 1040500109);
    InitializeCommonEvent(10, 9008000, 1040500110);
    InitializeCommonEvent(11, 9008000, 1040500111);
    InitializeCommonEvent(12, 9008000, 1040500112);
    InitializeCommonEvent(13, 9008000, 1040500113);
    InitializeCommonEvent(14, 9008000, 1040500114);
    InitializeCommonEvent(15, 9008000, 1040500115);
    InitializeCommonEvent(16, 9008000, 1040500116);
    InitializeCommonEvent(17, 9008000, 1040500117);
    InitializeCommonEvent(18, 9008000, 1040500118);
    InitializeCommonEvent(19, 9008000, 1040500119);
    InitializeCommonEvent(20, 9008000, 1040500120);
    InitializeCommonEvent(21, 9008000, 1040500121);
    InitializeCommonEvent(22, 9008000, 1040500122);
    
    InitializeEvent(0, 1040502200, 1040502200);
    InitializeEvent(1, 1040502200, 1040502201);
    InitializeEvent(2, 1040502200, 1040502202);
    InitializeEvent(3, 1040502200, 1040502203);
    InitializeEvent(4, 1040502200, 1040502204);
    InitializeEvent(5, 1040502200, 1040502205);
    InitializeEvent(6, 1040502200, 1040502206);
    InitializeEvent(7, 1040502200, 1040502207);
    InitializeEvent(8, 1040502200, 1040502208);
    InitializeEvent(9, 1040502200, 1040502209);
    InitializeEvent(10, 1040502200, 1040502210);
    InitializeEvent(11, 1040502200, 1040502211);
    InitializeEvent(12, 1040502200, 1040502212);
    InitializeEvent(13, 1040502200, 1040502213);
    InitializeEvent(14, 1040502200, 1040502214);
    InitializeEvent(15, 1040502200, 1040502215);
    InitializeEvent(16, 1040502200, 1040502216);
    InitializeEvent(17, 1040502200, 1040502217);
    InitializeEvent(18, 1040502200, 1040502218);
    InitializeEvent(19, 1040502200, 1040502219);
    InitializeEvent(20, 1040502200, 1040502220);
    InitializeEvent(21, 1040502200, 1040502221);
    InitializeEvent(22, 1040502200, 1040502222);
    InitializeEvent(23, 1040502200, 1040502223);
    InitializeEvent(24, 1040502200, 1040502224);
    InitializeEvent(25, 1040502200, 1040502225);
    InitializeEvent(26, 1040502200, 1040502226);
});

$Event(1040502200, Restart, function(X0_4) {
    if (!EventFlag(1041500800)) {
        WaitFor(CharacterDead(1041500800));
    }
L0:
    DeleteMapSFX(X0_4, false);
    EndEvent();
});


