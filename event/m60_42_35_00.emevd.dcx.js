// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common.emevd N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\m60.emevd N:\GR\data\Param\event\common_macro.emevd 
// @linked    [0,72,154,220]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1042350210);
    InitializeCommonEvent(1, 9008000, 1042350100);
    InitializeCommonEvent(2, 9008000, 1042350101);
    InitializeCommonEvent(3, 9008000, 1042350200);
    InitializeCommonEvent(4, 9008000, 1042350201);
    InitializeCommonEvent(5, 9008000, 1042350202);
    InitializeCommonEvent(6, 9008000, 1042350102);
    InitializeCommonEvent(7, 9008000, 1042350103);
    InitializeCommonEvent(8, 9008000, 1042350104);
    InitializeCommonEvent(9, 9008000, 1042350105);
    InitializeCommonEvent(10, 9008000, 1042350106);
    InitializeCommonEvent(11, 9008000, 1042350223);
    InitializeCommonEvent(12, 9008000, 1042350107);
    InitializeCommonEvent(13, 9008000, 1042350108);
    InitializeCommonEvent(14, 9008000, 1042350109);
    InitializeCommonEvent(15, 9008000, 1042350600);
    InitializeCommonEvent(16, 9008000, 1042350110);
    InitializeCommonEvent(17, 9008000, 1042350111);
    InitializeCommonEvent(18, 9008000, 1042350112);
    InitializeCommonEvent(19, 9008000, 1042350113);
    InitializeCommonEvent(20, 9008000, 1042350114);
    
    InitializeEvent(0, 1042352222, 1042350222, 1042352222);
    InitializeEvent(1, 1042352222, 1042350223, 1042352223);
    InitializeEvent(2, 1042352222, 1042350224, 1042352223);
    InitializeCommonEvent(0, 90005633, 580340, 580040, 1042350600, 30017, 20017, 1042351600, 1042351610);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005250, 1042350210, 1042352210, 0, -1);
    InitializeCommonEvent(0, 90005201, 1042350200, 30016, 20016, 1101004800, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005251, 1042350200, 1101004800, 0, -1);
    InitializeCommonEvent(0, 90005201, 1042350201, 30016, 20016, 1101004800, 1065353216, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005251, 1042350201, 1101004800, 1065353216, -1);
    InitializeCommonEvent(0, 90005201, 1042350202, 30016, 20016, 1101004800, 1069547520, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005251, 1042350202, 1101004800, 1069547520, -1);
});

$Event(1042352222, Restart, function(X0_4, X4_4) {
    EndIf(CharacterDead(X0_4));
    WaitFor(InArea(10000, X4_4));
    SetSpEffect(X0_4, 8080);
});


