// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd        
// @linked    [0]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1044310100);
    InitializeCommonEvent(1, 9008000, 1044310101);
    InitializeCommonEvent(2, 9008000, 1044310102);
    InitializeCommonEvent(3, 9008000, 1044310103);
    InitializeCommonEvent(4, 9008000, 1044310104);
    InitializeCommonEvent(5, 9008000, 1044310105);
    InitializeCommonEvent(6, 9008000, 1044310106);
    InitializeCommonEvent(7, 9008000, 1044310107);
    InitializeCommonEvent(8, 9008000, 1044310108);
    InitializeCommonEvent(9, 9008000, 1044310109);
    InitializeCommonEvent(10, 9008000, 1044310110);
    InitializeCommonEvent(11, 9008000, 1044310111);
    InitializeCommonEvent(12, 9008000, 1044310112);
    InitializeCommonEvent(13, 9008000, 1044310113);
    InitializeCommonEvent(14, 9008000, 1044310114);
    InitializeCommonEvent(15, 9008000, 1044310115);
    InitializeCommonEvent(16, 9008000, 1044310116);
    InitializeCommonEvent(17, 9008000, 1044310117);
    InitializeCommonEvent(18, 9008000, 1044310118);
    InitializeCommonEvent(19, 9008000, 1044310119);
    InitializeCommonEvent(20, 9008000, 1044310120);
    InitializeCommonEvent(21, 9008000, 1044310121);
    InitializeCommonEvent(22, 9008000, 1044310122);
    InitializeCommonEvent(23, 9008000, 1044310123);
    InitializeCommonEvent(24, 9008000, 1044310124);
    InitializeCommonEvent(25, 9008000, 1044310125);
    InitializeCommonEvent(26, 9008000, 1044310126);
    InitializeCommonEvent(27, 9008000, 1044310127);
    InitializeCommonEvent(28, 9008000, 1044310128);
    InitializeCommonEvent(29, 9008000, 1044310200);
    InitializeCommonEvent(30, 9008000, 1044310201);
    InitializeCommonEvent(31, 9008000, 1044310202);
    InitializeCommonEvent(32, 9008000, 1044310203);
    InitializeCommonEvent(33, 9008000, 1044310129);
    InitializeCommonEvent(34, 9008000, 1044310130);
    InitializeCommonEvent(35, 9008000, 1044310131);
    InitializeCommonEvent(36, 9008000, 1044310132);
    InitializeCommonEvent(37, 9008000, 1044310133);
    InitializeCommonEvent(38, 9008000, 1044310134);
    
    InitializeEvent(0, 1044312200, 1044310200, 1044312200);
    InitializeEvent(1, 1044312200, 1044310201, 1044312200);
    InitializeEvent(2, 1044312200, 1044310202, 1044312200);
    InitializeEvent(3, 1044312200, 1044310203, 1044312200);
    InitializeEvent(0, 1044312340, 0);
    InitializeCommonEvent(0, 90005300, 1044310350, 1044310350, 0, 0, 0);
    InitializeCommonEvent(0, 90005550, 1044310200, 1044311200, 44313200);
    InitializeCommonEvent(0, 90005631, 1044311640, 61012);
});

$Event(1044312200, Restart, function(X0_4, X4_4) {
    EndIf(CharacterDead(X0_4));
    WaitFor(InArea(10000, X4_4));
    SetSpEffect(X0_4, 14200);
});

$Event(1044312210, Restart, function(X0_4) {
    ForceCharacterDeath(X0_4, false);
    EndEvent();
});

$Event(1044312340, Restart, function() {
    EndIf(EventFlagState(ON, TargetEventFlagType.EventIDSlotNumber, 1044310200));
    DisableCharacterAI(1044310340);
    areaChrSp = EntityInRadiusOfEntity(10000, 1044310340, 0, 1)
        && ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom));
    WaitFor(
        HasDamageType(1044310340, 0, DamageType.Unspecified) || EventFlag(1044310200) || areaChrSp);
    SetNetworkconnectedEventFlag(TargetEventFlagType.EventIDSlotNumber, 1044310200, ON);
    if (areaChrSp.Passed) {
        WaitFixedTimeSeconds(0);
        if (Signed(1700) != -1) {
            ForceAnimationPlayback(1044310340, 1700, true, false, false);
        }
    }
L1:
    EnableCharacterAI(1044310340);
});

$Event(1044312350, Restart, function() {
    EndIf(EventFlag(1044310350));
    DisableCharacterHPBarDisplay(1044310350);
    SetSpEffect(1044310350, 12189);
    WaitFixedTimeSeconds(3);
    ClearSpEffect(1044310350, 12189);
    EnableCharacterHPBarDisplay(1044310350);
});

$Event(250, Default, function() {
    InitializeCommonEvent(0, 90005485, 1044310350);
    InitializeCommonEvent(0, 90005251, 1044310350, 1135214592, 0, -1);
    InitializeEvent(0, 1044312350, 0);
});


