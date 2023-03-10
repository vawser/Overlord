// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\m60.emevd N:\GR\data\Param\event\common_macro.emevd     
// @linked    [0,82,148]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1034450100);
    InitializeCommonEvent(1, 9008000, 1034450200);
    InitializeCommonEvent(2, 9008000, 1034450101);
    InitializeCommonEvent(3, 9008000, 1034450102);
    InitializeCommonEvent(4, 9008000, 1034450103);
    InitializeCommonEvent(5, 9008000, 1034450223);
    InitializeCommonEvent(6, 9008000, 1034450224);
    InitializeCommonEvent(7, 9008000, 1034450225);
    InitializeCommonEvent(8, 9008000, 1034450226);
    InitializeCommonEvent(9, 9008000, 1034450227);
    InitializeCommonEvent(10, 9008000, 1034450228);
    InitializeCommonEvent(11, 9008000, 1034450229);
    InitializeCommonEvent(12, 9008000, 1034450230);
    InitializeCommonEvent(13, 9008000, 1034450231);
    InitializeCommonEvent(14, 9008000, 1034450800);
    InitializeCommonEvent(15, 9008000, 1034450104);
    InitializeCommonEvent(16, 9008000, 1034450105);
    InitializeCommonEvent(17, 9008000, 1034450106);
    
    InitializeCommonEvent(0, 90005870, 1034450800, 904502600, 25);
    InitializeCommonEvent(0, 90005861, 1034450800, 0, 1034450800, 1, 30210, 30061, 0);
    InitializeEvent(0, 1034452800, 0);
    InitializeEvent(0, 1034452805, 0);
    InitializeCommonEvent(0, 90005211, 1034450800, 30000, 20000, 1034452800, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 1034450800, 1034452800, 1084227584, 0, -1);
    InitializeCommonEvent(0, 90005251, 1034450227, 1088421888, 0, 1701);
    InitializeCommonEvent(0, 90005251, 1034450228, 1088421888, 0, 1701);
    InitializeCommonEvent(0, 90005251, 1034450229, 1088421888, 0, 1701);
    InitializeCommonEvent(0, 90005251, 1034450230, 1088421888, 0, 1701);
    InitializeCommonEvent(0, 90005251, 1034450231, 1088421888, 0, 1701);
    InitializeCommonEvent(0, 90005251, 1034450223, 1088421888, 0, 1701);
    InitializeCommonEvent(0, 90005251, 1034450224, 1088421888, 0, 1701);
    InitializeCommonEvent(0, 90005251, 1034450225, 1088421888, 0, 1701);
    InitializeCommonEvent(0, 90005251, 1034450226, 1088421888, 0, 1701);
    InitializeCommonEvent(0, 90005460, 1034450200);
    InitializeCommonEvent(0, 90005460, 1034450201);
    InitializeCommonEvent(0, 90005460, 1034450202);
    InitializeCommonEvent(0, 90005460, 1034450203);
    InitializeCommonEvent(0, 90005460, 1034450204);
    InitializeCommonEvent(0, 90005461, 1034450200);
    InitializeCommonEvent(0, 90005462, 1034450200);
    InitializeCommonEvent(0, 90005461, 1034450201);
    InitializeCommonEvent(0, 90005462, 1034450201);
    InitializeCommonEvent(0, 90005461, 1034450202);
    InitializeCommonEvent(0, 90005462, 1034450202);
    InitializeCommonEvent(0, 90005461, 1034450203);
    InitializeCommonEvent(0, 90005462, 1034450203);
    InitializeCommonEvent(0, 90005461, 1034450204);
    InitializeCommonEvent(0, 90005462, 1034450204);
    InitializeCommonEvent(0, 90005201, 1034450200, 30010, -1, 0, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 900005610, 1034451680, 100, 800, 0);
    InitializeCommonEvent(0, 90005620, 1034450570, 1034451570, 1034451571, 1034451572, 1034452571, 1034452572, 1034452573);
    InitializeCommonEvent(0, 90005621, 1034450570, 1034451573);
});

$Event(1034452800, Restart, function() {
    EndIf(EventFlag(1034450800));
    SetSpEffect(1034450800, 10247);
});

$Event(1034452805, Restart, function() {
    EndIf(EventFlag(1034450800));
    SetCharacterHome(1034450800, 1034452810);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});


