package com.bemach.labguide;

import com.bemach.labguide.dao.UserInfoDAO;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

import static junit.framework.Assert.assertTrue;
import static junit.framework.TestCase.assertEquals;
import static junit.framework.TestCase.assertNotNull;
import static org.mockito.Matchers.any;
import static org.mockito.Matchers.anyString;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

/**
 * Created by ktran on 5/2/2015.
 *
 * Should write this test first to avoid complexity later.
 * We want to mock DAO to avoid going to the database and/or over the network.
 *
 * Feathers: Unit test should NOT:
 * - access database
 * - access network
 * - access file
 * - access any objects that requires above accesses.
 * - any special configuration for an environment.
 *
 */
public class UserInfoTest {

    private static ServiceLocator mockServiceLocator;
    private UserInfo userInfo;
    private UserCredential userCredential;

    @BeforeClass
    public static void setupBeforeClass() {
        mockServiceLocator = TestUtil.getMpckServiceLocator();
    }

    @Before
    public void setUp() {
        userCredential = UserCredential.getInstance("","");
    }

    @Test
    public void shouldGetGoodUserInfoObject() {
        UserInfo expectedUserInfo = arrangeStubForUserInfoObjects(getGoodUserInfoStub());

        UserInfo actualUserInfo = UserInfo.getInstance(userCredential);
        assertEquals("Failed to create UserInfo Object!", expectedUserInfo, actualUserInfo);
    }

    @Test
    public void shouldGetBadUserInfoObject() {
        UserInfo expectedUserInfo = arrangeStubForUserInfoObjects(getBadUserInfoStub());

        UserInfo actualUserInfo = UserInfo.getInstance(userCredential);
        assertTrue("Failed to create bad UserInfo Object!", actualUserInfo.isNil());
    }

    private UserInfo arrangeStubForUserInfoObjects(UserInfo expectedUserInfo) {
        UserInfoDAO mockUserInfoDAO = mock(UserInfoDAO.class);
        when(mockServiceLocator.getUserInfoDAO(any(UserCredential.class))).thenReturn(mockUserInfoDAO);
        when(mockUserInfoDAO.read(anyString())).thenReturn(expectedUserInfo);
        return expectedUserInfo;
    }

    private UserInfo getGoodUserInfoStub() {
        UserInfo userInfo = new UserInfo(userCredential, "Colonel", "John Murphy", "My Profile",
                null, null, null, true, true, null, null, null, null, null, null, null, null);
        return userInfo;
    }

    private UserInfo getBadUserInfoStub() {
        UserInfo userInfo = new UserInfo(null, "Colonel", "John Murphy", "My Profile",
                null, null, null, true, true, null, null, null, null, null, null, null, null);
        return userInfo;
    }

}
