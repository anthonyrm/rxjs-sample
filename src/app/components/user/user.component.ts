import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnDestroy {
  user!: User | null;
  subscription!: Subscription;
  constructor(private userService: UserService) {
    this.fetchUser();
  }

  fetchUser() {
    this.subscription = this.userService.getUser().subscribe((data) => {
      if (data.results?.length) {
        this.user = data.results[0];
      } else {
        this.user = null;
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
