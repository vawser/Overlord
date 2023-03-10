// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1038480950);
    InitializeCommonEvent(1, 9008000, 1038480100);
    InitializeCommonEvent(2, 9008000, 1038480101);
    InitializeCommonEvent(3, 9008000, 1038480102);
    InitializeCommonEvent(4, 9008000, 1038480103);
    InitializeCommonEvent(5, 9008000, 1038480104);
    InitializeCommonEvent(6, 9008000, 1038480105);
    InitializeCommonEvent(7, 9008000, 1038480106);
    InitializeCommonEvent(8, 9008000, 1038480107);
    InitializeCommonEvent(9, 9008000, 1038480108);
    InitializeCommonEvent(10, 9008000, 1038480109);
    InitializeCommonEvent(11, 9008000, 1038480110);
    InitializeCommonEvent(12, 9008000, 1038480111);
    InitializeCommonEvent(13, 9008000, 1038480112);
    InitializeCommonEvent(14, 9008000, 1038480200);
    InitializeCommonEvent(15, 9008000, 1038480201);
    InitializeCommonEvent(16, 9008000, 1038480202);
    InitializeCommonEvent(17, 9008000, 1038480203);
    InitializeCommonEvent(18, 9008000, 1038480204);
    InitializeCommonEvent(19, 9008000, 1038480205);
    InitializeCommonEvent(20, 9008000, 1038480206);
    InitializeCommonEvent(21, 9008000, 1038480207);
    InitializeCommonEvent(22, 9008000, 1038480208);
    InitializeCommonEvent(23, 9008000, 1038480209);
    InitializeCommonEvent(24, 9008000, 1038480210);
    InitializeCommonEvent(25, 9008000, 1038480211);
    InitializeCommonEvent(26, 9008000, 1038480113);
    InitializeCommonEvent(27, 9008000, 1038480114);
    InitializeCommonEvent(28, 9008000, 1038480115);
    InitializeCommonEvent(29, 9008000, 1038480116);
    InitializeCommonEvent(30, 9008000, 1038480117);
    InitializeCommonEvent(31, 9008000, 1038480118);
    InitializeCommonEvent(32, 9008000, 1038480119);
    InitializeCommonEvent(33, 9008000, 1038480120);
    InitializeCommonEvent(34, 9008000, 1038480121);
    InitializeCommonEvent(35, 9008000, 1038480122);
    InitializeCommonEvent(36, 9008000, 1038480123);
    InitializeCommonEvent(37, 9008000, 1038480124);
    InitializeCommonEvent(38, 9008000, 1038480125);
    InitializeCommonEvent(39, 9008000, 1038480126);
    InitializeCommonEvent(40, 9008000, 1038480127);
    InitializeCommonEvent(41, 9008000, 1038480128);
    InitializeCommonEvent(42, 9008000, 1038480800);
    
    RegisterBonfire(1038480000, 1038481950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005870, 1038480800, 904810601, 18);
    InitializeCommonEvent(0, 90005860, 1038480800, 0, 1038480800, 0, 30200, 0);
    InitializeCommonEvent(0, 90005872, 1038480800, 18, 0);
    InitializeEvent(0, 1038482580, 0);
    InitializeCommonEvent(0, 90005683, 62201, 1038481684, 209, 78290, 78290);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1038480700, true);
    InitializeCommonEvent(0, 90005261, 1038480200, 1038482200, 0, 1065353216, 1705);
    InitializeCommonEvent(0, 90005261, 1038480201, 1038482200, 0, 0, 1705);
    InitializeCommonEvent(0, 90005261, 1038480202, 1038482200, 0, 1056964608, 1705);
    InitializeCommonEvent(0, 90005261, 1038480203, 1038482200, 0, 1068708659, 1705);
    InitializeCommonEvent(0, 90005261, 1038480204, 1038482200, 0, 1065353216, 1705);
    InitializeCommonEvent(0, 90005261, 1038480205, 1038482200, 0, 0, 1705);
    InitializeCommonEvent(0, 90005261, 1038480206, 1038482200, 0, 1056964608, 1705);
    InitializeCommonEvent(0, 90005261, 1038480207, 1038482200, 0, 1068708659, 1705);
    InitializeCommonEvent(0, 90005261, 1038480208, 1038482200, 0, 1065353216, 1705);
    InitializeCommonEvent(0, 90005261, 1038480209, 1038482200, 0, 1056964608, 1705);
    InitializeCommonEvent(0, 90005261, 1038480210, 1038482200, 0, 1068708659, 1705);
    InitializeCommonEvent(0, 90005261, 1038480211, 1038482200, 0, 1065353216, 1705);
});

$Event(1038482580, Default, function() {
    RegisterLadder(1038480580, 1038480581, 1038481580);
    RegisterLadder(1038480582, 1038480583, 1038481582);
    RegisterLadder(1038480584, 1038480585, 1038481584);
});


