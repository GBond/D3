
CC =			cc

CFLAGS = 		 -pipe -fPIC -fvisibility=hidden -O -W -Wall -Wextra -Wno-unused-parameter -Wwrite-strings -fstrict-aliasing -Wstrict-overflow=5 -Wmissing-prototypes -Werror -g  

NXT_EXEC_LINK =		$(CC) 
NXT_SHARED_LOCAL_LINK =	$(CC) -dynamiclib                                -install_name @executable_path/libnxt.dylib 
NXT_MODULE_LINK =	$(CC) -dynamiclib -undefined dynamic_lookup

all: unitd

.PHONY: unitd
unitd: build/unitd

NXT_LIB_INCS = -I src -I build

NXT_LIB_OBJS = \
	build/src/nxt_lib.o \
	build/src/nxt_gmtime.o \
	build/src/nxt_errno.o \
	build/src/nxt_time.o \
	build/src/nxt_malloc.o \
	build/src/nxt_file.o \
	build/src/nxt_mem_map.o \
	build/src/nxt_socket.o \
	build/src/nxt_socketpair.o \
	build/src/nxt_process.o \
	build/src/nxt_process_title.o \
	build/src/nxt_signal.o \
	build/src/nxt_port_socket.o \
	build/src/nxt_port_memory.o \
	build/src/nxt_port_rpc.o \
	build/src/nxt_port.o \
	build/src/nxt_dyld.o \
	build/src/nxt_random.o \
	build/src/nxt_queue.o \
	build/src/nxt_rbtree.o \
	build/src/nxt_mp.o \
	build/src/nxt_mem_zone.o \
	build/src/nxt_string.o \
	build/src/nxt_utf8.o \
	build/src/nxt_parse.o \
	build/src/nxt_sprintf.o \
	build/src/nxt_file_name.o \
	build/src/nxt_log.o \
	build/src/nxt_djb_hash.o \
	build/src/nxt_murmur_hash.o \
	build/src/nxt_lvlhsh.o \
	build/src/nxt_array.o \
	build/src/nxt_vector.o \
	build/src/nxt_list.o \
	build/src/nxt_buf.o \
	build/src/nxt_buf_pool.o \
	build/src/nxt_recvbuf.o \
	build/src/nxt_sendbuf.o \
	build/src/nxt_thread.o \
	build/src/nxt_thread_mutex.o \
	build/src/nxt_thread_cond.o \
	build/src/nxt_spinlock.o \
	build/src/nxt_semaphore.o \
	build/src/nxt_thread_pool.o \
	build/src/nxt_thread_time.o \
	build/src/nxt_time_parse.o \
	build/src/nxt_work_queue.o \
	build/src/nxt_service.o \
	build/src/nxt_log_moderation.o \
	build/src/nxt_event_engine.o \
	build/src/nxt_timer.o \
	build/src/nxt_fd_event.o \
	build/src/nxt_conn.o \
	build/src/nxt_conn_connect.o \
	build/src/nxt_conn_accept.o \
	build/src/nxt_conn_read.o \
	build/src/nxt_conn_write.o \
	build/src/nxt_conn_close.o \
	build/src/nxt_event_conn_job_sendfile.o \
	build/src/nxt_conn_proxy.o \
	build/src/nxt_job.o \
	build/src/nxt_job_resolve.o \
	build/src/nxt_sockaddr.o \
	build/src/nxt_listen_socket.o \
	build/src/nxt_upstream_round_robin.o \
	build/src/nxt_http_parse.o \
	build/src/nxt_app_log.o \
	build/src/nxt_capability.o \
	build/src/nxt_runtime.o \
	build/src/nxt_conf.o \
	build/src/nxt_conf_validation.o \
	build/src/nxt_main_process.o \
	build/src/nxt_worker_process.o \
	build/src/nxt_controller.o \
	build/src/nxt_router.o \
	build/src/nxt_h1proto.o \
	build/src/nxt_http_request.o \
	build/src/nxt_http_response.o \
	build/src/nxt_http_error.o \
	build/src/nxt_http_route.o \
	build/src/nxt_http_static.o \
	build/src/nxt_application.o \
	build/src/nxt_external.o \
	build/src/nxt_port_hash.o \
	build/src/nxt_sha1.o \
	build/src/nxt_websocket.o \
	build/src/nxt_websocket_accept.o \
	build/src/nxt_http_websocket.o \
	build/src/nxt_h1proto_websocket.o \
	build/src/nxt_kqueue_engine.o \
	build/src/nxt_poll_engine.o \
	build/src/nxt_select_engine.o \
	build/src/nxt_macosx_sendfile.o \

NXT_LIB_UNIT_OBJS = \
	build/src/nxt_lvlhsh.o \
	build/src/nxt_murmur_hash.o \
	build/src/nxt_websocket.o \
	build/src/nxt_unit.o \


include version

build/nxt_version.h: version
	build/echo '#define NXT_VERSION "$(NXT_VERSION)"' > build/nxt_version.h
	build/echo '#define NXT_VERNUM  $(NXT_VERNUM)' >> build/nxt_version.h


libnxt:	build/libnxt.dylib build/libnxt.a

build/libnxt.dylib:	$(NXT_LIB_OBJS)
	$(NXT_SHARED_LOCAL_LINK) -o build/libnxt.dylib \
		$(NXT_LIB_OBJS) \
		    \
                      \
                    

build/libnxt.a:	$(NXT_LIB_OBJS)
	ar -r -c build/libnxt.a \
		$(NXT_LIB_OBJS)

build/libunit.a:	$(NXT_LIB_UNIT_OBJS)
	ar -r -c build/libunit.a \
		$(NXT_LIB_UNIT_OBJS)


build/src/nxt_lib.o: src/nxt_lib.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_lib.o \
	-MMD -MF build/src/nxt_lib.dep -MT build/src/nxt_lib.o \
	src/nxt_lib.c
	

