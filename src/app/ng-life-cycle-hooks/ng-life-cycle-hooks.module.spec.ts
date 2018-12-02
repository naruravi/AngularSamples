import { NgLifeCycleHooksModule } from './ng-life-cycle-hooks.module';

describe('NgLifeCycleHooksModule', () => {
  let ngLifeCycleHooksModule: NgLifeCycleHooksModule;

  beforeEach(() => {
    ngLifeCycleHooksModule = new NgLifeCycleHooksModule();
  });

  it('should create an instance', () => {
    expect(ngLifeCycleHooksModule).toBeTruthy();
  });
});
