import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TabContentBrochureComponent } from './tab-content-brochure/tab-content-brochure.component';
import { TabContentAboutComponent } from './tab-content-about/tab-content-about.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NewsLetterComponent } from './news-letter/news-letter.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { WelcomeTabComponent } from './welcome-tab/welcome-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TabContentBrochureComponent,
    TabContentAboutComponent,
    FooterComponent,
    GalleryComponent,
    NewsLetterComponent,
    ContactUsComponent,
    WelcomeTabComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
