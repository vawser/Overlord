// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common.emevd N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\m60.emevd N:\GR\data\Param\event\common_macro.emevd 
// @linked    [0,72,154,220]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1037460100);
    InitializeCommonEvent(1, 9008000, 1037460101);
    InitializeCommonEvent(2, 9008000, 1037460715);
    InitializeCommonEvent(3, 9008000, 1037460950);
    InitializeCommonEvent(4, 9008000, 1037460102);
    InitializeCommonEvent(5, 9008000, 1037460800);
    InitializeCommonEvent(6, 9008000, 1037460103);
    InitializeCommonEvent(7, 9008000, 1037460104);
    InitializeCommonEvent(8, 9008000, 1037460105);
    InitializeCommonEvent(9, 9008000, 1037460106);
    InitializeCommonEvent(10, 9008000, 1037460107);
    InitializeCommonEvent(11, 9008000, 1037460108);
    InitializeCommonEvent(12, 9008000, 1037460109);
    InitializeCommonEvent(13, 9008000, 1037460110);
    InitializeCommonEvent(14, 9008000, 1037460111);
    InitializeCommonEvent(15, 9008000, 1037460112);
    InitializeCommonEvent(16, 9008000, 1037460113);
    InitializeCommonEvent(17, 9008000, 1037460114);
    InitializeCommonEvent(18, 9008000, 1037460115);
    InitializeCommonEvent(19, 9008000, 1037460116);
    InitializeCommonEvent(20, 9008000, 1037460117);
    InitializeCommonEvent(21, 9008000, 1037460118);
    InitializeCommonEvent(22, 9008000, 1037460119);
    InitializeCommonEvent(23, 9008000, 1037460120);
    InitializeCommonEvent(24, 9008000, 1037460121);
    InitializeCommonEvent(25, 9008000, 1037460122);
    InitializeCommonEvent(26, 9008000, 1037460123);
    InitializeCommonEvent(27, 9008000, 1037460124);
    InitializeCommonEvent(28, 9008000, 1037460125);
    InitializeCommonEvent(29, 9008000, 1037460126);
    InitializeCommonEvent(30, 9008000, 1037460127);
    InitializeCommonEvent(31, 9008000, 1037460128);
    InitializeCommonEvent(32, 9008000, 1037460129);
    InitializeCommonEvent(33, 9008000, 1037460130);
    InitializeCommonEvent(34, 9008000, 1037460131);
    InitializeCommonEvent(35, 9008000, 1037460132);
    InitializeCommonEvent(36, 9008000, 1037460133);
    InitializeCommonEvent(37, 9008000, 1037460134);
    InitializeCommonEvent(38, 9008000, 1037460135);
    InitializeCommonEvent(39, 9008000, 1037460136);
    InitializeCommonEvent(40, 9008000, 1037460137);
    InitializeCommonEvent(41, 9008000, 1037460138);
    InitializeCommonEvent(42, 9008000, 1037460139);
    InitializeCommonEvent(43, 9008000, 1037460140);
    InitializeCommonEvent(44, 9008000, 1037460141);
    InitializeCommonEvent(45, 9008000, 1037460142);
    InitializeCommonEvent(46, 9008000, 1037460143);
    InitializeCommonEvent(47, 9008000, 1037460144);
    InitializeCommonEvent(48, 9008000, 1037460145);
    InitializeCommonEvent(49, 9008000, 1037460146);
    InitializeCommonEvent(50, 9008000, 1037460710);
    InitializeCommonEvent(51, 9008000, 1037460147);
    InitializeCommonEvent(52, 9008000, 1037460148);
    InitializeCommonEvent(53, 9008000, 1037460149);
    InitializeCommonEvent(54, 9008000, 1037460150);
    InitializeCommonEvent(55, 9008000, 1037460151);
    InitializeCommonEvent(56, 9008000, 1037460152);
    InitializeCommonEvent(57, 9008000, 1037460153);
    InitializeCommonEvent(58, 9008000, 1037460154);
    InitializeCommonEvent(59, 9008000, 1037460155);
    InitializeCommonEvent(60, 9008000, 1037460156);
    InitializeCommonEvent(61, 9008000, 1037460157);
    InitializeCommonEvent(62, 9008000, 1037460158);
    InitializeCommonEvent(63, 9008000, 1037460159);
    InitializeCommonEvent(64, 9008000, 1037460160);
    InitializeCommonEvent(65, 9008000, 1037460161);
    InitializeCommonEvent(66, 9008000, 1037460162);
    InitializeCommonEvent(67, 9008000, 1037460163);
    InitializeCommonEvent(68, 9008000, 1037460164);
    InitializeCommonEvent(69, 9008000, 1037460165);
    InitializeCommonEvent(70, 9008000, 1037460166);
    InitializeCommonEvent(71, 9008000, 1037460167);
    
    RegisterBonfire(1037460000, 1037461950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005760, 1037460800, 1037460800, 1037462340, 1037462716);
    InitializeCommonEvent(0, 90005860, 1037460800, 0, 1037460800, 0, 1037460400, 0);
    InitializeCommonEvent(0, 90005870, 1037460800, 903100601, 10);
    InitializeCommonEvent(0, 90005872, 1037460800, 10, 0);
    InitializeCommonEvent(0, 90005702, 1037460710, 3723, 3720, 3723);
    InitializeEvent(0, 1037460700, 1037460710);
    InitializeEvent(0, 1037460702, 1037460710);
    InitializeCommonEvent(0, 90005770, 1037460701);
    InitializeEvent(0, 1037460710, 1037469280);
    InitializeEvent(0, 1037460711, 1037469281);
    InitializeEvent(0, 1037460719, 1037469289);
    InitializeCommonEvent(0, 90005631, 1037461640, 61021);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1037460710, true);
    InitializeCommonEvent(0, 90005261, 1037460200, 1037462600, 1077936128, 0, 3020);
    InitializeCommonEvent(0, 90005261, 1037460201, 1037462600, 1077936128, 0, 3020);
    InitializeCommonEvent(0, 90005261, 1037460202, 1037462600, 1077936128, 0, 3020);
    InitializeCommonEvent(0, 90005261, 1037460203, 1037462600, 1077936128, 0, 1700);
    InitializeCommonEvent(0, 90005261, 1037460204, 1037462600, 1077936128, 0, 1700);
});

