import { WipbinsModule } from './wipbins.module';

describe('WipbinsModule', () => {
  let wipbinsModule: WipbinsModule;

  beforeEach(() => {
    wipbinsModule = new WipbinsModule();
  });

  it('should create an instance', () => {
    expect(wipbinsModule).toBeTruthy();
  });
});
