import user, { 
    createUser, 
    setGender, 
    USER_GENDER_MALE, 
    USER_GENDER_FEMALE 
} from 'src/modules/user/reducer'

describe('src/modules/user/reducer', () => {

    describe('reducer', () => {
        it('should handle initial state', () => {
            expect(user(undefined, {})).toEqual({
                id: null,
                name: null,
                gender: USER_GENDER_MALE
            })
        })

        it('should handle createUser', () => {
            const state = user(undefined, createUser('Red'));
            expect(state.name).toEqual('Red')
            expect(state.id).not.toBeNull()
        })

        it('should handle createUser', () => {
            const state = user(undefined, setGender(USER_GENDER_FEMALE));
            expect(state.gender).toEqual(USER_GENDER_FEMALE)
        })
    }),

    describe('actions', () => {
        describe('createUser', () => {
            it('should create the action correctly', () => {
                const action1 = createUser('Red')
                const action2 = createUser('Blue')

                expect(action1.payload).toEqual('Red')
                expect(action2.payload).toEqual('Blue')
            })
        })

        describe('setGender', () => {
            it('should create the action correctly', () => {
                const action1 = setGender(USER_GENDER_MALE)
                const action2 = setGender(USER_GENDER_FEMALE)

                expect(action1.payload).toEqual(USER_GENDER_MALE)
                expect(action2.payload).toEqual(USER_GENDER_FEMALE)
            })
        })

    })
})