$Event(1037460700, Restart, function(X0_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
    }
L10:
    if (!EventFlag(1037462717)) {
        SetNetworkconnectedEventFlagID(1037462716, OFF);
        if (TimeOfDayInRange(20, 0, 0, 5, 30, 0)
            && !EventFlag(1037460800)
            && (EventFlag(1037460701) || EventFlag(3723))) {
            SetNetworkconnectedEventFlagID(1037462716, ON);
        }
    }
L4:
    SetNetworkconnectedEventFlagID(1037462717, ON);
    if (!EventFlag(3725)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        WaitFor(EventFlag(3725));
        RestartEvent();
    }
L5:
    GotoIf(L0, EventFlag(3720));
    GotoIf(L3, EventFlag(3723));
L0:
    GotoIf(S0, !EventFlag(1037462716));
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
S0:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    ForceAnimationPlayback(X0_4, 930001, false, false, false);
    Goto(L20);
L3:
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
L20:
    WaitFor(!EventFlag(3725));
    RestartEvent();
});

$Event(1037460702, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(HasDamageType(X0_4, 0, DamageType.Unspecified));
    SetSpEffect(X0_4, 9750);
    RestartEvent();
});

$Event(1037460710, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(X0_4, OFF);
    WaitFor(
        EventFlag(3101)
            || EventFlag(3121)
            || EventFlag(3161)
            || EventFlag(3181)
            || EventFlag(3221)
            || EventFlag(3241)
            || EventFlag(3261)
            || EventFlag(3281)
            || EventFlag(3301)
            || EventFlag(3361)
            || EventFlag(3381)
            || EventFlag(3401)
            || EventFlag(3421)
            || EventFlag(3441)
            || EventFlag(3461)
            || EventFlag(3481)
            || EventFlag(3501)
            || EventFlag(3521)
            || EventFlag(3541)
            || EventFlag(3561)
            || EventFlag(3581)
            || EventFlag(3601)
            || EventFlag(3621)
            || EventFlag(3661)
            || EventFlag(3701)
            || EventFlag(3721)
            || EventFlag(3741)
            || EventFlag(3761)
            || EventFlag(3781)
            || EventFlag(3801)
            || EventFlag(3821)
            || EventFlag(3861)
            || EventFlag(3881)
            || EventFlag(3901)
            || EventFlag(3921)
            || EventFlag(3941)
            || EventFlag(3961)
            || EventFlag(3981)
            || EventFlag(4001)
            || EventFlag(4021)
            || EventFlag(4041)
            || EventFlag(4061)
            || EventFlag(4081)
            || EventFlag(4101)
            || EventFlag(4121)
            || EventFlag(4141)
            || EventFlag(4161)
            || EventFlag(4181)
            || EventFlag(4201)
            || EventFlag(4221)
            || EventFlag(4241)
            || EventFlag(4261)
            || EventFlag(4281)
            || EventFlag(4301)
            || EventFlag(4321)
            || EventFlag(4341)
            || EventFlag(4361)
            || EventFlag(4381)
            || EventFlag(4401)
            || EventFlag(4421)
            || EventFlag(4441)
            || EventFlag(4461)
            || EventFlag(4481)
            || EventFlag(4501)
            || EventFlag(4521)
            || EventFlag(4541)
            || EventFlag(4561)
            || EventFlag(4581)
            || EventFlag(4701)
            || EventFlag(4721)
            || EventFlag(4726)
            || EventFlag(4731)
            || EventFlag(4736)
            || EventFlag(4741)
            || EventFlag(4746)
            || EventFlag(4751)
            || EventFlag(4756)
            || EventFlag(4761)
            || EventFlag(4766)
            || EventFlag(4771)
            || EventFlag(4776)
            || EventFlag(4781)
            || EventFlag(4786)
            || EventFlag(4791)
            || EventFlag(4796)
            || EventFlag(4801)
            || EventFlag(4806)
            || EventFlag(4811));
    SetEventFlagID(X0_4, ON);
    WaitFor(
        !(EventFlag(3101)
            || EventFlag(3121)
            || EventFlag(3161)
            || EventFlag(3181)
            || EventFlag(3221)
            || EventFlag(3241)
            || EventFlag(3261)
            || EventFlag(3281)
            || EventFlag(3301)
            || EventFlag(3361)
            || EventFlag(3381)
            || EventFlag(3401)
            || EventFlag(3421)
            || EventFlag(3441)
            || EventFlag(3461)
            || EventFlag(3481)
            || EventFlag(3501)
            || EventFlag(3521)
            || EventFlag(3541)
            || EventFlag(3561)
            || EventFlag(3581)
            || EventFlag(3601)
            || EventFlag(3621)
            || EventFlag(3661)
            || EventFlag(3701)
            || EventFlag(3721)
            || EventFlag(3741)
            || EventFlag(3761)
            || EventFlag(3781)
            || EventFlag(3801)
            || EventFlag(3821)
            || EventFlag(3861)
            || EventFlag(3881)
            || EventFlag(3901)
            || EventFlag(3921)
            || EventFlag(3941)
            || EventFlag(3961)
            || EventFlag(3981)
            || EventFlag(4001)
            || EventFlag(4021)
            || EventFlag(4041)
            || EventFlag(4061)
            || EventFlag(4081)
            || EventFlag(4101)
            || EventFlag(4121)
            || EventFlag(4141)
            || EventFlag(4161)
            || EventFlag(4181)
            || EventFlag(4201)
            || EventFlag(4221)
            || EventFlag(4241)
            || EventFlag(4261)
            || EventFlag(4281)
            || EventFlag(4301)
            || EventFlag(4321)
            || EventFlag(4341)
            || EventFlag(4361)
            || EventFlag(4381)
            || EventFlag(4401)
            || EventFlag(4421)
            || EventFlag(4441)
            || EventFlag(4461)
            || EventFlag(4481)
            || EventFlag(4501)
            || EventFlag(4521)
            || EventFlag(4541)
            || EventFlag(4561)
            || EventFlag(4581)
            || EventFlag(4701)
            || EventFlag(4721)
            || EventFlag(4726)
            || EventFlag(4731)
            || EventFlag(4736)
            || EventFlag(4741)
            || EventFlag(4746)
            || EventFlag(4751)
            || EventFlag(4756)
            || EventFlag(4761)
            || EventFlag(4766)
            || EventFlag(4771)
            || EventFlag(4776)
            || EventFlag(4781)
            || EventFlag(4786)
            || EventFlag(4791)
            || EventFlag(4796)
            || EventFlag(4801)
            || EventFlag(4806)
            || EventFlag(4811)));
    RestartEvent();
});

