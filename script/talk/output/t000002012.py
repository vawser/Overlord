# -*- coding: utf-8 -*-
def t000002012_0():
    """State 0,1"""
    t000002012_x7()
    Quit()

def t000002012_x0(val1=_, actionbutton1=_):
    """State 0"""
    while True:
        """State 1"""
        call = t000002012_x4(val1=val1, actionbutton1=actionbutton1)
        assert IsClientPlayer() == 1
        """State 2"""
        call = t000002012_x3()
        assert not IsClientPlayer()
    """Unused"""
    """State 3"""
    return 0

def t000002012_x1(z2=_, goods1=_):
    """State 0"""
    if ComparePlayerInventoryNumber(3, goods1, 0, 0, 0) == 1:
        """State 5,10"""
        assert t000002012_x14(action1=13041020)
    else:
        """State 6,2"""
        c1_127(f211() + 1000, 1)
        """State 4"""
        PlayerEquipmentQuantityChange(3, goods1, -1)
        """State 11"""
        assert t000002012_x11() and GetCurrentStateElapsedTime() > 0.2
        """State 1"""
        GiveSpEffectToPlayer(z2)
        assert GetCurrentStateElapsedTime() > 1
        """State 9"""
        c1_124(35000, 8050)
        """State 7"""
        c1_124(35000, f212())
        """State 3"""
        c1_125(0, 0, f207())
        """State 8"""
        SetEventFlag(f206(), 1)
    """State 12"""
    return 0

def t000002012_x2():
    """State 0,1"""
    if DoesPlayerHaveItemEquipped(2, 11000) == 1:
        """State 3"""
        # goods:11000:Crimsonspill Crystal Tear
        assert t000002012_x1(z2=8010, goods1=11000)
    elif DoesPlayerHaveItemEquipped(2, 11001) == 1:
        """State 4"""
        # goods:11001:Greenspill Crystal Tear
        assert t000002012_x1(z2=8011, goods1=11001)
    elif DoesPlayerHaveItemEquipped(2, 11002) == 1:
        """State 5"""
        # goods:11002:Crimson Crystal Tear
        assert t000002012_x1(z2=8012, goods1=11002)
    elif DoesPlayerHaveItemEquipped(2, 11003) == 1:
        """State 6"""
        # goods:11003:Crimson Crystal Tear
        assert t000002012_x1(z2=8013, goods1=11003)
    elif DoesPlayerHaveItemEquipped(2, 11005) == 1:
        """State 9"""
        # goods:11005:Cerulean Crystal Tear
        assert t000002012_x1(z2=8021, goods1=11005)
    elif DoesPlayerHaveItemEquipped(2, 11006) == 1:
        """State 10"""
        # goods:11006:Speckled Hardtear
        assert t000002012_x1(z2=8022, goods1=11006)
    elif DoesPlayerHaveItemEquipped(2, 11007) == 1:
        """State 11"""
        # goods:11007:Crimson Bubbletear
        assert t000002012_x1(z2=8023, goods1=11007)
    else:
        """State 2,8"""
        def WhilePaused():
            GiveSpEffectToPlayer(84)
        assert t000002012_x14(action1=13041010)
    """State 12"""
    Label('L0')
    return 0
    """Unused"""
    """State 7"""
    # goods:11004:Cerulean Crystal Tear
    assert t000002012_x1(z2=8014, goods1=11004)
    Goto('L0')

def t000002012_x3():
    """State 0"""
    Quit()
    """Unused"""
    """State 1"""
    return 0

def t000002012_x4(val1=_, actionbutton1=_):
    """State 0,1"""
    t000002012_x5(val1=val1, actionbutton1=actionbutton1)
    Quit()
    """Unused"""
    """State 2"""
    t000002012_x6()
    Quit()
    """State 3"""
    return 0

def t000002012_x5(val1=_, actionbutton1=_):
    """State 0"""
    while True:
        """State 1"""
        assert GetDistanceToPlayer() <= val1
        """State 5"""
        c1_122()
        call = t000002012_x12(actionbutton1=actionbutton1, flag1=6001, flag2=6000, flag3=6000, flag4=6000,
                              flag5=6000, flag6=6000)
        def WhilePaused():
            GiveSpEffectToPlayer(84)
        if call.Done():
            """State 2"""
            if f205() == 1:
                """State 4,8"""
                assert t000002012_x10()
            else:
                """State 3,6"""
                assert t000002012_x2()
        elif GetDistanceToPlayer() > val1:
            """State 7"""
            assert t000002012_x13()
    """Unused"""
    """State 9"""
    return 0

