// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1040520705);
    InitializeCommonEvent(1, 9008000, 1040520101);
    InitializeCommonEvent(2, 9008000, 1040520102);
    InitializeCommonEvent(3, 9008000, 1040520950);
    InitializeCommonEvent(4, 9008000, 1040520100);
    InitializeCommonEvent(5, 9008000, 1040520800);
    InitializeCommonEvent(6, 9008000, 1040520720);
    InitializeCommonEvent(7, 9008000, 1040520715);
    InitializeCommonEvent(8, 9008000, 1040520103);
    InitializeCommonEvent(9, 9008000, 1040520104);
    InitializeCommonEvent(10, 9008000, 1040520105);
    InitializeCommonEvent(11, 9008000, 1040520106);
    InitializeCommonEvent(12, 9008000, 1040520107);
    InitializeCommonEvent(13, 9008000, 1040520108);
    InitializeCommonEvent(14, 9008000, 1040520109);
    InitializeCommonEvent(15, 9008000, 1040520110);
    InitializeCommonEvent(16, 9008000, 1040520111);
    InitializeCommonEvent(17, 9008000, 1040520112);
    InitializeCommonEvent(18, 9008000, 1040520113);
    InitializeCommonEvent(19, 9008000, 1040520114);
    InitializeCommonEvent(20, 9008000, 1040520115);
    InitializeCommonEvent(21, 9008000, 1040520116);
    InitializeCommonEvent(22, 9008000, 1040520117);
    InitializeCommonEvent(23, 9008000, 1040520303);
    InitializeCommonEvent(24, 9008000, 1040520304);
    InitializeCommonEvent(25, 9008000, 1040520118);
    InitializeCommonEvent(26, 9008000, 1040520119);
    InitializeCommonEvent(27, 9008000, 1040520120);
    InitializeCommonEvent(28, 9008000, 1040520121);
    InitializeCommonEvent(29, 9008000, 1040520122);
    InitializeCommonEvent(30, 9008000, 1040520123);
    InitializeCommonEvent(31, 9008000, 1040520124);
    InitializeCommonEvent(32, 9008000, 1040520125);
    InitializeCommonEvent(33, 9008000, 1040520126);
    InitializeCommonEvent(34, 9008000, 1040520127);
    InitializeCommonEvent(35, 9008000, 1040520128);
    InitializeCommonEvent(36, 9008000, 1040520129);
    InitializeCommonEvent(37, 9008000, 1040520130);
    InitializeCommonEvent(38, 9008000, 1040520131);
    InitializeCommonEvent(39, 9008000, 1040520132);
    InitializeCommonEvent(40, 9008000, 1040520133);
    InitializeCommonEvent(41, 9008000, 1040520134);
    InitializeCommonEvent(42, 9008000, 1040520135);
    InitializeCommonEvent(43, 9008000, 1040520136);
    InitializeCommonEvent(44, 9008000, 1040520137);
    
    RegisterBonfire(76304, 1040521950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005100, 76314, 76304, 1040521980, 77310, 0, 78310, 78311, 78312, 78313, 78314, 78315, 78316, 78317, 78318, 78319);
    InitializeCommonEvent(0, 90005870, 1040520800, 902100600, 14);
    InitializeCommonEvent(0, 90005860, 1040520800, 0, 1040520800, 0, 30350, 0);
    InitializeEvent(0, 1040522240, 1040521690, 1040521691, 62030);
    AttachAssetToAsset(1040521201, 1040521200, 151);
    AttachAssetToAsset(1040521211, 1040521210, 151);
    InitializeCommonEvent(0, 900005610, 1040521680, 100, 800, 1040528620);
    InitializeCommonEvent(0, 90005605, 1040521640, 3614780, 1040552650, 0, 1040552651, 1040552652, 1040552653, 0, 0, 0, 0);
    InitializeEvent(0, 1040523700, 1040520700);
    InitializeEvent(0, 1040523701, 1040520700, 1040529205, 1040529206);
    InitializeEvent(0, 1040523702, 1040520700, 1040520710, 1040529206);
    InitializeEvent(0, 1040523703, 1040520710);
    InitializeEvent(0, 1040523705, 1040520705);
    InitializeCommonEvent(0, 90005704, 1040520705, 4201, 4200, 1040529251, 3);
    InitializeCommonEvent(0, 90005703, 1040520705, 4201, 4202, 1040529251, 4201, 4200, 4203, -1);
    InitializeCommonEvent(0, 90005702, 1040520705, 4203, 4200, 4204);
    InitializeCommonEvent(0, 90005725, 4765, 4766, 4768, 1040529305, 1040520715, 1035450701, 1040526700);
    InitializeCommonEvent(0, 90005703, 1040520715, 4766, 4767, 1035469206, 4766, 4765, 4769, 0);
    InitializeCommonEvent(0, 90005704, 1040520715, 4766, 4765, 1035469206, 3);
    InitializeCommonEvent(0, 90005702, 1040520715, 4768, 4765, 4769);
    InitializeCommonEvent(0, 90005705, 1040520720);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1040520705, true);
    SetCharacterBackreadState(1040520715, true);
    SetCharacterBackreadState(1040520720, true);
    InitializeCommonEvent(0, 90005201, 1040520303, 30001, 20001, 1082130432, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1040520304, 30002, 20002, 1082130432, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 1040520800, 30000, 20000, 1040522800, 1101004800, 0, 0, 0, 0, 0);
});

