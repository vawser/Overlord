// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd N:\GR\data\Param\event\m60.emevd     
// @linked    [0,82,166]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1036450950);
    InitializeCommonEvent(1, 9008000, 1036450250);
    InitializeCommonEvent(2, 9008000, 1036450220);
    InitializeCommonEvent(3, 9008000, 1036450221);
    InitializeCommonEvent(4, 9008000, 1036450222);
    InitializeCommonEvent(5, 9008000, 1036450223);
    InitializeCommonEvent(6, 9008000, 1036450224);
    InitializeCommonEvent(7, 9008000, 1036450225);
    InitializeCommonEvent(8, 9008000, 1036450241);
    InitializeCommonEvent(9, 9008000, 1036450242);
    InitializeCommonEvent(10, 9008000, 1036450243);
    InitializeCommonEvent(11, 9008000, 1036450100);
    InitializeCommonEvent(12, 9008000, 1036450101);
    InitializeCommonEvent(13, 9008000, 1036450102);
    InitializeCommonEvent(14, 9008000, 1036450103);
    InitializeCommonEvent(15, 9008000, 1036450340);
    InitializeCommonEvent(16, 9008000, 1036450104);
    
    RegisterBonfire(1036450000, 1036451950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005261, 1036450340, 1036452340, 1092616192, 0, 1700);
    InitializeCommonEvent(0, 90005860, 1036450800, 0, 1036450340, 0, 1036450400, 0);
    InitializeCommonEvent(0, 90005870, 1036450340, 904980604, 24);
    InitializeCommonEvent(0, 90005605, 1036451620, 3154492, 1034482620, 0, 1036452620, 1036452621, 1036452622, 0, 0, 0, 0);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005261, 1036450220, 1036452220, 1092616192, 0, -1);
    InitializeCommonEvent(0, 90005261, 1036450221, 1036452220, 1092616192, 1065353216, -1);
    InitializeCommonEvent(0, 90005261, 1036450222, 1036452220, 1092616192, 1056964608, -1);
    InitializeCommonEvent(0, 90005251, 1036450223, 1088421888, 0, -1);
    InitializeCommonEvent(0, 90005251, 1036450224, 1088421888, 0, -1);
    InitializeCommonEvent(0, 90005251, 1036450225, 1088421888, 0, -1);
    InitializeCommonEvent(0, 90005261, 1036450226, 1036452226, 0, 0, -1);
    InitializeCommonEvent(0, 90005261, 1036450227, 1036452226, 0, 1065353216, -1);
    InitializeCommonEvent(0, 90005261, 1036450228, 1036452226, 0, 1056964608, -1);
    InitializeCommonEvent(0, 90005261, 1036450229, 1036452226, 0, 1050253722, -1);
    InitializeCommonEvent(0, 90005261, 1036450230, 1036452226, 0, 1065353216, -1);
    InitializeCommonEvent(0, 90005261, 1036450231, 1036452226, 0, 0, -1);
    InitializeCommonEvent(0, 90005261, 1036450241, 1036452250, 0, 1056964608, -1);
    InitializeCommonEvent(0, 90005261, 1036450242, 1036452250, 0, 1050253722, -1);
    InitializeCommonEvent(0, 90005261, 1036450243, 1036452250, 0, 1065353216, -1);
    InitializeCommonEvent(0, 90005261, 1036450250, 1036452250, 0, 0, -1);
});

$Event(1036452200, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(ThisEventSlot());
    DisableCharacterAI(X0_4);
    SetSpEffect(X0_4, 8560);
    DisableCharacter(X0_4);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    area = EntityInRadiusOfEntity(10000, X0_4, X4_4, 1);
    areaChrSp = area && chrSp;
    WaitFor(HasDamageType(X0_4, 0, DamageType.Unspecified) || areaChrSp);
    SetNetworkconnectedThisEventSlot(ON);
    if (areaChrSp.Passed) {
        WaitFixedTimeSeconds(X8_4);
        if (Signed(X12_4) != -1) {
            ForceAnimationPlayback(X0_4, X12_4, true, false, false);
        }
    }
L1:
    EnableCharacterAI(X0_4);
    EnableCharacter(X0_4);
});


