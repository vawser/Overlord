// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1043520100);
    InitializeCommonEvent(1, 9008000, 1043520101);
    InitializeCommonEvent(2, 9008000, 1043520701);
    InitializeCommonEvent(3, 9008000, 1043520710);
    InitializeCommonEvent(4, 9008000, 1043520700);
    InitializeCommonEvent(5, 9008000, 1043520400);
    InitializeCommonEvent(6, 9008000, 1043520102);
    InitializeCommonEvent(7, 9008000, 1043520103);
    InitializeCommonEvent(8, 9008000, 1043520104);
    InitializeCommonEvent(9, 9008000, 1043520105);
    InitializeCommonEvent(10, 9008000, 1043520106);
    InitializeCommonEvent(11, 9008000, 1043520107);
    InitializeCommonEvent(12, 9008000, 1043520108);
    InitializeCommonEvent(13, 9008000, 1043520109);
    InitializeCommonEvent(14, 9008000, 1043520110);
    InitializeCommonEvent(15, 9008000, 1043520111);
    InitializeCommonEvent(16, 9008000, 1043520112);
    InitializeCommonEvent(17, 9008000, 1043520113);
    InitializeCommonEvent(18, 9008000, 1043520114);
    InitializeCommonEvent(19, 9008000, 1043520115);
    InitializeCommonEvent(20, 9008000, 1043520116);
    InitializeCommonEvent(21, 9008000, 1043520117);
    InitializeCommonEvent(22, 9008000, 1043520118);
    InitializeCommonEvent(23, 9008000, 1043520119);
    InitializeCommonEvent(24, 9008000, 1043520120);
    InitializeCommonEvent(25, 9008000, 1043520121);
    InitializeCommonEvent(26, 9008000, 1043520122);
    InitializeCommonEvent(27, 9008000, 1043520123);
    InitializeCommonEvent(28, 9008000, 1043520124);
    InitializeCommonEvent(29, 9008000, 1043520125);
    InitializeCommonEvent(30, 9008000, 1043520126);
    InitializeCommonEvent(31, 9008000, 1043520127);
    InitializeCommonEvent(32, 9008000, 1043520128);
    InitializeCommonEvent(33, 9008000, 1043520129);
    InitializeCommonEvent(34, 9008000, 1043520130);
    
    InitializeEvent(0, 1043522500, 1043520700, 1043520701, 1043520505, 1043522500, 1043522500);
    InitializeEvent(0, 1043522505, 1043520505, 1043520700, 1043520701, 1043522500);
    InitializeEvent(0, 1043522510, 0);
    InitializeEvent(0, 1043522515, 0);
    InitializeCommonEvent(0, 90005300, 1043520506, 1043520701, 1043520500, 0, 0);
    InitializeCommonEvent(0, 90005300, 1043520400, 1043520400, 40316, 0, 0);
    InitializeCommonEvent(0, 90005631, 1043521401, 61032);
    InitializeCommonEvent(0, 90005705, 1043520710);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1043520705, true);
    SetCharacterBackreadState(1043520710, true);
});

$Event(1043522500, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    DisableCharacter(X4_4);
    DisableCharacterGravity(X4_4);
    DisableCharacterCollision(X4_4);
    DisableCharacterAI(X4_4);
    EndIf(EventFlag(X8_4));
    ForceAnimationPlayback(X0_4, 30029, true, false, true);
    DisableCharacterAI(X0_4);
    WaitFor(
        HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260)
            || (InArea(10000, X12_4)
                && CharacterBackreadStatus(X0_4)
                && ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
                    || CharacterType(10000, TargetType.Alive)
                    || CharacterType(10000, TargetType.GrayPhantom)
                    || CharacterType(10000, TargetType.WhitePhantom))));
    WaitFixedTimeSeconds(0.5);
    if (CharacterHPValue(X0_4) != 0) {
        EnableCharacterAI(X0_4);
        ForceAnimationPlayback(X0_4, 20030, true, false, true);
        DisableLockOnPoint(X0_4, 220);
        SetSpEffect(X0_4, 9730);
        WaitFixedTimeSeconds(1);
        SpawnOneshotSFX(TargetEntityType.Character, X0_4, 900, 636615);
        ForceAnimationPlayback(X0_4, 20030, false, false, true);
        IssueShortWarpRequest(X4_4, TargetEntityType.Character, X0_4, 900);
        WaitFixedTimeSeconds(1);
        ForceAnimationPlayback(X0_4, 20030, false, false, true);
        WaitFixedTimeSeconds(1);
        ForceAnimationPlayback(X0_4, 20030, false, false, true);
        WaitFixedTimeSeconds(1);
        SetEventFlagID(X16_4, ON);
        EndEvent();
    }
L0:
    SetEventFlagID(1043522506, ON);
    EndEvent();
});

$Event(1043522505, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(EventFlag(X0_4));
    WaitFor(EventFlag(X12_4) && !EventFlag(1043522700) && !EventFlag(1043522506));
    EnableCharacter(X8_4);
    EnableCharacterGravity(X8_4);
    SetSpEffect(X8_4, 9732);
    ForceCharacterDeath(X4_4, false);
    DisableCharacterGravity(X4_4);
    DisableCharacter(X4_4);
    DisableCharacterAI(X4_4);
    WaitFixedTimeSeconds(0.4);
    EnableCharacterAI(X8_4);
    EnableCharacterCollision(X8_4);
    WaitFor(CharacterDead(X8_4));
    IssueShortWarpRequest(X4_4, TargetEntityType.Character, X8_4, 900);
    EnableCharacter(X4_4);
    EnableCharacterCollision(X4_4);
    EnableCharacterGravity(X4_4);
    SetEventFlagID(X0_4, ON);
    EndEvent();
});

$Event(1043522510, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(EventFlag(1043522700));
    SetNetworkconnectedEventFlagID(1043522700, ON);
    WaitFor(!EventFlag(1043522700));
    SetNetworkconnectedEventFlagID(1043522700, OFF);
    EndEvent();
});

$Event(1043522515, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1043520505));
    SetCharacterTalkRange(1043520700, 150);
    SetCharacterTalkRange(1043520701, 150);
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, 1043520505);
    SetCharacterTalkRange(1043520700, 17);
    SetCharacterTalkRange(1043520701, 17);
    EndEvent();
});


