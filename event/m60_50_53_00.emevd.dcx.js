// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1050530210);
    InitializeCommonEvent(1, 9008000, 1050530100);
    InitializeCommonEvent(2, 9008000, 1050530101);
    InitializeCommonEvent(3, 9008000, 1050530102);
    InitializeCommonEvent(4, 9008000, 1050530103);
    InitializeCommonEvent(5, 9008000, 1050530104);
    InitializeCommonEvent(6, 9008000, 1050530201);
    InitializeCommonEvent(7, 9008000, 1050530105);
    InitializeCommonEvent(8, 9008000, 1050530106);
    InitializeCommonEvent(9, 9008000, 1050530107);
    InitializeCommonEvent(10, 9008000, 1050530108);
    InitializeCommonEvent(11, 9008000, 1050530109);
    InitializeCommonEvent(12, 9008000, 1050530110);
    InitializeCommonEvent(13, 9008000, 1050530111);
    InitializeCommonEvent(14, 9008000, 1050530112);
    InitializeCommonEvent(15, 9008000, 1050530113);
    InitializeCommonEvent(16, 9008000, 1050530114);
    InitializeCommonEvent(17, 9008000, 1050530115);
    InitializeCommonEvent(18, 9008000, 1050530116);
    InitializeCommonEvent(19, 9008000, 1050530117);
    InitializeCommonEvent(20, 9008000, 1050530118);
    InitializeCommonEvent(21, 9008000, 1050530119);
    InitializeCommonEvent(22, 9008000, 1050530120);
    InitializeCommonEvent(23, 9008000, 1050530121);
    InitializeCommonEvent(24, 9008000, 1050530122);
    InitializeCommonEvent(25, 9008000, 1050530123);
    InitializeCommonEvent(26, 9008000, 1050530124);
    InitializeCommonEvent(27, 9008000, 1050530125);
    InitializeCommonEvent(28, 9008000, 1050530126);
    InitializeCommonEvent(29, 9008000, 1050530127);
    InitializeCommonEvent(30, 9008000, 1050530128);
    InitializeCommonEvent(31, 9008000, 1050530129);
    InitializeCommonEvent(32, 9008000, 1050530130);
    InitializeCommonEvent(33, 9008000, 1050530131);
    InitializeCommonEvent(34, 9008000, 1050530132);
    InitializeCommonEvent(35, 9008000, 1050530133);
    InitializeCommonEvent(36, 9008000, 1050530134);
    
    InitializeEvent(0, 1050532200, 1050535200);
    InitializeCommonEvent(0, 90005300, 1050530210, 1050530210, 1050530700, 0, 0);
    InitializeCommonEvent(0, 900005610, 1050531680, 100, 800, 1050538620);
    InitializeCommonEvent(0, 90005683, 62511, 1050531600, 211, 78592, 0);
    InitializeCommonEvent(0, 900005610, 1050531685, 100, 800, 1050538600);
    InitializeCommonEvent(0, 90005620, 1050530570, 1050531570, 1050531571, 1050531572, 1050532570, 1050532571, 1050532572);
    InitializeCommonEvent(0, 90005621, 1050530570, 1050531573);
    InitializeCommonEvent(0, 90005631, 1050531500, 61050);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005200, 1050530201, 30004, 20004, 1050532201, 0, 0, 0, 0, 0);
});

$Event(1050532200, Restart, function(X0_4) {
    DisableCharacterCollision(X0_4);
    DisableLockOnPoint(X0_4, 220);
    EndEvent();
});