$Event(1040522240, Restart, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    if (EventFlag(X8_4)) {
        ForceAnimationPlayback(X4_4, 1, false, false, false);
        DeleteAssetfollowingSFX(X0_4, true);
        EndEvent();
    }
L0:
    CreateAssetfollowingSFX(X0_4, 200, 803220);
    WaitFor(EventFlag(X8_4));
    ForceAnimationPlayback(X4_4, 1, false, false, false);
    DeleteAssetfollowingSFX(X0_4, true);
});

$Event(1040523700, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    SetEventFlagID(1040529200, OFF);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3620) && EventFlag(1043379255)) {
            SetEventFlagID(1043379255, OFF);
        }
    }
L10:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    if (EventFlag(3630)) {
        if (EventFlag(1040529205) || EventFlag(1040529206) || EventFlag(1040529207)) {
            EnableCharacter(X0_4);
            SetCharacterBackreadState(X0_4, false);
            DisableCharacterCollision(X0_4);
            ForceAnimationPlayback(X0_4, 90102, false, false, false);
        } else {
            GotoIf(L1, EventFlag(3620));
            GotoIf(L2, EventFlag(3621));
            GotoIf(L3, EventFlag(3622));
            GotoIf(L4, EventFlag(3623));
L1:
            SetCharacterBackreadState(X0_4, false);
            EnableCharacter(X0_4);
            SetCharacterTeamType(X0_4, TeamType.FriendlyNPC);
            ForceAnimationPlayback(X0_4, 90101, false, false, false);
            GotoIf(L20, mainGroupAbuse);
L2:
            SetCharacterBackreadState(X0_4, false);
            EnableCharacter(X0_4);
            SetCharacterTeamType(X0_4, TeamType.HostileNPC);
            Goto(L20);
L3:
            SetCharacterBackreadState(X0_4, false);
            EnableCharacter(X0_4);
            SetCharacterTeamType(X0_4, TeamType.HostileNPC);
            Goto(L20);
L4:
            ForceCharacterTreasure(X0_4);
            DisableCharacter(X0_4);
            SetCharacterBackreadState(X0_4, true);
            Goto(L20);
        }
    }
L20:
    WaitFor(EventFlag(1040529200));
    RestartEvent();
});

$Event(1040523701, Restart, function(X0_4, X4_4, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(3620));
    EndIf(!EventFlag(3630));
    flagDmg = EventFlag(X4_4) || EventFlag(X8_4) || HasDamageType(X0_4, 10000, DamageType.Unspecified);
    EndIf(flagDmg);
    WaitFor(flagDmg);
    DisableCharacterCollision(X0_4);
    EndIf(EventFlag(X4_4));
    ForceAnimationPlayback(X0_4, 90201, false, false, false);
    EndIf(EventFlag(X8_4));
    SetEventFlagID(1040529207, ON);
    EndEvent();
});

$Event(1040523702, Restart, function(X0_4, X4_4, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(3630));
    EndIf(EventFlag(X8_4));
    WaitFor(HasDamageType(X4_4, 10000, DamageType.Unspecified));
    SetEventFlagID(X8_4, ON);
    DisableCharacterCollision(X0_4);
    EndEvent();
});

$Event(1040523703, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    GotoIf(L1, !AnyBatchEventFlags(3620, 3624));
    GotoIf(L1, AnyBatchEventFlags(3625, 3629));
    GotoIf(L1, EventFlag(3632));
    Goto(L2);
L1:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    EndEvent();
L2:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    SetCharacterTeamType(X0_4, TeamType.FriendlyNPC);
    ForceAnimationPlayback(X0_4, 90100, false, false, false);
    EndEvent();
});

$Event(1040523705, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(4200)) {
            SetEventFlagID(1040529253, OFF);
        }
    }
L19:
    if (!EventFlag(4206)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        WaitFor(EventFlag(4206));
        RestartEvent();
    }
L6:
    GotoIf(L1, EventFlag(4200));
    GotoIf(L2, EventFlag(4201));
    GotoIf(L4, EventFlag(4203));
L1:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    ForceAnimationPlayback(X0_4, 90101, false, false, false);
    Goto(L20);
L2:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
L4:
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
L20:
    WaitFor(!EventFlag(4206));
    RestartEvent();
});


