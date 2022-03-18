import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'lyrics/:id',
    loadChildren: () => import('./pages/lyrics/lyrics.module').then( m => m.LyricsPageModule)
  },
  {
    path: 'albums/:id',
    loadChildren: () => import('./pages/album/album.module').then( m => m.AlbumPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