-include build/src/nxt_lib.dep


build/src/nxt_gmtime.o: src/nxt_gmtime.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_gmtime.o \
	-MMD -MF build/src/nxt_gmtime.dep -MT build/src/nxt_gmtime.o \
	src/nxt_gmtime.c
	

-include build/src/nxt_gmtime.dep


build/src/nxt_errno.o: src/nxt_errno.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_errno.o \
	-MMD -MF build/src/nxt_errno.dep -MT build/src/nxt_errno.o \
	src/nxt_errno.c
	

-include build/src/nxt_errno.dep


build/src/nxt_time.o: src/nxt_time.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_time.o \
	-MMD -MF build/src/nxt_time.dep -MT build/src/nxt_time.o \
	src/nxt_time.c
	

-include build/src/nxt_time.dep


build/src/nxt_malloc.o: src/nxt_malloc.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_malloc.o \
	-MMD -MF build/src/nxt_malloc.dep -MT build/src/nxt_malloc.o \
	src/nxt_malloc.c
	

-include build/src/nxt_malloc.dep


build/src/nxt_file.o: src/nxt_file.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_file.o \
	-MMD -MF build/src/nxt_file.dep -MT build/src/nxt_file.o \
	src/nxt_file.c
	

-include build/src/nxt_file.dep


build/src/nxt_mem_map.o: src/nxt_mem_map.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_mem_map.o \
	-MMD -MF build/src/nxt_mem_map.dep -MT build/src/nxt_mem_map.o \
	src/nxt_mem_map.c
	

-include build/src/nxt_mem_map.dep


build/src/nxt_socket.o: src/nxt_socket.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_socket.o \
	-MMD -MF build/src/nxt_socket.dep -MT build/src/nxt_socket.o \
	src/nxt_socket.c
	

-include build/src/nxt_socket.dep


build/src/nxt_socketpair.o: src/nxt_socketpair.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_socketpair.o \
	-MMD -MF build/src/nxt_socketpair.dep -MT build/src/nxt_socketpair.o \
	src/nxt_socketpair.c
	

-include build/src/nxt_socketpair.dep


build/src/nxt_process.o: src/nxt_process.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_process.o \
	-MMD -MF build/src/nxt_process.dep -MT build/src/nxt_process.o \
	src/nxt_process.c
	

-include build/src/nxt_process.dep


build/src/nxt_process_title.o: src/nxt_process_title.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_process_title.o \
	-MMD -MF build/src/nxt_process_title.dep -MT build/src/nxt_process_title.o \
	src/nxt_process_title.c
	

-include build/src/nxt_process_title.dep


build/src/nxt_signal.o: src/nxt_signal.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_signal.o \
	-MMD -MF build/src/nxt_signal.dep -MT build/src/nxt_signal.o \
	src/nxt_signal.c
	

-include build/src/nxt_signal.dep


build/src/nxt_port_socket.o: src/nxt_port_socket.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_port_socket.o \
	-MMD -MF build/src/nxt_port_socket.dep -MT build/src/nxt_port_socket.o \
	src/nxt_port_socket.c
	

-include build/src/nxt_port_socket.dep


build/src/nxt_port_memory.o: src/nxt_port_memory.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_port_memory.o \
	-MMD -MF build/src/nxt_port_memory.dep -MT build/src/nxt_port_memory.o \
	src/nxt_port_memory.c
	

-include build/src/nxt_port_memory.dep


build/src/nxt_port_rpc.o: src/nxt_port_rpc.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_port_rpc.o \
	-MMD -MF build/src/nxt_port_rpc.dep -MT build/src/nxt_port_rpc.o \
	src/nxt_port_rpc.c
	

-include build/src/nxt_port_rpc.dep


build/src/nxt_port.o: src/nxt_port.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_port.o \
	-MMD -MF build/src/nxt_port.dep -MT build/src/nxt_port.o \
	src/nxt_port.c
	

-include build/src/nxt_port.dep


build/src/nxt_dyld.o: src/nxt_dyld.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_dyld.o \
	-MMD -MF build/src/nxt_dyld.dep -MT build/src/nxt_dyld.o \
	src/nxt_dyld.c
	

-include build/src/nxt_dyld.dep


build/src/nxt_random.o: src/nxt_random.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_random.o \
	-MMD -MF build/src/nxt_random.dep -MT build/src/nxt_random.o \
	src/nxt_random.c
	

-include build/src/nxt_random.dep


build/src/nxt_queue.o: src/nxt_queue.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_queue.o \
	-MMD -MF build/src/nxt_queue.dep -MT build/src/nxt_queue.o \
	src/nxt_queue.c
	

-include build/src/nxt_queue.dep


build/src/nxt_rbtree.o: src/nxt_rbtree.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_rbtree.o \
	-MMD -MF build/src/nxt_rbtree.dep -MT build/src/nxt_rbtree.o \
	src/nxt_rbtree.c
	

-include build/src/nxt_rbtree.dep


build/src/nxt_mp.o: src/nxt_mp.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_mp.o \
	-MMD -MF build/src/nxt_mp.dep -MT build/src/nxt_mp.o \
	src/nxt_mp.c
	

-include build/src/nxt_mp.dep


build/src/nxt_mem_zone.o: src/nxt_mem_zone.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_mem_zone.o \
	-MMD -MF build/src/nxt_mem_zone.dep -MT build/src/nxt_mem_zone.o \
	src/nxt_mem_zone.c
	

-include build/src/nxt_mem_zone.dep


build/src/nxt_string.o: src/nxt_string.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_string.o \
	-MMD -MF build/src/nxt_string.dep -MT build/src/nxt_string.o \
	src/nxt_string.c
	

-include build/src/nxt_string.dep


build/src/nxt_utf8.o: src/nxt_utf8.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_utf8.o \
	-MMD -MF build/src/nxt_utf8.dep -MT build/src/nxt_utf8.o \
	src/nxt_utf8.c
	

