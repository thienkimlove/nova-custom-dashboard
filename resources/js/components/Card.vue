<template>
    <card class="flex flex-col items-center justify-center">


        <div class="card">
            <div class="flex items-center py-3 border-b border-50">
                <div class="flex items-center">
                    <h2 class="text-center text-3xl text-40 font-light">Chào mừng đến hệ thống quản lý giao dịch.</h2>
                </div>

                 <div class="overflow-hidden overflow-x-auto relative"><!----></div>
            </div>
        </div>

    </card>
</template>

<script>
export default {
    props: [
        'card',

        // The following props are only available on resource detail cards...
        // 'resource',
        // 'resourceId',
        // 'resourceName',
    ],

    mounted() {
        //
    },
}
</script>
