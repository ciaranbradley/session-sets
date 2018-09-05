import { NgModule } from '@angular/core';

import { TheSessionSetsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [TheSessionSetsSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [TheSessionSetsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class TheSessionSetsSharedCommonModule {}