-include build/src/nxt_utf8.dep


build/src/nxt_parse.o: src/nxt_parse.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_parse.o \
	-MMD -MF build/src/nxt_parse.dep -MT build/src/nxt_parse.o \
	src/nxt_parse.c
	

-include build/src/nxt_parse.dep


build/src/nxt_sprintf.o: src/nxt_sprintf.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_sprintf.o \
	-MMD -MF build/src/nxt_sprintf.dep -MT build/src/nxt_sprintf.o \
	src/nxt_sprintf.c
	

-include build/src/nxt_sprintf.dep


build/src/nxt_file_name.o: src/nxt_file_name.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_file_name.o \
	-MMD -MF build/src/nxt_file_name.dep -MT build/src/nxt_file_name.o \
	src/nxt_file_name.c
	

-include build/src/nxt_file_name.dep


build/src/nxt_log.o: src/nxt_log.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_log.o \
	-MMD -MF build/src/nxt_log.dep -MT build/src/nxt_log.o \
	src/nxt_log.c
	

-include build/src/nxt_log.dep


build/src/nxt_djb_hash.o: src/nxt_djb_hash.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_djb_hash.o \
	-MMD -MF build/src/nxt_djb_hash.dep -MT build/src/nxt_djb_hash.o \
	src/nxt_djb_hash.c
	

-include build/src/nxt_djb_hash.dep


build/src/nxt_murmur_hash.o: src/nxt_murmur_hash.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_murmur_hash.o \
	-MMD -MF build/src/nxt_murmur_hash.dep -MT build/src/nxt_murmur_hash.o \
	src/nxt_murmur_hash.c
	

-include build/src/nxt_murmur_hash.dep


build/src/nxt_lvlhsh.o: src/nxt_lvlhsh.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_lvlhsh.o \
	-MMD -MF build/src/nxt_lvlhsh.dep -MT build/src/nxt_lvlhsh.o \
	src/nxt_lvlhsh.c
	

-include build/src/nxt_lvlhsh.dep


build/src/nxt_array.o: src/nxt_array.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_array.o \
	-MMD -MF build/src/nxt_array.dep -MT build/src/nxt_array.o \
	src/nxt_array.c
	

-include build/src/nxt_array.dep


build/src/nxt_vector.o: src/nxt_vector.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_vector.o \
	-MMD -MF build/src/nxt_vector.dep -MT build/src/nxt_vector.o \
	src/nxt_vector.c
	

-include build/src/nxt_vector.dep


build/src/nxt_list.o: src/nxt_list.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_list.o \
	-MMD -MF build/src/nxt_list.dep -MT build/src/nxt_list.o \
	src/nxt_list.c
	

-include build/src/nxt_list.dep


build/src/nxt_buf.o: src/nxt_buf.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_buf.o \
	-MMD -MF build/src/nxt_buf.dep -MT build/src/nxt_buf.o \
	src/nxt_buf.c
	

-include build/src/nxt_buf.dep


build/src/nxt_buf_pool.o: src/nxt_buf_pool.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_buf_pool.o \
	-MMD -MF build/src/nxt_buf_pool.dep -MT build/src/nxt_buf_pool.o \
	src/nxt_buf_pool.c
	

-include build/src/nxt_buf_pool.dep


build/src/nxt_recvbuf.o: src/nxt_recvbuf.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_recvbuf.o \
	-MMD -MF build/src/nxt_recvbuf.dep -MT build/src/nxt_recvbuf.o \
	src/nxt_recvbuf.c
	

-include build/src/nxt_recvbuf.dep


build/src/nxt_sendbuf.o: src/nxt_sendbuf.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_sendbuf.o \
	-MMD -MF build/src/nxt_sendbuf.dep -MT build/src/nxt_sendbuf.o \
	src/nxt_sendbuf.c
	

-include build/src/nxt_sendbuf.dep


build/src/nxt_thread.o: src/nxt_thread.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_thread.o \
	-MMD -MF build/src/nxt_thread.dep -MT build/src/nxt_thread.o \
	src/nxt_thread.c
	

-include build/src/nxt_thread.dep


build/src/nxt_thread_mutex.o: src/nxt_thread_mutex.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_thread_mutex.o \
	-MMD -MF build/src/nxt_thread_mutex.dep -MT build/src/nxt_thread_mutex.o \
	src/nxt_thread_mutex.c
	

-include build/src/nxt_thread_mutex.dep


build/src/nxt_thread_cond.o: src/nxt_thread_cond.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_thread_cond.o \
	-MMD -MF build/src/nxt_thread_cond.dep -MT build/src/nxt_thread_cond.o \
	src/nxt_thread_cond.c
	

-include build/src/nxt_thread_cond.dep


build/src/nxt_spinlock.o: src/nxt_spinlock.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_spinlock.o \
	-MMD -MF build/src/nxt_spinlock.dep -MT build/src/nxt_spinlock.o \
	src/nxt_spinlock.c
	

-include build/src/nxt_spinlock.dep


build/src/nxt_semaphore.o: src/nxt_semaphore.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_semaphore.o \
	-MMD -MF build/src/nxt_semaphore.dep -MT build/src/nxt_semaphore.o \
	src/nxt_semaphore.c
	

-include build/src/nxt_semaphore.dep


build/src/nxt_thread_pool.o: src/nxt_thread_pool.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_thread_pool.o \
	-MMD -MF build/src/nxt_thread_pool.dep -MT build/src/nxt_thread_pool.o \
	src/nxt_thread_pool.c
	

-include build/src/nxt_thread_pool.dep


build/src/nxt_thread_time.o: src/nxt_thread_time.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_thread_time.o \
	-MMD -MF build/src/nxt_thread_time.dep -MT build/src/nxt_thread_time.o \
	src/nxt_thread_time.c
	

