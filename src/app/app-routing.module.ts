import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./pages/camper/home/home.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { ScheduleFullComponent } from "./pages/camper/schedule/schedule-full/schedule-full.component";
import { CamperInfoComponent } from "./pages/camper/camper-info/camper-info.component";

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	}, 
	{
		path: 'schedule',
		component: ScheduleFullComponent
	},
	{
		path: 'camper',
		component: CamperInfoComponent
	},
	{
		path: '**',
		component: NotFoundComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
