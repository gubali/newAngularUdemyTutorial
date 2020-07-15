import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { StudentsComponent } from "./studentDetails/students.component";
import { HoverColorDirective } from './commonDirective/hover-color.directive';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailsComponent } from './recipes/recipes-details/recipes-details.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item/recipes-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { LifeCycleHookComponent } from './life-cycle-hook/life-cycle-hook.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    StudentsComponent,
    HoverColorDirective,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailsComponent,
    RecipesItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    HeroBannerComponent,
    CockpitComponent,
    ServerElementComponent,
    LifeCycleHookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