-include build/src/nxt_thread_time.dep


build/src/nxt_time_parse.o: src/nxt_time_parse.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_time_parse.o \
	-MMD -MF build/src/nxt_time_parse.dep -MT build/src/nxt_time_parse.o \
	src/nxt_time_parse.c
	

-include build/src/nxt_time_parse.dep


build/src/nxt_work_queue.o: src/nxt_work_queue.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_work_queue.o \
	-MMD -MF build/src/nxt_work_queue.dep -MT build/src/nxt_work_queue.o \
	src/nxt_work_queue.c
	

-include build/src/nxt_work_queue.dep


build/src/nxt_service.o: src/nxt_service.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_service.o \
	-MMD -MF build/src/nxt_service.dep -MT build/src/nxt_service.o \
	src/nxt_service.c
	

-include build/src/nxt_service.dep


build/src/nxt_log_moderation.o: src/nxt_log_moderation.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_log_moderation.o \
	-MMD -MF build/src/nxt_log_moderation.dep -MT build/src/nxt_log_moderation.o \
	src/nxt_log_moderation.c
	

-include build/src/nxt_log_moderation.dep


build/src/nxt_event_engine.o: src/nxt_event_engine.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_event_engine.o \
	-MMD -MF build/src/nxt_event_engine.dep -MT build/src/nxt_event_engine.o \
	src/nxt_event_engine.c
	

-include build/src/nxt_event_engine.dep


build/src/nxt_timer.o: src/nxt_timer.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_timer.o \
	-MMD -MF build/src/nxt_timer.dep -MT build/src/nxt_timer.o \
	src/nxt_timer.c
	

-include build/src/nxt_timer.dep


build/src/nxt_fd_event.o: src/nxt_fd_event.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_fd_event.o \
	-MMD -MF build/src/nxt_fd_event.dep -MT build/src/nxt_fd_event.o \
	src/nxt_fd_event.c
	

-include build/src/nxt_fd_event.dep


build/src/nxt_conn.o: src/nxt_conn.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_conn.o \
	-MMD -MF build/src/nxt_conn.dep -MT build/src/nxt_conn.o \
	src/nxt_conn.c
	

-include build/src/nxt_conn.dep


build/src/nxt_conn_connect.o: src/nxt_conn_connect.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_conn_connect.o \
	-MMD -MF build/src/nxt_conn_connect.dep -MT build/src/nxt_conn_connect.o \
	src/nxt_conn_connect.c
	

-include build/src/nxt_conn_connect.dep


build/src/nxt_conn_accept.o: src/nxt_conn_accept.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_conn_accept.o \
	-MMD -MF build/src/nxt_conn_accept.dep -MT build/src/nxt_conn_accept.o \
	src/nxt_conn_accept.c
	

-include build/src/nxt_conn_accept.dep


build/src/nxt_conn_read.o: src/nxt_conn_read.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_conn_read.o \
	-MMD -MF build/src/nxt_conn_read.dep -MT build/src/nxt_conn_read.o \
	src/nxt_conn_read.c
	

-include build/src/nxt_conn_read.dep


build/src/nxt_conn_write.o: src/nxt_conn_write.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_conn_write.o \
	-MMD -MF build/src/nxt_conn_write.dep -MT build/src/nxt_conn_write.o \
	src/nxt_conn_write.c
	

-include build/src/nxt_conn_write.dep


build/src/nxt_conn_close.o: src/nxt_conn_close.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_conn_close.o \
	-MMD -MF build/src/nxt_conn_close.dep -MT build/src/nxt_conn_close.o \
	src/nxt_conn_close.c
	

-include build/src/nxt_conn_close.dep


build/src/nxt_event_conn_job_sendfile.o: src/nxt_event_conn_job_sendfile.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_event_conn_job_sendfile.o \
	-MMD -MF build/src/nxt_event_conn_job_sendfile.dep -MT build/src/nxt_event_conn_job_sendfile.o \
	src/nxt_event_conn_job_sendfile.c
	

-include build/src/nxt_event_conn_job_sendfile.dep


build/src/nxt_conn_proxy.o: src/nxt_conn_proxy.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_conn_proxy.o \
	-MMD -MF build/src/nxt_conn_proxy.dep -MT build/src/nxt_conn_proxy.o \
	src/nxt_conn_proxy.c
	

-include build/src/nxt_conn_proxy.dep


build/src/nxt_job.o: src/nxt_job.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_job.o \
	-MMD -MF build/src/nxt_job.dep -MT build/src/nxt_job.o \
	src/nxt_job.c
	

-include build/src/nxt_job.dep


build/src/nxt_job_resolve.o: src/nxt_job_resolve.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_job_resolve.o \
	-MMD -MF build/src/nxt_job_resolve.dep -MT build/src/nxt_job_resolve.o \
	src/nxt_job_resolve.c
	

-include build/src/nxt_job_resolve.dep


build/src/nxt_sockaddr.o: src/nxt_sockaddr.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_sockaddr.o \
	-MMD -MF build/src/nxt_sockaddr.dep -MT build/src/nxt_sockaddr.o \
	src/nxt_sockaddr.c
	

-include build/src/nxt_sockaddr.dep


build/src/nxt_listen_socket.o: src/nxt_listen_socket.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_listen_socket.o \
	-MMD -MF build/src/nxt_listen_socket.dep -MT build/src/nxt_listen_socket.o \
	src/nxt_listen_socket.c
	

-include build/src/nxt_listen_socket.dep


build/src/nxt_upstream_round_robin.o: src/nxt_upstream_round_robin.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_upstream_round_robin.o \
	-MMD -MF build/src/nxt_upstream_round_robin.dep -MT build/src/nxt_upstream_round_robin.o \
	src/nxt_upstream_round_robin.c
	

-include build/src/nxt_upstream_round_robin.dep


