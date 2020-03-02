import { Component, OnInit, OnDestroy } from '@angular/core';
import { RepositoryService } from '../services/repository.service';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Reactor } from '../models/reactor';
import { ReactorDialogComponent } from '../reactor-dialog/reactor-dialog.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  repositorySubscription: Subscription;

  serviceHost = environment.reactorServiceHost;

  reactors: Reactor[];

  reactorStatus = '';

  constructor(private service: RepositoryService, public dialog: MatDialog) { }

  showReactorEditDialog(reactor: Reactor) {

    console.log(reactor);

    const dialogRef = this.dialog.open(ReactorDialogComponent, {
      data:  reactor
    });
  }

  deleteReactor(reactor: Reactor) {
    console.log('Attempted delete');
  }

  getReactors() {
    this.repositorySubscription = this.service.getJsonObjects(this.serviceHost)
    .subscribe(
      (reactors: Reactor[]) => {
        this.reactors = reactors;
        console.log(reactors);
      },
      error => {
        this.reactorStatus = 'error';
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.getReactors();
  }

  ngOnDestroy() {
    this.repositorySubscription.unsubscribe();
  }


}
