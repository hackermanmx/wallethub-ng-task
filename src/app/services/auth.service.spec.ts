import { AuthService } from './auth.service';
import {AuthGuard} from "./auth.guard";

class MockRouter {
  navigate(path) {}
}

fdescribe('AuthService', () => {
  describe('canActivate', () => {
    let authGuard: AuthGuard;
    let authServiceMock;
    let router;

    it('should return true for a logged in user', () => {
      authServiceMock = { isLoggedIn: () => true, isLoggedin: true };
      router = new MockRouter();
      authGuard = new AuthGuard(authServiceMock, router);

      expect(authGuard.canActivate()).toEqual(true);
    });

    it('should navigate to /not-found for a logged out user', () => {
      authServiceMock = { isLoggedIn: () => false, isLoggedin: false };
      router = new MockRouter();
      authGuard = new AuthGuard(authServiceMock, router);
      spyOn(router, 'navigate');

      expect(authGuard.canActivate()).toEqual(false);
      expect(router.navigate).toHaveBeenCalledWith(['/not-found']);
    });
  });
});