$Event(1037460711, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(X0_4, OFF);
    WaitFor(!EventFlag(3617) && EventFlag(3603));
    SetEventFlagID(X0_4, ON);
    WaitFor(!(!EventFlag(3617) && EventFlag(3603)));
    RestartEvent();
});

$Event(1037460719, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(X0_4, OFF);
    WaitFor(EventFlag(X0_4));
    if (EventFlag(3101)) {
        BatchSetNetworkconnectedEventFlags(3100, 3103, OFF);
        SetNetworkconnectedEventFlagID(3100, ON);
    }
    if (EventFlag(3121)) {
        BatchSetNetworkconnectedEventFlags(3120, 3123, OFF);
        SetNetworkconnectedEventFlagID(3120, ON);
    }
    if (EventFlag(3161)) {
        BatchSetNetworkconnectedEventFlags(3160, 3163, OFF);
        SetNetworkconnectedEventFlagID(3160, ON);
    }
    if (EventFlag(3181)) {
        BatchSetNetworkconnectedEventFlags(3180, 3183, OFF);
        SetNetworkconnectedEventFlagID(3180, ON);
    }
    if (EventFlag(3221)) {
        BatchSetNetworkconnectedEventFlags(3220, 3223, OFF);
        SetNetworkconnectedEventFlagID(3220, ON);
    }
    if (EventFlag(3241)) {
        BatchSetNetworkconnectedEventFlags(3240, 3243, OFF);
        SetNetworkconnectedEventFlagID(3240, ON);
    }
    if (EventFlag(3261)) {
        BatchSetNetworkconnectedEventFlags(3260, 3263, OFF);
        SetNetworkconnectedEventFlagID(3260, ON);
    }
    if (EventFlag(3281)) {
        BatchSetNetworkconnectedEventFlags(3280, 3283, OFF);
        SetNetworkconnectedEventFlagID(3280, ON);
    }
    if (EventFlag(3301)) {
        BatchSetNetworkconnectedEventFlags(3300, 3303, OFF);
        SetNetworkconnectedEventFlagID(3300, ON);
    }
    if (EventFlag(3361)) {
        BatchSetNetworkconnectedEventFlags(3360, 3363, OFF);
        SetNetworkconnectedEventFlagID(3360, ON);
    }
    if (EventFlag(3381)) {
        BatchSetNetworkconnectedEventFlags(3380, 3383, OFF);
        SetNetworkconnectedEventFlagID(3380, ON);
    }
    if (EventFlag(3401)) {
        BatchSetNetworkconnectedEventFlags(3400, 3403, OFF);
        SetNetworkconnectedEventFlagID(3400, ON);
    }
    if (EventFlag(3421)) {
        BatchSetNetworkconnectedEventFlags(3420, 3423, OFF);
        SetNetworkconnectedEventFlagID(3420, ON);
    }
    if (EventFlag(3441)) {
        BatchSetNetworkconnectedEventFlags(3440, 3443, OFF);
        SetNetworkconnectedEventFlagID(3440, ON);
    }
    if (EventFlag(3461)) {
        BatchSetNetworkconnectedEventFlags(3460, 3463, OFF);
        SetNetworkconnectedEventFlagID(3460, ON);
    }
    if (EventFlag(3481)) {
        BatchSetNetworkconnectedEventFlags(3480, 3483, OFF);
        SetNetworkconnectedEventFlagID(3480, ON);
    }
    if (EventFlag(3501)) {
        BatchSetNetworkconnectedEventFlags(3500, 3503, OFF);
        SetNetworkconnectedEventFlagID(3500, ON);
    }
    if (EventFlag(3521)) {
        BatchSetNetworkconnectedEventFlags(3520, 3523, OFF);
        SetNetworkconnectedEventFlagID(3520, ON);
    }
    if (EventFlag(3541)) {
        BatchSetNetworkconnectedEventFlags(3540, 3543, OFF);
        SetNetworkconnectedEventFlagID(3540, ON);
    }
    if (EventFlag(3561)) {
        BatchSetNetworkconnectedEventFlags(3560, 3563, OFF);
        SetNetworkconnectedEventFlagID(3560, ON);
    }
    if (EventFlag(3581)) {
        BatchSetNetworkconnectedEventFlags(3580, 3583, OFF);
        SetNetworkconnectedEventFlagID(3580, ON);
    }
    if (EventFlag(3601)) {
        BatchSetNetworkconnectedEventFlags(3600, 3603, OFF);
        SetNetworkconnectedEventFlagID(3600, ON);
    }
    if (EventFlag(3621)) {
        BatchSetNetworkconnectedEventFlags(3620, 3623, OFF);
        SetNetworkconnectedEventFlagID(3620, ON);
    }
    if (EventFlag(3661)) {
        BatchSetNetworkconnectedEventFlags(3660, 3663, OFF);
        SetNetworkconnectedEventFlagID(3660, ON);
    }
    if (EventFlag(3701)) {
        BatchSetNetworkconnectedEventFlags(3700, 3703, OFF);
        SetNetworkconnectedEventFlagID(3700, ON);
    }
    if (EventFlag(3721)) {
        BatchSetNetworkconnectedEventFlags(3720, 3723, OFF);
        SetNetworkconnectedEventFlagID(3720, ON);
    }
    if (EventFlag(3741)) {
        BatchSetNetworkconnectedEventFlags(3740, 3743, OFF);
        SetNetworkconnectedEventFlagID(3740, ON);
    }
    if (EventFlag(3761)) {
        BatchSetNetworkconnectedEventFlags(3760, 3763, OFF);
        SetNetworkconnectedEventFlagID(3760, ON);
    }
    if (EventFlag(3781)) {
        BatchSetNetworkconnectedEventFlags(3780, 3783, OFF);
        SetNetworkconnectedEventFlagID(3780, ON);
    }
    if (EventFlag(3801)) {
        BatchSetNetworkconnectedEventFlags(3800, 3803, OFF);
        SetNetworkconnectedEventFlagID(3800, ON);
    }
    if (EventFlag(3821)) {
        BatchSetNetworkconnectedEventFlags(3820, 3823, OFF);
        SetNetworkconnectedEventFlagID(3820, ON);
    }
    if (EventFlag(3861)) {
        BatchSetNetworkconnectedEventFlags(3860, 3863, OFF);
        SetNetworkconnectedEventFlagID(3860, ON);
    }
    if (EventFlag(3881)) {
        BatchSetNetworkconnectedEventFlags(3880, 3883, OFF);
        SetNetworkconnectedEventFlagID(3880, ON);
    }
    if (EventFlag(3901)) {
        BatchSetNetworkconnectedEventFlags(3900, 3903, OFF);
        SetNetworkconnectedEventFlagID(3900, ON);
    }
    if (EventFlag(3921)) {
        BatchSetNetworkconnectedEventFlags(3920, 3923, OFF);
        SetNetworkconnectedEventFlagID(3920, ON);
    }
    if (EventFlag(3941)) {
        BatchSetNetworkconnectedEventFlags(3940, 3943, OFF);
        SetNetworkconnectedEventFlagID(3940, ON);
    }
    if (EventFlag(3961)) {
        BatchSetNetworkconnectedEventFlags(3960, 3963, OFF);
        SetNetworkconnectedEventFlagID(3960, ON);
    }
    if (EventFlag(3981)) {
        BatchSetNetworkconnectedEventFlags(3980, 3983, OFF);
        SetNetworkconnectedEventFlagID(3980, ON);
    }
    if (EventFlag(4001)) {
        BatchSetNetworkconnectedEventFlags(4000, 4003, OFF);
        SetNetworkconnectedEventFlagID(4000, ON);
    }
    if (EventFlag(4021)) {
        BatchSetNetworkconnectedEventFlags(4020, 4023, OFF);
        SetNetworkconnectedEventFlagID(4020, ON);
    }
    if (EventFlag(4041)) {
        BatchSetNetworkconnectedEventFlags(4040, 4043, OFF);
        SetNetworkconnectedEventFlagID(4040, ON);
    }
    if (EventFlag(4061)) {
        BatchSetNetworkconnectedEventFlags(4060, 4063, OFF);
        SetNetworkconnectedEventFlagID(4060, ON);
    }
    if (EventFlag(4081)) {
        BatchSetNetworkconnectedEventFlags(4080, 4083, OFF);
        SetNetworkconnectedEventFlagID(4080, ON);
    }
    if (EventFlag(4101)) {
        BatchSetNetworkconnectedEventFlags(4100, 4103, OFF);
        SetNetworkconnectedEventFlagID(4100, ON);
    }
    if (EventFlag(4121)) {
        BatchSetNetworkconnectedEventFlags(4120, 4123, OFF);
        SetNetworkconnectedEventFlagID(4120, ON);
    }
    if (EventFlag(4141)) {
        BatchSetNetworkconnectedEventFlags(4140, 4143, OFF);
        SetNetworkconnectedEventFlagID(4140, ON);
    }
    if (EventFlag(4161)) {
        BatchSetNetworkconnectedEventFlags(4160, 4163, OFF);
        SetNetworkconnectedEventFlagID(4160, ON);
    }
    if (EventFlag(4181)) {
        BatchSetNetworkconnectedEventFlags(4180, 4183, OFF);
        SetNetworkconnectedEventFlagID(4180, ON);
    }
    if (EventFlag(4201)) {
        BatchSetNetworkconnectedEventFlags(4200, 4203, OFF);
        SetNetworkconnectedEventFlagID(4200, ON);
    }
    if (EventFlag(4221)) {
        BatchSetNetworkconnectedEventFlags(4220, 4223, OFF);
        SetNetworkconnectedEventFlagID(4220, ON);
    }
    if (EventFlag(4241)) {
        BatchSetNetworkconnectedEventFlags(4240, 4243, OFF);
        SetNetworkconnectedEventFlagID(4240, ON);
    }
    if (EventFlag(4261)) {
        BatchSetNetworkconnectedEventFlags(4260, 4263, OFF);
        SetNetworkconnectedEventFlagID(4260, ON);
    }
    if (EventFlag(4281)) {
        BatchSetNetworkconnectedEventFlags(4280, 4283, OFF);
        SetNetworkconnectedEventFlagID(4280, ON);
    }
    if (EventFlag(4301)) {
        BatchSetNetworkconnectedEventFlags(4300, 4303, OFF);
        SetNetworkconnectedEventFlagID(4300, ON);
    }
    if (EventFlag(4321)) {
        BatchSetNetworkconnectedEventFlags(4320, 4323, OFF);
        SetNetworkconnectedEventFlagID(4320, ON);
    }
    if (EventFlag(4341)) {
        BatchSetNetworkconnectedEventFlags(4340, 4343, OFF);
        SetNetworkconnectedEventFlagID(4340, ON);
    }
    if (EventFlag(4361)) {
        BatchSetNetworkconnectedEventFlags(4360, 4363, OFF);
        SetNetworkconnectedEventFlagID(4360, ON);
    }
    if (EventFlag(4381)) {
        BatchSetNetworkconnectedEventFlags(4380, 4383, OFF);
        SetNetworkconnectedEventFlagID(4380, ON);
    }
    if (EventFlag(4401)) {
        BatchSetNetworkconnectedEventFlags(4400, 4403, OFF);
        SetNetworkconnectedEventFlagID(4400, ON);
    }
    if (EventFlag(4421)) {
        BatchSetNetworkconnectedEventFlags(4420, 4423, OFF);
        SetNetworkconnectedEventFlagID(4420, ON);
    }
    if (EventFlag(4441)) {
        BatchSetNetworkconnectedEventFlags(4440, 4443, OFF);
        SetNetworkconnectedEventFlagID(4440, ON);
    }
    if (EventFlag(4461)) {
        BatchSetNetworkconnectedEventFlags(4460, 4463, OFF);
        SetNetworkconnectedEventFlagID(4460, ON);
    }
    if (EventFlag(4481)) {
        BatchSetNetworkconnectedEventFlags(4480, 4483, OFF);
        SetNetworkconnectedEventFlagID(4480, ON);
    }
    if (EventFlag(4501)) {
        BatchSetNetworkconnectedEventFlags(4500, 4503, OFF);
        SetNetworkconnectedEventFlagID(4500, ON);
    }
    if (EventFlag(4521)) {
        BatchSetNetworkconnectedEventFlags(4520, 4523, OFF);
        SetNetworkconnectedEventFlagID(4520, ON);
    }
    if (EventFlag(4541)) {
        BatchSetNetworkconnectedEventFlags(4540, 4543, OFF);
        SetNetworkconnectedEventFlagID(4540, ON);
    }
    if (EventFlag(4561)) {
        BatchSetNetworkconnectedEventFlags(4560, 4563, OFF);
        SetNetworkconnectedEventFlagID(4560, ON);
    }
    if (EventFlag(4581)) {
        BatchSetNetworkconnectedEventFlags(4580, 4583, OFF);
        SetNetworkconnectedEventFlagID(4580, ON);
    }
    if (EventFlag(4701)) {
        BatchSetNetworkconnectedEventFlags(4700, 4703, OFF);
        SetNetworkconnectedEventFlagID(4700, ON);
    }
    if (EventFlag(4721)) {
        BatchSetNetworkconnectedEventFlags(4720, 4723, OFF);
        SetNetworkconnectedEventFlagID(4720, ON);
    }
    if (EventFlag(4726)) {
        BatchSetNetworkconnectedEventFlags(4725, 4728, OFF);
        SetNetworkconnectedEventFlagID(4725, ON);
    }
    if (EventFlag(4731)) {
        BatchSetNetworkconnectedEventFlags(4730, 4733, OFF);
        SetNetworkconnectedEventFlagID(4730, ON);
    }
    if (EventFlag(4736)) {
        BatchSetNetworkconnectedEventFlags(4735, 4738, OFF);
        SetNetworkconnectedEventFlagID(4735, ON);
    }
    if (EventFlag(4741)) {
        BatchSetNetworkconnectedEventFlags(4740, 4743, OFF);
        SetNetworkconnectedEventFlagID(4740, ON);
    }
    if (EventFlag(4746)) {
        BatchSetNetworkconnectedEventFlags(4745, 4748, OFF);
        SetNetworkconnectedEventFlagID(4745, ON);
    }
    if (EventFlag(4751)) {
        BatchSetNetworkconnectedEventFlags(4750, 4753, OFF);
        SetNetworkconnectedEventFlagID(4750, ON);
    }
    if (EventFlag(4756)) {
        BatchSetNetworkconnectedEventFlags(4755, 4758, OFF);
        SetNetworkconnectedEventFlagID(4755, ON);
    }
    if (EventFlag(4761)) {
        BatchSetNetworkconnectedEventFlags(4760, 4763, OFF);
        SetNetworkconnectedEventFlagID(4760, ON);
    }
    if (EventFlag(4766)) {
        BatchSetNetworkconnectedEventFlags(4765, 4768, OFF);
        SetNetworkconnectedEventFlagID(4765, ON);
    }
    if (EventFlag(4771)) {
        BatchSetNetworkconnectedEventFlags(4770, 4773, OFF);
        SetNetworkconnectedEventFlagID(4770, ON);
    }
    if (EventFlag(4776)) {
        BatchSetNetworkconnectedEventFlags(4775, 4778, OFF);
        SetNetworkconnectedEventFlagID(4775, ON);
    }
    if (EventFlag(4781)) {
        BatchSetNetworkconnectedEventFlags(4780, 4783, OFF);
        SetNetworkconnectedEventFlagID(4780, ON);
    }
    if (EventFlag(4786)) {
        BatchSetNetworkconnectedEventFlags(4785, 4788, OFF);
        SetNetworkconnectedEventFlagID(4785, ON);
    }
    if (EventFlag(4791)) {
        BatchSetNetworkconnectedEventFlags(4790, 4793, OFF);
        SetNetworkconnectedEventFlagID(4790, ON);
    }
    if (EventFlag(4796)) {
        BatchSetNetworkconnectedEventFlags(4795, 4798, OFF);
        SetNetworkconnectedEventFlagID(4795, ON);
    }
    if (EventFlag(4801)) {
        BatchSetNetworkconnectedEventFlags(4800, 4803, OFF);
        SetNetworkconnectedEventFlagID(4800, ON);
    }
    if (EventFlag(4806)) {
        BatchSetNetworkconnectedEventFlags(4805, 4808, OFF);
        SetNetworkconnectedEventFlagID(4805, ON);
    }
    if (EventFlag(4811)) {
        BatchSetNetworkconnectedEventFlags(4810, 4813, OFF);
        SetNetworkconnectedEventFlagID(4810, ON);
    }
    if (!EventFlag(3617) && EventFlag(3603)) {
        BatchSetNetworkconnectedEventFlags(3600, 3603, OFF);
        SetNetworkconnectedEventFlagID(3600, ON);
    }
    SetNetworkconnectedEventFlagID(3158, ON);
    SetNetworkconnectedEventFlagID(3218, ON);
    SetNetworkconnectedEventFlagID(3338, ON);
    SetNetworkconnectedEventFlagID(3358, ON);
    SetNetworkconnectedEventFlagID(3658, ON);
    SetNetworkconnectedEventFlagID(3698, ON);
    SetNetworkconnectedEventFlagID(3858, ON);
    SetNetworkconnectedEventFlagID(3118, ON);
    SetNetworkconnectedEventFlagID(3138, ON);
    SetNetworkconnectedEventFlagID(3178, ON);
    SetNetworkconnectedEventFlagID(3198, ON);
    SetNetworkconnectedEventFlagID(3238, ON);
    SetNetworkconnectedEventFlagID(3258, ON);
    SetNetworkconnectedEventFlagID(3278, ON);
    SetNetworkconnectedEventFlagID(3298, ON);
    SetNetworkconnectedEventFlagID(3318, ON);
    SetNetworkconnectedEventFlagID(3378, ON);
    SetNetworkconnectedEventFlagID(3398, ON);
    SetNetworkconnectedEventFlagID(3418, ON);
    SetNetworkconnectedEventFlagID(3438, ON);
    SetNetworkconnectedEventFlagID(3458, ON);
    SetNetworkconnectedEventFlagID(3478, ON);
    SetNetworkconnectedEventFlagID(3498, ON);
    SetNetworkconnectedEventFlagID(3518, ON);
    SetNetworkconnectedEventFlagID(3538, ON);
    SetNetworkconnectedEventFlagID(3558, ON);
    SetNetworkconnectedEventFlagID(3578, ON);
    SetNetworkconnectedEventFlagID(3598, ON);
    SetNetworkconnectedEventFlagID(3618, ON);
    SetNetworkconnectedEventFlagID(3638, ON);
    SetNetworkconnectedEventFlagID(3678, ON);
    SetNetworkconnectedEventFlagID(3718, ON);
    SetNetworkconnectedEventFlagID(3738, ON);
    SetNetworkconnectedEventFlagID(3758, ON);
    SetNetworkconnectedEventFlagID(3778, ON);
    SetNetworkconnectedEventFlagID(3798, ON);
    SetNetworkconnectedEventFlagID(3818, ON);
    SetNetworkconnectedEventFlagID(3838, ON);
    SetNetworkconnectedEventFlagID(3878, ON);
    SetNetworkconnectedEventFlagID(3898, ON);
    SetNetworkconnectedEventFlagID(3918, ON);
    SetNetworkconnectedEventFlagID(3938, ON);
    SetNetworkconnectedEventFlagID(3958, ON);
    SetNetworkconnectedEventFlagID(3978, ON);
    SetNetworkconnectedEventFlagID(3998, ON);
    SetNetworkconnectedEventFlagID(4018, ON);
    SetNetworkconnectedEventFlagID(4038, ON);
    SetNetworkconnectedEventFlagID(4058, ON);
    SetNetworkconnectedEventFlagID(4078, ON);
    SetNetworkconnectedEventFlagID(4098, ON);
    SetNetworkconnectedEventFlagID(4118, ON);
    SetNetworkconnectedEventFlagID(4138, ON);
    SetNetworkconnectedEventFlagID(4158, ON);
    SetNetworkconnectedEventFlagID(4178, ON);
    SetNetworkconnectedEventFlagID(4198, ON);
    SetNetworkconnectedEventFlagID(4218, ON);
    SetNetworkconnectedEventFlagID(4238, ON);
    SetNetworkconnectedEventFlagID(4258, ON);
    SetNetworkconnectedEventFlagID(4278, ON);
    SetNetworkconnectedEventFlagID(4298, ON);
    SetNetworkconnectedEventFlagID(4318, ON);
    SetNetworkconnectedEventFlagID(4338, ON);
    SetNetworkconnectedEventFlagID(4358, ON);
    SetNetworkconnectedEventFlagID(4378, ON);
    SetNetworkconnectedEventFlagID(4398, ON);
    SetNetworkconnectedEventFlagID(4418, ON);
    SetNetworkconnectedEventFlagID(4438, ON);
    SetNetworkconnectedEventFlagID(4458, ON);
    SetNetworkconnectedEventFlagID(4478, ON);
    SetNetworkconnectedEventFlagID(4498, ON);
    SetNetworkconnectedEventFlagID(4518, ON);
    SetNetworkconnectedEventFlagID(4538, ON);
    SetNetworkconnectedEventFlagID(4558, ON);
    SetNetworkconnectedEventFlagID(4578, ON);
    SetNetworkconnectedEventFlagID(4598, ON);
    SetNetworkconnectedEventFlagID(4718, ON);
    SetEventFlagID(1037469277, ON);
    SaveRequest();
    RestartEvent();
});


