import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatToolbarModule,
  MatMenuModule,
  MatTabsModule,
  MatInputModule,
  MatFormFieldModule
} from '@angular/material';

import {NgxElectronModule} from 'ngx-electron';

import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {BlankComponent} from './blank/blank.component';
import {ChatComponent} from './chat/chat.component';

import {appRoutes} from './app.routes';
import {SidebarComponent} from './sidebar/sidebar.component';
import {LoginComponent} from './login/login.component';
import {ConversationsComponent} from './conversations/conversations.component';
import {ContactsComponent} from './contacts/contacts.component';
import {GroupsComponent} from './groups/groups.component';
import {PlaceholderComponent} from './placeholder/placeholder.component';
import {RequestService} from './request.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BlankComponent,
    ChatComponent,
    SidebarComponent,
    LoginComponent,
    ConversationsComponent,
    ContactsComponent,
    GroupsComponent,
    PlaceholderComponent
  ],
  imports: [
    BrowserModule,
    NgxElectronModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatMenuModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false} // <-- debugging purposes only
    )
  ],
  providers: [
    RequestService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
