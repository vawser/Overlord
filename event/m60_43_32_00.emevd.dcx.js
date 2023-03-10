// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1043320100);
    InitializeCommonEvent(1, 9008000, 1043320200);
    InitializeCommonEvent(2, 9008000, 1043320201);
    InitializeCommonEvent(3, 9008000, 1043320101);
    InitializeCommonEvent(4, 9008000, 1043320102);
    InitializeCommonEvent(5, 9008000, 1043320103);
    InitializeCommonEvent(6, 9008000, 1043320104);
    InitializeCommonEvent(7, 9008000, 1043320105);
    InitializeCommonEvent(8, 9008000, 1043320215);
    InitializeCommonEvent(9, 9008000, 1043320106);
    InitializeCommonEvent(10, 9008000, 1043320107);
    InitializeCommonEvent(11, 9008000, 1043320108);
    InitializeCommonEvent(12, 9008000, 1043320109);
    InitializeCommonEvent(13, 9008000, 1043320110);
    InitializeCommonEvent(14, 9008000, 1043320111);
    InitializeCommonEvent(15, 9008000, 1043320112);
    InitializeCommonEvent(16, 9008000, 1043320113);
    InitializeCommonEvent(17, 9008000, 1043320114);
    InitializeCommonEvent(18, 9008000, 1043320115);
    InitializeCommonEvent(19, 9008000, 1043320116);
    InitializeCommonEvent(20, 9008000, 1043320117);
    InitializeCommonEvent(21, 9008000, 1043320118);
    InitializeCommonEvent(22, 9008000, 1043320119);
    InitializeCommonEvent(23, 9008000, 1043320120);
    InitializeCommonEvent(24, 9008000, 1043320121);
    InitializeCommonEvent(25, 9008000, 1043320122);
    InitializeCommonEvent(26, 9008000, 1043320123);
    InitializeCommonEvent(27, 9008000, 1043320124);
    InitializeCommonEvent(28, 9008000, 1043320125);
    InitializeCommonEvent(29, 9008000, 1043320126);
    InitializeCommonEvent(30, 9008000, 1043320127);
    InitializeCommonEvent(31, 9008000, 1043320128);
    InitializeCommonEvent(32, 9008000, 1043320129);
    InitializeCommonEvent(33, 9008000, 1043320130);
    InitializeCommonEvent(34, 9008000, 1043320131);
    InitializeCommonEvent(35, 9008000, 1043320132);
    InitializeCommonEvent(36, 9008000, 1043320133);
    InitializeCommonEvent(37, 9008000, 1043320134);
    InitializeCommonEvent(38, 9008000, 1043320135);
    InitializeCommonEvent(39, 9008000, 1043320136);
    InitializeCommonEvent(40, 9008000, 1043320137);
    InitializeCommonEvent(41, 9008000, 1043320138);
    InitializeCommonEvent(42, 9008000, 1043320139);
    InitializeCommonEvent(43, 9008000, 1043320140);
    InitializeCommonEvent(44, 9008000, 1043320141);
    InitializeCommonEvent(45, 9008000, 1043320142);
    
    InitializeCommonEvent(0, 9005910, 1043321940, 1043320101, 1043320101, 1);
    InitializeCommonEvent(0, 9005911, 1043321941);
    InitializeCommonEvent(0, 9005912, 1043320100, 605055);
    InitializeCommonEvent(0, 90005550, 1043320500, 1043321500, 43323500);
    InitializeEvent(0, 1043322215, 1043320215, 1043322215);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005261, 1043320200, 1043322200, 1084227584, 0, 0);
    InitializeCommonEvent(0, 90005261, 1043320201, 1043322200, 1084227584, 0, 0);
    InitializeCommonEvent(0, 90005251, 1043320202, 1084227584, 0, 3005);
});

$Event(1043322215, Restart, function(X0_4, X4_4) {
    EndIf(CharacterDead(X0_4));
    WaitFor(InArea(10000, X4_4));
    SetSpEffect(X0_4, 8080);
});


