// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1038490200);
    InitializeCommonEvent(1, 9008000, 1038490700);
    InitializeCommonEvent(2, 9008000, 1038490201);
    InitializeCommonEvent(3, 9008000, 1038490202);
    InitializeCommonEvent(4, 9008000, 1038490203);
    InitializeCommonEvent(5, 9008000, 1038490204);
    InitializeCommonEvent(6, 9008000, 1038490205);
    InitializeCommonEvent(7, 9008000, 1038490206);
    InitializeCommonEvent(8, 9008000, 1038490100);
    InitializeCommonEvent(9, 9008000, 1038490101);
    InitializeCommonEvent(10, 9008000, 1038490302);
    InitializeCommonEvent(11, 9008000, 1038490102);
    InitializeCommonEvent(12, 9008000, 1038490103);
    InitializeCommonEvent(13, 9008000, 1038490104);
    InitializeCommonEvent(14, 9008000, 1038490105);
    InitializeCommonEvent(15, 9008000, 1038490106);
    InitializeCommonEvent(16, 9008000, 1038490313);
    InitializeCommonEvent(17, 9008000, 1038490314);
    InitializeCommonEvent(18, 9008000, 1038490107);
    InitializeCommonEvent(19, 9008000, 1038490108);
    InitializeCommonEvent(20, 9008000, 1038490109);
    InitializeCommonEvent(21, 9008000, 1038490110);
    InitializeCommonEvent(22, 9008000, 1038490111);
    InitializeCommonEvent(23, 9008000, 1038490112);
    InitializeCommonEvent(24, 9008000, 1038490113);
    InitializeCommonEvent(25, 9008000, 1038490114);
    InitializeCommonEvent(26, 9008000, 1038490115);
    InitializeCommonEvent(27, 9008000, 1038490116);
    InitializeCommonEvent(28, 9008000, 1038490117);
    InitializeCommonEvent(29, 9008000, 1038490118);
    InitializeCommonEvent(30, 9008000, 1038490119);
    InitializeCommonEvent(31, 9008000, 1038490120);
    InitializeCommonEvent(32, 9008000, 1038490121);
    InitializeCommonEvent(33, 9008000, 1038490122);
    InitializeCommonEvent(34, 9008000, 1038490123);
    InitializeCommonEvent(35, 9008000, 1038490124);
    
    InitializeEvent(0, 1038492300, 0);
    InitializeEvent(0, 1038492301, 0);
    InitializeEvent(0, 1038492306, 0);
    InitializeEvent(0, 1038492400, 0);
    InitializeEvent(0, 1038492401, 0);
    InitializeEvent(0, 1038492304, 0);
    InitializeEvent(0, 1038492320, 0);
    InitializeEvent(0, 1038492580, 0);
    InitializeCommonEvent(0, 90005250, 1038490302, 1038492302, 0, -1);
    InitializeCommonEvent(0, 90005250, 1038490313, 1038492313, 0, -1);
    InitializeCommonEvent(0, 90005706, 1038490700, 930018, 0);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1038490700, true);
    InitializeEvent(0, 1038492310, 1038490200);
    InitializeEvent(0, 1038492305, 0);
});

$Event(1038492300, Restart, function() {
    GotoIf(L3, EventFlag(1038490201));
    GotoIf(L0, EventFlag(1038492207));
    GotoIf(L0, EventFlag(1038492208));
    GotoIf(L1, !EventFlag(1038492207));
    GotoIf(L1, !EventFlag(1038492208));
L0:
    SetEventFlagID(1038492212, OFF);
    if (EventFlag(1038492210)) {
        DisableCharacter(1038490200);
    }
    SetNetworkUpdateRate(1038490200, false, CharacterUpdateFrequency.NoUpdate);
    if (!EventFlag(1038492210)) {
        EnableCharacter(1038490200);
        SetNetworkUpdateRate(1038490200, true, CharacterUpdateFrequency.AlwaysUpdate);
    }
    SetEventFlagID(1038492212, ON);
    if (!EventFlag(1038492209)) {
        CreateAssetfollowingSFX(1038491200, 100, 806740);
        SetEventFlagID(1038492209, ON);
    }
    WaitFor(
        !EventFlag(1038492207)
            || !EventFlag(1038492208)
            || (!EventFlag(1038492210) && !EventFlag(1038492212))
            || (EventFlag(1038492210) && EventFlag(1038492212)));
    WaitFixedTimeFrames(1);
    RestartEvent();
L1:
    DisableCharacter(1038490200);
    SetNetworkUpdateRate(1038490200, false, CharacterUpdateFrequency.NoUpdate);
    DeleteAssetfollowingSFX(1038491200, true);
    SetEventFlagID(1038492209, OFF);
    WaitFor(EventFlag(1038492207) || EventFlag(1038492208));
    WaitFixedTimeFrames(1);
    RestartEvent();
L3:
    DisableCharacter(1038490200);
    SetNetworkUpdateRate(1038490200, false, CharacterUpdateFrequency.NoUpdate);
    DeleteAssetfollowingSFX(1038491200, true);
    SetNetworkconnectedEventFlagID(1038492207, OFF);
    SetNetworkconnectedEventFlagID(1038492208, OFF);
});

