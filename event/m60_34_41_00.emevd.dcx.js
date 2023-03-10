// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd        
// @linked    [0]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1034410950);
    InitializeCommonEvent(1, 9008000, 1034410100);
    InitializeCommonEvent(2, 9008000, 1034410101);
    InitializeCommonEvent(3, 9008000, 1034410102);
    InitializeCommonEvent(4, 9008000, 1034410103);
    InitializeCommonEvent(5, 9008000, 1034410104);
    InitializeCommonEvent(6, 9008000, 1034410105);
    InitializeCommonEvent(7, 9008000, 1034410106);
    InitializeCommonEvent(8, 9008000, 1034410107);
    InitializeCommonEvent(9, 9008000, 1034410108);
    InitializeCommonEvent(10, 9008000, 1034410109);
    InitializeCommonEvent(11, 9008000, 1034410110);
    InitializeCommonEvent(12, 9008000, 1034410111);
    InitializeCommonEvent(13, 9008000, 1034410112);
    InitializeCommonEvent(14, 9008000, 1034410113);
    InitializeCommonEvent(15, 9008000, 1034410114);
    InitializeCommonEvent(16, 9008000, 1034410115);
    InitializeCommonEvent(17, 9008000, 1034410116);
    InitializeCommonEvent(18, 9008000, 1034410117);
    InitializeCommonEvent(19, 9008000, 1034410118);
    InitializeCommonEvent(20, 9008000, 1034410119);
    InitializeCommonEvent(21, 9008000, 1034410120);
    InitializeCommonEvent(22, 9008000, 1034410121);
    InitializeCommonEvent(23, 9008000, 1034410122);
    InitializeCommonEvent(24, 9008000, 1034410123);
    InitializeCommonEvent(25, 9008000, 1034410124);
    InitializeCommonEvent(26, 9008000, 1034410125);
    InitializeCommonEvent(27, 9008000, 1034410126);
    InitializeCommonEvent(28, 9008000, 1034410127);
    InitializeCommonEvent(29, 9008000, 1034410128);
    InitializeCommonEvent(30, 9008000, 1034410129);
    InitializeCommonEvent(31, 9008000, 1034410130);
    InitializeCommonEvent(32, 9008000, 1034410131);
    InitializeCommonEvent(33, 9008000, 1034410132);
    InitializeCommonEvent(34, 9008000, 1034410133);
    InitializeCommonEvent(35, 9008000, 1034410134);
    InitializeCommonEvent(36, 9008000, 1034410135);
    InitializeCommonEvent(37, 9008000, 1034410136);
    InitializeCommonEvent(38, 9008000, 1034410137);
    InitializeCommonEvent(39, 9008000, 1034410138);
    InitializeCommonEvent(40, 9008000, 1034410139);
    InitializeCommonEvent(41, 9008000, 1034410140);
    InitializeCommonEvent(42, 9008000, 1034410141);
    InitializeCommonEvent(43, 9008000, 1034410142);
    InitializeCommonEvent(44, 9008000, 1034410143);
    InitializeCommonEvent(45, 9008000, 1034410144);
    InitializeCommonEvent(46, 9008000, 1034410145);
    InitializeCommonEvent(47, 9008000, 1034410146);
    InitializeCommonEvent(48, 9008000, 1034410147);
    InitializeCommonEvent(49, 9008000, 1034410148);
    InitializeCommonEvent(50, 9008000, 1034410149);
    InitializeCommonEvent(51, 9008000, 1034410150);
    InitializeCommonEvent(52, 9008000, 1034410151);
    InitializeCommonEvent(53, 9008000, 1034410152);
    InitializeCommonEvent(54, 9008000, 1034410153);
    InitializeCommonEvent(55, 9008000, 1034410154);
    InitializeCommonEvent(56, 9008000, 1034410155);
    InitializeCommonEvent(57, 9008000, 1034410156);
    InitializeCommonEvent(58, 9008000, 1034410157);
    InitializeCommonEvent(59, 9008000, 1034410158);
    InitializeCommonEvent(60, 9008000, 1034410159);
    InitializeCommonEvent(61, 9008000, 1034410160);
    InitializeCommonEvent(62, 9008000, 1034410161);
    InitializeCommonEvent(63, 9008000, 1034410162);
    InitializeCommonEvent(64, 9008000, 1034410163);
    InitializeCommonEvent(65, 9008000, 1034410164);
    InitializeCommonEvent(66, 9008000, 1034410165);
    InitializeCommonEvent(67, 9008000, 1034410166);
    InitializeCommonEvent(68, 9008000, 1034410167);
    InitializeCommonEvent(69, 9008000, 1034410168);
    InitializeCommonEvent(70, 9008000, 1034410169);
    InitializeCommonEvent(71, 9008000, 1034410170);
    InitializeCommonEvent(72, 9008000, 1034410171);
    InitializeCommonEvent(73, 9008000, 1034410172);
    
    RegisterBonfire(1034410000, 1034411950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005501, 1034410510, 1034410511, 1, 1034411510, 1034411511, 1034411512, 1034410512);
    InitializeEvent(0, 1034412510, 0);
    InitializeCommonEvent(0, 90005640, 1034410540, 1034411540);
});

$Event(1034412510, Default, function() {
    InitializeCommonEvent(0, 90005500, 1034410510, 1034410511, 1, 1034411510, 1034411511, 1034413511, 1034411512, 1034413512, 1034412511, 1034412512, 1034410512, 1034412513, 0);
});

$Event(1034410519, Default, function() {
    EndIf(EventFlag(1034410519));
    SetEventFlagID(1034410510, OFF);
});