def t000002012_x6():
    """State 0,1"""
    t000002012_x13()
    Quit()
    """Unused"""
    """State 2"""
    return 0

def t000002012_x7():
    """State 0"""
    while True:
        """State 4"""
        assert not GetEventFlag(f206())
        """State 1"""
        assert not IsMultiplayerInProgress() and not IsClientPlayer()
        """State 3"""
        c1_126(f211() + 1000, 200, 620)
        """State 5"""
        call = t000002012_x8()
        assert IsMultiplayerInProgress() == 1 or IsClientPlayer() == 1 or GetEventFlag(f206()) == 1
        """State 2"""
        c1_127(f211() + 1000, 1)
    """Unused"""
    """State 6"""
    return 0

def t000002012_x8():
    """State 0,1"""
    if f205() == 1:
        """State 3,5"""
        t000002012_x0(val1=8, actionbutton1=6523)
        Quit()
    else:
        """State 2,4"""
        t000002012_x0(val1=3, actionbutton1=6520)
        Quit()
    """Unused"""
    """State 6"""
    return 0

def t000002012_x9(z1=_, goods1=_, action1=_):
    """State 0,1"""
    if ComparePlayerInventoryNumber(3, goods1, 4, 1, 0) == 1:
        """State 4"""
        assert t000002012_x1(z2=z1, goods1=goods1)
    else:
        """State 2,3"""
        assert t000002012_x14(action1=action1)
    """State 5"""
    return 0

def t000002012_x10():
    """State 0,1"""
    if f208() == 801400:
        """State 3"""
        # goods:11004:Cerulean Crystal Tear
        assert t000002012_x9(z1=f209(f208()), goods1=11004, action1=13041100)
    elif f208() == 801500:
        """State 4"""
        assert t000002012_x9(z1=f209(f208()), goods1=11100, action1=13041110)
    elif f208() == 802400:
        """State 5"""
        assert t000002012_x9(z1=f209(f208()), goods1=11101, action1=13041120)
    elif f208() == 802500:
        """State 6"""
        assert t000002012_x9(z1=f209(f208()), goods1=11102, action1=13041130)
    elif f208() == 802600:
        """State 7"""
        assert t000002012_x9(z1=f209(f208()), goods1=11103, action1=13041140)
    else:
        """State 2"""
        pass
    """State 8"""
    return 0

def t000002012_x11():
    """State 0,1"""
    if not f207() == f210():
        """State 2"""
        GiveSpEffectToPlayer(202)
    else:
        """State 3"""
        pass
    """State 4"""
    return 0

def t000002012_x12(actionbutton1=_, flag1=6001, flag2=6000, flag3=6000, flag4=6000, flag5=6000, flag6=6000):
    """State 0"""
    while True:
        """State 1"""
        assert not GetOneLineHelpStatus() and not IsClientPlayer() and not IsPlayerDead() and not IsCharacterDisabled()
        """State 3"""
        assert (GetEventFlag(flag1) == 1 or GetEventFlag(flag2) == 1 or GetEventFlag(flag3) == 1 or GetEventFlag(flag4)
                == 1 or GetEventFlag(flag5) == 1)
        """State 4"""
        assert not GetEventFlag(flag6)
        """State 2"""
        if GetEventFlag(flag6) == 1:
            pass
        elif (not (not GetOneLineHelpStatus() and not IsClientPlayer() and not IsPlayerDead() and not
              IsCharacterDisabled())):
            pass
        elif (not GetEventFlag(flag1) and not GetEventFlag(flag2) and not GetEventFlag(flag3) and not
              GetEventFlag(flag4) and not GetEventFlag(flag5)):
            pass
        elif CheckActionButtonArea(actionbutton1):
            break
    """State 5"""
    return 0

def t000002012_x13():
    """State 0,1"""
    if not CheckSpecificPersonTalkHasEnded(0):
        """State 7"""
        ClearTalkProgressData()
        StopEventAnimWithoutForcingConversationEnd(0)
        """State 6"""
        ReportConversationEndToHavokBehavior()
    else:
        pass
    """State 2"""
    if CheckSpecificPersonGenericDialogIsOpen(0) == 1:
        """State 3"""
        ForceCloseGenericDialog()
    else:
        pass
    """State 4"""
    if CheckSpecificPersonMenuIsOpen(-1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0):
        """State 5"""
        ForceCloseMenu()
    else:
        pass
    """State 8"""
    return 0

def t000002012_x14(action1=_):
    """State 0,1"""
    OpenGenericDialog(7, action1, 1, 0, 1)
    assert not CheckSpecificPersonGenericDialogIsOpen(0)
    """State 2"""
    return 0

