import { Component, OnInit } from '@angular/core';
import 'phaser';
import { GameService } from '../../providers/game.service';
import { MainScene } from '../../scenes/MainScene';
import { BootScene } from '../../scenes/Boot.scene';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'dof-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.scss']
})
export class PlayGameComponent implements OnInit {

  constructor(public gameService: GameService,
  ) {
  }

  ngOnInit() {

    const debugMode = window.location.search.indexOf('debug') > -1;
    this.gameService.game = new MyGame({
        width: innerWidth,
        height: innerHeight,
        type: Phaser.WEBGL,
        parent: 'game',
        scene: [BootScene, MainScene],
        pixelArt: true,
        autoResize: true,
        activePointers: 1,
        physics: {
          default: 'arcade',
          arcade: {
            debug: debugMode,
            gravity: {y: 0}
          }
        },
      } as any,
      this.gameService
    );

    if (debugMode) {
      (this.gameService.game as MyGame).debug = true;
    }

    // window.addEventListener('resize', () => {
    //   this.gameService.game.resize(window.innerWidth, window.innerHeight);
    // }, false);
  }

  openMenu() {
    this.gameService.dialogService.open(MenuComponent, {
      autoFocus: false
    });
  }

}

export class MyGame extends Phaser.Game {
  gameService: GameService;
  public debug = false;

  constructor(gameConfig: GameConfig, gameService: GameService) {
    super(gameConfig);
    this.gameService = gameService;
  }
}