build/src/nxt_http_parse.o: src/nxt_http_parse.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_http_parse.o \
	-MMD -MF build/src/nxt_http_parse.dep -MT build/src/nxt_http_parse.o \
	src/nxt_http_parse.c
	

-include build/src/nxt_http_parse.dep


build/src/nxt_app_log.o: src/nxt_app_log.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_app_log.o \
	-MMD -MF build/src/nxt_app_log.dep -MT build/src/nxt_app_log.o \
	src/nxt_app_log.c
	

-include build/src/nxt_app_log.dep


build/src/nxt_capability.o: src/nxt_capability.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_capability.o \
	-MMD -MF build/src/nxt_capability.dep -MT build/src/nxt_capability.o \
	src/nxt_capability.c
	

-include build/src/nxt_capability.dep


build/src/nxt_runtime.o: src/nxt_runtime.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_runtime.o \
	-MMD -MF build/src/nxt_runtime.dep -MT build/src/nxt_runtime.o \
	src/nxt_runtime.c
	

-include build/src/nxt_runtime.dep


build/src/nxt_conf.o: src/nxt_conf.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_conf.o \
	-MMD -MF build/src/nxt_conf.dep -MT build/src/nxt_conf.o \
	src/nxt_conf.c
	

-include build/src/nxt_conf.dep


build/src/nxt_conf_validation.o: src/nxt_conf_validation.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_conf_validation.o \
	-MMD -MF build/src/nxt_conf_validation.dep -MT build/src/nxt_conf_validation.o \
	src/nxt_conf_validation.c
	

-include build/src/nxt_conf_validation.dep


build/src/nxt_main_process.o: src/nxt_main_process.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_main_process.o \
	-MMD -MF build/src/nxt_main_process.dep -MT build/src/nxt_main_process.o \
	src/nxt_main_process.c
	

-include build/src/nxt_main_process.dep


build/src/nxt_worker_process.o: src/nxt_worker_process.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_worker_process.o \
	-MMD -MF build/src/nxt_worker_process.dep -MT build/src/nxt_worker_process.o \
	src/nxt_worker_process.c
	

-include build/src/nxt_worker_process.dep


build/src/nxt_controller.o: src/nxt_controller.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_controller.o \
	-MMD -MF build/src/nxt_controller.dep -MT build/src/nxt_controller.o \
	src/nxt_controller.c
	

-include build/src/nxt_controller.dep


build/src/nxt_router.o: src/nxt_router.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_router.o \
	-MMD -MF build/src/nxt_router.dep -MT build/src/nxt_router.o \
	src/nxt_router.c
	

-include build/src/nxt_router.dep


build/src/nxt_h1proto.o: src/nxt_h1proto.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_h1proto.o \
	-MMD -MF build/src/nxt_h1proto.dep -MT build/src/nxt_h1proto.o \
	src/nxt_h1proto.c
	

-include build/src/nxt_h1proto.dep


build/src/nxt_http_request.o: src/nxt_http_request.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_http_request.o \
	-MMD -MF build/src/nxt_http_request.dep -MT build/src/nxt_http_request.o \
	src/nxt_http_request.c
	

-include build/src/nxt_http_request.dep


build/src/nxt_http_response.o: src/nxt_http_response.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_http_response.o \
	-MMD -MF build/src/nxt_http_response.dep -MT build/src/nxt_http_response.o \
	src/nxt_http_response.c
	

-include build/src/nxt_http_response.dep


build/src/nxt_http_error.o: src/nxt_http_error.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_http_error.o \
	-MMD -MF build/src/nxt_http_error.dep -MT build/src/nxt_http_error.o \
	src/nxt_http_error.c
	

-include build/src/nxt_http_error.dep


build/src/nxt_http_route.o: src/nxt_http_route.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_http_route.o \
	-MMD -MF build/src/nxt_http_route.dep -MT build/src/nxt_http_route.o \
	src/nxt_http_route.c
	

-include build/src/nxt_http_route.dep


build/src/nxt_http_static.o: src/nxt_http_static.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_http_static.o \
	-MMD -MF build/src/nxt_http_static.dep -MT build/src/nxt_http_static.o \
	src/nxt_http_static.c
	

-include build/src/nxt_http_static.dep


build/src/nxt_application.o: src/nxt_application.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_application.o \
	-MMD -MF build/src/nxt_application.dep -MT build/src/nxt_application.o \
	src/nxt_application.c
	

-include build/src/nxt_application.dep


build/src/nxt_external.o: src/nxt_external.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_external.o \
	-MMD -MF build/src/nxt_external.dep -MT build/src/nxt_external.o \
	src/nxt_external.c
	

-include build/src/nxt_external.dep


build/src/nxt_port_hash.o: src/nxt_port_hash.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_port_hash.o \
	-MMD -MF build/src/nxt_port_hash.dep -MT build/src/nxt_port_hash.o \
	src/nxt_port_hash.c
	

-include build/src/nxt_port_hash.dep


build/src/nxt_sha1.o: src/nxt_sha1.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_sha1.o \
	-MMD -MF build/src/nxt_sha1.dep -MT build/src/nxt_sha1.o \
	src/nxt_sha1.c
	

-include build/src/nxt_sha1.dep


build/src/nxt_websocket.o: src/nxt_websocket.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_websocket.o \
	-MMD -MF build/src/nxt_websocket.dep -MT build/src/nxt_websocket.o \
	src/nxt_websocket.c
	

-include build/src/nxt_websocket.dep


build/src/nxt_websocket_accept.o: src/nxt_websocket_accept.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_websocket_accept.o \
	-MMD -MF build/src/nxt_websocket_accept.dep -MT build/src/nxt_websocket_accept.o \
	src/nxt_websocket_accept.c
	

-include build/src/nxt_websocket_accept.dep


build/src/nxt_http_websocket.o: src/nxt_http_websocket.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_http_websocket.o \
	-MMD -MF build/src/nxt_http_websocket.dep -MT build/src/nxt_http_websocket.o \
	src/nxt_http_websocket.c
	

