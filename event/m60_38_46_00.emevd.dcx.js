// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1038460100);
    InitializeCommonEvent(1, 9008000, 1038460101);
    InitializeCommonEvent(2, 9008000, 1038460950);
    InitializeCommonEvent(3, 9008000, 1038460200);
    InitializeCommonEvent(4, 9008000, 1038460201);
    InitializeCommonEvent(5, 9008000, 1038460102);
    InitializeCommonEvent(6, 9008000, 1038460103);
    InitializeCommonEvent(7, 9008000, 1038460104);
    InitializeCommonEvent(8, 9008000, 1038460105);
    InitializeCommonEvent(9, 9008000, 1038460106);
    InitializeCommonEvent(10, 9008000, 1038460107);
    InitializeCommonEvent(11, 9008000, 1038460108);
    InitializeCommonEvent(12, 9008000, 1038460202);
    InitializeCommonEvent(13, 9008000, 1038460109);
    InitializeCommonEvent(14, 9008000, 1038460110);
    InitializeCommonEvent(15, 9008000, 1038460111);
    InitializeCommonEvent(16, 9008000, 1038460112);
    InitializeCommonEvent(17, 9008000, 1038460113);
    InitializeCommonEvent(18, 9008000, 1038460340);
    InitializeCommonEvent(19, 9008000, 1038460114);
    InitializeCommonEvent(20, 9008000, 1038460115);
    InitializeCommonEvent(21, 9008000, 1038460116);
    InitializeCommonEvent(22, 9008000, 1038460117);
    InitializeCommonEvent(23, 9008000, 1038460118);
    InitializeCommonEvent(24, 9008000, 1038460119);
    InitializeCommonEvent(25, 9008000, 1038460120);
    InitializeCommonEvent(26, 9008000, 1038460121);
    InitializeCommonEvent(27, 9008000, 1038460122);
    InitializeCommonEvent(28, 9008000, 1038460123);
    InitializeCommonEvent(29, 9008000, 1038460124);
    InitializeCommonEvent(30, 9008000, 1038460125);
    InitializeCommonEvent(31, 9008000, 1038460126);
    InitializeCommonEvent(32, 9008000, 1038460127);
    InitializeCommonEvent(33, 9008000, 1038460128);
    InitializeCommonEvent(34, 9008000, 1038460129);
    InitializeCommonEvent(35, 9008000, 1038460130);
    InitializeCommonEvent(36, 9008000, 1038460131);
    InitializeCommonEvent(37, 9008000, 1038460132);
    InitializeCommonEvent(38, 9008000, 1038460133);
    InitializeCommonEvent(39, 9008000, 1038460134);
    InitializeCommonEvent(40, 9008000, 1038460135);
    InitializeCommonEvent(41, 9008000, 1038460136);
    InitializeCommonEvent(42, 9008000, 1038460137);
    InitializeCommonEvent(43, 9008000, 1038460138);
    InitializeCommonEvent(44, 9008000, 1038460139);
    InitializeCommonEvent(45, 9008000, 1038460140);
    InitializeCommonEvent(46, 9008000, 1038460141);
    InitializeCommonEvent(47, 9008000, 1038460142);
    InitializeCommonEvent(48, 9008000, 1038460143);
    InitializeCommonEvent(49, 9008000, 1038460144);
    InitializeCommonEvent(50, 9008000, 1038460145);
    InitializeCommonEvent(51, 9008000, 1038460146);
    InitializeCommonEvent(52, 9008000, 1038460147);
    InitializeCommonEvent(53, 9008000, 1038460148);
    
    RegisterBonfire(1038460000, 1038461950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 900005610, 1038461610, 100, 800, 0);
    InitializeCommonEvent(0, 90005511, 1038460560, 1038461550, 1038463560, 257018, 0);
    InitializeCommonEvent(0, 90005512, 1038460560, 1038462550, 1038462551);
    InitializeCommonEvent(0, 90005640, 1038460540, 1038461540);
    InitializeEvent(0, 1038462200, 1038460200);
    InitializeEvent(1, 1038462200, 1038460201);
    InitializeEvent(2, 1038462200, 1038460202);
    InitializeCommonEvent(0, 90005300, 1038460340, 1038460340, 0, 0, 0);
    InitializeEvent(0, 1038460510, 0);
    InitializeCommonEvent(0, 90005501, 1038460650, 1038460651, 0, 1038461650, 1038461651, 1038461652, 1038460652);
});

$Event(50, Default, function() {
    InitializeEvent(0, 1038460519, 0);
    InitializeEvent(0, 1038462340, 0);
});

$Event(1038462200, Restart, function(X0_4) {
    ForceCharacterDeath(X0_4, false);
});

$Event(1038462210, Restart, function(X0_4) {
    DisableCharacter(X0_4);
    WaitFor(InArea(10000, 1038462210));
    CreateAssetfollowingSFX(1038461210, 100, 620383);
    EnableCharacter(X0_4);
    WaitFixedTimeSeconds(2);
    DeleteAssetfollowingSFX(1038461210, true);
    ForceAnimationPlayback(X0_4, 20001, false, true, false);
    EndEvent();
});

$Event(1038462340, Restart, function() {
    EndIf(EventFlag(1038460340));
    DisableCharacterHPBarDisplay(1038460340);
    SetSpEffect(1038460340, 12189);
    WaitFixedTimeSeconds(3);
    ClearSpEffect(1038460340, 12189);
    EnableCharacterHPBarDisplay(1038460340);
});

$Event(1038460510, Default, function() {
    InitializeCommonEvent(0, 90005500, 1038460650, 1038460651, 0, 1038461650, 1038461651, 1038463651, 1038461652, 1038463652, 1038462651, 1038462652, 1038460652, 1038462653, 0);
});

$Event(1038460519, Default, function() {
    EndIf(ThisEventSlot());
    WaitFor(!PlayerInMap(12, 1, 0, 0));
    SetEventFlagID(1038460650, ON);
});