$Event(1038492301, Restart, function() {
    EnableNetworkSync();
    EndIf(CharacterType(10000, TargetType.BlackPhantom) || CharacterInvadeType(10000, 7));
    EndIf(EventFlag(1038490201));
    GotoIf(L0, !EventFlag(1038492206) || !EntityInRadiusOfEntity(1038490200, 10000, 150, 1));
    GotoIf(L1, EventFlag(1038492206) && EntityInRadiusOfEntity(1038490200, 10000, 150, 1));
    WaitFixedTimeSeconds(1);
    WaitFor(!EventFlag(1038492206));
    Goto(L2);
L0:
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(1038492207, OFF);
    }
    if (!PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(1038492208, OFF);
    }
    WaitFixedTimeSeconds(1);
    WaitFor(EventFlag(1038492206));
    Goto(L2);
L1:
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(1038492207, ON);
    }
    if (!PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(1038492208, ON);
    }
    WaitFor(!EventFlag(1038492206));
    Goto(L2);
L2:
    WaitFixedTimeFrames(1);
    RestartEvent();
});

$Event(1038492304, Restart, function() {
    EnableNetworkSync();
    if (EventFlag(1038490201)) {
        DisableCharacter(1038490201);
        DisableCharacterCollision(1038490201);
        ForceCharacterDeath(1038490201, false);
        DisableCharacter(1038490202);
        DisableCharacterCollision(1038490202);
        ForceCharacterDeath(1038490202, false);
        DisableCharacter(1038490203);
        DisableCharacterCollision(1038490203);
        ForceCharacterDeath(1038490203, false);
        DisableCharacter(1038490204);
        DisableCharacterCollision(1038490204);
        ForceCharacterDeath(1038490204, false);
        DisableCharacter(1038490205);
        DisableCharacterCollision(1038490205);
        ForceCharacterDeath(1038490205, false);
        DisableCharacter(1038490206);
        DisableCharacterCollision(1038490206);
        ForceCharacterDeath(1038490206, false);
        EndEvent();
    }
L0:
    EndIf(EventFlag(1038490201));
    WaitFor(
        CharacterDead(1038490201)
            && CharacterDead(1038490202)
            && CharacterDead(1038490203)
            && CharacterDead(1038490204)
            && CharacterDead(1038490205)
            && CharacterDead(1038490206));
    SetNetworkconnectedEventFlagID(1038490201, ON);
});

$Event(1038492305, Restart, function() {
    EndIf(EventFlag(1038490201));
    EndIf(!PlayerIsInOwnWorld());
    SetNetworkconnectedEventFlagID(1038492206, ON);
    SetNetworkconnectedEventFlagID(1038492207, OFF);
    SetNetworkconnectedEventFlagID(1038492208, OFF);
    SetNetworkconnectedEventFlagID(1038492209, OFF);
    SetNetworkconnectedEventFlagID(1038492210, OFF);
    SetNetworkconnectedEventFlagID(1038492211, OFF);
});

$Event(1038492306, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    DisableNetworkSync();
    EndIf(EventFlag(1038490201));
    WaitFixedTimeSeconds(7);
    SetNetworkconnectedEventFlagID(1038492206, OFF);
    SetNetworkconnectedEventFlagID(1038492208, OFF);
    WaitFixedTimeSeconds(5);
    SetNetworkconnectedEventFlagID(1038492206, ON);
    WaitFixedTimeFrames(1);
    RestartEvent();
});

$Event(1038492310, Restart, function(X0_4) {
    DisableNetworkSync();
    EndIf(EventFlag(1038490201));
    EnableCharacterDefaultBackread(X0_4);
    DisableCharacterGravity(X0_4);
});

$Event(1038492320, Restart, function() {
    if (GameCycle() == 0) {
        SetSpEffect(1038490200, 16630);
        EndEvent();
    }
    if (GameCycle() == 1) {
        SetSpEffect(1038490200, 16631);
        EndEvent();
    }
    if (GameCycle() == 2) {
        SetSpEffect(1038490200, 16632);
        EndEvent();
    }
    if (GameCycle() == 3) {
        SetSpEffect(1038490200, 16633);
        EndEvent();
    }
    if (GameCycle() == 4) {
        SetSpEffect(1038490200, 16634);
        EndEvent();
    }
    if (GameCycle() == 5) {
        SetSpEffect(1038490200, 16635);
        EndEvent();
    }
    if (GameCycle() == 6) {
        SetSpEffect(1038490200, 16636);
        EndEvent();
    }
    if (GameCycle() >= 7) {
        SetSpEffect(1038490200, 16637);
        EndEvent();
    }
});

$Event(1038492400, Restart, function() {
    DisableNetworkSync();
    EndIf(EventFlag(1038490201));
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(InArea(10000, 1038492300));
    SetEventFlagID(1038492210, ON);
    WaitFor(!InArea(10000, 1038492300));
    SetEventFlagID(1038492210, OFF);
    RestartEvent();
});

$Event(1038492401, Restart, function() {
    DisableNetworkSync();
    EndIf(EventFlag(1038490201));
    EndIf(PlayerIsInOwnWorld());
    WaitFor(InArea(10000, 1038492300));
    SetEventFlagID(1038492210, ON);
    WaitFor(!InArea(10000, 1038492300));
    SetEventFlagID(1038492210, OFF);
    RestartEvent();
});

$Event(1038492580, Default, function() {
    RegisterLadder(1038490580, 1038490581, 1038491580);
    RegisterLadder(1038490582, 1038490583, 1038491582);
    RegisterLadder(1038490584, 1038490585, 1038491584);
});