-include build/src/nxt_http_websocket.dep


build/src/nxt_h1proto_websocket.o: src/nxt_h1proto_websocket.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_h1proto_websocket.o \
	-MMD -MF build/src/nxt_h1proto_websocket.dep -MT build/src/nxt_h1proto_websocket.o \
	src/nxt_h1proto_websocket.c
	

-include build/src/nxt_h1proto_websocket.dep


build/src/nxt_kqueue_engine.o: src/nxt_kqueue_engine.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_kqueue_engine.o \
	-MMD -MF build/src/nxt_kqueue_engine.dep -MT build/src/nxt_kqueue_engine.o \
	src/nxt_kqueue_engine.c
	

-include build/src/nxt_kqueue_engine.dep


build/src/nxt_poll_engine.o: src/nxt_poll_engine.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_poll_engine.o \
	-MMD -MF build/src/nxt_poll_engine.dep -MT build/src/nxt_poll_engine.o \
	src/nxt_poll_engine.c
	

-include build/src/nxt_poll_engine.dep


build/src/nxt_select_engine.o: src/nxt_select_engine.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_select_engine.o \
	-MMD -MF build/src/nxt_select_engine.dep -MT build/src/nxt_select_engine.o \
	src/nxt_select_engine.c
	

-include build/src/nxt_select_engine.dep


build/src/nxt_macosx_sendfile.o: src/nxt_macosx_sendfile.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_macosx_sendfile.o \
	-MMD -MF build/src/nxt_macosx_sendfile.dep -MT build/src/nxt_macosx_sendfile.o \
	src/nxt_macosx_sendfile.c
	

-include build/src/nxt_macosx_sendfile.dep


build/src/test/nxt_tests.o: src/test/nxt_tests.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/test/nxt_tests.o \
	-MMD -MF build/src/test/nxt_tests.dep -MT build/src/test/nxt_tests.o \
	src/test/nxt_tests.c
	

-include build/src/test/nxt_tests.dep


build/src/test/nxt_rbtree1.o: src/test/nxt_rbtree1.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/test/nxt_rbtree1.o \
	-MMD -MF build/src/test/nxt_rbtree1.dep -MT build/src/test/nxt_rbtree1.o \
	src/test/nxt_rbtree1.c
	

-include build/src/test/nxt_rbtree1.dep


build/src/test/nxt_rbtree_test.o: src/test/nxt_rbtree_test.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/test/nxt_rbtree_test.o \
	-MMD -MF build/src/test/nxt_rbtree_test.dep -MT build/src/test/nxt_rbtree_test.o \
	src/test/nxt_rbtree_test.c
	

-include build/src/test/nxt_rbtree_test.dep


build/src/test/nxt_term_parse_test.o: src/test/nxt_term_parse_test.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/test/nxt_term_parse_test.o \
	-MMD -MF build/src/test/nxt_term_parse_test.dep -MT build/src/test/nxt_term_parse_test.o \
	src/test/nxt_term_parse_test.c
	

-include build/src/test/nxt_term_parse_test.dep


build/src/test/nxt_msec_diff_test.o: src/test/nxt_msec_diff_test.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/test/nxt_msec_diff_test.o \
	-MMD -MF build/src/test/nxt_msec_diff_test.dep -MT build/src/test/nxt_msec_diff_test.o \
	src/test/nxt_msec_diff_test.c
	

-include build/src/test/nxt_msec_diff_test.dep


build/src/test/nxt_mp_test.o: src/test/nxt_mp_test.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/test/nxt_mp_test.o \
	-MMD -MF build/src/test/nxt_mp_test.dep -MT build/src/test/nxt_mp_test.o \
	src/test/nxt_mp_test.c
	

-include build/src/test/nxt_mp_test.dep


build/src/test/nxt_mem_zone_test.o: src/test/nxt_mem_zone_test.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/test/nxt_mem_zone_test.o \
	-MMD -MF build/src/test/nxt_mem_zone_test.dep -MT build/src/test/nxt_mem_zone_test.o \
	src/test/nxt_mem_zone_test.c
	

-include build/src/test/nxt_mem_zone_test.dep


build/src/test/nxt_lvlhsh_test.o: src/test/nxt_lvlhsh_test.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/test/nxt_lvlhsh_test.o \
	-MMD -MF build/src/test/nxt_lvlhsh_test.dep -MT build/src/test/nxt_lvlhsh_test.o \
	src/test/nxt_lvlhsh_test.c
	

-include build/src/test/nxt_lvlhsh_test.dep


build/src/test/nxt_gmtime_test.o: src/test/nxt_gmtime_test.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/test/nxt_gmtime_test.o \
	-MMD -MF build/src/test/nxt_gmtime_test.dep -MT build/src/test/nxt_gmtime_test.o \
	src/test/nxt_gmtime_test.c
	

-include build/src/test/nxt_gmtime_test.dep


build/src/test/nxt_sprintf_test.o: src/test/nxt_sprintf_test.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/test/nxt_sprintf_test.o \
	-MMD -MF build/src/test/nxt_sprintf_test.dep -MT build/src/test/nxt_sprintf_test.o \
	src/test/nxt_sprintf_test.c
	

-include build/src/test/nxt_sprintf_test.dep


build/src/test/nxt_malloc_test.o: src/test/nxt_malloc_test.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/test/nxt_malloc_test.o \
	-MMD -MF build/src/test/nxt_malloc_test.dep -MT build/src/test/nxt_malloc_test.o \
	src/test/nxt_malloc_test.c
	

-include build/src/test/nxt_malloc_test.dep


build/src/test/nxt_utf8_test.o: src/test/nxt_utf8_test.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/test/nxt_utf8_test.o \
	-MMD -MF build/src/test/nxt_utf8_test.dep -MT build/src/test/nxt_utf8_test.o \
	src/test/nxt_utf8_test.c
	

