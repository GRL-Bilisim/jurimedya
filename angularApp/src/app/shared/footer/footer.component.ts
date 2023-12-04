import { Component, HostBinding } from '@angular/core';
import { environment } from 'environments/environment';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})

export class FooterComponent{
    //Variables
    currentApplicationVersion = environment.appVersion;
    currentDate : Date = new Date();
}
