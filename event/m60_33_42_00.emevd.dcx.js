// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd N:\GR\data\Param\event\m60.emevd     
// @linked    [0,82,166]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1033420810);
    InitializeCommonEvent(1, 9008000, 1033420800);
    InitializeCommonEvent(2, 9008000, 1033420100);
    InitializeCommonEvent(3, 9008000, 1033420101);
    InitializeCommonEvent(4, 9008000, 1033420102);
    InitializeCommonEvent(5, 9008000, 1033420103);
    InitializeCommonEvent(6, 9008000, 1033420104);
    InitializeCommonEvent(7, 9008000, 1033420105);
    InitializeCommonEvent(8, 9008000, 1033420106);
    InitializeCommonEvent(9, 9008000, 1033420107);
    InitializeCommonEvent(10, 9008000, 1033420108);
    InitializeCommonEvent(11, 9008000, 1033420109);
    InitializeCommonEvent(12, 9008000, 1033420110);
    InitializeCommonEvent(13, 9008000, 1033420111);
    InitializeCommonEvent(14, 9008000, 1033420112);
    InitializeCommonEvent(15, 9008000, 1033420113);
    InitializeCommonEvent(16, 9008000, 1033420114);
    InitializeCommonEvent(17, 9008000, 1033420115);
    InitializeCommonEvent(18, 9008000, 1033420116);
    InitializeCommonEvent(19, 9008000, 1033420117);
    InitializeCommonEvent(20, 9008000, 1033420118);
    InitializeCommonEvent(21, 9008000, 1033420119);
    InitializeCommonEvent(22, 9008000, 1033420120);
    InitializeCommonEvent(23, 9008000, 1033420121);
    InitializeCommonEvent(24, 9008000, 1033420122);
    InitializeCommonEvent(25, 9008000, 1033420123);
    InitializeCommonEvent(26, 9008000, 1033420124);
    InitializeCommonEvent(27, 9008000, 1033420125);
    InitializeCommonEvent(28, 9008000, 1033420126);
    InitializeCommonEvent(29, 9008000, 1033420127);
    InitializeCommonEvent(30, 9008000, 1033420128);
    InitializeCommonEvent(31, 9008000, 1033420129);
    InitializeCommonEvent(32, 9008000, 1033420130);
    InitializeCommonEvent(33, 9008000, 1033420131);
    InitializeCommonEvent(34, 9008000, 1033420132);
    InitializeCommonEvent(35, 9008000, 1033420133);
    InitializeCommonEvent(36, 9008000, 1033420610);
    InitializeCommonEvent(37, 9008000, 1033420134);
    InitializeCommonEvent(38, 9008000, 1033420135);
    InitializeCommonEvent(39, 9008000, 1033420136);
    InitializeCommonEvent(40, 9008000, 1033420137);
    InitializeCommonEvent(41, 9008000, 1033420138);
    InitializeCommonEvent(42, 9008000, 1033420139);
    InitializeCommonEvent(43, 9008000, 1033420140);
    InitializeCommonEvent(44, 9008000, 1033420141);
    InitializeCommonEvent(45, 9008000, 1033420142);
    InitializeCommonEvent(46, 9008000, 1033420143);
    InitializeCommonEvent(47, 9008000, 1033420144);
    InitializeCommonEvent(48, 9008000, 1033420145);
    InitializeCommonEvent(49, 9008000, 1033420146);
    InitializeCommonEvent(50, 9008000, 1033420147);
    InitializeCommonEvent(51, 9008000, 1033420148);
    InitializeCommonEvent(52, 9008000, 1033420149);
    InitializeCommonEvent(53, 9008000, 1033420150);
    InitializeCommonEvent(54, 9008000, 1033420151);
    InitializeCommonEvent(55, 9008000, 1033420152);
    InitializeCommonEvent(56, 9008000, 1033420153);
    InitializeCommonEvent(57, 9008000, 1033420154);
    InitializeCommonEvent(58, 9008000, 1033420155);
    InitializeCommonEvent(59, 9008000, 1033420156);
    InitializeCommonEvent(60, 9008000, 1033420157);
    InitializeCommonEvent(61, 9008000, 1033420158);
    InitializeCommonEvent(62, 9008000, 1033420159);
    InitializeCommonEvent(63, 9008000, 1033420160);
    InitializeCommonEvent(64, 9008000, 1033420161);
    InitializeCommonEvent(65, 9008000, 1033420162);
    InitializeCommonEvent(66, 9008000, 1033420163);
    
    InitializeEvent(0, 1033422211, 0);
    InitializeEvent(0, 1033422611, 0);
    InitializeCommonEvent(0, 90005300, 1033420610, 1033420610, 0, 0, 0);
    InitializeCommonEvent(0, 90005880, 1033420800, 1033420805, 1033422800, 1033420800, 30265, 2761020, 1033422805);
    InitializeCommonEvent(0, 90005881, 1033420800, 1033420805, 1033422801, 1033422802, 20300, 1033421805, 2761020, 1033422805);
    InitializeCommonEvent(0, 90005882, 1033420800, 1033420805, 1033422800, 1033420800, 1033422806, 1033425810, 1033421800, 1033420810, 1033422810, 902100521, -1, 20020);
    InitializeCommonEvent(0, 90005883, 1033420800, 1033420805, 1033421805);
    InitializeCommonEvent(0, 90005885, 1033420800, 0, 1033422806, 1033422807, 0, 1);
});

$Event(1033422211, Restart, function() {
    EndIf(EventFlag(1033420610));
    DisableCharacterAI(1033420610);
    ForceAnimationPlayback(1033420610, 30008, false, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    dmgArea = HasDamageType(1033420610, 10000, DamageType.Unspecified)
        || EntityInRadiusOfEntity(1033420610, 40000, 7, 1);
    WaitFor(dmgArea && chrSp);
    SetEventFlagID(1033420610, ON);
    ForceAnimationPlayback(1033420610, 20016, false, true, false);
});

$Event(1033422611, Restart, function() {
    EndIf(EventFlag(1033420610));
    DisableCharacter(1033420610);
    DisableCharacterCollision(1033420610);
    if (!PlayerIsInOwnWorld()) {
        EnableCharacterInvincibility(1033420610);
    }
    WaitFor(EventFlag(1034432616));
    EnableCharacter(1033420610);
    EnableCharacterCollision(1033420610);
    EnableCharacterImmortality(1033420610);
    DisableCharacterHPBarDisplay(1033420610);
});