-include build/src/test/nxt_utf8_test.dep


build/src/test/nxt_rbtree1_test.o: src/test/nxt_rbtree1_test.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/test/nxt_rbtree1_test.o \
	-MMD -MF build/src/test/nxt_rbtree1_test.dep -MT build/src/test/nxt_rbtree1_test.o \
	src/test/nxt_rbtree1_test.c
	

-include build/src/test/nxt_rbtree1_test.dep


build/src/test/nxt_http_parse_test.o: src/test/nxt_http_parse_test.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/test/nxt_http_parse_test.o \
	-MMD -MF build/src/test/nxt_http_parse_test.dep -MT build/src/test/nxt_http_parse_test.o \
	src/test/nxt_http_parse_test.c
	

-include build/src/test/nxt_http_parse_test.dep


build/src/test/nxt_strverscmp_test.o: src/test/nxt_strverscmp_test.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/test/nxt_strverscmp_test.o \
	-MMD -MF build/src/test/nxt_strverscmp_test.dep -MT build/src/test/nxt_strverscmp_test.o \
	src/test/nxt_strverscmp_test.c
	

-include build/src/test/nxt_strverscmp_test.dep


build/src/nxt_unit.o: src/nxt_unit.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/nxt_unit.o \
	-MMD -MF build/src/nxt_unit.dep -MT build/src/nxt_unit.o \
	src/nxt_unit.c
	

-include build/src/nxt_unit.dep


build/src/test/nxt_unit_app_test.o: src/test/nxt_unit_app_test.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/test/nxt_unit_app_test.o \
	-MMD -MF build/src/test/nxt_unit_app_test.dep -MT build/src/test/nxt_unit_app_test.o \
	src/test/nxt_unit_app_test.c
	

-include build/src/test/nxt_unit_app_test.dep


build/src/test/nxt_unit_websocket_chat.o: src/test/nxt_unit_websocket_chat.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/test/nxt_unit_websocket_chat.o \
	-MMD -MF build/src/test/nxt_unit_websocket_chat.dep -MT build/src/test/nxt_unit_websocket_chat.o \
	src/test/nxt_unit_websocket_chat.c
	

-include build/src/test/nxt_unit_websocket_chat.dep


build/src/test/nxt_unit_websocket_echo.o: src/test/nxt_unit_websocket_echo.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_LIB_INCS)   \
                      \
                     \
	-o build/src/test/nxt_unit_websocket_echo.o \
	-MMD -MF build/src/test/nxt_unit_websocket_echo.dep -MT build/src/test/nxt_unit_websocket_echo.o \
	src/test/nxt_unit_websocket_echo.c
	

-include build/src/test/nxt_unit_websocket_echo.dep



.PHONY: tests
tests:
	@(echo; \
	  echo "error: to make tests you need to configure --tests option."; \
	  echo; \
	  exit 1)

NXT_INCS = -I src -I build

NXT_OBJS = \
	build/src/nxt_main.o \


build/unitd:	build/libnxt.a \
				$(NXT_OBJS)
	$(NXT_EXEC_LINK) -o build/unitd $(CFLAGS) \
		$(NXT_OBJS) build/libnxt.a \
		    \
                      \
                    


build/src/nxt_main.o:	src/nxt_main.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_INCS) \
		  \
                      \
                     \
		-o build/src/nxt_main.o \
		-MMD -MF build/src/nxt_main.dep -MT build/src/nxt_main.o \
		src/nxt_main.c
	

-include build/src/nxt_main.dep


.PHONY: install unitd-install install-check

install: unitd-install

install-check:
	@test -n "$(DESTDIR)" \
	|| (echo; \
	    echo "error: to make install you need either"; \
	    echo "    to configure --prefix option"; \
	    echo "    or to set DESTDIR environment variable."; \
	    echo; \
	    exit 1)

unitd-install: unitd install-check
	install -d $(DESTDIR)sbin
	install -p build/unitd $(DESTDIR)sbin/
	install -d $(DESTDIR)state


.PHONY: uninstall unitd-uninstall

uninstall: unitd-uninstall

unitd-uninstall:
	rm -f $(DESTDIR)sbin/unitd
	@rmdir -p $(DESTDIR)sbin 2>/dev/null || true


.PHONY: libunit-install libunit-uninstall

libunit-install: build/libunit.a
	install -d $(DESTDIR)lib
	install -p -m u=rw,go=r build/libunit.a 		$(DESTDIR)lib/
	install -d $(DESTDIR)include
	install -p -m u=rw,go=r src/nxt_unit.h 		src/nxt_unit_field.h 		src/nxt_unit_request.h 		src/nxt_unit_response.h 		src/nxt_unit_sptr.h 		src/nxt_unit_typedefs.h 		src/nxt_unit_websocket.h 		build/nxt_version.h 		src/nxt_websocket_header.h 		$(DESTDIR)include/

libunit-uninstall:
	rm -f $(DESTDIR)lib/libunit.a
	@rmdir -p $(DESTDIR)lib 2>/dev/null || true
	rm -f $(DESTDIR)include/nxt_unit.h 		$(DESTDIR)include/nxt_unit_field.h 		$(DESTDIR)include/nxt_unit_request.h 		$(DESTDIR)include/nxt_unit_response.h 		$(DESTDIR)include/nxt_unit_sptr.h 		$(DESTDIR)include/nxt_unit_typedefs.h 		$(DESTDIR)include/nxt_unit_websocket.h 		$(DESTDIR)include/nxt_version.h 		$(DESTDIR)include/nxt_websocket_header.h
	@rmdir -p $(DESTDIR)include 2>/dev/null || true



