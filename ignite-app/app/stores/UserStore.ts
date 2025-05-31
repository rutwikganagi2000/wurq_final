import { makeAutoObservable, runInAction } from "mobx"
import { UserData } from "../types/User"

export class UserStore {
  users: UserData[] = []
  loading = false

  constructor() {
    makeAutoObservable(this)
  }

  async fetchUsers() {
    this.loading = true
    try {
      const response = await fetch("http://10.0.2.2:3000/")
      const data: UserData[] = await response.json()
      runInAction(() => {
        this.users = data.filter(item => item.user.age >= 0)
      })
    } catch (e) {
      // handle error
    } finally {
      runInAction(() => {
        this.loading = false
      })
    }
  }

  get totalFees() {
    return this.users.reduce((sum, item) => sum + item.user.fee, 0)
  }
}

export const userStore = new UserStore()
