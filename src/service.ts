import { Pool, PoolConfig, createPool } from 'mysql'

abstract class AbstractMysqlService {
  private pool: Pool

  constructor(config: string | PoolConfig) {
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