import { APP_INITIALIZER, FactoryProvider } from '@angular/core';

import { ConfigService } from './config.service';

function loadConfigFactory(configService: ConfigService) {
  return (): any => configService.getConfig();
}

export const loadConfigProvider: FactoryProvider = {
  provide: APP_INITIALIZER,
  useFactory: loadConfigFactory,
  deps: [ConfigService],
  multi: true
};
