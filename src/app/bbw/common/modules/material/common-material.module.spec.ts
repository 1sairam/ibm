import { CommonMaterialModule } from './common-material.module';

describe('CommonMaterialModule', () => {
  let commonMaterialModule: CommonMaterialModule;

  beforeEach(() => {
    commonMaterialModule = new CommonMaterialModule();
  });

  it('should create an instance', () => {
    expect(commonMaterialModule).toBeTruthy();
  });
});