build/src/nxt_python_wsgi-python.o:	src/nxt_python_wsgi.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_INCS) -iwithsysroot /System/Library/Frameworks/Python.framework/Versions/2.7/include/python2.7 -iwithsysroot /System/Library/Frameworks/Python.framework/Versions/2.7/include/python2.7 \
	-MMD -MF build/src/nxt_python_wsgi-python.dep -MT build/src/nxt_python_wsgi-python.o \
	-o build/src/nxt_python_wsgi-python.o src/nxt_python_wsgi.c
	

-include build/src/nxt_python_wsgi-python.dep


.PHONY: python
.PHONY: python-install
.PHONY: python-uninstall

all: python

python:	build/python.unit.so

build/python.unit.so:	build/src/nxt_unit.o build/src/nxt_python_wsgi-python.o
	$(NXT_MODULE_LINK) -o build/python.unit.so \
	build/src/nxt_unit.o build/src/nxt_python_wsgi-python.o -L/System/Library/Frameworks/Python.framework/Versions/2.7/lib/python2.7/config -lpython2.7 -ldl -framework CoreFoundation  


install: python-install

python-install: python install-check
	install -d $(DESTDIR)modules
	install -p build/python.unit.so \
		$(DESTDIR)modules/


uninstall: python-uninstall

python-uninstall:
	rm -f $(DESTDIR)modules/python.unit.so
	@rmdir -p $(DESTDIR)modules 2>/dev/null || true



build/src/nxt_python_wsgi-python3.o:	src/nxt_python_wsgi.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_INCS) -I//anaconda3/include/python3.7m -I//anaconda3/include/python3.7m \
	-MMD -MF build/src/nxt_python_wsgi-python3.dep -MT build/src/nxt_python_wsgi-python3.o \
	-o build/src/nxt_python_wsgi-python3.o src/nxt_python_wsgi.c
	

-include build/src/nxt_python_wsgi-python3.dep


.PHONY: python3
.PHONY: python3-install
.PHONY: python3-uninstall

all: python3

python3:	build/python3.unit.so

build/python3.unit.so:	build/src/nxt_unit.o build/src/nxt_python_wsgi-python3.o
	$(NXT_MODULE_LINK) -o build/python3.unit.so \
	build/src/nxt_unit.o build/src/nxt_python_wsgi-python3.o -L//anaconda3/lib/python3.7/config-3.7m-darwin -lpython3.7m -ldl -framework CoreFoundation -Wl,-stack_size,1000000 -framework CoreFoundation  


install: python3-install

python3-install: python3 install-check
	install -d $(DESTDIR)modules
	install -p build/python3.unit.so \
		$(DESTDIR)modules/


uninstall: python3-uninstall

python3-uninstall:
	rm -f $(DESTDIR)modules/python3.unit.so
	@rmdir -p $(DESTDIR)modules 2>/dev/null || true



build/src/nxt_python_wsgi-python3.7m.o:	src/nxt_python_wsgi.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_INCS) -I//anaconda3/include/python3.7m -I//anaconda3/include/python3.7m \
	-MMD -MF build/src/nxt_python_wsgi-python3.7m.dep -MT build/src/nxt_python_wsgi-python3.7m.o \
	-o build/src/nxt_python_wsgi-python3.7m.o src/nxt_python_wsgi.c
	

-include build/src/nxt_python_wsgi-python3.7m.dep


.PHONY: python3.7m
.PHONY: python3.7m-install
.PHONY: python3.7m-uninstall

all: python3.7m

python3.7m:	build/python3.7m.unit.so

build/python3.7m.unit.so:	build/src/nxt_unit.o build/src/nxt_python_wsgi-python3.7m.o
	$(NXT_MODULE_LINK) -o build/python3.7m.unit.so \
	build/src/nxt_unit.o build/src/nxt_python_wsgi-python3.7m.o -L//anaconda3/lib/python3.7/config-3.7m-darwin -lpython3.7m -ldl -framework CoreFoundation -Wl,-stack_size,1000000 -framework CoreFoundation  


install: python3.7m-install

python3.7m-install: python3.7m install-check
	install -d $(DESTDIR)modules
	install -p build/python3.7m.unit.so \
		$(DESTDIR)modules/


uninstall: python3.7m-uninstall

python3.7m-uninstall:
	rm -f $(DESTDIR)modules/python3.7m.unit.so
	@rmdir -p $(DESTDIR)modules 2>/dev/null || true



build/src/nxt_python_wsgi-python3.7.o:	src/nxt_python_wsgi.c build/nxt_version.h
	$(CC) -c $(CFLAGS) $(NXT_INCS) -I//anaconda3/include/python3.7m -I//anaconda3/include/python3.7m \
	-MMD -MF build/src/nxt_python_wsgi-python3.7.dep -MT build/src/nxt_python_wsgi-python3.7.o \
	-o build/src/nxt_python_wsgi-python3.7.o src/nxt_python_wsgi.c
	

-include build/src/nxt_python_wsgi-python3.7.dep


.PHONY: python3.7
.PHONY: python3.7-install
.PHONY: python3.7-uninstall

all: python3.7

python3.7:	build/python3.7.unit.so

build/python3.7.unit.so:	build/src/nxt_unit.o build/src/nxt_python_wsgi-python3.7.o
	$(NXT_MODULE_LINK) -o build/python3.7.unit.so \
	build/src/nxt_unit.o build/src/nxt_python_wsgi-python3.7.o -L//anaconda3/lib/python3.7/config-3.7m-darwin -lpython3.7m -ldl -framework CoreFoundation -Wl,-stack_size,1000000 -framework CoreFoundation  


install: python3.7-install

python3.7-install: python3.7 install-check
	install -d $(DESTDIR)modules
	install -p build/python3.7.unit.so \
		$(DESTDIR)modules/


uninstall: python3.7-uninstall

python3.7-uninstall:
	rm -f $(DESTDIR)modules/python3.7.unit.so
	@rmdir -p $(DESTDIR)modules 2>/dev/null || true

