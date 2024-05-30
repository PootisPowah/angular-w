import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        children: [
            {
                path: '',
                component: LayoutComponent,
                title: "Home"
            },
            {
                path: 'details/:cityName',
                component: DetailsComponent,
                title: "Details"
            }

        ]
    }
];
