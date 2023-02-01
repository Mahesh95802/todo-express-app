const taskService = require('../../src/services/task')
const taskController = require('../../src/controllers/task')

describe('Task Controller', () => {
    describe("GET /tasks", () => {
        jest.spyOn(taskService, "getTasks").mockResolvedValue([{ id: 1 }])
        const mockReq = {}
        const mockRes = {
            send: jest.fn()
        }
        it("should return an array of tasks.", async () => {
            await taskController.getTasks(mockReq, mockRes)
            expect(mockRes.send).toBeCalledWith([{ id: 1 }])
        })
        // it("should fail with called with different", async () => {
        //     await taskController.getTasks(mockReq, mockRes)
        //     expect(mockRes.send).toBeCalledWith([{ id: 1 }])
        // })
    })
    describe("POST /tasks", () => {
        it("should return 400 status code on wrong input", async () => {
            // jest.spyOn(taskService, "postTask").mockResolvedValue([{ id: 1 }])
            const mockReq = {
                body: { "nam": "dfghj" }
            }
            const mockRes = {
                send: jest.fn(),
                status: jest.fn().mockReturnValue({ send: jest.fn() })
            }
            await taskController.postTask(mockReq, mockRes)
            expect(mockRes.status).toBeCalledWith(400)
            expect(mockRes.status().send).toBeCalledWith({"message": "\"name\" is required"})
        })
    })
})