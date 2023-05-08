import 'reflect-metadata'
import { injectable, unmanaged } from 'inversify'
import { Pool, PoolConfig, createPool } from 'mysql'
@injectable()
abstract class AbstractMysqlService {
  private pool: Pool

  constructor(@unmanaged() config: string | PoolConfig) {
    this.pool = createPool(config)
  }

  public async execute(query: string) {
    return new Promise(async (resolve, reject) => {
      this.pool.query(query, (error, results, fields) => {
        if (error) reject(error)
        resolve(results)
      })
    })
  }
}

export default AbstractMysqlService